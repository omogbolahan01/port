// src/components/Projects.js
import React from "react";
// import './Projects.css';

const projects = [
  { name: "DesignMaxx", url: "https://designmaxx.netlify.app" },
  { name: "Radiant Glow", url: "https://radiant-glow.netlify.app" },
  { name: "Stratedgee", url: "https://stratedgee.netlify.app/" },
  { name: "ESSSA", url: "https://esssa.netlify.app/" },
  { name: "Gbdafri", url: "https://gbdafri.netlify.app/" },
  {
    name: "Visionary Blini",
    url: "https://visionary-blini-b4cc1f.netlify.app/about",
  },
];

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <div className="projects-list">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <iframe
            src={project.url}
            title={project.name}
            className="project-iframe"
          />
          <h3>{project.name}</h3>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
