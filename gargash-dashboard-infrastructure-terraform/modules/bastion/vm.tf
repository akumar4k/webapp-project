resource "azurerm_network_interface" "bastion" {
  name                = "${var.client_name}-bastion-nic-${var.environment}"
  location            = var.location
  resource_group_name = var.rg_name

  ip_configuration {
    name                          = "ipconfig"
    subnet_id                     = var.vm_subnet.id
    private_ip_address_allocation = "Dynamic"
  }
}

resource "azurerm_network_interface_security_group_association" "bastion" {
  network_interface_id      = azurerm_network_interface.bastion.id
  network_security_group_id = azurerm_network_security_group.bastion.id
}

resource "random_password" "bastion" {
  length           = 16
  min_lower        = 1
  min_numeric      = 1
  min_upper        = 1
  min_special      = 1
  override_special = "!@#$%&*()-=+[]{}<>:?"
}

resource "azurerm_windows_virtual_machine" "bastion" {
  name                = "${var.client_name}-bastion-vm-${var.environment}"
  location            = var.location
  resource_group_name = var.rg_name
  size                = "Standard_D2s_v3"
  admin_username      = "azureadmin"
  admin_password      = random_password.bastion.result
  network_interface_ids = [
    azurerm_network_interface.bastion.id,
  ]

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Premium_LRS"
  }

  source_image_reference {
    publisher = "MicrosoftWindowsServer"
    offer     = "WindowsServer"
    sku       = "2022-datacenter-azure-edition-hotpatch"
    version   = "latest"
  }

  allow_extension_operations = false
}
