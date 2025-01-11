module "container-registry" {
  source   = "../../../modules/container-registry"
  rg_name  = "${var.client_name}-container-registry-${var.rg_name}"
  tags     = "${var.client_name}-container-registry-${var.environment}"
  location = var.location
}
