resource "azurerm_resource_group" "rg" {
  name     = var.rg_name
  location = var.location
}

resource "azurerm_application_insights" "apim" {
  name                = var.app_insight
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  application_type    = "other"

  depends_on = [azurerm_resource_group.rg]
}

resource "azurerm_api_management" "apim" {
  name                = var.apim_name
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  publisher_email     = var.publisher_email
  publisher_name      = var.publisher_name
  sku_name            = var.sku_name
  # zones               = ["UAE North", "UAE Central "]

  virtual_network_type = "Internal"

  virtual_network_configuration {
    subnet_id = var.apim_subnet
  }

  depends_on = [azurerm_resource_group.rg]
}

resource "azurerm_api_management_logger" "logger" {
  name                = var.logger
  api_management_name = azurerm_api_management.apim.name
  resource_group_name = azurerm_resource_group.rg.name
  resource_id         = azurerm_application_insights.apim.id

  application_insights {
    instrumentation_key = azurerm_application_insights.apim.instrumentation_key
  }

  depends_on = [azurerm_resource_group.rg]
}

resource "azurerm_user_assigned_identity" "apim" {
  location            = azurerm_resource_group.rg.location
  name                = var.managed_identity_name
  resource_group_name = azurerm_resource_group.rg.name

  depends_on = [azurerm_resource_group.rg]
}









# resource "azurerm_api_management_gateway" "example" {
#   name              = "example-gateway"
#   api_management_id = azurerm_api_management.example.id
#   description       = "Example API Management gateway"

#   location_data {
#     name     = "example name"
#     city     = "example city"
#     district = "example district"
#     region   = "example region"
#   }
# }
