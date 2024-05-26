variable "common_tags" {
  type        = map(string)
  description = "Common tags applied to all resources"
  default     = {
    "name": "planFront"
  }
}

variable "region" {
  type        = string
  description = "The region where the resources will be deployed."
  default     = "eu-west-1"
}

variable "vpc_cidr" {
  type        = string
  description = "The CIDR block for the VPC."
  default     = "10.0.0.0/16"
}

variable "vpc_az" {
  type        = string
  description = "The availability zone for the VPC."
  default     = "eu-west-1a"
}

variable "vpc_public_subnet" {
  type        = string
  description = "The public subnet for the VPC."
  default     = "10.0.1.0/24"
}

variable "ec2_public_key" {
  type        = string
  description = "The public key to use for the EC2 instance."
}

variable "naming_prefix" {
  type        = string
  description = "The prefix to use for naming resources."
  default     = "planFront"
}

