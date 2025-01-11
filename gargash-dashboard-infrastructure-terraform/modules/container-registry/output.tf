output "acr_url" {
  value = [for url in azurerm_container_registry.acr : url.login_server]
}

output "acr_id" {
  value = [for i in azurerm_container_registry.acr : i.id]
}
