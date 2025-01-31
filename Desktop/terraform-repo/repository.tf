
provider "github" {
  token = var.token
}



resource "github_repository" "terraform-second-resource" {


      name="first-second-resource"

     description = "this is second  resource"
     visibility = "public"
     auto_init= true
  
}


resource "github_repository" "terrafrom_resouce" {

     name="first-resource"

     description = "this is first resource"
     visibility = "public"
     auto_init= true
}
