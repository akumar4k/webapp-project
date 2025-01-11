resource "azurerm_subnet" "bastion" {
  name                 = "AzureBastionSubnet"
  resource_group_name  = var.rg_name
  virtual_network_name = var.vnet_name
  address_prefixes     = var.address_prefixes
}

resource "azurerm_public_ip" "bastion" {
  name                = "${var.client_name}-bastion-pip-${var.environment}"
  location            = var.location
  resource_group_name = var.rg_name
  allocation_method   = "Static"
  sku                 = "Standard"
}

resource "azurerm_bastion_host" "bastion" {
  name                = "${var.client_name}-bastion-${var.environment}"
  location            = var.location
  resource_group_name = var.rg_name

  ip_configuration {
    name                 = "ip-config"
    subnet_id            = azurerm_subnet.bastion.id
    public_ip_address_id = azurerm_public_ip.bastion.id
  }
}
