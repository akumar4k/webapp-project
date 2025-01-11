variable "client_name" {
  type        = string
  description = "Name of the client"
}

variable "environment" {
  type        = string
  description = "The environment where the resources are running"
}

variable "rg_name" {
  type        = string
  description = "The name of the resource group"
}

variable "vnet_name" {
  type        = string
  description = "The name of the Virtual Network where the subnet is created"
}

variable "location" {
  type        = string
  description = "The location/region where the resource group is created"
}

variable "address_prefixes" {
  type        = list(string)
  description = "The address prefixes to use for the subnet"
}

variable "vm_subnet" {
  type = object({
    id               = string
    address_prefixes = list(string)
  })
  description = "A reference to the subnet where the bastion vm is created"
}
