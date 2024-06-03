terraform {
  backend "s3" {
    bucket = "rotendamantsha"
    key    = "Terraform-State"
    region = "eu-west-1"
  }
}