import React from "react";
import "../CSS/Certificate.css";
import awsCert from "../Assets/Aws.pdf"; // AWS certificate PDF
import terraformCert from "../Assets/Terraform-cert.pdf"; // Terraform certificate PDF

function Certificate() {
  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuedBy: "Amazon Web Services (AWS)",
      from: "August-25-2024",
      to: "August-25-2027",
      certLink: awsCert, // Local PDF file
      badgeLink: "https://www.credly.com/badges/33bc6542-469c-40ce-b811-e39c56d6c646/public_url",
    },
    {
      title: "Terraform Associate Certification",
      issuedBy: "HashiCorp",
      from: "July-25-2024",
      to: "July-25-2026",
      certLink: terraformCert, // Local PDF file
      badgeLink: "https://www.credly.com/badges/54acb72f-8c24-4605-8d44-89bfa618dbf9/public_url",
    },
    {
      title: "Udemy Course Completion Certifications",
      issuedBy: "Udemy",
      date: "Permanent",
      certLink: "https://github.com/VenkateshV14/udemy-certificates.git", // Only GitHub link
    },
  ];

  return (
    <section className="certificate-section" id="certificates">
      <h1>Certifications</h1>
      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <h3>{cert.title}</h3>
            <p>
              <strong>Issued by:</strong> {cert.issuedBy}
            </p>
            {cert.from && cert.to ? (
              <p>
                <strong>Valid:</strong> {cert.from} - {cert.to}
              </p>
            ) : (
              <p>
                <strong>Date:</strong> {cert.date}
              </p>
            )}

            {/* View Certificate Button */}
            <a
              href={cert.certLink}
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Certificate
            </a>

            {/* Space between buttons */}
            {cert.badgeLink && <div className="button-space"></div>}

            {/* View Badge Button (only for AWS & Terraform) */}
            {cert.badgeLink && (
              <a
                href={cert.badgeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="view-cert-btn"
              >
                View Badge
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificate;