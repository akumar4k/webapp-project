terraform {
  required_version = ">= 1.5.5"

  backend "azurerm" {
    resource_group_name  = "gargash_intra_id"
    storage_account_name = "gargashintraidtfstate"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }

  required_providers {
    azuredevops = {
      source  = "microsoft/azuredevops"
      version = ">= 0.11.0"
    }

    azuread = {
      source  = "hashicorp/azuread"
      version = "~> 2.46.0"
    }

    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.98.0"
    }

    random = {
      source  = "hashicorp/random"
      version = "3.5.1"
    }
  }
}

provider "azurerm" {
  features {}
}
