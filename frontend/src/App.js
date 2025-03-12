import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Certificate from "./Pages/Certificate";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="certifications"><Certificate /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default App;
