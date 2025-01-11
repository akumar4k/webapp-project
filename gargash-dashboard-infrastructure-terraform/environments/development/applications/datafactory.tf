data "azurerm_client_config" "current" {}
resource "azurerm_data_factory" "adf" {
  name                   = "${var.client_name}-datafactory-${var.environment}"
  resource_group_name    = module.databricks.databricks_rg
  location               = module.databricks.databricks_location
  public_network_enabled = false

  tags = {
    name = "${var.client_name}-datafactory-${var.environment}"
  }

  # lifecycle {
  #   ignore_changes = all
  # }
  #linked existing repo to ADF##
  vsts_configuration {
    account_name    = "Gargash-AzureDevOps"
    project_name    = "Gargash Dashboard"
    repository_name = "gargash-dashboard-adf"
    branch_name     = "master"
    root_folder     = "/"
    tenant_id       = data.azurerm_client_config.current.tenant_id
  }
}
