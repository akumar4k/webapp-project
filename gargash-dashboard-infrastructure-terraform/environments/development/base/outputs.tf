output "subnet_endpoint_id" {
  value = module.vnetwork.vnet_subnets[2]
}

output "vnetwork_id" {
  value = module.vnetwork.vnet_id
}

output "garagsh_dashboard_rg" {
  value = azurerm_resource_group.garagsh_dashboard.name
}

output "apim_vnet_subnets" {
  value = module.vnetwork.vnet_subnets[1]
}
