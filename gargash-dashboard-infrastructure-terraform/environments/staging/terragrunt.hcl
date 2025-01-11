remote_state {
  backend      = "azurerm"
  disable_init = tobool(get_env("TERRAGRUNT_DISABLE_INIT", "false"))

  generate = {
    path      = "_backend.tf"
    if_exists = "overwrite_terragrunt"
  }

  config = {
    key                  = "${path_relative_to_include()}/terraform.tfstate"
    resource_group_name  = "gargash-dashboard-staging-tfstate-rg"
    storage_account_name = "gargashinfrastgtfstate"
    container_name       = "tfstate"
  }
}
