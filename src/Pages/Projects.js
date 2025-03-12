import React from "react";
import "../CSS/Projects.css";

function Projects() {
  return (
    <section className="projects" id="projectss">
      <h1>My Projects</h1>
      <div className="project-grid">

        {[
          {
            title: "🚀 DevOps Project",
            description:
              "Implemented CI/CD pipelines using Jenkins, Docker, and Kubernetes to automate deployment processes. Integrated Ansible for configuration management and Terraform for infrastructure as code on AWS.",
          },
          {
            title: "🌍 Static Website Hosting",
            description:
              "Deployed a static website on AWS using S3, CloudFront, and Route 53. Implemented cost-efficient caching and security best practices with AWS WAF and IAM policies.",
          },
          {
            title: "☁️ AWS Cloud Resume Challenge",
            description:
              "Built a fully automated cloud-based resume using AWS services like S3, Lambda, API Gateway, and DynamoDB. Integrated GitHub Actions for CI/CD deployment.",
          },
          {
            title: "🤖 Portfolio Automation",
            description:
              "Automated the deployment of my portfolio website using Terraform and GitHub Actions. Managed infrastructure on AWS with EC2 and Load Balancer, ensuring high availability and scalability.",
          },
        ].map((project, index) => (
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
                  <a href="#" className="view-btn">View Blog</a>
                  <a href="#" className="view-btn">View Code</a>

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