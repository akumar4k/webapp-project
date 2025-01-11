module "databricks" {
  source        = "../../../modules/databricks"
  rg_name       = "${var.client_name}-databricks-${var.rg_name}"
  environment   = "${var.client_name}-databricks-${var.environment}"
  client_name   = "${var.client_name}-databricks-${var.environment}"
  workspace     = "${var.client_name}-databricks-${var.workspace}"
  blob_name     = "gargashdatabricks${var.blob_name}"
  keyvault_name = "gargashdatabricks${var.keyvault_name}"
}
