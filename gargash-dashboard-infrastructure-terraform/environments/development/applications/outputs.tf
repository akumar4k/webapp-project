output "sql_server_name" {
  value = azurerm_mssql_server.databricks.name
}

output "admin_password" {
  sensitive = true
  value     = local.admin_password
}

output "data_factory_id" {
  value = azurerm_data_factory.adf.id
}

# output "aipm_subnet" {
#   value = data.azurerm_subnet.aipm_subnet.id
# }
