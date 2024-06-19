import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 Asiwaju. All Rights Reserved.</p>
    <div className="social-icons">
      <a
        href="https://github.com/yourgithubusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://linkedin.com/in/yourlinkedinusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="mailto:youremail@example.com">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  </footer>
);

export default Footer;
