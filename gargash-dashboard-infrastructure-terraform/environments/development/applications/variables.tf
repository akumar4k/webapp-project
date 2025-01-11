variable "client_name" {
  type        = string
  default     = "gargash-dashboard"
  description = "Name of the client"
}

# DO NOT CHANGE USED BY DATABRICKS
variable "rg_name" {
  type        = string
  default     = "rg"
  description = "The name of the databricks cluster"
}

variable "workspace" {
  type        = string
  default     = "workspace"
  description = "The name of the workspace"
}

# variable "tags" {
#   type        = string
#   default     = "gargash-dashboard-development"
#   description = "Custom tags"
# }

variable "environment" {
  type        = string
  default     = "development"
  description = "The environment of the Databricks cluster"
}

variable "blob_name" {
  type        = string
  default     = "blob"
  description = "The name of Databricks Storage Accounte"
}

variable "keyvault_name" {
  type        = string
  default     = "kv"
  description = "Databricks key vault name"
}

variable "docker_image_name" {
  type        = string
  default     = "gargashdashboardreactapp:latest"
  description = "Name of the docker image"
}

variable "location" {
  type        = string
  default     = "UAE North"
  description = "The location/region where the resource group is created"
}

/*
 *  DNS record RG variables
 */
variable "dns_zone_name" {
  type        = string
  default     = null
  description = "gargashDNS"
}

variable "dns_ttl" {
  type        = number
  default     = 3600
  description = "Time To Live (TTL) of the DNS record (in seconds)."
}

variable "dns_records" {
  type        = list(string)
  default     = ["10.0.2.1", "10.0.3.1"]
  description = "List of IPv4 addresses."
}

/*
 *  Azure sql server
 */
variable "sql_name" {
  type        = string
  default     = "mssql"
  description = "Name of the sql server"
}

variable "sql_db_name" {
  type        = string
  description = "The name of the SQL Database."
  default     = "gargash-dashboard-databricks-db"
}

variable "admin_username" {
  type        = string
  description = "The administrator username of the SQL logical server."
  default     = "azureadmin"
}

variable "admin_password" {
  type        = string
  sensitive   = true
  default     = null
  description = "The administrator password of the SQL logical server."
}

variable "subnet_endpoint_id" {
  type        = string
  default     = "/subscriptions/ed45ecf3-80f8-4e22-ab57-da9722f97b4b/resourceGroups/gargash-dashboard-infra-development-rg/providers/Microsoft.Network/virtualNetworks/gargash-dashboard-vnet/subnets/gargash-subnet3"
  description = "Subnet endpoint"
}

variable "vnet_id" {
  type        = string
  default     = "/subscriptions/ed45ecf3-80f8-4e22-ab57-da9722f97b4b/resourceGroups/gargash-dashboard-infra-development-rg/providers/Microsoft.Network/virtualNetworks/gargash-dashboard-vnet"
  description = "virtual network id"
}

/*
 *  APIM variables
 */

variable "sku" {
  type        = string
  default     = "Premium"
  description = "The pricing tier of this API Management service"

  validation {
    condition     = contains(["Developer", "Standard", "Premium"], var.sku)
    error_message = "The sku must be one of the following: Developer, Standard, Premium."
  }
}

variable "sku_name" {
  type        = string
  default     = "Premium_2"
  description = "The instance name of this API Management service."
}

variable "publisher_email" {
  type        = string
  default     = "bunhcamara@outlook.com" #for testing purpose because there may be restrictions with my coporate account
  description = "The email address of the owner of the service"

  validation {
    condition     = length(var.publisher_email) > 0
    error_message = "The publisher_email must contain at least one character."
  }
}

# variable "apim_name" {
#   type        = string
#   default     = "apigateway"
#   description = "Name of the apigateway"
# }

variable "app_insight" {
  type        = string
  default     = "appinsights"
  description = "The name of this Logger, which must be unique within the API Management Service"
}

variable "logger" {
  type        = string
  default     = "logger"
  description = "The name of this Logger, which must be unique within the API Management Service"
}

# variable "managed_identity_name" {
#   type        = string
#   default     = "mid"
#   description = "assigned identity name for APIM"
# }


/*
 *  APIM variables
 */
# variable "log_analytics_name" {
#   type        = string
#   default     = "log-analytics"
#   description = "The name of the log analytics"
# }

# variable "app_environment_name" {
#   type        = string
#   default     = "app-env"
#   description = "The name of the log analytics"
# }

# variable "container_registry_id" {
#   type        = string
#   default     = "acr"
#   description = "Azure Container registry id"
# }

# variable "container_app_name" {
#   type        = string
#   default     = "cnt"
#   description = "The name of the container app name"
# }
