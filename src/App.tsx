import React from "react";
import "./App.css";


function Webpage() {
return (
  <div className="container">
    <header className="header">
      <img
        src={process.env.PUBLIC_URL + "/pfp.jpg"}
        alt="Profile"
        className="profile"
      />
      <div>
        <h1 className="name">Melvern Michio Chie</h1>
        <p className="subtitle">
          Computer Science (AI Development) BINUS University
        </p>
        <a href="https://www.linkedin.com/in/melvern-michio-055139289/">LinkedIn</a>
        <a className="cv-button" href="/Melvern-Michio-CV.pdf" download>
        Download CV (PDF)
        </a>
      </div>
    </header>


    <section className="card">
      <h2>Summary</h2>
      <p>
        Computer Science college student with a strong interest
        in software engineering, system design.
        Experienced in organizational work including event operations,
        documentation, and technical coordination in KBMK and HIMTI.
      </p>
    </section>


    <section className="card">
      <h2>Experience</h2>
      <ul>
        <li>
          <strong>KBMK — Equipment & Documentation Division</strong>
          <ul>
            <li>Handled logistics, documentation, and technical operations</li>
            <li>Supported seminars: <strong>Kindness</strong> & <strong>SHINE</strong></li>
          </ul>
        </li>
        <br />
        <li>
          <strong>HIMTI — Event Staff (Techno)</strong>
          <ul>
            <li>Involved in planning & execution of HIMTI Techno event</li>
          </ul>
        </li>
      </ul>
    </section>


    <section className="card">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>PATHUBS</strong> — Pet community & help-sharing platform
          enabling owners to share assistance and knowledge.
        </li>
      </ul>
    </section>


    <section className="card">
      <h2>Contact</h2>
      <p><strong>Phone:</strong> +62 81513000050</p>
      <p><strong>Email:</strong> melvern.michio@example.com</p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a href="https://www.linkedin.com/in/melvern-michio-055139289/">
          linkedin.com/in/melvern-michio-055139289
        </a>
      </p>
      <p>
        <strong>GitHub:</strong>{" "}
        <a href="https://github.com/Tanmik">github.com/Tanmik</a>
      </p>
    </section>


    <footer>© 2025 Melvern Michio Chie</footer>
  </div>
);
}

export default Webpage;