variable "location" {
  type        = string
  default     = "UAE North"
  description = "The location/region where the resource group is created"
}

variable "infra_rg_name" {
  type        = string
  default     = "gargash-dashboard-infra-development-rg"
  description = "The name of the resource group"
}

variable "security-group-name" {
  type        = string
  default     = "gargash_dashboard"
  description = "The name of the security group"
}

variable "security_rule_name" {
  type        = string
  default     = "vnet_outbound_rule"
  description = "The OutBoundt"
}

variable "infra_environment" {
  type        = string
  default     = "gargash-vnet-development"
  description = "Vnet Environment name"
}

variable "vnet_name" {
  type        = string
  default     = "gargash-dashboard-vnet"
  description = "The name of the Virtual Network"
}

variable "apim-nsg-name" {
  type        = string
  default     = "gargash-dashboard-api-management-nsg"
  description = "The name of the APIM Network Security Group"
}

variable "environment" {
  type        = string
  default     = "development"
  description = "The environment of the Databricks cluster"
}

# variable "apim_nsg" {
#   type = map(any)
#   default = {
#     rule_443 = {
#       name                   = "AllowAnyCustom443Inbound"
#       destination_port_range = 443
#     }
#     rule_3443 = {
#       name                   = "AllowAnyCustom3443Inbound"
#       destination_port_range = 3443
#     }
#     rule_80 = {
#       name                   = "AllowAnyCustom80Inbound"
#       destination_port_range = 80
#     }
#     rule_80 = {
#       name                   = "AllowAnyCustom6390Inbound"
#       destination_port_range = 6390
#     }
#   }
# }

# variable "api_management_nsg" {
#   type = map(object({
#     name                   = string
#     destination_port_range = number
#   }))

#   default = {
#     rule_443 = {
#       name                   = "AllowAnyApim443Inbound"
#       destination_port_range = 443
#     }
#     rule_3443 = {
#       name                   = "AllowAnyApim3443Inbound"
#       destination_port_range = 3443
#     }
#     rule_80 = {
#       name                   = "AllowAnyApim80Inbound"
#       destination_port_range = 80
#     }
#     rule_6390 = {
#       name                   = "AllowAnyApim6390Inbound"
#       destination_port_range = 6390
#     }
#   }
# }

#   type = string
#   default = module.vnetwork.subnet_id[3]
#   description = "The ID of the Subnet. Changing this forces a new resource to be created."
# }

variable "subnet_delegation" {
  type = map(map(any))
  default = {
    subnet_delegation = {
      # name = "Microsofyt.Web.hostingEnvironments"
      name            = "Microsoft.Web/serverFarms"
      gargash-subnet1 = "Microsoft.Network/virtualNetworks/subnets/action"
    }
  }
  description = "A map of subnet name to delegation block on the subnet"
}
