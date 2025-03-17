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
        I'm a passionate DevOps and Cloud enthusiast with hands-on experience in AWS, Linux system administration, Docker, and Terraform.
        I enjoy automating infrastructure, streamlining deployment pipelines, and working on real-world projects that improve scalability and reliability.
        I'm always eager to learn new tools and technologies that make development and operations more efficient.
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
                  <strong>📍Location:</strong> India 🌍 <br />
                </p>
              )}
              {activeModal === "education" && (
                <>
                  <p>
                    <strong>Bachelor's in Electronics and Communication Engineering</strong> <br />
                    Bharath University, Chennai (2019-2023)
                  </p>
                  <p>
                    <strong>Intermediate in MPC</strong> <br />
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
