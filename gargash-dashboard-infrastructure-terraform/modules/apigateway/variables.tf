# variable "location" {
#   type        = string
#   default     = "UAE North"
#   description = "Location for all resources."
# }

variable "publisher_email" {
  type        = string
  description = "The email address of the owner of the service"

  validation {
    condition     = length(var.publisher_email) > 0
    error_message = "The publisher_email must contain at least one character."
  }
}

variable "publisher_name" {
  type        = string
  default     = "publisher"
  description = "The name of the owner of the service"

  validation {
    condition     = length(var.publisher_name) > 0
    error_message = "The publisher_name must contain at least one character."
  }
}

# variable "rg_name" {
#   type        = string
#   description = "value"
# }

# variable "sku_name" {
#   type        = string
#   description = "The instance name of this API Management service."
# }

# variable "apim_name" {
#   type        = string
#   description = "Name of the apigateway"
# }

# variable "apim_subnet" {
#   type        = string
#   description = "The ids of subnets created inside the vNet"
# }

# variable "app_insight" {
#   type        = string
#   description = "The name of this Logger, which must be unique within the API Management Service"
# }

# variable "logger" {
#   type        = string
#   description = "The name of this Logger, which must be unique within the API Management Service"
# }

# variable "managed_identity_name" {
#   type        = string
#   default     = "mid"
#   description = "assigned identity name for APIM"
# }
