import React from "react";
import { AiOutlineEye, AiOutlineDownload } from "react-icons/ai"; // Import icons
import profileImage from "../Assets/port-pic.jpeg";
import resumeFile from "../Assets/resume.pdf";
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
            DevOps Engineer passionate about building scalable cloud infrastructure, automating workflows, and implementing robust CI/CD pipelines.
          </p>


          <div className="resume-buttons">
            <a href="https://drive.google.com/file/d/1S8vouCWIk0YW_wk7IRwrzPT-YPtj6NNu/view?usp=sharing" rel="noopener noreferrer" className="btn">
              <AiOutlineEye className="icon" /> View CV
            </a>
            <a href={resumeFile} download="resume.pdf" className="btn">
              <AiOutlineDownload className="icon" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
