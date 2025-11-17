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
            Binusian student in Computer Science (AI Development Focus)
          </p>
        </div>
      </header>

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

      <section className="card">
        <h2>Education</h2>
        <p><strong>Bina Nusantara University, Tangerang</strong> — 2023–2027 </p>
        <p>Computer Science</p>
        <p><strong>SMA IPEKA Puri, Jakarta</strong> — 2020–2023</p>
        <p>IPA</p>
      </section>

      <section className="card">
        <h2>Projects</h2>
        <ul>
          <li><strong>PATHUBS:</strong> Pet community and help-sharing platform.</li>
        </ul>
      </section>

      <footer>© 2025 Melvern Michio Chie</footer>
    </div>
  );
}

export default Webpage;