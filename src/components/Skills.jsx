// src/components/Skills.jsx
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const skills = [
  { name: "HTML", rating: 5 },
  { name: "CSS", rating: 4.5 },
  { name: "JavaScript", rating: 4 },
  { name: "React", rating: 4 },
  { name: "Redux", rating: 4 },
  { name: "Git", rating: 4.5 },
  { name: "Responsive Design", rating: 5 },
  { name: "Version Control", rating: 4 },
];

const Skills = () => (
  <section className="skills" id="skills">
    <h2>Skills</h2>
    <div className="skills-content">
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.name}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-rating">
              {[...Array(Math.floor(skill.rating))].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
              {skill.rating % 1 !== 0 && <FaStarHalfAlt className="star" />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;
