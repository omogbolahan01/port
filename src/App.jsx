// src/App.js
import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
  <div className="App">
    <Navigation />
    <section id="home">
      <Home />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="resume">
      <Resume />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <Footer />
  </div>
);

export default App;
