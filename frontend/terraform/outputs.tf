output "public_ip" {
  description = "Public IP of EC2 instance"
  value       = aws_instance.portfolio_instance.public_ip
}

output "private_key_path" {
  value = local_file.private_key.filename
}
