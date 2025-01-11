resource "azurerm_resource_group" "rg" {
  name     = "${var.client_name}-react-app-${var.rg_name}"
  location = var.location
}


resource "azurerm_user_assigned_identity" "AcrID" {
  name                = "AcrPulladmin"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
}

// resource "azuread_group" "AcrpullAdmin" {
//   display_name     = "AcrpullAdmin"
//   security_enabled = true
// }

// resource "azuread_group_member" "Acrgroupmember" {
//   group_object_id  = azuread_group.AcrpullAdmin.object_id
//   member_object_id = azurerm_user_assigned_identity.AcrID.principal_id
// }

resource "azurerm_service_plan" "appserviceplan" {
  name                = "${var.client_name}-app-service-plan-${var.environment}"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Linux"
  sku_name            = "P1v2"

  depends_on = [
    azurerm_resource_group.rg
  ]

  lifecycle {
    ignore_changes = [
      tags
    ]
  }

}

resource "azurerm_linux_web_app" "reactapp" {
  name                = "${var.client_name}-web-app-${var.environment}"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  service_plan_id     = azurerm_service_plan.appserviceplan.id

  site_config {
    http2_enabled                           = true
    always_on                               = "true"
    container_registry_use_managed_identity = "true"

    application_stack {
      docker_registry_url = "https://gargashdashboardreactappacr.azurecr.io"
      docker_image_name   = var.docker_image_name

      #node_version        = "14.0"
    }

  }
  // identity {
  //   type         = "SystemAssigned, UserAssigned"
  //   identity_ids = [azurerm_user_assigned_identity.AcrID.id]
  // }

  lifecycle {
    ignore_changes = all
  }
  depends_on = [
    module.container-registry
  ]

}

// resource "azurerm_role_assignment" "assigned_identity_acr_pull" {
//   //  scope     = azurerm_linux_web_app.reactapp.identity.id
//    scope                = azurerm_linux_web_app.reactapp.id
//    principal_id         = azurerm_user_assigned_identity.AcrID.principal_id
//    role_definition_name = "AcrPull"
// }
