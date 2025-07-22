#    Developer Users and group creation
resource "azuread_user" "developer_engineers_users" {
  for_each            = var.Developer_engineers
  user_principal_name = each.value
  display_name        = each.value
  mail_nickname       = "DeveloperEngineersUsers"
  password            = random_password.engineers_pwd.result
}
resource "azuread_group" "developer_engineer_group" {
  display_name     = "DeveloperEngineerTeam"
  owners           = [data.azuread_client_config.current.object_id]
  security_enabled = true
}
resource "azuread_group_member" "developer_engineer_members" {
  for_each         = { for idx, user in azuread_user.developer_engineers_users : idx => user }
  group_object_id  = azuread_group.developer_engineer_group.object_id
  member_object_id = each.value.object_id
}
resource "azurerm_role_assignment" "developer_engineer_custom_contributor" {
  scope              = data.azurerm_subscription.development.id
  role_definition_id = data.azurerm_role_definition.developers_role.id
  principal_id       = azuread_group.developer_engineer_group.object_id
}
