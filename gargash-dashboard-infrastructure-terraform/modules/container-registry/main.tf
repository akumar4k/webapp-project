resource "azurerm_resource_group" "rg" {
  name     = var.rg_name
  location = var.location
}

resource "azurerm_container_registry" "acr" {
  for_each = toset([
    "GargashDashboardReactAppAcr",
    "GargashDashboardDabAcr"
  ])

  name                = each.key
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  sku                 = "Premium"
  admin_enabled       = true

  georeplications {
    location                = "Qatar Central"
    zone_redundancy_enabled = true
    tags = {
      name = var.tags
    }
  }
}
