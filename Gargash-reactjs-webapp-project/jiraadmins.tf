resource "azurerm_resource_group" "rg" {
  name     = var.rg_name
  location = var.location
}

resource "random_password" "engineers_pwd" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}
### jira_admins Users and group creation
resource "azuread_user" "jira_admin_engineer" {

  for_each = var.jira_users

  user_principal_name = each.value
  display_name        = each.value
  mail_nickname       = "jira_admin_Users"
  password            = random_password.engineers_pwd.result
}

resource "azuread_group" "jira_admin_group" {
  display_name     = "ReadOnly"
  security_enabled = true
  owners           = [data.azuread_client_config.current.object_id]

}
resource "azuread_group_member" "jira_admin_members" {
  for_each         = { for idx, user in azuread_user.jira_admin_engineer : idx => user }
  group_object_id  = azuread_group.jira_admin_group.object_id
  member_object_id = each.value.object_id
}
resource "azurerm_role_assignment" "jira_admin_custom_contributor" {
  scope              = data.azurerm_subscription.development.id
  role_definition_id = data.azurerm_role_definition.jira_admin_role.id
  principal_id       = azuread_group.jira_admin_group.object_id
}
