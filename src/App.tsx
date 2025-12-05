import React from "react";
import "./App.css";


export default function Webpage() {
return (
  <div className="cv-wrapper">
    <header className="cv-header">
      <div>
        <h1 className="cv-name">Melvern Michio Chie</h1>
        <p className="cv-contact">
          <a href="mailto:melvern.chie@binus.ac.id">melvern.chie@binus.ac.id</a> ·
          <span>+62 81513000050</span>
        </p>
        <p className="cv-contact">NIM: 2702220946</p>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/pfp.jpg"}
        alt="Profile"
        className="cv-photo"
      />
    </header>

    <section className="cv-section">
      <h2>Profile Summary</h2>
      <p>
        Freshman Computer Science student at BINUS University with strong
        interests in public speaking, communication, teamwork, AI, and software
        development. Published researcher in social media mental‑health analysis.
        Skilled in problem‑solving, idea generation, and collaborative work.
      </p>
    </section>

    <section className="cv-section">
      <h2>Education</h2>
      <div className="cv-entry">
        <h3>Computer Science — BINUS University</h3>
        <span className="cv-date">Sep 2023 – Present</span>
        <ul>
          <li>Skills: C, Java, Python, HTML/CSS, SQL, C++, C#, Android Studio</li>
        </ul>
      </div>
    </section>

    <section className="cv-section">
      <h2>Work Experience</h2>

      <div className="cv-entry">
        <h3>Bazaar Division — SMA IPEKA PURI</h3>
        <span className="cv-date">Feb 2023 – Jun 2023</span>
        <ul>
          <li>Coordinated logistics with stall vendors</li>
          <li>Assistant Treasurer: documented purchases and transactions</li>
        </ul>
      </div>

      <div className="cv-entry">
        <h3>Perlengkapan & Danus — KBMK BINUS</h3>
        <span className="cv-date">Aug 2024 – Dec 2024</span>
        <ul>
          <li>Handled onsite equipment setup, organization, and maintenance</li>
          <li>Managed data in Excel for project decisions and documentation</li>
          <li>Brainstormed ideas and assisted event operations</li>
        </ul>
      </div>
    </section>
    
    <section className="cv-section">
      <h2>Projects & Research</h2>
        <div className="cv-entry">
          <h3>Research Paper — Multi‑Classification of Mental Illnesses</h3>
          <p>Built using RoBERTa for classification of mental‑health conditions via social media posts.</p>
        </div>

        <div className="cv-entry">
          <h3>PATHUBS Platform</h3>
          <p>Pet‑help and community platform for connecting owners and volunteers.</p>
        </div>
    </section>

    <section className="cv-section">
      <h2>Skills</h2>
      <div className="cv-skills-grid">
        <div>
          <h4>Technical</h4>
          <ul>
            <li>Programming: C, Java, Python, HTML/CSS</li>
            <li>Databases: SQL</li>
            <li>Microsoft Excel, Word, PowerPoint</li>
          </ul>
        </div>


        <div>
          <h4>Soft Skills</h4>
          <ul>
            <li>Public Speaking</li>
            <li>Team Collaboration</li>
            <li>Idea Generation</li>
            <li>Communication</li>
          </ul>
        </div>


        <div>
          <h4>Other</h4>
          <ul>
            <li>Making Websites</li>
            <li>Volunteer Work</li>
            <li>Chess</li>
            <li>Basketball, Swimming</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="cv-section">
      <h2>Interests</h2>
      <p>AI, Coding, Socializing, Sports, Creative Work, Volunteering</p>
    </section>

    <footer className="cv-footer">
      <div className="footer-social">
        <a href="https://linkedin.com/in/melvern-michio-055139289" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/Tanmik" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:melvern.chie@gmail.com">Email</a>
      </div>
    </footer>
  </div>
);
}