import React from "react";
import "../CSS/Skills.css";
import {
  FaAws, FaLinux, FaDocker, FaGitAlt
} from "react-icons/fa";
import {
  SiJenkins, SiKubernetes, SiTerraform, SiAnsible
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skillss">
      <h1>Skills</h1>

      <div className="skill-container">
        {/* Cloud & DevOps Card */}
        <div className="skill-card">
          <FaAws className="skill-icon" />
          <h3>AWS</h3>
          <ul className="skill-list">
            <li><span>AWS Services</span> <FaAws className="skill-item-icon" /></li>
            <li><span>EC2, S3, IAM</span></li>
          </ul>
        </div>

        <div className="skill-card">
          <FaLinux className="skill-icon" />
          <h3>Linux Administration</h3>
          <ul className="skill-list">
            <li><span>Shell Scripting</span></li>
            <li><span>System Management</span></li>
          </ul>
        </div>
        <div className="skill-card">
          <FaGitAlt className="skill-icon" />
          <h3>Git & GitHub</h3>
          <ul className="skill-list">
            <li><span>Version Control</span></li>
            <li><span>GitHub Actions</span></li>
          </ul>
        </div>

        <div className="skill-card">
          <FaDocker className="skill-icon" />
          <h3>Docker</h3>
          <ul className="skill-list">
            <li><span>Containers & Images</span></li>
            <li><span>Docker Compose</span></li>
          </ul>
        </div>
        <div className="skill-card">
          <SiAnsible className="skill-icon" />
          <h3>Ansible</h3>
          <ul className="skill-list">
            <li><span>Configuration</span></li>
            <li><span>Playbooks</span></li>
          </ul>
        </div>
        <div className="skill-card">
          <SiTerraform className="skill-icon" />
          <h3>Terraform</h3>
          <ul className="skill-list">
            <li><span>Infrastructure as Code</span></li>
            <li><span>Provisioning</span></li>
          </ul>
        </div>

        <div className="skill-card">
          <SiKubernetes className="skill-icon" />
          <h3>Kubernetes</h3>
          <ul className="skill-list">
            <li><span>Orchestration</span></li>
            <li><span>Cluster Management</span></li>
          </ul>
        </div>

        <div className="skill-card">
          <SiJenkins className="skill-icon" />
          <h3>CI/CD - Jenkins</h3>
          <ul className="skill-list">
            <li><span>Pipeline Automation</span></li>
            <li><span>Deployment</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
