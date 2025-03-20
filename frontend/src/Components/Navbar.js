import React, { useState } from "react";
import "../CSS/Navbar.css";

function Navbar() {
  // State for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Function to scroll to top when "My Portfolio" is clicked
  const goToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
    closeMenu(); // Close the menu in mobile mode
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h2 className="logo" onClick={goToHome} style={{ cursor: "pointer" }}>
          My Portfolio
        </h2>
        {/* Menu Toggle Button (Visible only on mobile) */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About Me</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#certifications" onClick={closeMenu}>Certifications</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
