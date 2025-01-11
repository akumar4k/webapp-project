variable "client_name" {
  type        = string
  description = "Name of the client"
}

variable "rg_name" {
  type        = string
  description = "The name of the databricks cluster"
}

variable "workspace" {
  type        = string
  description = "The name of the workspace"
}

# variable "tags" {
#   type        = string
#   description = "Custom tags"
# }

variable "environment" {
  type        = string
  description = "The environment of the Databricks cluster"
}

variable "blob_name" {
  type        = string
  description = "The name of Databricks storage accounte"
}

variable "keyvault_name" {
  type        = string
  description = "Databricks key vault name"
}
