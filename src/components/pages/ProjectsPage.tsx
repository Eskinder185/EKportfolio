import React, { useMemo, useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, Github, Eye, Filter, Zap, Target, Package } from 'lucide-react';
import ProjectCover from '../ui/ProjectCover';
import PageLayout from '../PageLayout';
import ScrollReveal from '../ScrollReveal';
import ArchitectureDiagramPlaceholder from '../ArchitectureDiagramPlaceholder';

type Category = 'all' | 'frontend' | 'backend' | 'cloud' | 'ai-ml';
type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  categories: Exclude<Category, 'all'>[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  featured?: boolean;
  /** Quantifiable impact metrics (e.g. "Reduced Latency by 40%") */
  impact: string[];
  /** Scope: what was in scope */
  scope: string;
  /** Product: what we built */
  product: string;
};

const base = import.meta.env.BASE_URL;
const img = (file: string) => `${base}images/${file}`;

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filters: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'ai-ml', label: 'AI/ML' },
  ];

  const projects: readonly Project[] = [
    {
      id: 'astrafocusnexus',
      title: 'AstraFocusNexus',
      description: 'AI-powered productivity dashboard for focus tracking, task management, and performance analytics.',
      image: img('astrafocus.jpg'),
      technologies: ['React', 'JavaScript', 'Productivity'],
      categories: ['frontend'],
      githubUrl: 'https://github.com/Eskinder185/AstraFocusNexus',
      liveUrl: 'https://eskinder185.github.io/AstraFocusNexus/',
      featured: true,
      impact: ['Improved task completion visibility', 'Centralized focus metrics in one dashboard'],
      scope: 'Single-page dashboard with focus tracking, task CRUD, and simple analytics.',
      product: 'React SPA with local state and responsive UI for productivity workflows.',
    },
    {
      id: 'professionaldev',
      title: 'ProfessionalDev',
      description: 'Career development platform for tracking skills, projects, and professional growth.',
      image: img('profdev.jpg'),
      technologies: ['React', 'JavaScript', 'Career Tools'],
      categories: ['frontend'],
      githubUrl: 'https://github.com/Eskinder185/professionaldev',
      liveUrl: 'https://eskinder185.github.io/professionaldev/',
      featured: true,
      impact: ['Unified view of skills and milestones', 'Structured career planning in one place'],
      scope: 'Skills, certifications, projects, and learning paths in a single dashboard.',
      product: 'React app with component-based architecture and responsive layout.',
    },
    {
      id: 'coderush',
      title: 'CodeRush',
      description: 'Interactive programming language training platform designed to improve coding speed and accuracy.',
      image: img('coderush.jpg'),
      technologies: ['JavaScript', 'Learning Platform'],
      categories: ['frontend'],
      githubUrl: 'https://github.com/Eskinder185/CodeRush',
      liveUrl: 'https://eskinder185.github.io/CodeRush/',
      featured: true,
      impact: ['Faster onboarding for syntax practice', 'Measurable typing speed and accuracy'],
      scope: 'Interactive drills and exercises for programming language syntax.',
      product: 'Web-based training platform with timer and progress tracking.',
    },
    {
      id: 'quizforge',
      title: 'QuizForge',
      description: 'Dynamic quiz generation platform for creating and sharing customizable quizzes.',
      image: img('quizforge.jpg'),
      technologies: ['JavaScript', 'Web App'],
      categories: ['frontend'],
      githubUrl: 'https://github.com/Eskinder185/QuizForge',
      liveUrl: 'https://eskinder185.github.io/QuizForge/',
      featured: true,
      impact: ['Custom quizzes without external tools', 'Shareable links for remote learning'],
      scope: 'Create, edit, and take quizzes with configurable questions and answers.',
      product: 'Client-side quiz builder and taker with local storage persistence.',
    },
    {
      id: 'johnnycloud-vpc-ec2',
      title: 'JohnnyCloud – VPC & EC2 Launchpad',
      description: 'AWS infrastructure baseline: VPC, subnets, routing, security groups, and EC2 bootstrap for app deployment.',
      image: img('johnnycloud-vpc-ec2.jpg'),
      technologies: ['AWS', 'VPC', 'EC2', 'IAM', 'CloudInit'],
      categories: ['cloud', 'backend'],
      githubUrl: 'https://github.com/Eskinder185/cloud-launchpad-vpc-ec2',
      impact: ['Reduced manual setup time by ~60%', 'Repeatable, secure baseline for new environments'],
      scope: 'VPC, public/private subnets, routing, security groups, EC2 with CloudInit.',
      product: 'IaC-ready launchpad for deploying apps into a secure AWS network.',
    },
    {
      id: 'pirate-intelligent-agent',
      title: 'Pirate Intelligent Agent (DQN)',
      description: 'Reinforcement learning agent solving a grid world using Deep Q-Learning; notebook + report.',
      image: img('pirate-intelligent-agent.jpg'),
      technologies: ['Python', 'RL', 'NumPy', 'Jupyter'],
      categories: ['ai-ml', 'backend'],
      githubUrl: 'https://github.com/Eskinder185/Pirate-Intelligent-Agent',
      impact: ['Convergence to optimal policy in <500 episodes', 'Reusable DQN pipeline for grid-world tasks'],
      scope: 'Grid-world environment, DQN agent, replay buffer, and training loop.',
      product: 'Jupyter notebook with trained agent and evaluation metrics.',
    },
    {
      id: 'animal-shelter-analytics',
      title: 'Animal Shelter Analytics (Dash)',
      description: 'Interactive dashboard with CRUD over MongoDB and charts for adoption trends and KPIs.',
      image: img('animal-shelter-analytics.jpg'),
      technologies: ['Python', 'Dash/Plotly', 'MongoDB'],
      categories: ['frontend', 'backend'],
      githubUrl: 'https://github.com/Eskinder185/animal-shelter-analytics',
      impact: ['Single dashboard for adoption KPIs', 'Faster data entry and trend visibility'],
      scope: 'CRUD for shelter data, charts, and filters over MongoDB.',
      product: 'Dash app with Plotly charts and MongoDB backend.',
    },
    {
      id: 'android-inventory-manager',
      title: 'Android Inventory Manager',
      description: 'Mobile app with secure login, real-time stock levels, CRUD, and low-stock notifications.',
      image: img('android-inventory-manager.jpg'),
      technologies: ['Java', 'Android', 'SQLite'],
      categories: ['frontend', 'backend'],
      githubUrl: 'https://github.com/Eskinder185/android-inventory-manager',
      impact: ['Reduced stock-out incidents via alerts', 'On-device inventory without cloud dependency'],
      scope: 'Auth, inventory CRUD, low-stock thresholds, and local SQLite storage.',
      product: 'Android app with SQLite and notification support.',
    },
    {
      id: 'travel-portal-express',
      title: 'Travel Portal (Node/Express)',
      description: 'Class project with views, routes, and controllers for a travel booking portal.',
      image: img('travel-portal-express.jpg'),
      technologies: ['Node.js', 'Express', 'JavaScript'],
      categories: ['backend', 'frontend'],
      githubUrl: 'https://github.com/Eskinder185/travel-portal-express',
      impact: ['Structured MVC for maintainability', 'Clear separation of routes and views'],
      scope: 'Routes, controllers, and server-rendered views for travel booking flows.',
      product: 'Express app with server-side rendering and REST-style structure.',
    },
    {
      id: 'weather',
      title: 'Weather App (Python)',
      description: 'CLI/mini-service for fetching and parsing weather data; clean functions and error handling.',
      image: img('weather-app-python.jpg'),
      technologies: ['Python'],
      categories: ['backend'],
      githubUrl: 'https://github.com/Eskinder185/weather',
      impact: ['Reliable parsing and error handling', 'Reusable CLI for quick weather checks'],
      scope: 'Fetch, parse, and display weather data with clear error paths.',
      product: 'Python CLI with modular functions and tests.',
    },
    {
      id: 'java-security-hardening-artemis',
      title: 'Java Security Hardening – Artemis',
      description: 'TLS configuration, SHA-256 hashing, and OWASP-aligned static analysis to reduce attack surface.',
      image: img('java-security-hardening-artemis.jpg'),
      technologies: ['Java', 'Security', 'TLS', 'OWASP'],
      categories: ['backend'],
      githubUrl: 'https://github.com/Eskinder185/java-security-hardening-artemis',
      impact: ['Reduced attack surface via TLS and hashing', 'OWASP-aligned findings addressed'],
      scope: 'TLS config, secure hashing, and static analysis remediation.',
      product: 'Hardened Java application with documented security changes.',
    },
    {
      id: 'cpp-data-structures-portfolio',
      title: 'C++ Data Structures Portfolio',
      description: 'Course planner (map for fast lookup) and bid manager (linked list) with clean abstractions.',
      image: img('cpp-data-structures-portfolio.jpg'),
      technologies: ['C++', 'Algorithms', 'DSA'],
      categories: ['backend'],
      githubUrl: 'https://github.com/Eskinder185/cpp-data-structures-portfolio',
      impact: ['O(1) lookups for course planner', 'Clear separation of data structures and logic'],
      scope: 'Map-based planner and linked-list bid manager with tests.',
      product: 'C++ project with reusable DSA components.',
    },
    {
      id: 'java-contact-service-tests',
      title: 'Java Contact Service + Tests',
      description: 'Unit tests and reflections on testing strategy (JUnit + TDD) for contact service.',
      image: img('java-contact-service-tests.jpg'),
      technologies: ['Java', 'JUnit', 'TDD'],
      categories: ['backend'],
      githubUrl: 'https://github.com/Eskinder185/java-contact-service-tests',
      impact: ['High coverage and regression safety', 'Documented TDD approach'],
      scope: 'Contact service API and comprehensive JUnit tests.',
      product: 'Java service with TDD-style test suite.',
    },
    {
      id: 'aws-dlp-scanner',
      title: 'AWS DLP Scanner',
      description: 'Prototype for scanning data in S3 for sensitive info (PII) and reporting.',
      image: img('aws-dlp-scanner.jpg'),
      technologies: ['AWS', 'Python', 'S3'],
      categories: ['cloud', 'backend'],
      githubUrl: 'https://github.com/Eskinder185/aws-dlp-scanner',
      impact: ['Automated PII detection in S3 buckets', 'Scalable scan pattern for large object sets'],
      scope: 'S3 listing, content scanning for PII patterns, and report generation.',
      product: 'Python script + AWS integration for DLP reporting.',
    },
    {
      id: 'driverpass-system-design',
      title: 'DriverPass System Design',
      description: 'Systems analysis & UML artifacts for a multi-role driving lessons platform.',
      image: img('driverpass-system-design.jpg'),
      technologies: ['UML', 'Requirements', 'Design'],
      categories: ['backend'],
      githubUrl: 'https://github.com/Eskinder185/driverpass-system-design',
      impact: ['Clear requirements and component boundaries', 'UML artifacts for handoff'],
      scope: 'Requirements, use cases, and UML diagrams for DriverPass.',
      product: 'Document set with diagrams and design rationale.',
    },
    {
      id: 'coffee-mug-3d-scene',
      title: 'Coffee Mug 3D Scene (OpenGL)',
      description: 'Interactive 3D scene with lighting, shading, and WASD + mouse camera controls.',
      image: img('coffee-mug-3d-scene.jpg'),
      technologies: ['C++', 'OpenGL', '3D'],
      categories: ['frontend'],
      githubUrl: 'https://github.com/Eskinder185/coffee-mug-3d-scene',
      impact: ['Real-time 3D rendering with custom pipeline', 'Reusable camera and lighting setup'],
      scope: 'OpenGL scene with geometry, lighting, and interactive camera.',
      product: 'C++ OpenGL application with configurable 3D scene.',
    },
  ];

  const handleExternalLink = (url?: string | null) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.categories.includes(activeFilter as Exclude<Category, 'all'>));
  }, [activeFilter, projects]);

  return (
    <PageLayout maxWidth="wide">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Linear <span className="gradient-text">Storytelling</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each project: Impact + Scope + Product. Quantifiable outcomes and 3D architecture placeholders.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-wrap gap-3 mb-10">
          <Filter className="w-5 h-5 text-gray-400 self-center" />
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f.id
                  ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-white/5 border border-white/20 text-gray-300 hover:bg-white/10 hover:border-violet-500/50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="space-y-16">
        {filteredProjects.map((project, index) => (
          <ScrollReveal key={project.id} staggerIndex={index}>
            <article className="rounded-2xl glass-panel border border-white/10 overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Visual: cover + diagram placeholder */}
                <div className="lg:col-span-2 relative">
                  <div className="relative aspect-video lg:aspect-auto lg:min-h-[280px] overflow-hidden">
                    <ProjectCover
                      id={project.id}
                      title={project.title}
                      cover={project.image}
                      className="w-full h-full object-cover"
                    />
                    {project.featured && (
                      <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <ArchitectureDiagramPlaceholder label="3D architecture (Three.js)" />
                  </div>
                </div>

                {/* Story: Impact + Scope + Product */}
                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col">
                  <h2 className="text-2xl font-bold mb-6">{project.title}</h2>

                  <div className="space-y-6 flex-1">
                    <section>
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-violet-300 uppercase tracking-wider mb-2">
                        <Zap className="w-4 h-4" /> Impact
                      </h3>
                      <ul className="space-y-1">
                        {project.impact.map((m, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-emerald-400 mt-0.5">•</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                        <Target className="w-4 h-4" /> Scope
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.scope}</p>
                    </section>

                    <section>
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-amber-300/90 uppercase tracking-wider mb-2">
                        <Package className="w-4 h-4" /> Product
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.product}</p>
                    </section>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="px-2 py-1 text-xs bg-white/5 border-white/20 text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="px-2 py-1 text-xs bg-violet-500/20 border-violet-500/50 text-violet-300">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3 mt-6">
                    {project.githubUrl && (
                      <Button
                        onClick={() => handleExternalLink(project.githubUrl)}
                        size="sm"
                        variant="secondary"
                        className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        onClick={() => handleExternalLink(project.liveUrl)}
                        size="sm"
                        className="bg-violet-500 hover:bg-violet-600 text-white"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </PageLayout>
  );
};

export default ProjectsPage;
