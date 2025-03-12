import React from "react";
import { AiOutlineEye, AiOutlineDownload } from "react-icons/ai"; // Import icons
import profileImage from "../Assets/port-pic.jpeg";
import resumeFile from "../Assets/Sharvani__Resume.pdf";
import "../CSS/Home.css";

function Home() {
  return (
    <section className="home" id="homes">
      <div className="home-container">
        {/* Left Side - Image */}
        <div className="image-container">
          <div className="border-animation"></div>
          <img src={profileImage} alt="Profile" className="profile-img" />
        </div>

        {/* Right Side - Content */}
        <div className="content-container">
          <h1>Hello, I'm Venkatesh</h1>
          <p>
            Aspiring DevOps Engineer with a passion for automation, cloud
            computing, and CI/CD pipelines.
          </p>

          <div className="resume-buttons">
            <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="btn">
              <AiOutlineEye className="icon" /> View CV
            </a>
            <a href={resumeFile} download="Sharvani__Resume.pdf" className="btn">
              <AiOutlineDownload className="icon" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
