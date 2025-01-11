module "vnetwork" {
  // source = "git::ssh://git@ssh.dev.azure.com/v3/gargash-azuredevops/Gargash%20Dashboard/terraform-azurerm-vnet?ref=4.1.0"
  # source = "git::https://Gargash-AzureDevOps@dev.azure.com/Gargash-AzureDevOps/Gargash%20Dashboard/_git/terraform-azurerm-vnet?ref=4.1.0"
  source = "git::https://qhfbn7l76f3gbtvxtszt2y6vk7qwfbe4xg6ujenqcsnanfrxtyrq@dev.azure.com/Gargash-AzureDevOps/Gargash%20Dashboard/_git/terraform-azurerm-vnet?ref=4.1.0"

  # source = "git::https://<<ADO_ORG>>@dev.azure.com/<ADO_ORG>>/<<ADO_PROJECT>>>/_git/<<ADO_REPO>>"
  // git::https://<<ADO_ORG>>@dev.azure.com/<ADO_ORG>>/<<ADO_PROJECT>>>/_git/<<ADO_REPO>>

  vnet_name           = var.vnet_name
  resource_group_name = var.infra_rg_name
  use_for_each        = true
  subnet_names        = ["gargash-subnet1", "garagsh-subnet2", "gargash-subnet3", "gargash-apim-subnet4"]
  address_space       = ["10.0.0.0/16"]
  subnet_prefixes     = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24", "10.0.5.0/24"]
  vnet_location       = var.location

  subnet_delegation = var.subnet_delegation

  tags = {
    environment = var.infra_environment
  }

  # subnet_delegation = {
  #   name = each.values.name
  #   gargash-subnet1 = each.value.gargash-subnet1
  # }"Microsoft.Web.serverFarm"

  subnet_service_endpoints = {
    gargash-subnet1 = ["Microsoft.Web", "Microsoft.Storage", "Microsoft.Sql"] #reactapp
    garagsh-subnet2 = ["Microsoft.Storage", "Microsoft.KeyVault"]
    gargash-subnet3 = ["Microsoft.Sql", "Microsoft.KeyVault"]
  }

  depends_on = [
    azurerm_resource_group.garagsh_dashboard
  ]
}

resource "azurerm_resource_group" "garagsh_dashboard" {
  name     = var.infra_rg_name
  location = "UAE North"
}

# tfsec:ignore:azure-network-no-public-egress
resource "azurerm_network_security_group" "main_nsg" {
  name                = var.security-group-name
  location            = var.location
  resource_group_name = azurerm_resource_group.garagsh_dashboard.name

  security_rule {
    name                       = var.security_rule_name
    priority                   = 100
    direction                  = "Outbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "*"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  tags = {
    environment = "var.environment"
  }

  lifecycle {
    ignore_changes = all
  }
}

/*
 *  APIM - (NSG) is required to explicitly allow inbound connectivity,
 *  because the load balancer used internally
 *  by API Management is secure by default and rejects all inbound traffic.
 */

# tfsec:ignore:azure-network-no-public-ingress tfsec:ignore:azure-network-no-public-egress
resource "azurerm_network_security_group" "api_management_nsg" {
  name                = var.apim-nsg-name
  location            = var.location
  resource_group_name = azurerm_resource_group.garagsh_dashboard.name

  security_rule {
    name                       = "AllowAnyCustom443Inbound"
    priority                   = 100
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = 443
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  security_rule {
    name                       = "AllowAnyCustom3443Inbound"
    priority                   = 110
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = 3443
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  security_rule {
    name                       = "AllowAnyCustom80Inbound"
    priority                   = 120
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = 80
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  security_rule {
    name                       = "AllowAnyCustom6390Inbound"
    priority                   = 130
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = 6390
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  security_rule {
    name                       = "AllowAnyCustom443Outbound"
    priority                   = 100
    direction                  = "Outbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = 443
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  security_rule {
    name                       = "AllowAnyCustom3443Outbound"
    priority                   = 110
    direction                  = "Outbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = 1433
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  security_rule {
    name                       = "AllowAnyCustom80Outbound"
    priority                   = 120
    direction                  = "Outbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = 1886
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  tags = {
    environment = "gargash-dashboard-apim-${var.environment}"
  }

  lifecycle {
    ignore_changes = all
  }
}

resource "azurerm_subnet_network_security_group_association" "api_management_subnet_assoc" {
  subnet_id                 = module.vnetwork.vnet_subnets[1]
  network_security_group_id = azurerm_network_security_group.api_management_nsg.id
}


# resource "azurerm_subnet_network_security_group_association" "apim_outbound_subnet_assoc" {
#   subnet_id                 = module.vnetwork.vnet_subnets[4]
#   network_security_group_id = azurerm_network_security_group.apim_outbound_nsg.id
# }
