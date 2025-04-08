import React, { useState } from "react";
import "../CSS/About.css";
import { FaUser, FaGraduationCap, FaTimes } from "react-icons/fa";

function About() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (type) => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section className="about" id="abouts">
      <h1>About Me</h1>
      <p>
        I am a dedicated <strong>DevOps and Cloud Engineer</strong> with a strong passion for
        <strong> automation, infrastructure management, and continuous integration/deployment (CI/CD)</strong>.
        With hands-on experience in <strong>AWS, Terraform, Docker, Kubernetes, and Linux</strong>, I specialize in
        <strong> building scalable, secure, and highly available cloud environments</strong>.
        I enjoy working on real-world projects that bridge the gap between
        <strong> development and operations</strong>, ensuring seamless deployments and optimized workflows.

        My expertise includes designing <strong>Infrastructure as Code (IaC) solutions</strong>,
        configuring <strong>containerized applications</strong>, and implementing <strong>cloud-native architectures</strong>.
        I am always eager to explore emerging technologies, optimize existing systems, and contribute to
        <strong> high-performance DevOps pipelines</strong>.

        I believe in <strong>continuous learning and collaboration</strong>, and I am excited to take on new challenges
        that push the boundaries of cloud engineering and automation. 🚀
      </p>

      {/* Buttons */}
      <div className="about-buttons">
        <button onClick={() => openModal("personal")}>
          <FaUser /> Personal Info
        </button>
        <button onClick={() => openModal("education")}>
          <FaGraduationCap /> Education
        </button>
      </div>

      {/* Modal Popup */}
      {activeModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              <FaTimes />
            </button>
            <div className="modal-header">
              {activeModal === "personal" && <FaUser />}
              {activeModal === "education" && <FaGraduationCap />}
              <h2>
                {activeModal === "personal" && "Personal Info"}
                {activeModal === "education" && "Education"}
              </h2>
            </div>
            <div className="modal-body">
              {activeModal === "personal" && (
                <p>
                  <strong>Name:</strong> Vakamudula Venkatesh <br />
                  <strong>Cell:</strong> 7013697300 <br />
                  <strong>D.O.B:</strong> April-14-2001 <br />
                  <strong>Location:</strong> India 🌍 <br />
                </p>
              )}
              {activeModal === "education" && (
                <>
                  <p>
                    <strong>Bachelor's in Electronics and Communication Engineering - 86%</strong> <br />
                    Bharath University, Chennai (2019-2023)
                  </p>
                  <p>
                    <strong>Intermediate in MPC - 92%</strong> <br />
                    Sri Chaitanya Junior College (2017-2019)
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
