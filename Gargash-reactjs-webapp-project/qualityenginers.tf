## Quality_engineer_members##
resource "azuread_user" "Quality_engineer" {

  for_each = var.quality_engineers

  user_principal_name = each.value
  display_name        = each.value
  mail_nickname       = "quality_engineers_Users"
  password            = random_password.engineers_pwd.result
}

resource "azuread_group" "Quality_engineer_group" {
  display_name     = "QualityEngineerTeam"
  owners           = [data.azuread_client_config.current.object_id]
  security_enabled = true
}
resource "azuread_group_member" "Quality_engineer_members" {
  for_each         = { for idx, user in azuread_user.Quality_engineer : idx => user }
  group_object_id  = azuread_group.Quality_engineer_group.object_id
  member_object_id = each.value.object_id
}
resource "azurerm_role_assignment" "Quality_engineers_custom_contributor" {
  scope              = data.azurerm_subscription.development.id
  role_definition_id = data.azurerm_role_definition.Quality_engineer_role.id
  principal_id       = azuread_group.Quality_engineer_group.object_id
}
