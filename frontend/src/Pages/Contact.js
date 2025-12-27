import React, { useState, useEffect } from "react";
import "../CSS/Contact.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("All fields are required.");
      return false;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const API_URL = process.env.REACT_APP_API_URL || "https://venky-devops-engineer.online";
      console.log("API_URL:", API_URL);

      const response = await fetch(`${API_URL}/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("✅Message sent successfully! Thank you for contacting me, I will get back to you soon...");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage("❌ Failed to send message: " + data.error);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("⚠️ Something went wrong. Please try again later.");
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <section className="contact" id="contacts">
      <h1>Contact Me</h1>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/venky-venkatesh" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://wa.me/7013697300" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon whatsapp" />
        </a>
        <a href="https://github.com/VenkateshV14" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>
      </div>
      <h4>Interested in collaborating? Let's connect and discuss opportunities.</h4>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </section>
  );
}

export default Contact;
