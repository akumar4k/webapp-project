variable "rg_name" {
  type        = string
  description = "The rg name of the container registery"
}

variable "tags" {
  type        = string
  description = "Custom tags"
}

variable "location" {
  type        = string
  description = "Location of the resources"
}

#variable "resource_name" {
#type        = string
#default     = "acr"
#description = "Location of the resources"
#}

#variable "client_name" {
#type        = string
#default     = "gargash-dashboard"
#description = "Name of the client"
#}

# variable "container-registry" {
#   type        = list(string)
#   default = [
#     "container-registry"
#   ]
#   description = "Names of the registry"
# }
