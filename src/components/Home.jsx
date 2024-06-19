import React from "react";

const Home = () => (
  <section className="home">
    <div className="home-content">
      <h1>Hi, I'm Asiwaju</h1>
      <p>
        Front-End Developer passionate about creating interactive and responsive
        web applications.
      </p>
      <button
        className="cta-button"
        onClick={() =>
          window.scrollTo({
            top: document.getElementById("projects").offsetTop,
            behavior: "smooth",
          })
        }
      >
        View My Work
      </button>
    </div>
  </section>
);

export default Home;
