import React from "react";

const education = [
  {
    institution: "Ondo State University of Science and Technology,Ondo State",
    degree: "Bachelor of Engineering in Civil Engineering",
    year: "2018 - 2024",
  },
];

const experience = [
  {
    company: "2410 Studio",
    position: "Intern",
    year: "2023 - 2024",
    description:
      "Assisted in the development of responsive websites and web applications, ensuring cross-browser compatibility.",
  },
];

const certifications = [
  {
    name: "The complete  Web Development Bootcamp",
    issuer: "Dr. Angela Yu,Udemy",
  },
  {
    name: "Complete Javascript Course",
    issuer: "Jonas Schmedtmann,Udemy",
  },
];

const Resume = () => (
  <section className="resume" id="resume">
    <h2>Resume</h2>

    <div className="resume-section">
      <h3>Education</h3>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <h4>{edu.institution}</h4>
            <p>
              {edu.degree} <span>({edu.year})</span>
            </p>
          </li>
        ))}
      </ul>
    </div>

    <div className="resume-section">
      <h3>Experience</h3>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            <h4>{exp.company}</h4>
            <p>
              {exp.position} <span>({exp.year})</span>
            </p>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </div>

    <div className="resume-section">
      <h3>Certifications</h3>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index}>
            <h4>{cert.name}</h4>
            <p>{cert.issuer}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Resume;
