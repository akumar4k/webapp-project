resource "azurerm_resource_group" "rg" {
  name     = var.rg_name
  location = "eastasia"
}

# Azure Static Web App
resource "azurerm_static_site" "dab_swa" {
  name                = "gargash-dashboard-swa"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  # Ensure resource group is created before the static site
  depends_on = [
    azurerm_resource_group.rg
  ]
}
