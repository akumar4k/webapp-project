# data "azurerm_client_config" "current" {}

# data "terraform_remote_state" "base" {
#   backend = "azurerm"

#   config = {
#     storage_account_name = "gargashdbinfratfstate"
#     container_name       = "tfstate"
#     key                  = "terraform.tfstate"
#     resource_group_name  = "gargash_dashboard_tfstate"
#     key                  = "terraform.tfstate"
#   }
# }

# data "azurerm_virtual_network" "this" {
#   name                = var.infra_rg_name
#   resource_group_name = "gargash-dashboard-infra-development-rg"
# }

data "azurerm_subnet" "aipm_subnet" {
  name                 = "gargash-apim-subnet4"
  virtual_network_name = "gargash-dashboard-vnet"
  resource_group_name  = "gargash-dashboard-infra-development-rg"
}
