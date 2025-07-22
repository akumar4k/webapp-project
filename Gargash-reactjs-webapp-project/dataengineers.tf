resource "azuread_user" "data_engineers" {

  for_each = var.data_engineers

  user_principal_name = each.value
  display_name        = each.value
  mail_nickname       = "DataEngineersUsers"
  password            = random_password.engineers_pwd.result
}
resource "azuread_group" "data_engineer_group" {
  display_name     = "DataEngineerTeam"
  owners           = [data.azuread_client_config.current.object_id]
  security_enabled = true
}
resource "azuread_group_member" "data_engineer_members" {
  for_each         = { for idx, user in azuread_user.data_engineers : idx => user }
  group_object_id  = azuread_group.data_engineer_group.id
  member_object_id = each.value.id
}
resource "azurerm_role_assignment" "data_engineers_custom_contributor" {
  scope              = data.azurerm_subscription.development.id
  role_definition_id = data.azurerm_role_definition.dataengineers_custom_role.id
  principal_id       = azuread_group.data_engineer_group.object_id

}
