remote_state {
  backend      = "azurerm"
  disable_init = tobool(get_env("TERRAGRUNT_DISABLE_INIT", "false"))

  generate = {
    path      = "_backend.tf"
    if_exists = "overwrite_terragrunt"
  }

  config = {
    key                  = "${path_relative_to_include()}/terraform.tfstate"
    resource_group_name  = "gargash_dashboard_tfstate"
    storage_account_name = "gargashdbinfratfstate"
    container_name       = "tfstate"
  }
}
