export type ProjectPlaceholderType =
  | 'architecture'
  | 'dashboard'
  | 'screenshot'
  | 'report'
  | 'certificate'
  | 'workflow'
  | 'before-after'
  | 'code-output';

export interface ProjectVisualPlaceholder {
  title: string;
  description: string;
  type: ProjectPlaceholderType;
  image: string | null;
  alt: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  summary: string[];
  technologies: string[];
  competencies?: string[];
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  visualPlaceholder?: ProjectVisualPlaceholder;
  actionLabel?: string;
  foundationFor?: string;
}

export const featuredSecurityProjects: PortfolioProject[] = [
  {
    id: 'enterprise-soc-siem-incident-response-lab',
    title: 'Enterprise SOC, SIEM & Incident Response Lab',
    summary: [
      'Built a virtualized security operations environment across Windows and Linux systems for centralized monitoring, threat detection, alert triage, investigation, and incident response.',
      'Created detection scenarios covering authentication failures, account lockouts, privileged-group changes, network scanning, SSH activity, and file-integrity events. Used a structured incident-response process for validation, correlation, investigation, containment, remediation, and lessons learned.',
    ],
    technologies: [
      'Proxmox',
      'Wazuh',
      'Microsoft Sentinel',
      'KQL',
      'Splunk',
      'Sysmon',
      'Suricata',
      'Wireshark',
      'Nmap',
      'Python',
      'Windows',
      'Linux',
      'MITRE ATT&CK',
    ],
    visualPlaceholder: {
      title: 'SOC Architecture / SIEM Dashboard',
      description: 'Temporary location for a verified SOC architecture diagram or SIEM dashboard capture.',
      type: 'dashboard',
      image: null,
      alt: 'Verified SOC architecture diagram or SIEM dashboard from the incident-response lab',
    },
    actionLabel: 'View Related Case Studies',
  },
  {
    id: 'risk-based-vulnerability-management-nist-grc-lab',
    title: 'Risk-Based Vulnerability Management & NIST GRC Lab',
    summary: [
      'Performed vulnerability assessments, analyzed CVE and CVSS context, prioritized findings by risk, tracked remediation, and used verification scans to review corrective actions.',
      'Mapped findings and audit-readiness documentation to NIST CSF 2.0 to connect technical remediation with governance and risk reporting.',
    ],
    technologies: ['Greenbone/OpenVAS', 'Nmap', 'CVE', 'CVSS', 'Windows', 'Linux', 'Docker', 'NIST CSF 2.0'],
    visualPlaceholder: {
      title: 'Vulnerability Management Evidence',
      description: 'Temporary location for verified scan evidence, remediation tracking, or risk documentation.',
      type: 'report',
      image: null,
      alt: 'Verified vulnerability scan, remediation tracker, or risk report from the vulnerability-management lab',
    },
    actionLabel: 'View Related Case Studies',
  },
  {
    id: 'hybrid-iam-aws-cloud-security-zero-trust-lab',
    title: 'Hybrid IAM, AWS Cloud Security & Zero Trust Access Lab',
    summary: [
      'Applied RBAC, least privilege, MFA, joiner/mover/leaver workflows, and access reviews across hybrid identity scenarios. Used CloudTrail monitoring and Wazuh identity events to support access oversight and investigation.',
      'Modeled Zero Trust principles through explicit access decisions, identity verification, scoped permissions, and repeatable automation.',
    ],
    technologies: ['AWS IAM', 'Amazon Cognito', 'AWS CloudTrail', 'Wazuh', 'RBAC', 'MFA', 'Terraform', 'Python', 'PowerShell'],
    visualPlaceholder: {
      title: 'IAM / Zero Trust Architecture',
      description: 'Temporary location for a verified hybrid identity and Zero Trust architecture diagram.',
      type: 'architecture',
      image: null,
      alt: 'Verified hybrid IAM and Zero Trust architecture diagram',
    },
    actionLabel: 'View Related Case Studies',
  },
  {
    id: 'secure-enterprise-network-aws-vpc-lab',
    title: 'Secure Enterprise Network & AWS VPC Lab',
    summary: [
      'Built a segmented Proxmox network with management, server, workstation, security, and testing zones. Configured pfSense firewall rules, NAT, DNS/DHCP, and Wazuh/Suricata monitoring across the lab environment.',
      'Extended the network design into AWS using VPC public and private subnets, security groups, NACLs, and Terraform-based infrastructure configuration.',
    ],
    technologies: ['Proxmox', 'pfSense', 'NAT', 'DNS', 'DHCP', 'Wazuh', 'Suricata', 'AWS VPC', 'Security Groups', 'NACLs', 'Terraform'],
    visualPlaceholder: {
      title: 'Network Segmentation & AWS VPC Diagram',
      description: 'Temporary location for a verified segmentation map and AWS VPC architecture diagram.',
      type: 'architecture',
      image: null,
      alt: 'Verified network segmentation map or AWS VPC architecture diagram',
    },
    actionLabel: 'View Related Case Studies',
  },
];

export const infrastructureFoundationProjects: PortfolioProject[] = [
  {
    id: 'hybrid-cloud-infrastructure-security-home-lab',
    title: 'Hybrid Cloud Infrastructure & Security Home Lab',
    summary: [
      'Built and continuously developed a Proxmox-based Windows/Linux environment supporting networking, containers, monitoring, remote access, security testing, vulnerability management, IAM, and incident-response exercises.',
    ],
    technologies: ['Proxmox VE', 'Windows', 'Linux', 'Docker', 'pfSense', 'Wazuh', 'Suricata', 'Tailscale', 'TCP/IP'],
    status: 'Ongoing',
    foundationFor: 'Foundation for the four featured cybersecurity and infrastructure labs above',
    githubUrl: 'https://github.com/Eskinder185/Hybrid-Cloud-Security-Lab',
    visualPlaceholder: {
      title: 'Home Lab Architecture Diagram',
      description: 'Temporary location for the verified architecture that connects the home lab to its security exercises.',
      type: 'architecture',
      image: null,
      alt: 'Verified home lab architecture connecting infrastructure and security exercises',
    },
    actionLabel: 'View Project',
  },
];

export const communityTechnologyProjects: PortfolioProject[] = [
  {
    id: 'ecaa-digital-platform',
    title: 'ECAA Digital Platform — Bilingual Community Website Redesign',
    summary: [
      'Redesigned a bilingual community website as a responsive React and Vite platform with accessible navigation, clearer information architecture, content migration, and Decap CMS integration.',
      'The work centers community needs through responsive UI/UX, maintainable content workflows, and community-centered product design.',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Decap CMS', 'JSON', 'Git', 'GitHub', 'GitHub Pages'],
    competencies: [
      'Frontend development',
      'Responsive design',
      'Accessibility',
      'UI/UX',
      'Information architecture',
      'Content migration',
      'CMS integration',
      'Community-centered product design',
    ],
    visualPlaceholder: {
      title: 'ECAA Website Before / After',
      description: 'Temporary location for verified before-and-after views of the bilingual website redesign.',
      type: 'before-after',
      image: null,
      alt: 'Verified before-and-after views of the ECAA bilingual website redesign',
    },
    actionLabel: 'View Related Case Studies',
  },
];

export const additionalSoftwareProjects: PortfolioProject[] = [
  {
    id: 'secure-task-manager',
    title: 'Secure Task Manager',
    summary: ['Security-focused Java task-management application using MVC, JWT authentication, role-based access control, and audit logging.'],
    technologies: ['Java', 'JWT', 'RBAC', 'MVC'],
    githubUrl: 'https://github.com/Eskinder185/secure-task-manager-java',
    image: 'secure-task-manager-java.jpg',
  },
  {
    id: 'jeopardy-style-trivia-game',
    title: 'Jeopardy-Style Trivia Game',
    summary: ['Browser-based academic trivia project modeled on a Jeopardy-style game format.'],
    technologies: ['Web Development', 'Trivia Game'],
    githubUrl: 'https://github.com/Eskinder185/jeopardy-trivia-game',
    image: 'jeopardy-style-trivia-game.jpg',
  },
  {
    id: 'neon-meme-machine',
    title: 'Neon Meme Machine',
    summary: ['Software project exploring LLM-assisted meme generation and content moderation.'],
    technologies: ['LLM', 'Content Moderation', 'Web App'],
    githubUrl: 'https://github.com/Eskinder185/neon-meme-machine',
    image: 'neon-meme-machine.jpg',
  },
  {
    id: 'android-inventory-manager',
    title: 'Android Inventory Manager',
    summary: ['Mobile inventory application with secure login, on-device CRUD, stock-level tracking, and low-stock notifications.'],
    technologies: ['Java', 'Android', 'SQLite'],
    githubUrl: 'https://github.com/Eskinder185/android-inventory-manager',
    image: 'android-inventory-manager.jpg',
  },
  {
    id: 'astrafocusnexus',
    title: 'AstraFocusNexus',
    summary: ['Productivity dashboard for focus tracking, task management, and performance visibility.'],
    technologies: ['React', 'JavaScript'],
    githubUrl: 'https://github.com/Eskinder185/AstraFocusNexus',
    liveUrl: 'https://eskinder185.github.io/AstraFocusNexus/',
    image: 'astrafocus.jpg',
  },
  {
    id: 'professionaldev',
    title: 'ProfessionalDev',
    summary: ['Career-development application for organizing skills, projects, certifications, and learning paths.'],
    technologies: ['React', 'JavaScript'],
    githubUrl: 'https://github.com/Eskinder185/professionaldev',
    liveUrl: 'https://eskinder185.github.io/professionaldev/',
    image: 'profdev.jpg',
  },
  {
    id: 'coderush',
    title: 'CodeRush',
    summary: ['Interactive programming-language practice project with timed exercises and progress tracking.'],
    technologies: ['JavaScript', 'Web App'],
    githubUrl: 'https://github.com/Eskinder185/CodeRush',
    liveUrl: 'https://eskinder185.github.io/CodeRush/',
    image: 'coderush.jpg',
  },
  {
    id: 'quizforge',
    title: 'QuizForge',
    summary: ['Client-side quiz builder and quiz-taking application with configurable questions and local persistence.'],
    technologies: ['JavaScript', 'Local Storage'],
    githubUrl: 'https://github.com/Eskinder185/QuizForge',
    liveUrl: 'https://eskinder185.github.io/QuizForge/',
    image: 'quizforge.jpg',
  },
  {
    id: 'johnnycloud-vpc-ec2',
    title: 'JohnnyCloud — VPC & EC2 Launchpad',
    summary: ['AWS infrastructure baseline covering a VPC, public and private subnets, routing, security groups, and EC2 bootstrap configuration.'],
    technologies: ['AWS', 'VPC', 'EC2', 'IAM', 'CloudInit'],
    githubUrl: 'https://github.com/Eskinder185/cloud-launchpad-vpc-ec2',
    image: 'johnnycloud-vpc-ec2.jpg',
  },
  {
    id: 'pirate-intelligent-agent',
    title: 'Pirate Intelligent Agent (DQN)',
    summary: ['Reinforcement-learning agent that solves a grid-world environment using Deep Q-Learning.'],
    technologies: ['Python', 'Reinforcement Learning', 'NumPy', 'Jupyter'],
    githubUrl: 'https://github.com/Eskinder185/Pirate-Intelligent-Agent',
    image: 'pirate-intelligent-agent.jpg',
  },
  {
    id: 'animal-shelter-analytics',
    title: 'Animal Shelter Analytics',
    summary: ['Interactive dashboard combining MongoDB CRUD operations, filtering, and Plotly adoption charts.'],
    technologies: ['Python', 'Dash', 'Plotly', 'MongoDB'],
    githubUrl: 'https://github.com/Eskinder185/animal-shelter-analytics',
    image: 'animal-shelter-analytics.jpg',
  },
  {
    id: 'travel-portal-express',
    title: 'Travel Portal',
    summary: ['Class project using routes, controllers, and server-rendered views for travel-booking workflows.'],
    technologies: ['Node.js', 'Express', 'JavaScript'],
    githubUrl: 'https://github.com/Eskinder185/travlr-re',
    image: 'travel-portal-express.jpg',
  },
  {
    id: 'weather',
    title: 'Weather App',
    summary: ['Python project for fetching, parsing, and displaying weather data with defined error paths.'],
    technologies: ['Python', 'CLI'],
    githubUrl: 'https://github.com/Eskinder185/weather',
    image: 'weather-app-python.jpg',
  },
  {
    id: 'java-security-hardening-artemis',
    title: 'Java Security Hardening — Artemis',
    summary: ['Java security exercise covering TLS configuration, SHA-256 hashing, and static-analysis remediation.'],
    technologies: ['Java', 'TLS', 'SHA-256', 'OWASP'],
    githubUrl: 'https://github.com/Eskinder185/java-security-hardening-artemis',
    image: 'java-security-hardening-artemis.jpg',
  },
  {
    id: 'cpp-data-structures-portfolio',
    title: 'C++ Data Structures Portfolio',
    summary: ['Course planner and bid manager demonstrating map and linked-list data structures.'],
    technologies: ['C++', 'Algorithms', 'Data Structures'],
    githubUrl: 'https://github.com/Eskinder185/cpp-data-structures-portfolio',
    image: 'cpp-data-structures-portfolio.jpg',
  },
  {
    id: 'java-contact-service-tests',
    title: 'Java Contact Service + Tests',
    summary: ['Contact-service project with JUnit tests covering creation, updates, and deletion behavior.'],
    technologies: ['Java', 'JUnit', 'TDD'],
    githubUrl: 'https://github.com/Eskinder185/QAContactService',
    image: 'java-contact-service-tests.jpg',
  },
  {
    id: 'aws-dlp-scanner',
    title: 'AWS DLP Scanner',
    summary: ['Prototype for scanning Amazon S3 objects for sensitive-data patterns and producing a report.'],
    technologies: ['AWS', 'Python', 'S3'],
    githubUrl: 'https://github.com/Eskinder185/aws-dlp-scanner',
    image: 'aws-dlp-scanner.jpg',
  },
  {
    id: 'driverpass-system-design',
    title: 'DriverPass System Design',
    summary: ['Systems-analysis project documenting requirements, use cases, and UML diagrams for a driving-lessons platform.'],
    technologies: ['UML', 'Requirements Analysis', 'System Design'],
    githubUrl: 'https://github.com/Eskinder185/driverpass-system-design',
    image: 'driverpass-system-design.jpg',
  },
  {
    id: 'coffee-mug-3d-scene',
    title: 'Coffee Mug 3D Scene',
    summary: ['Interactive OpenGL scene with lighting, shading, and keyboard-and-mouse camera controls.'],
    technologies: ['C++', 'OpenGL', '3D Graphics'],
    githubUrl: 'https://github.com/Eskinder185/coffee-mug-3d-scene',
    image: 'coffee-mug-3d-scene.jpg',
  },
];
