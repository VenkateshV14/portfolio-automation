import React from "react";
import "../CSS/Projects.css";

function Projects() {
  const projectData = [
    {
      title: "🤖 Chatbot-AI | DevOps Automation on AWS",
      description:
        "Built an end-to-end CI/CD pipeline for a Django chatbot app using Jenkins, Docker, Kubernetes (EKS), Terraform, and Ansible on AWS. Automates code deployment from GitHub to Kubernetes with every push.",
      blogLink: "https://devops-automation.hashnode.dev/devops-automation",
      codeLink: "https://github.com/VenkateshV14/Chat-bot-Ai.git",
    },
    {
      title: "☁️ AWS Cloud Resume Challenge",
      description:
        "Built a serverless backend for my cloud resume using AWS Lambda, API Gateway, and DynamoDB to track visits. Automated infrastructure provisioning and deployments with Terraform and GitHub Actions.",
      blogLink: "https://aws-cloud-resume-challenge.hashnode.dev/cloud-resume-devops",
      codeLink: "https://github.com/VenkateshV14/AWS-cloud-resume-challenge-frontend.git",
    },
    {
      title: "🤖 Portfolio Automation",
      description:
        "Built a Production-Ready DevOps Portfolio Using React, Node.js, Docker, Terraform & GitHub Actions.",
      blogLink: "https://portfolio-website-automation.hashnode.dev/devops-portfolio",
      codeLink: "https://github.com/VenkateshV14/portfolio-automation.git",
    },
    {
      title: "🚀 3-Tier Microservice Automation",
      description:
        "Containerized and orchestrated three e-commerce microservices using Docker, Kubernetes (EKS), and GitHub Actions CI/CD for seamless deployment.",
      blogLink: "https://microservices-automation.hashnode.dev/docker-k8s-cicd",
      codeLink: "https://github.com/VenkateshV14/microservices-automation.git",
    },
    {
      title: "🌍 Static Website Hosting (IaC)",
      description:
        "Deployed a static website on AWS S3 bucket, using Infrastructure as Code - Terraform.",
      blogLink: "https://terraform-static-website.hashnode.dev/terraform-s3-static-site",
      codeLink: "https://github.com/VenkateshV14/terraform-s3-website.git",
    },
  ];

  const handleClick = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener noreferrer");
    } else {
      alert("🚀 Project will be updated soon...");
    }
  };

  return (
    <section className="projects" id="projectss">
      <h1>Projects</h1>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-inner">

              {/* Front Side */}
              <div className="card-front">
                <h3>{project.title}</h3>
              </div>

              {/* Back Side */}
              <div className="card-back">
                <p>{project.description}</p>
                <div className="btn-group">
                  <button onClick={() => handleClick(project.blogLink)} className="view-btn">
                    View Blog
                  </button>
                  <button onClick={() => handleClick(project.codeLink)} className="view-btn">
                    View Code
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
