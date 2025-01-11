
output "databricks_rg" {
  value = azurerm_resource_group.rg.name
}

output "databricks_location" {
  value = azurerm_resource_group.rg.location
}
