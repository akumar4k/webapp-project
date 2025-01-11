module "dab-swp" {
  source  = "../../../modules/dab-swp"
  rg_name = "${var.client_name}-dab-swa-${var.rg_name}"
}
