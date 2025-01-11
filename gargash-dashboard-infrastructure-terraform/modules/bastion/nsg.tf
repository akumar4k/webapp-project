resource "azurerm_network_security_group" "bastion" {
  name                = "${var.client_name}-bastion-nsg-${var.environment}"
  location            = var.location
  resource_group_name = var.rg_name

  security_rule {
    name                       = "allow_bastion_rdp"
    priority                   = 300
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "3389"
    source_address_prefix      = azurerm_subnet.bastion.address_prefixes[0]
    destination_address_prefix = var.vm_subnet.address_prefixes[0]
  }

  security_rule {
    name                   = "AllowAnyCustom8080Outbound"
    priority               = 310
    direction              = "Outbound"
    access                 = "Allow"
    protocol               = "Any"
    source_port_range      = "*"
    destination_port_range = "*"
    source_address_prefix  = var.vm_subnet.address_prefixes[0]
  }
}
