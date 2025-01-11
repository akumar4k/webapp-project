output "public_ip" {
  value       = azurerm_public_ip.bastion.ip_address
  description = "The public ip address associated with the bastion host"
}

output "subnet_id" {
  value       = azurerm_subnet.bastion.id
  description = "The id of AzureBastionSubnet"
}

output "host_name" {
  value       = azurerm_bastion_host.bastion.name
  description = "the name of the bastion host"
}

output "vm_password" {
  value       = random_password.bastion.result
  sensitive   = true
  description = "The password for the bastion VM"
}

output "vm_id" {
  value       = azurerm_windows_virtual_machine.bastion.id
  description = "The id of the bastion VM"
}

output "nsg_id" {
  value       = azurerm_network_security_group.bastion.id
  description = "The id of the bastion NSG"
}

output "nic_id" {
  value       = azurerm_network_interface.bastion.id
  description = "The id of the bastion Network Interface"
}
