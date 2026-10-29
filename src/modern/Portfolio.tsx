import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  Github,
  Menu,
  Moon,
  Search,
  Shield,
  Sun,
  X,
} from "lucide-react";
import { profile, profileEmailHref } from "../data/profile";
import {
  categories,
  filterProjects,
  projects,
  skills,
  type Project,
} from "./projects";
import "./portfolio.css";

const About = lazy(() => import("../components/pages/AboutPage"));
const Experience = lazy(() => import("../components/pages/ExperiencePage"));
const CaseStudies = lazy(() => import("../components/pages/CaseStudiesPage"));
const Books = lazy(() => import("../components/pages/BooksPage"));
const nav = [
  ["home", "Overview"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["journey", "Journey"],
  ["contact", "Connect"],
];
const readRoute = () => window.location.hash.slice(1) || "home";
function initialTheme(): "dark" | "light" {
  try {
    const value = localStorage.getItem("ek-theme");
    if (value === "light" || value === "dark") return value;
  } catch {
    /* Storage is optional. */
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`project-visual visual-${project.visual}`}
      aria-hidden="true"
    >
      <div className="visual-label">
        <span /> {project.category} / {project.id}
      </div>
      {project.visual === "code" ? (
        <div className="code-art">
          <span className="code-muted">01&nbsp; // practice with purpose</span>
          <br />
          <span className="code-violet">const</span> build = () =&gt; {"{"}
          <br />
          &nbsp; learn();
          <br />
          &nbsp; <span className="code-cyan">return</span> progress;
          <br />
          {"}"};<span className="caret" />
        </div>
      ) : project.visual === "cloud" ? (
        <div className="cloud-art">
          <span>IDENTITY</span>
          <i />
          <Cloud size={64} />
          <i />
          <span>OBSERVABILITY</span>
        </div>
      ) : project.visual === "hive" ? (
        <div className="hive-art">
          {Array.from({ length: 7 }, (_, i) => (
            <span key={i}>{i === 3 ? <Shield size={27} /> : ""}</span>
          ))}
        </div>
      ) : (
        <div className="dashboard-art">
          <div className="art-sidebar" />
          <div className="art-chart">
            {[42, 68, 53, 87, 65, 96, 79].map((h, i) => (
              <span key={i} style={{ height: h + "%" }} />
            ))}
          </div>
          <div className="art-line" />
          <div className="art-line short" />
        </div>
      )}
      <span className="visual-caption">
        {project.stack.slice(0, 3).join(" / ")}
      </span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="work-card reveal">
      <div className="visual-link">
        <ProjectVisual project={project} />
      </div>
      <div className="card-heading">
        <span className="mono">
          {String(index + 1).padStart(2, "0")} / {project.category}
        </span>
        <ArrowUpRight size={19} aria-hidden="true" />
      </div>
      <h3>
        <a href={`#project/${project.id}`}>{project.name}</a>
      </h3>
      <p>{project.summary}</p>
      <div className="tag-row">
        {project.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <div className="project-actions">
        <a href={`#project/${project.id}`}>
          Explore project <ArrowUpRight size={15} />
        </a>
        <a href={project.repo} aria-label={`${project.name} source on GitHub`}>
          <Github size={18} />
        </a>
      </div>
    </article>
  );
}

function Gallery() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = filterProjects(category, query);
  return (
    <section className="section" aria-labelledby="projects-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">01 / SELECTED WORK</span>
          <h1 id="projects-title">Ideas, made tangible.</h1>
          <p>
            Explore the code, the decisions and the learning behind each
            project.
          </p>
        </div>
      </div>
      <div className="gallery-toolbar">
        <div className="filter-row" role="group" aria-label="Project category">
          {categories.map((c) => (
            <button
              key={c}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            placeholder="Search projects or tools"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <p className="result-count mono" role="status">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>
      <div className="project-grid">
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          <h2>No projects match that search.</h2>
          <button
            className="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Clear search and filters
          </button>
        </div>
      )}
      <p className="verification-note">
        Demo frontends checked October 29, 2026. Availability can change;
        authenticated features and cloud services have separate verification
        limits.
      </p>
    </section>
  );
}

function ProjectDetail({ id }: { id: string }) {
  const p = projects.find((x) => x.id === id);
  if (!p)
    return (
      <section className="section">
        <h1>Project not found</h1>
        <a href="#projects">Browse projects</a>
      </section>
    );
  return (
    <article className="section project-detail">
      <a className="back-link" href="#projects">
        <ArrowLeft size={17} /> All projects
      </a>
      <span className="eyebrow">PROJECT / {p.category}</span>
      <h1>{p.name}</h1>
      <p className="detail-summary">{p.summary}</p>
      <div className="tag-row">
        {p.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <ProjectVisual project={p} />
      <div className="detail-columns">
        <section>
          <h2>Inside the project</h2>
          <ul className="feature-list">
            {p.features.map((f) => (
              <li key={f}>
                <Check size={18} aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </section>
        <aside>
          <h2>Explore the work</h2>
          <a className="button primary" href={p.repo}>
            <Github size={18} /> View repository <ArrowUpRight size={16} />
          </a>
          {p.demo ? (
            <a className="button" href={p.demo}>
              Open public frontend <ArrowUpRight size={16} />
            </a>
          ) : (
            <p className="demo-unavailable">Live demo unavailable</p>
          )}
        </aside>
      </div>
      <section className="source-note">
        <h2>Source & availability</h2>
        <p>{p.note}</p>
        <p>
          Repository and frontend links reviewed October 29, 2026. Visuals above
          are interface illustrations, not product screenshots.
        </p>
      </section>
    </article>
  );
}

function Skills() {
  const [selected, setSelected] = useState(0);
  const skill = skills[selected];
  const project = projects.find((p) => p.id === skill.project)!;
  return (
    <section className="section">
      <span className="eyebrow">02 / ENGINEERING TOOLKIT</span>
      <h1>Connecting the layers.</h1>
      <p className="section-intro">
        From the interface to the infrastructure. Select a discipline to explore
        the tools and related work.
      </p>
      <div className="skills-layout">
        <div
          className="skill-map"
          role="group"
          aria-label="Engineering disciplines"
        >
          {skills.map((s, i) => (
            <button
              key={s.name}
              aria-pressed={selected === i}
              className={selected === i ? "selected" : ""}
              onClick={() => setSelected(i)}
            >
              <span className="mono">0{i + 1}</span>
              {s.name}
              <ArrowUpRight size={18} />
            </button>
          ))}
        </div>
        <div className="skill-detail" aria-live="polite">
          <Code2 size={40} aria-hidden="true" />
          <span className="eyebrow">
            TOOLKIT / {String(selected + 1).padStart(2, "0")}
          </span>
          <h2>{skill.name}</h2>
          <p>{skill.description}</p>
          <p className="skill-tools">{skill.tools}</p>
          <a href={`#project/${project.id}`}>
            Explore related work: {project.name} <ArrowUpRight size={17} />
          </a>
          <small>
            Tools drawn from my existing profile and repositories. This is a map
            of practice and learning, not a proficiency score.
          </small>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const milestones = [
    [
      "2025 / JAN–MAY",
      "Full-stack foundations",
      "Full-stack developer training at Springboard.",
    ],
    [
      "2025 / AUG–OCT",
      "Building in the cloud",
      "AWS re/Start training at Per Scholas.",
    ],
    [
      "2025 / SEP",
      "Computer science foundation",
      "B.S. Computer Science at Southern New Hampshire University, following earlier study at Georgia State.",
    ],
    [
      "2025 / NOV–PRESENT",
      "Deepening the security focus",
      "M.S. Cybersecurity and Information Assurance at Western Governors University, listed as in progress.",
    ],
    [
      "2026 / MAR–JUN",
      "Infrastructure in practice",
      "AWS Information Infrastructure Pre-Apprenticeship, AWS / YUPRO, Butts County, Georgia.",
    ],
  ];
  return (
    <section className="section">
      <span className="eyebrow">03 / CONTINUOUS LEARNING</span>
      <h1>A foundation that keeps growing.</h1>
      <p className="section-intro">
        A learning timeline drawn from the education section of my existing
        portfolio.
      </p>
      <ol className="timeline">
        {milestones.map(([date, title, body]) => (
          <li key={title} className="reveal">
            <span className="mono">{date}</span>
            <div>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </li>
        ))}
      </ol>
      <a className="text-link" href="#experience">
        Read the existing experience record <ArrowUpRight size={17} />
      </a>
    </section>
  );
}

function Connect() {
  return (
    <section className="section connect-section">
      <span className="eyebrow">04 / LET’S CONNECT</span>
      <h1>
        Good work starts
        <br />
        with a conversation.
      </h1>
      <p className="section-intro">
        Interested in cloud infrastructure, security or thoughtful software?
        Let’s compare notes and build something useful.
      </p>
      <a className="email-link" href={profileEmailHref}>
        {profile.email}
        <ArrowUpRight size={28} />
      </a>
      <div className="connect-links">
        <a href={profile.githubUrl}>
          GitHub <ArrowUpRight size={17} />
        </a>
        <a href={profile.linkedinUrl}>
          LinkedIn <ArrowUpRight size={17} />
        </a>
        <a href={`${profileEmailHref}?subject=Resume%20request`}>
          Request résumé <ArrowUpRight size={17} />
        </a>
      </div>
      <p className="mono">
        {profile.location} / {profile.workPreference}
      </p>
    </section>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" /> SOFTWARE / CLOUD / SECURITY
          </span>
          <h1>
            Thoughtful code.
            <br />
            Resilient systems.
            <br />
            <em>Purposeful work.</em>
          </h1>
          <p>
            I’m {profile.firstName}, a cloud and security-minded software
            engineer in Atlanta. I connect full-stack development with the
            infrastructure that makes it run.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Explore my work <ArrowUpRight size={18} />
            </a>
            <a className="button" href="#contact">
              Let’s connect
            </a>
          </div>
          <div className="hero-footnote mono">
            <span>BASED IN ATLANTA, GA</span>
            <span>ALWAYS LEARNING ↗</span>
          </div>
        </div>
        <div
          className="hero-system"
          aria-label="Software, infrastructure and security are connected"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="system-core">
            <img
              src={`${import.meta.env.BASE_URL}eskinder.jpg`}
              width="138"
              height="138"
              alt="Eskinder Kassahun"
            />
            <span>ESKINDER KASSAHUN</span>
            <small>ENGINEER & EXPLORER</small>
          </div>
          <div className="system-node node-code">
            <Code2 size={23} />
            <span>Software</span>
          </div>
          <div className="system-node node-cloud">
            <Cloud size={23} />
            <span>Cloud</span>
          </div>
          <div className="system-node node-shield">
            <Shield size={23} />
            <span>Security</span>
          </div>
          <div className="system-caption mono">
            <span className="status-dot" /> CONNECTING THE STACK
          </div>
        </div>
      </section>
      <div className="discipline-strip mono">
        <span>REACT & TYPESCRIPT</span>
        <span>AWS INFRASTRUCTURE</span>
        <span>SECURITY BY DESIGN</span>
        <span>AUTOMATION</span>
      </div>
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / SELECTED WORK</span>
            <h2>
              Built to explore.
              <br />
              Made to be useful.
            </h2>
          </div>
          <a className="text-link" href="#projects">
            All projects <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="project-grid home-grid">
          {projects.slice(0, 3).map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>
      <section className="about-band section reveal">
        <span className="eyebrow">THE WAY I WORK</span>
        <h2>Curiosity at every layer.</h2>
        <p>
          My work spans browser interfaces, cloud services and security-focused
          systems. I learn by building, reading the source and making the next
          iteration clearer.
        </p>
        <a className="text-link" href="#skills">
          Explore my toolkit <ArrowUpRight size={18} />
        </a>
      </section>
      <section className="home-contact section">
        <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
        <h2>Let’s build what’s next.</h2>
        <a className="button primary" href="#contact">
          Start a conversation <ArrowUpRight size={18} />
        </a>
      </section>
    </>
  );
}

export default function Portfolio() {
  const [route, setRoute] = useState(readRoute);
  const [theme, setTheme] = useState(initialTheme);
  const [menu, setMenu] = useState(false);
  const main = useRef<HTMLElement>(null);
  const first = useRef(true);
  useEffect(() => {
    const handler = () => setRoute(readRoute());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem("ek-theme", theme);
    } catch {}
  }, [theme]);
  useEffect(() => {
    setMenu(false);
    document.title = `${route.startsWith("project/") ? projects.find((p) => p.id === route.slice(8))?.name || "Project" : route === "home" ? "Software, Cloud & Security" : route[0].toUpperCase() + route.slice(1)} — ${profile.name}`;
    if (first.current) {
      first.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    main.current?.focus();
  }, [route]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.05 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [route]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  let page;
  if (route === "home") page = <Home />;
  else if (route === "projects") page = <Gallery />;
  else if (route.startsWith("project/"))
    page = <ProjectDetail id={route.slice(8)} />;
  else if (route === "skills") page = <Skills />;
  else if (route === "journey") page = <Journey />;
  else if (route === "contact") page = <Connect />;
  else if (["about", "experience", "case-studies", "books"].includes(route))
    page = (
      <div className="legacy-content">
        <Suspense fallback={<p role="status">Loading…</p>}>
          {route === "about" ? (
            <About />
          ) : route === "experience" ? (
            <Experience
              onNavigate={(p) => {
                window.location.hash = p;
              }}
            />
          ) : route === "books" ? (
            <Books />
          ) : (
            <CaseStudies />
          )}
        </Suspense>
      </div>
    );
  else
    page = (
      <section className="section">
        <h1>Page not found</h1>
        <a href="#home">Return to overview</a>
      </section>
    );
  return (
    <div className="modern-site">
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          main.current?.focus();
        }}
      >
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#home">
          ek<span>.</span>
          <small>ESKINDER KASSAHUN</small>
        </a>
        <nav
          id="main-navigation"
          className={menu ? "main-nav open" : "main-nav"}
          aria-label="Main navigation"
        >
          {nav.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={
                route === id ||
                (id === "projects" && route.startsWith("project/"))
                  ? "page"
                  : undefined
              }
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-tools">
          <button
            className="icon-button"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            className="icon-button github-header"
            href={profile.githubUrl}
            aria-label="Eskinder on GitHub"
          >
            <Github size={20} />
          </a>
          <button
            className="icon-button menu-toggle"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            aria-controls="main-navigation"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main-content" ref={main} tabIndex={-1} key={route}>
        {page}
      </main>
      <footer className="site-footer">
        <a className="wordmark" href="#home">
          ek<span>.</span>
        </a>
        <p>Built with curiosity. Improved through practice.</p>
        <div>
          <a href="#about">About</a>
          <a href="#case-studies">Case studies</a>
          <a href="#books">Reading</a>
          <a href={profile.githubUrl}>
            GitHub <ArrowUpRight size={14} />
          </a>
        </div>
        <span className="mono">
          © {new Date().getFullYear()} {profile.name}
        </span>
      </footer>
    </div>
  );
}
