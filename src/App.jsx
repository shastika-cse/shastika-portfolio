import "./App.css";
function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="logo">
          S<span>.</span>B
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="https://github.com/shastika-cse"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          GitHub ↗
        </a>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">COMPUTER SCIENCE ENGINEERING STUDENT</p>

            <h1>
              SHASTIKA<span>.</span>B
            </h1>

            <h2>
              Passionate Technologist
              <br />
              <span>
                Turning Complex Problems into Seamless User Experiences.
              </span>
            </h2>

            <p className="hero-description">
              I build practical digital solutions through clean code,
              problem-solving, automation, and continuous learning.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work →
              </a>

              <a href="#contact" className="secondary-button">
                Let's Connect
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>

            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>

            <div className="orbit-center">
             <img src="/profile.jpg" alt="Shastika" />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
<section className="section" id="about">
  <p className="section-label">01 / ABOUT</p>

  <div className="two-column">
    <h2 className="section-title">
      Building with
      <br />
      <span>curiosity.</span>
    </h2>

    <div className="about-text">
      <p>
        Hello! I'm a Computer Science undergraduate specializing in
        Computer Science and Engineering, with a passion for clean code,
        efficient problem-solving, and practical technology.
      </p>

      <p>
        I enjoy building real-world digital solutions, from tracking
        applications and automation scripts to academic dashboards and
        workflow management systems. I love turning ideas into useful,
        functional applications.
      </p>

      <p>
        I'm always eager to learn new technologies, collaborate with
        fellow developers, and create digital solutions that solve
        meaningful problems and make an impact.
      </p>
    </div>
  </div>
</section>

        {/* SKILLS SECTION */}
        <section className="section" id="skills">
          <p className="section-label">02 / SKILLS</p>

          <h2 className="section-title">
            Tools of the
            <br />
            <span>trade.</span>
          </h2>

          <div className="skills-grid">
            <div className="skill">Python</div>
            <div className="skill">C</div>
            <div className="skill">C++</div>
            <div className="skill">Java</div>
            <div className="skill">Git</div>
            <div className="skill">GitHub</div>
            <div className="skill">VS Code</div>
            <div className="skill">Problem Solving</div>
            <div className="skill">Automation</div>
            <div className="skill">System Building</div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section" id="projects">
          <p className="section-label">03 / PROJECTS</p>

          <h2 className="section-title">
            Things I've
            <br />
            <span>built.</span>
          </h2>

          <div className="projects">

            <article className="project-card">
              <span className="project-number">01</span>

              <div>
                <h3>Internship Management System</h3>

                <p>
                  A streamlined application designed to manage internship
                  applications, documentation, status updates, and process
                  workflows.
                </p>

                <div className="tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Workflow</span>
                </div>
              </div>

              <span className="project-arrow">↗</span>
            </article>

            <article className="project-card">
              <span className="project-number">02</span>

              <div>
                <h3>College Assignment Dashboard</h3>

                <p>
                  A centralized digital dashboard that helps students organize,
                  prioritize, and track coursework, assignments, and schedules.
                </p>

                <div className="tags">
                  <span>Web Development</span>
                  <span>UI/UX</span>
                  <span>Productivity</span>
                </div>
              </div>

              <span className="project-arrow">↗</span>
            </article>

            <article className="project-card">
              <span className="project-number">03</span>

              <div>
                <h3>Farm2Fork</h3>

                <p>
                  A Smart India Hackathon solution designed to improve
                  transparency and efficiency across the agricultural supply
                  chain.
                </p>

                <div className="tags">
                  <span>SIH</span>
                  <span>Agriculture</span>
                  <span>Social Impact</span>
                </div>
              </div>

              <span className="project-arrow">↗</span>
            </article>

            <article className="project-card">
              <span className="project-number">04</span>

              <div>
                <h3>College Bus Live Tracking</h3>

                <p>
                  A Python-based application created to solve a practical
                  campus transportation tracking problem.
                </p>

                <div className="tags">
                  <span>Python</span>
                  <span>Automation</span>
                  <span>Problem Solving</span>
                </div>
              </div>

              <span className="project-arrow">↗</span>
            </article>

            <article className="project-card">
              <span className="project-number">05</span>

              <div>
                <h3>Lasers in Medical Technology</h3>

                <p>
                  A technical research and presentation project exploring the
                  applications of laser technology in medicine.
                </p>

                <div className="tags">
                  <span>Research</span>
                  <span>Technology</span>
                  <span>Presentation</span>
                </div>
              </div>

              <span className="project-arrow">↗</span>
            </article>

          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <p className="section-label">04 / EXPERIENCE</p>

          <div className="experience-card">
            <div>
              <p className="experience-year">2026</p>
            </div>

            <div>
              <p className="experience-type">SOFTWARE INTERN</p>

              <h2>CopterCode</h2>

              <p className="location">
                IIT Madras Research Park · Chennai
              </p>

              <p className="experience-description">
                Designed and developed core system modules as part of an
                engineering team. Contributed to the Internship Management
                System by translating administrative requirements into clean,
                functional workflows.
              </p>

              <ul>
                <li>Developed internship application and tracking workflows.</li>
                <li>Worked in a professional R&D environment.</li>
                <li>Focused on functional and organized digital solutions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="section" id="achievements">
          <p className="section-label">05 / ACHIEVEMENTS</p>

          <div className="achievement-grid">

            <div className="achievement-card">
              <span>01</span>
              <h3>Smart India Hackathon</h3>
              <p>
                Contributor to the Farm2Fork smart agriculture supply chain
                solution.
              </p>
            </div>

            <div className="achievement-card">
              <span>02</span>
              <h3>Celestia Presentation</h3>
              <p>
                Presented research on Lasers in Medical Technology at the
                Electra Club event.
              </p>
            </div>

            <div className="achievement-card">
              <span>03</span>
              <h3>Science Tech Fest</h3>
              <p>
                Composed and delivered the official anchoring script for the
                formal inauguration ceremony.
              </p>
            </div>

            <div className="achievement-card">
              <span>04</span>
              <h3>8.9 CGPA</h3>
              <p>
              First-semester academic performance.
              </p>
            </div>

          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="section" id="certifications">
          <p className="section-label">06 / CERTIFICATIONS</p>

          <div className="certifications">

            <div className="certificate">
              <span>01</span>
              <div>
                <h3>Python Programming Certification</h3>
                <p>Infosys Springboard</p>
              </div>
            </div>

            <div className="certificate">
              <span>02</span>
              <div>
                <h3>Power BI / Data Analytics</h3>
                <p>Microsoft</p>
              </div>
            </div>

            <div className="certificate">
              <span>03</span>
              <div>
                <h3>Cloud Architect & Cloud Foundations</h3>
                <p>ICT Academy / IEI</p>
              </div>
            </div>

            <div className="certificate">
              <span>04</span>
              <div>
                <h3>Artificial Intelligence Fundamentals</h3>
                <p>IBM SkillsBuild</p>
              </div>
            </div>

            <div className="certificate">
              <span>05</span>
              <div>
                <h3>Cyber Security and AI Skill Development</h3>
                <p>ICT Academy</p>
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <p className="section-label">07 / CONTACT</p>

          <p className="eyebrow">HAVE AN IDEA?</p>

          <h2>
            Let's build
            <br />
            <span>something useful.</span>
          </h2>

          <p className="contact-description">
            I'm always interested in learning, collaborating, and building
            meaningful technology.
          </p>

          <a
            href="mailto:shastika.balakumar@gmail.com"
            className="primary-button"
          >
            shastika.balakumar@gmail.com ↗
                  </a>

        <a
  href="/Resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="secondary-button"
>
  View My Resume ↗
</a>

        <div className="social-links">
            <a
              href="https://github.com/shastika-cse"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/shastika1412/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 SHASTIKA.B</span>
        <span>Built with React</span>
      </footer>
    </div>
  );
}

export default App;