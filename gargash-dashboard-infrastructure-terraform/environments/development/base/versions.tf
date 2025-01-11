terraform {
  required_version = ">= 1.5.5"

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
