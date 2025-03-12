provider "aws" {
  region = var.aws_region
}

resource "tls_private_key" "generated_key" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "aws_key_pair" "terraform_key" {
  key_name   = var.key_name
  public_key = tls_private_key.generated_key.public_key_openssh
}

resource "local_file" "private_key" {
  content         = tls_private_key.generated_key.private_key_pem
  filename        = "${path.module}/${var.key_name}.pem"
  file_permission = "0400"
}

data "aws_vpc" "default" {
  default = true
}

resource "aws_security_group" "portfolio_sg" {
  name        = "portfolio-sg"
  description = "Allow ports for portfolio app"
  vpc_id      = data.aws_vpc.default.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "portfolio_instance" {
  ami             = var.ami_id
  instance_type   = var.instance_type
  key_name        = aws_key_pair.terraform_key.key_name
  security_groups = [aws_security_group.portfolio_sg.name]

  user_data = <<-EOF
              #!/bin/bash
              apt update -y
              apt install -y docker.io docker-compose git
              systemctl start docker
              systemctl enable docker
              usermod -aG docker ubuntu
            EOF

  tags = {
    Name = "portfolio-web"
  }
}
