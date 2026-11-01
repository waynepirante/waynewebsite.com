
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  Code2,
  Palette,
  Database,
  Laptop,
  ExternalLink,
  Menu,
  X,
  Download,
  Sparkles,
} from "lucide-react";
import "./App.css";

const skills = [
  { name: "HTML", level: "Web Structure", icon: Code2 },
  { name: "CSS", level: "Web Design", icon: Palette },
  { name: "JavaScript", level: "Programming", icon: Code2 },
  { name: "React", level: "Frontend Development", icon: Laptop },
  { name: "PHP", level: "Backend Development", icon: Code2 },
  { name: "MySQL", level: "Database Management", icon: Database },
  { name: "Supabase", level: "Backend Services", icon: Database },
  { name: "UI/UX Design", level: "Creative Design", icon: Palette },
];

const projects = [
  {
    number: "01",
    title: "LearnSpace",
    category: "E-Learning Platform",
    description:
      "An online learning platform designed to help students explore lessons, take quizzes, and monitor their learning progress.",
    technologies: ["React", "Supabase", "CSS"],
    icon: "📚",
    color: "project-purple",
  },
  {
    number: "02",
    title: "School Services System",
    category: "Systems Integration",
    description:
      "An integrated school management concept connecting student enrollment, library services, and notifications.",
    technologies: ["PHP", "MySQL", "RabbitMQ"],
    icon: "🎓",
    color: "project-blue",
  },
  {
    number: "03",
    title: "Bible Study Scheduler",
    category: "Web Application",
    description:
      "A scheduling system concept for organizing Bible study sessions and campus ministry activities.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    icon: "📖",
    color: "project-orange",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Frontend Developer", "Web Designer", "IT Student"];

  useEffect(() => {
    let character = 0;
    let deleting = false;
    let timeout;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (!deleting) {
        character++;
        setTypedText(currentRole.substring(0, character));

        if (character === currentRole.length) {
          deleting = true;
          timeout = setTimeout(type, 1500);
          return;
        }
      } else {
        character--;
        setTypedText(currentRole.substring(0, character));

        if (character === 0) {
          deleting = false;
          setRoleIndex((previous) => (previous + 1) % roles.length);
          return;
        }
      }

      timeout = setTimeout(type, deleting ? 45 : 95);
    };

    timeout = setTimeout(type, 400);

    return () => clearTimeout(timeout);
  }, [roleIndex]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    event.currentTarget.style.setProperty("--mouse-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--mouse-y", `${y * 100}%`);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="portfolio" onPointerMove={handleMouseMove}>
      <div className="mouse-glow" />
      <div className="background-grid" />
      <div className="ambient-orb orb-one" />
      <div className="ambient-orb orb-two" />

      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-symbol">W.</span>
          <span>PORTFOLIO<span className="brand-dot">.</span></span>
        </a>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's Talk <ArrowRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              WELCOME TO MY DIGITAL SPACE
            </div>

            <p className="hero-intro">HELLO, I'M</p>
            <h1>
              John Wayne
              <br />
              <span className="gradient-text">Pirante.</span>
            </h1>

            <div className="role-line">
              <span>I'm a </span>
              <span className="typing-text">{typedText}</span>
              <span className="typing-cursor">|</span>
            </div>

            <p className="hero-description">
              I enjoy creating modern websites and digital experiences.
              I turn ideas into clean, functional, and creative solutions
              through technology and design.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button-primary">
                Explore My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="button-outline">
                Contact Me <Mail size={17} />
              </a>
            </div>

            <div className="hero-socials">
              <span>CONNECT WITH ME</span>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />

            <div className="profile-card tilt-card">
              <div className="profile-card-top">
                <span>MY PROFILE</span>
                <Sparkles size={17} />
              </div>

              <div className="profile-image-wrap">
                {/* Replace this placeholder with your profile photo */}
                <div className="profile-placeholder">
                  <span>JW</span>
                </div>
                <div className="profile-badge">
                  <Code2 size={20} />
                </div>
              </div>

              <h3>John Wayne Pirante</h3>
              <p>IT Student & Aspiring Developer</p>

              <div className="profile-divider" />

              <div className="profile-location">
                <MapPin size={15} />
                <span>Philippines</span>
              </div>

              <div className="profile-card-footer">
                <span>CREATIVE MINDSET</span>
                <span className="footer-status">● ACTIVE</span>
              </div>
            </div>

            <div className="floating-tag tag-code">
              <Code2 size={17} />
              <span>Clean Code</span>
            </div>
            <div className="floating-tag tag-design">
              <Palette size={17} />
              <span>Creative Design</span>
            </div>
            <div className="floating-star">✦</div>
          </div>

          <a href="#about" className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={17} />
          </a>
        </section>

        <section className="about-section section-container" id="about">
          <SectionHeading
            label="GET TO KNOW ME"
            title="About Me"
            description="A little introduction about who I am and what I do."
          />

          <div className="about-grid">
            <div className="about-main glass-card">
              <span className="card-number">01 / ABOUT</span>
              <h3>
                Building ideas into
                <span className="gradient-text"> digital experiences.</span>
              </h3>
              <p>
                Hello! I'm John Wayne Pirante, an Information Technology
                student with an interest in web development, programming,
                and creative design.
              </p>
              <p>
                I enjoy learning new technologies, solving problems, and
                building projects that combine functionality with an
                enjoyable user experience.
              </p>
              <p>
                My goal is to continue improving my skills and become a
                professional developer who creates useful digital solutions.
              </p>
              <a href="#contact" className="inline-link">
                Let's work together <ArrowRight size={17} />
              </a>
            </div>

            <div className="about-side">
              <div className="glass-card about-info-card">
                <div className="about-icon"><Laptop size={23} /></div>
                <h4>What I Do</h4>
                <p>Web development, frontend design, and system development.</p>
              </div>
              <div className="glass-card about-info-card">
                <div className="about-icon"><Sparkles size={23} /></div>
                <h4>My Goal</h4>
                <p>To create meaningful projects and grow as an IT professional.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section-container" id="skills">
          <SectionHeading
            label="MY EXPERTISE"
            title="Skills & Technologies"
            description="Technologies and tools I am learning and working with."
          />

          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <div className="skill-card glass-card" key={skill.name}>
                  <div className="skill-icon"><Icon size={24} /></div>
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                  </div>
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="projects-section section-container" id="projects">
          <SectionHeading
            label="SELECTED WORK"
            title="Featured Projects"
            description="Some of my academic and personal development projects."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card glass-card ${project.color}`}
                key={project.number}
              >
                <div className="project-top">
                  <span className="project-number">{project.number} / PROJECT</span>
                  <span className="project-icon">{project.icon}</span>
                </div>

                <div className="project-visual">
                  <span>{project.icon}</span>
                  <div className="visual-ring" />
                  <div className="visual-ring ring-two" />
                </div>

                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="technology-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a href="#contact" className="project-link">
                  Discuss this project <ExternalLink size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-container" id="contact">
          <div className="contact-card">
            <div className="contact-decoration decoration-one" />
            <div className="contact-decoration decoration-two" />

            <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
            <h2>
              Let's create something
              <br />
              <span className="gradient-text">amazing together.</span>
            </h2>
            <p>
              Have an idea, opportunity, or project you'd like to discuss?
              I'd be happy to hear from you.
            </p>
            <a
              href="mailto:your-email@example.com?subject=Portfolio%20Inquiry"
              className="button-primary"
            >
              Get In Touch <Mail size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer section-container">
        <a href="#home" className="brand">
          <span className="brand-symbol">W.</span>
          <span>PORTFOLIO<span className="brand-dot">.</span></span>
        </a>
        <p>Designed & built with passion by John Wayne Pirante.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  );
}

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default App;
