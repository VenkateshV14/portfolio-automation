import React, { useState, useEffect } from "react";
import "../CSS/Navbar.css";

function Navbar() {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // State for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <h2 className="logo">My Portfolio</h2>

      {/* Menu Toggler for Small Screens */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About Me</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#certifications" onClick={closeMenu}>Certifications</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      {/* Dark Mode Toggle */}
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;