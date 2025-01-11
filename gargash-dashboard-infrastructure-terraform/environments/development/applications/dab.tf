# module "dab" {
#   source                = "../../../modules/dab"
#   rg_name               = "${var.client_name}-dab-${var.rg_name}"
#   log_analytics_name    = "${var.client_name}-dab-${var.log_analytics_name}"
#   app_environment_name  = "${var.client_name}-dab-${var.app_environment_name}"
#   container_registry_id = module.container-registry.acr_id[1]
#   container_app_name    = "${var.client_name}-dab-${var.container_app_name}"
# }
