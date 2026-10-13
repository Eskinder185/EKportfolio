import type { Project } from '../components/pages/ProjectsPage';
import type { Study } from '../components/pages/CaseStudiesPage';
import type { Experience } from '../components/pages/ExperiencePage';

const base = import.meta.env.BASE_URL;
export const projectUpdates: Project[] = [
  {
    "id": "tewahedodaily",
    "title": "TewahedoDaily",
    "description": "Daily Ethiopian Orthodox companion for Bible reading, prayers, hymns and the Church calendar, built with React and TypeScript.",
    "image": "",
    "technologies": [
      "React",
      "TypeScript",
      "Vite",
      "Supabase"
    ],
    "categories": [
      "frontend"
    ],
    "githubUrl": "https://github.com/Eskinder185/TewahedoDaily",
    "liveUrl": "https://tewahedodaily.pages.dev/",
    "featured": true,
    "impact": [
      "Public frontend verified; source includes multilingual content, reading and calendar workflows.",
      "Main application project identified by the owner; backend and authenticated workflows have separate verification limits."
    ],
    "scope": "React/TypeScript application with Bible, prayer, hymn and calendar pages, Supabase content integration and local fallback data.",
    "product": "React and TypeScript companion for prayer, hymns, Bible reading, and the Ethiopian Orthodox calendar. Confirm which local fixes are deployed; authenticated CMS and remote AI remain unverified."
  },
  {
    "id": "hybrid-cloud-security-lab",
    "title": "Home Lab — Red Team / Blue Team Setup",
    "description": "Personal Proxmox home lab for infrastructure practice and controlled red-team and blue-team security exercises.",
    "image": "Hybrid Cloud Security Home Lab.jpg",
    "technologies": [
      "Proxmox",
      "Linux",
      "Networking"
    ],
    "categories": [
      "cloud",
      "backend"
    ],
    "githubUrl": "https://github.com/Eskinder185/Hybrid-Cloud-Security-Lab",
    "liveUrl": null,
    "featured": true,
    "impact": [
      "Hands-on virtualization, networking and controlled security practice.",
      "Lab / Experiment: red/blue-team setup reported by the project owner; current detection outputs are not independently verified."
    ],
    "scope": "Owned Windows/Linux lab environment, Proxmox virtualization, networking and red/blue-team learning scenarios.",
    "product": "Home lab with documented architecture and owner-reported red/blue-team exercises. Current rules, logs and validation evidence remain to be added."
  },
  {
    "id": "ethiopian-community-atlanta",
    "title": "ECAA Bilingual Community Website",
    "description": "English/Amharic community website with React, content-driven pages and Decap CMS configuration.",
    "image": "projects/ecaa-local-preview.png",
    "technologies": [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "English / Amharic",
      "Decap CMS"
    ],
    "categories": [
      "frontend"
    ],
    "githubUrl": "https://github.com/Eskinder185/ethiopian-community-atlanta",
    "liveUrl": null,
    "featured": true,
    "impact": [
      "Bilingual navigation and content controls verified in the local English/Amharic interface.",
      "Responsive community information and editable JSON content; production CMS authentication remains to be configured."
    ],
    "scope": "Community pages, English/Amharic language switching, JSON content and Decap CMS editing configuration.",
    "product": "ECAA website source and a genuine local development preview. Public deployment URL is not established by the repository metadata."
  },
  {
    "id": "orthodoxpath",
    "title": "OrthodoxPath",
    "description": "React learning prototype with routed Learn, Practice, Language, and Calendar sections.",
    "image": "ortho.jpg",
    "technologies": [
      "React",
      "Vite",
      "i18next",
      "React Router"
    ],
    "categories": [
      "frontend"
    ],
    "githubUrl": "https://github.com/Eskinder185/OrthodoxPath",
    "liveUrl": "https://orthodoxpath.pages.dev/",
    "featured": true,
    "impact": [
      "Status: Deployed.",
      "React learning prototype with routed Learn, Practice, Language, and Calendar sections."
    ],
    "scope": "React learning prototype with routed Learn, Practice, Language, and Calendar sections.",
    "product": "React learning prototype with routed Learn, Practice, Language, and Calendar sections. Template README needs a project-specific write-up; deployment and content ownership need verification."
  },
  {
    "id": "hive",
    "title": "Hive",
    "description": "Neighborhood-chat prototype with Firebase and client encryption source.",
    "image": "",
    "technologies": [
      "React",
      "Firebase",
      "Web Crypto"
    ],
    "categories": [
      "backend",
      "cloud"
    ],
    "githubUrl": "https://github.com/Eskinder185/Hive",
    "liveUrl": "https://eskinder185.github.io/Hive/",
    "featured": false,
    "impact": [
      "Status: Deployed.",
      "Neighborhood-chat prototype with Firebase and client encryption source."
    ],
    "scope": "Neighborhood-chat prototype with Firebase and client encryption source.",
    "product": "Neighborhood-chat prototype with Firebase and client encryption source. Encryption key custody, Firestore rules, invite enforcement and moderation data access need a security review."
  },
  {
    "id": "alignid",
    "title": "AlignID",
    "description": "Single-file browser photo crop and resize tool with local image handling.",
    "image": "",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "Canvas"
    ],
    "categories": [
      "frontend"
    ],
    "githubUrl": "https://github.com/Eskinder185/AlignID",
    "liveUrl": null,
    "featured": false,
    "impact": [
      "Status: Lab / Experiment.",
      "Single-file browser photo crop and resize tool with local image handling."
    ],
    "scope": "Single-file browser photo crop and resize tool with local image handling.",
    "product": "Single-file browser photo crop and resize tool with local image handling. No live demo configured in README; validate export dimensions and metadata."
  },
  {
    "id": "secure-task-manager-java",
    "title": "Secure Task Manager",
    "description": "Spring Boot source contains task endpoints, JWT authentication and role-based security configuration.",
    "image": "secure-task-manager-java.jpg",
    "technologies": [
      "Java",
      "Spring Boot",
      "JWT",
      "RBAC"
    ],
    "categories": [
      "backend",
      "cloud"
    ],
    "githubUrl": "https://github.com/Eskinder185/secure-task-manager-java",
    "liveUrl": null,
    "featured": false,
    "impact": [
      "Status: Lab / Experiment.",
      "Spring Boot source contains task endpoints, JWT authentication and role-based security configuration."
    ],
    "scope": "Spring Boot source contains task endpoints, JWT authentication and role-based security configuration.",
    "product": "Spring Boot source contains task endpoints, JWT authentication and role-based security configuration. Fresh authorization tests needed; local securetask README contains unresolved merge text."
  },
  {
    "id": "neon-meme-machine",
    "title": "Neon Meme Machine",
    "description": "HTML/CSS/JavaScript meme editor with image upload and canvas export.",
    "image": "neon-meme-machine.jpg",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "Canvas"
    ],
    "categories": [
      "frontend"
    ],
    "githubUrl": "https://github.com/Eskinder185/neon-meme-machine",
    "liveUrl": null,
    "featured": false,
    "impact": [
      "Status: Lab / Experiment.",
      "HTML/CSS/JavaScript meme editor with image upload and canvas export."
    ],
    "scope": "HTML/CSS/JavaScript meme editor with image upload and canvas export.",
    "product": "HTML/CSS/JavaScript meme editor with image upload and canvas export. No evidence supports existing portfolio LLM or moderation claims."
  },
  {
    "id": "jeopardy-trivia-game",
    "title": "Trivia Clash",
    "description": "Browser trivia game built with JavaScript, jQuery and Axios.",
    "image": "jeopardy-style-trivia-game.jpg",
    "technologies": [
      "JavaScript",
      "jQuery",
      "Axios"
    ],
    "categories": [
      "frontend"
    ],
    "githubUrl": "https://github.com/Eskinder185/jeopardy-trivia-game",
    "liveUrl": null,
    "featured": false,
    "impact": [
      "Status: Lab / Experiment.",
      "Browser trivia game built with JavaScript, jQuery and Axios."
    ],
    "scope": "Browser trivia game built with JavaScript, jQuery and Axios.",
    "product": "Browser trivia game built with JavaScript, jQuery and Axios. Keep distinct from undocumented React/Node descriptions; verify external API behavior."
  },
  {
    "id": "aidetection",
    "title": "AI Intrusion Detection Coursework",
    "description": "Python neural-network training and preprocessing exercises with test files.",
    "image": "",
    "technologies": [
      "Python",
      "Neural Networks"
    ],
    "categories": [
      "ai-ml",
      "backend"
    ],
    "githubUrl": "https://github.com/Eskinder185/AiDetection",
    "liveUrl": null,
    "featured": false,
    "impact": [
      "Status: Lab / Experiment.",
      "Python neural-network training and preprocessing exercises with test files."
    ],
    "scope": "Python neural-network training and preprocessing exercises with test files.",
    "product": "Python neural-network training and preprocessing exercises with test files. Inspect nested README and execute tests; Isolation Forest claim is not established by inspected files."
  },
  {
    "id": "progreestracker",
    "title": "ZeroEffort / Progress Tracker",
    "description": "TypeScript project with a minimal ZeroEffort Tracker README.",
    "image": "",
    "technologies": [
      "TypeScript"
    ],
    "categories": [
      "frontend"
    ],
    "githubUrl": "https://github.com/Eskinder185/ProgreesTracker",
    "liveUrl": null,
    "featured": false,
    "impact": [
      "Status: Lab / Experiment.",
      "TypeScript project with a minimal ZeroEffort Tracker README."
    ],
    "scope": "TypeScript project with a minimal ZeroEffort Tracker README.",
    "product": "TypeScript project with a minimal ZeroEffort Tracker README. Clarify current product name and implemented features."
  },
  {
    "id": "eotctimirt",
    "title": "EOTC Timirt Parish Website",
    "description": "Mobile-first parish website repository with teaching and calendar content.",
    "image": "",
    "technologies": [
      "TypeScript",
      "React"
    ],
    "categories": [
      "frontend"
    ],
    "githubUrl": "https://github.com/Eskinder185/EOTCTIMIRT",
    "liveUrl": null,
    "featured": false,
    "impact": [
      "Status: Lab / Experiment.",
      "Mobile-first parish website repository with teaching and calendar content."
    ],
    "scope": "Mobile-first parish website repository with teaching and calendar content.",
    "product": "Mobile-first parish website repository with teaching and calendar content. Confirm ownership, maintenance status and deployed URL."
  },
  {
    "id": "homelab",
    "title": "LegacyLab / Secure File Sharing",
    "description": "Historical HP-host notes document Proxmox, Tailscale SSH, and Samba; later monitoring notes need validation.",
    "image": "",
    "technologies": [
      "Proxmox",
      "Samba",
      "Tailscale",
      "Linux"
    ],
    "categories": [
      "cloud",
      "backend"
    ],
    "githubUrl": "https://github.com/Eskinder185/Homelab",
    "liveUrl": null,
    "featured": false,
    "impact": [
      "Status: Lab / Experiment.",
      "Historical HP-host notes document Proxmox, Tailscale SSH, and Samba; later monitoring notes need validation."
    ],
    "scope": "Historical HP-host notes document Proxmox, Tailscale SSH, and Samba; later monitoring notes need validation.",
    "product": "Historical HP-host notes document Proxmox, Tailscale SSH, and Samba; later monitoring notes need validation. HP hardware and operating system conflict with newer brief. Screenshots and runnable monitoring configuration absent."
  },
];
projectUpdates.push({
  id: 'aws-cloud-launchpad', title: 'AWS Cloud Launchpad — CloudFormation Lab',
  description: 'Inspectable CloudFormation template for a VPC, private subnet, security group and EC2 instance.',
  image: '', technologies: ['AWS','CloudFormation','VPC','EC2'], categories: ['cloud','backend'],
  githubUrl: 'https://github.com/Eskinder185/cloud-launchpad-vpc-ec2',
  impact: ['Lab / Experiment: infrastructure-as-code source is available; deployment is not verified.'],
  scope: 'Defines a VPC, internet gateway attachment, private subnet, security group and EC2 resource.',
  product: 'CloudFormation learning artifact. Broad SSH ingress and missing routing/NAT configuration require review before deployment.'
});
projectUpdates.forEach(p => { if(p.image) p.image = `${base}images/${p.image}`; });
export const caseStudyUpdates: Study[] = [
  {
    "id": "tewahedodaily",
    "title": "TewahedoDaily",
    "subtitle": "React and TypeScript companion for prayer, hymns, Bible reading, and the Ethiopian Orthodox calendar.",
    "category": "Software Engineering",
    "duration": "Deployed",
    "team": "Application developer",
    "client": "Independent / Lab Project",
    "image": "",
    "technologies": [
      "React",
      "TypeScript",
      "Vite",
      "Supabase"
    ],
    "challenge": "React and TypeScript companion for prayer, hymns, Bible reading, and the Ethiopian Orthodox calendar.",
    "diagram": "React and TypeScript companion for prayer, hymns, Bible reading, and the Ethiopian Orthodox calendar.",
    "results": [
      "Public page loaded with application content on 13 October 2026. This verifies the public frontend only; authenticated features, backend health, users, and uptime are not established. Local development may differ."
    ],
    "keyFeatures": [
      "React and TypeScript companion for prayer, hymns, Bible reading, and the Ethiopian Orthodox calendar."
    ],
    "technicalHighlights": [
      "Prior local audit dated 9 October 2026 documents a production build, calendar regression and delayed Bible-search regression. This portfolio task has not rerun that application suite.",
      "Confirm which local fixes are deployed; authenticated CMS and remote AI remain unverified."
    ],
    "githubUrl": "https://github.com/Eskinder185/TewahedoDaily",
    "liveUrl": "https://tewahedodaily.pages.dev/",
    "impact": [
      "Status: Deployed.",
      "Public page loaded with application content on 13 October 2026. This verifies the public frontend only; authenticated features, backend health, users, and uptime are not established. Local development may differ."
    ],
    "scope": "React and TypeScript companion for prayer, hymns, Bible reading, and the Ethiopian Orthodox calendar.",
    "product": "React and TypeScript companion for prayer, hymns, Bible reading, and the Ethiopian Orthodox calendar. Confirm which local fixes are deployed; authenticated CMS and remote AI remain unverified."
  },
];
export const experienceUpdates: Experience[] = [
  {
    "id": "snhu-student",
    "period": "2021 – Sep 2025",
    "role": "B.S. in Computer Science",
    "company": "Georgia State University → Southern New Hampshire University",
    "companyUrl": "https://www.snhu.edu/",
    "location": "Georgia State University / SNHU",
    "type": "Education",
    "description": "Started bachelor’s study at Georgia State University in 2021 and completed the B.S. in Computer Science at Southern New Hampshire University in September 2025.",
    "achievements": [
      "Completed a computer science degree with coursework in software development, data structures, databases and systems analysis",
      "Developed Java, Python and C++ academic projects and testing artifacts",
      "Produced UML and requirements documentation for systems-design coursework"
    ],
    "technologies": [
      "Java",
      "Python",
      "C++",
      "SQL",
      "JUnit",
      "UML"
    ],
    "relatedProject": "projects"
  },
  {
    "id": "springboard-fellow",
    "period": "Jan 2025 – May 2025",
    "role": "Software Engineering Fellow",
    "company": "Springboard",
    "companyUrl": "https://www.springboard.com/",
    "location": "Remote",
    "type": "Bootcamp",
    "description": "Software Engineering Career Track covering full-stack development, application architecture and project work.",
    "achievements": [
      "Developed web applications and strengthened frontend/backend programming skills",
      "Practiced application debugging, Git workflows and technical documentation"
    ],
    "technologies": [
      "React",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Git"
    ],
    "relatedProject": "projects"
  },
  {
    "id": "aws-restart",
    "period": "Aug 2025 – Oct 2025",
    "role": "Cloud and IT Trainee — AWS re/Start",
    "company": "Per Scholas / AWS re/Start",
    "companyUrl": "https://perscholas.org/",
    "location": "Atlanta, GA",
    "type": "Cloud & IT Training",
    "description": "AWS re/Start cloud and IT training covering AWS foundations, operating systems, networking, security and troubleshooting.",
    "achievements": [
      "Completed hands-on cloud and IT training through Per Scholas / AWS re/Start",
      "Practiced AWS infrastructure, IAM, networking and Linux concepts",
      "Documented learning artifacts and cloud configuration exercises"
    ],
    "technologies": [
      "AWS",
      "EC2",
      "VPC",
      "IAM",
      "Linux",
      "Networking",
      "CloudFormation"
    ],
    "relatedProject": "projects"
  },
  {
    "id": "aws-infrastructure-pre-apprenticeship",
    "period": "Mar 2026 – Jun 2026",
    "role": "Data Center Infrastructure Pre-Apprentice",
    "company": "Amazon Web Services (AWS) / YUPRO",
    "companyUrl": "https://aws.amazon.com/",
    "location": "Butts County, GA",
    "type": "Infrastructure Training",
    "description": "AWS/YUPRO data-center infrastructure pre-apprenticeship with practical equipment, cabling, installation and safety training.",
    "achievements": [
      "Practiced rack-level equipment installation and fiber/copper cabling",
      "Worked with technical diagrams and infrastructure schematics",
      "Developed infrastructure troubleshooting, safe equipment handling and teamwork skills"
    ],
    "technologies": [
      "Data-Center Infrastructure",
      "Cabling",
      "Racks",
      "Networking",
      "Safety",
      "Technical Diagrams"
    ],
    "relatedProject": "projects"
  },
  {
    "id": "amazon-associate",
    "period": "Nov 2020 – Present",
    "role": "Fulfillment Associate / IT Support",
    "company": "Amazon",
    "companyUrl": "https://www.amazon.com/",
    "location": "Stone Mountain, GA",
    "type": "Operations / Technical Support",
    "description": "Fulfillment work with operational IT support, workstation and peripheral troubleshooting, process documentation and associate support.",
    "achievements": [
      "Troubleshot workstation, industrial printer, scanner and peripheral issues within operational responsibilities",
      "Supported equipment escalation, process documentation and reliable handoffs",
      "Mentored associates and supported day-to-day workflow and safety practices"
    ],
    "technologies": [
      "Hardware Troubleshooting",
      "Printers & Scanners",
      "Peripheral Support",
      "Documentation",
      "Process Support"
    ],
    "relatedProject": null
  },
  {
    "id": "wgu-cybersecurity",
    "period": "Nov 2025 – Present · In Progress",
    "role": "M.S. Cybersecurity and Information Assurance",
    "company": "Western Governors University",
    "companyUrl": "https://www.wgu.edu/",
    "location": "Remote",
    "type": "Education",
    "description": "Started graduate study in Cybersecurity and Information Assurance in November 2025; the master’s program is in progress.",
    "achievements": [
      "Continuing graduate cybersecurity education alongside independent infrastructure and security projects"
    ],
    "technologies": [
      "Cybersecurity",
      "Information Assurance"
    ],
    "relatedProject": "projects"
  }
];

export const featuredProjectIds = ['hybrid-cloud-security-lab','ethiopian-community-atlanta','johnnycloud-vpc-ec2'];
export const primaryProjectOrder = [...featuredProjectIds,'tewahedodaily','professionaldev'];
export const verifiedProjectLinks: Record<string,string> = {
 'johnnycloud-vpc-ec2':'https://github.com/Eskinder185/JohnnyCloud',
 'travel-portal-express':'https://github.com/Eskinder185/travlr-re',
 'java-contact-service-tests':'https://github.com/Eskinder185/QAContactService'
};
