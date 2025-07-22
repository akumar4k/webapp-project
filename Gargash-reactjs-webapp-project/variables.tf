variable "location" {
  type        = string
  description = "location of the resource"
}

variable "rg_name" {
  type        = string
  description = "Name of the Resource Group"
}

variable "data_engineers" {
  type = set(string)
  default = [
    "willhawkins@gargashthewoodfamilyco.onmicrosoft.com",
    "sarahgreenwood@gargashthewoodfamilyco.onmicrosoft.com",
    "gobukaliyamurthi@gargashthewoodfamilyco.onmicrosoft.com",
    "davidkennedy@gargashthewoodfamilyco.onmicrosoft.com"
  ]
}

variable "Developer_engineers" {
  type = set(string)
  default = [
    "ravindran@gargashthewoodfamilyco.onmicrosoft.com",
    "filAntoniadis@gargashthewoodfamilyco.onmicrosoft.com"
  ]
}

variable "quality_engineers" {
  type = set(string)
  default = [
    "vijayalakshmi@gargashthewoodfamilyco.onmicrosoft.com"

  ]
}

variable "jira_users" {
  type = set(string)
  default = [
    "chandraravikumar@gargashthewoodfamilyco.onmicrosoft.com",
    "chaithravrundha@gargashthewoodfamilyco.onmicrosoft.com"

  ]
}
