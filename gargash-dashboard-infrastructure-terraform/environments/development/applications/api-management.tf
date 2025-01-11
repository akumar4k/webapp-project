module "apim" {
  source          = "../../../modules/apim"
  logger          = "${var.client_name}-api-management-${var.logger}"
  rg_name         = "${var.client_name}-api-management-${var.rg_name}"
  sku_name        = var.sku_name
  apim_name       = "${var.client_name}-api-management"
  apim_subnet     = data.azurerm_subnet.aipm_subnet.id
  publisher_email = var.publisher_email
  app_insight     = var.app_insight
}
