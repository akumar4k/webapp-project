
#resource "azurerm_dns_zone" "gragash_dns" {
#name                = "gargash-dev.com"
#resource_group_name = azurerm_resource_group.rg.name
#}

resource "random_string" "azurerm_dns_zone_name" {
  length  = 13
  lower   = true
  numeric = false
  special = false
  upper   = false
}

resource "azurerm_dns_zone" "zone" {
  name = (
    var.dns_zone_name != null ?
    var.dns_zone_name :
    "www.${random_string.azurerm_dns_zone_name.result}.gargash-dev.com"
  )
  resource_group_name = azurerm_resource_group.rg.name
}

resource "azurerm_dns_a_record" "record" {
  name                = "www"
  resource_group_name = azurerm_resource_group.rg.name
  zone_name           = azurerm_dns_zone.zone.name
  ttl                 = var.dns_ttl
  records             = var.dns_records
}
