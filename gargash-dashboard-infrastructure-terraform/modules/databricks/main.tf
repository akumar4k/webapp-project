data "azurerm_client_config" "current" {}

resource "azurerm_resource_group" "rg" {
  name     = var.rg_name
  location = "UAE North"


  lifecycle {
    ignore_changes = all
  }
}

# Create databricks workspace
resource "azurerm_databricks_workspace" "databricks_workspace" {
  name                = var.workspace
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  sku                 = "premium"

  managed_resource_group_name = "${var.client_name}-workspace-rg"
  tags = {
    environment = var.environment
  }

  lifecycle {
    ignore_changes = all
  }
}

data "databricks_node_type" "smallest" {
  depends_on = [azurerm_databricks_workspace.databricks_workspace]
  local_disk = true
}

data "databricks_spark_version" "latest_lts" {
  depends_on        = [azurerm_databricks_workspace.databricks_workspace]
  long_term_support = true
}

resource "databricks_instance_pool" "pool" {
  instance_pool_name = "Smallest Nodes"
  min_idle_instances = 0
  max_capacity       = 10
  node_type_id       = data.databricks_node_type.smallest.id

  idle_instance_autotermination_minutes = 10
  disk_spec {
    disk_type {
      azure_disk_volume_type = "PREMIUM_LRS"
    }
    disk_size  = 65 #https://learn.microsoft.com/en-us/azure/virtual-machines/disks-types
    disk_count = 1
  }

  lifecycle {
    ignore_changes = all
  }
}

resource "databricks_cluster" "shared_autoscaling" {
  depends_on              = [azurerm_databricks_workspace.databricks_workspace]
  cluster_name            = "Shared Autoscaling"
  spark_version           = data.databricks_spark_version.latest_lts.id
  node_type_id            = data.databricks_node_type.smallest.id
  autotermination_minutes = 20

  autoscale {
    min_workers = 1
    max_workers = 10
  }
  # "spark.databricks.io.cache.enabled" : true
  custom_tags = {
    environment = var.environment
  }

  lifecycle {
    ignore_changes = [
      custom_tags
    ]

  }
}

# tfsec:ignore:azure-storage-use-secure-tls-policy
resource "azurerm_storage_account" "databricks_storage_account" {
  name                     = var.blob_name
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "GRS"

  blob_properties {
    delete_retention_policy {
      days = 30
    }
    container_delete_retention_policy {
      days = 30
    }
  }

  tags = {
    environment = var.environment
  }

  lifecycle {
    ignore_changes = all
  }
}

# tfsec:ignore:azure-keyvault-no-purge tfsec:ignore:azure-keyvault-specify-network-acl
resource "azurerm_key_vault" "databricks_kv" {
  name                        = var.keyvault_name
  location                    = azurerm_resource_group.rg.location
  resource_group_name         = azurerm_resource_group.rg.name
  enabled_for_disk_encryption = true
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  soft_delete_retention_days  = 7
  purge_protection_enabled    = false

  public_network_access_enabled = false

  sku_name = "standard"

  access_policy {
    tenant_id = data.azurerm_client_config.current.tenant_id
    object_id = data.azurerm_client_config.current.object_id

    key_permissions = [
      "Get",
    ]

    secret_permissions = [
      "Get",
    ]

    storage_permissions = [
      "Get",
    ]
  }

  lifecycle {
    ignore_changes = all
  }
}
