variable "aws_region" {
  default     = "us-east-1"
  description = "AWS region to deploy resources"
}

variable "key_name" {
  default     = "portfolio-key"
  description = "Name of the key pair"
}

variable "instance_type" {
  default     = "t2.micro"
  description = "EC2 instance type"
}

variable "ami_id" {
  description = "Used Ubuntu 22.04 which is latest"
}
