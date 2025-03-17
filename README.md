# 🚀 DevOps Portfolio: Fullstack Project Deployment with CI/CD & HTTPS

This is a real-time **DevOps portfolio project** built using **React (frontend)** and **Node.js (backend)**, containerized using **Docker**, deployed via **GitHub Actions** CI/CD pipeline, and hosted on an **AWS EC2 instance** with a custom domain and **HTTPS enabled via Let's Encrypt**.

---

## 🌐 Live Demo

🔗 **Website**: [https://venky-devops-engineer-vde.xyz](https://venky-devops-engineer-vde.xyz)

---

## 📸 Project Screenshots

| Landing Page | Contact Page |
|--------------|--------------|
| ![Home](./screenshots/home.png) | ![Contact](./screenshots/contact.png) |

👉 Create a folder called `screenshots/` and upload your images there!

---

## 🧱 Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express, Nodemailer
- **Docker**: Multi-stage Dockerfiles
- **CI/CD**: GitHub Actions
- **Infrastructure**: AWS EC2 (Ubuntu)
- **Reverse Proxy**: NGINX
- **SSL**: Let’s Encrypt + Certbot
- **Domain**: GoDaddy

---

## 🔄 Features

- 🌍 Hosted live with HTTPS and custom domain
- 📩 Contact form with email auto-responder (via Gmail SMTP)
- 🐳 Dockerized frontend and backend
- 🚀 Multi-arch Docker images (AMD64 + ARM64)
- 📦 CI/CD with GitHub Actions
- 🔁 Auto deployment on GitHub push
- 🧹 Automatic Docker cleanup to manage disk space
- 🔐 Secured with HTTPS using NGINX and Let's Encrypt

---

## 📂 Project Structure

```bash
my-portfolio/
│
├── frontend/               
│   ├── src/
│   ├── public/
│   └── Dockerfile
│   └── package.json
│
├── backend/                
│   ├── server.js
│   └── Dockerfile
│   └── package.json
├── terraform/                
│   ├── main.tf
│   └── variables.tf
│   └── outputs.tf
│
├── .github/workflows/
│   └── deploy.yml
│
├── docker-compose.yml
└── README.md
└── screenshorts
