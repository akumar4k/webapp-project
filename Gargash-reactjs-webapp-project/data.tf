data "azuread_client_config" "current" {}

data "azurerm_subscription" "development" {
  subscription_id = ""
}
resource "azurerm_role_definition" "dataengineers_custom_role" {
  role_definition_id = "fa47dfbf-088d-4ccc-9834-3acf2a21a4a3"
  name               = "dataengineer-custom-role-definition"
  scope              = data.azurerm_subscription.development.id
  permissions {
    actions = [
      "Microsoft.Resources/subscriptions/resourceGroups/read",
      "Microsoft.Authorization/roleAssignments/read",
      "Microsoft.Databricks/register/action",
      "Microsoft.Databricks/accessConnectors/read",
      "Microsoft.Databricks/accessConnectors/write",
      "Microsoft.Databricks/operations/read",
      "Microsoft.Databricks/workspaces/write",
      "Microsoft.Databricks/workspaces/delete",
      "Microsoft.Authorization/*/read",
      "Microsoft.DataFactory/dataFactories/*",
      "Microsoft.DataFactory/factories/*",
      "Microsoft.Insights/alertRules/*",
      "Microsoft.ResourceHealth/availabilityStatuses/read",
      "Microsoft.Resources/deployments/*",
      "Microsoft.Resources/subscriptions/resourceGroups/read",
      "Microsoft.Support/*",
      "Microsoft.EventGrid/eventSubscriptions/write",
      "Microsoft.AzureArcData/sqlServerInstances/read",
      "Microsoft.AzureArcData/sqlServerInstances/write"

    ]

    not_actions = []

  }

  assignable_scopes = [
    data.azurerm_subscription.development.id
  ]
}
data "azurerm_role_definition" "dataengineers_custom_role" {
  role_definition_id = azurerm_role_definition.dataengineers_custom_role.role_definition_id
  scope              = data.azurerm_subscription.development.id
}

output "custom_role_definition_id" {
  value = data.azurerm_role_definition.dataengineers_custom_role.id
}

#  Developers team###
resource "azurerm_role_definition" "developers_role" {
  name  = "developers-custom-role-definition"
  scope = data.azurerm_subscription.development.id
  permissions {
    actions = [
      "Microsoft.Resources/subscriptions/resourceGroups/read",
    "Microsoft.Authorization/roleAssignments/read"]
    not_actions = []
  }
  assignable_scopes = [
    data.azurerm_subscription.development.id
  ]
}
data "azurerm_role_definition" "developers_role" {
  role_definition_id = azurerm_role_definition.developers_role.role_definition_id
  scope              = data.azurerm_subscription.development.id
}

#### Quality_engineer ######
resource "azurerm_role_definition" "Quality_engineer_role" {
  name  = "Quality-engineer-custom-role-definition"
  scope = data.azurerm_subscription.development.id
  permissions {
    actions     = ["Microsoft.Resources/subscriptions/resourceGroups/read", "Microsoft.Authorization/roleAssignments/read"]
    not_actions = []
  }
  assignable_scopes = [
    data.azurerm_subscription.development.id
  ]
}
data "azurerm_role_definition" "Quality_engineer_role" {
  role_definition_id = azurerm_role_definition.Quality_engineer_role.role_definition_id
  scope              = data.azurerm_subscription.development.id
}
###  jira_admin #####
resource "azurerm_role_definition" "jira_admin_role" {
  name  = "jira_admin_role-custom-role-definition"
  scope = data.azurerm_subscription.development.id
  permissions {
    actions     = ["Microsoft.Resources/subscriptions/resourceGroups/read", "Microsoft.Authorization/roleAssignments/read"]
    not_actions = []
  }

  assignable_scopes = [
    data.azurerm_subscription.development.id
  ]
}
data "azurerm_role_definition" "jira_admin_role" {
  role_definition_id = azurerm_role_definition.jira_admin_role.role_definition_id
  scope              = data.azurerm_subscription.development.id
}
