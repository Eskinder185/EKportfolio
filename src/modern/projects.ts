export type Project = {
  id: string;
  name: string;
  category: string;
  summary: string;
  stack: string[];
  repo: string;
  demo?: string;
  visual: string;
  features: string[];
  note: string;
};
const github = "https://github.com/Eskinder185/";
const pages = "https://eskinder185.github.io/";
export const projects: Project[] = [
  {
    id: "coderush",
    name: "CodeRush",
    category: "Frontend",
    summary:
      "A practice space for typing real code, with lessons and measurable progress.",
    stack: ["React", "TypeScript", "Vite"],
    repo: github + "CodeRush",
    demo: pages + "CodeRush/",
    visual: "code",
    features: [
      "Language-specific lessons and practice routes.",
      "Active typing time excludes pauses.",
      "Speed, accuracy and progress statistics.",
    ],
    note: "Source reviewed: lesson routes, typing-session hook and statistics utilities. Public frontend responds; this audit does not certify every lesson.",
  },
  {
    id: "hive",
    name: "Hive",
    category: "Full stack",
    summary:
      "Community conversations with Firebase authentication and encrypted channel messages.",
    stack: ["React", "Firebase", "Web Crypto"],
    repo: github + "Hive",
    demo: pages + "Hive/",
    visual: "hive",
    features: [
      "Firestore subscriptions for channel messages.",
      "Client-side encryption before message writes.",
      "Authentication and channel-key controls.",
    ],
    note: "Source reviewed: ChatRoom, Firebase integration and encryption helpers. Authenticated chat and encryption security have not been independently tested.",
  },
  {
    id: "johnnycloud",
    name: "JohnnyCloud",
    category: "Cloud & security",
    summary:
      "An AWS FinOps and SecOps dashboard exploring cost, security findings and AI assistance.",
    stack: ["React", "AWS", "Lambda", "Bedrock"],
    repo: github + "JohnnyCloud",
    visual: "cloud",
    features: [
      "React frontend in JohnnyCloudfront.",
      "Source directories for infrastructure and Lambda integrations.",
      "Documentation for identity, security findings, costs and voice assistance.",
    ],
    note: "Public Pages demo returns 404. AWS backend deployment, credentials, live data and AI responses are unverified. Explore the source instead.",
  },
  {
    id: "quizforge",
    name: "QuizForge",
    category: "Frontend",
    summary:
      "A local-first quiz workspace for authoring questions and practicing what you learn.",
    stack: ["React", "TypeScript", "Vite"],
    repo: github + "QuizForge",
    demo: pages + "QuizForge/",
    visual: "quiz",
    features: [
      "Dedicated build, study, exam, library and result routes.",
      "Question-authoring and quiz practice workflows.",
      "Browser-based persistence documented in the repository.",
    ],
    note: "Source reviewed: application routes and package manifest. The correct public path is /QuizForge/; the lowercase README URL returns 404.",
  },
  {
    id: "astrafocus",
    name: "AstraFocusNexus",
    category: "Frontend",
    summary:
      "A personal focus workspace connecting tasks, goals, Pomodoro sessions and wellness.",
    stack: ["React", "TypeScript", "React Router"],
    repo: github + "AstraFocusNexus",
    demo: pages + "AstraFocusNexus/",
    visual: "focus",
    features: [
      "Tasks and goals persisted to localStorage.",
      "Pomodoro context and focus navigation.",
      "Priority matrix and wellness views.",
    ],
    note: "App.tsx verifies task persistence and routes. The package scripts currently use Create React App, despite the README describing Vite.",
  },
  {
    id: "tracker",
    name: "ZeroEffort Tracker",
    category: "Frontend",
    summary:
      "Browser-local goals and tasks, with category views and progress summaries.",
    stack: ["React", "TypeScript", "Zustand"],
    repo: github + "ProgreesTracker",
    demo: pages + "ProgreesTracker/",
    visual: "tracker",
    features: [
      "Persistent Zustand goal and task store.",
      "Category filtering and calculated progress.",
      "Source includes optional chat-assistant modules.",
    ],
    note: "Repository name is intentionally spelled ProgreesTracker. Core store source reviewed; optional AI model downloads and cloud integrations are unverified.",
  },
  {
    id: "alignid",
    name: "AlignID",
    category: "Frontend",
    summary:
      "A browser photo tool with ID sizing presets, a canvas preview and image export.",
    stack: ["JavaScript", "HTML", "Canvas"],
    repo: github + "AlignID",
    demo: pages + "AlignID/",
    visual: "photo",
    features: [
      "Single-file HTML/CSS/JavaScript implementation.",
      "Sizing controls and local image preview.",
      "Image processing and export through the canvas.",
    ],
    note: "Source reviewed: align_id.html. Photo-standard compliance is not validated by this portfolio.",
  },
  {
    id: "cloud-launchpad",
    name: "Cloud Launchpad",
    category: "Cloud & security",
    summary:
      "A small CloudFormation lab defining an AWS network and an EC2 instance.",
    stack: ["AWS", "CloudFormation", "EC2"],
    repo: github + "cloud-launchpad-vpc-ec2",
    visual: "cloud",
    features: [
      "VPC and internet-gateway resources.",
      "Private subnet with public IP assignment disabled.",
      "Parameterized instance size and AMI lookup through SSM.",
    ],
    note: "template.yaml reviewed. This is a learning template, not a production security baseline: its security group permits SSH from any IPv4 address. No AWS deployment was performed.",
  },
  {
    id: "security-lab",
    name: "Hybrid Cloud Security Lab",
    category: "Cloud & security",
    summary:
      "Architecture documentation exploring virtualization, network segmentation and monitoring.",
    stack: ["Proxmox", "Linux", "pfSense"],
    repo: github + "Hybrid-Cloud-Security-Lab",
    visual: "hive",
    features: [
      "Overview of a hybrid home-lab architecture.",
      "Architecture diagram stored in the repository.",
      "Documented interests include VLANs, firewall policy, storage and monitoring.",
    ],
    note: "Repository contains a README and architecture image. Infrastructure configurations, detection rules and measured operational results are not published there.",
  },
  {
    id: "pirate-agent",
    name: "Pirate Intelligent Agent",
    category: "AI",
    summary:
      "A reinforcement-learning notebook exploring a treasure-maze navigation problem.",
    stack: ["Python", "Keras", "NumPy"],
    repo: github + "Pirate-Intelligent-Agent",
    visual: "focus",
    features: [
      "Q-learning training loop with exploration and replay-memory calls.",
      "Neural-network construction with Keras.",
      "Maze visualization and policy-completion checks.",
    ],
    note: "Notebook source reviewed. TreasureMaze and GameExperience modules are imported but absent from the repository; the training run is not independently reproducible from this checkout alone.",
  },
];
export const categories = ["All", ...new Set(projects.map((p) => p.category))];
export function filterProjects(category: string, query: string) {
  const term = query.trim().toLowerCase();
  return projects.filter(
    (p) =>
      (category === "All" || category === p.category) &&
      [p.name, p.summary, p.category, ...p.stack]
        .join(" ")
        .toLowerCase()
        .includes(term),
  );
}
export const skills = [
  {
    name: "Cloud",
    tools: "AWS · IAM · VPC · EC2",
    description: "Infrastructure, identity and cloud application architecture.",
    project: "johnnycloud",
  },
  {
    name: "DevOps",
    tools: "GitHub Actions · Git · Linux · Terraform",
    description: "Repeatable delivery, automation and infrastructure as code.",
    project: "johnnycloud",
  },
  {
    name: "Cybersecurity",
    tools: "Web Crypto · IAM · Security monitoring",
    description:
      "Explore encryption boundaries and security-focused application design.",
    project: "hive",
  },
  {
    name: "AI",
    tools: "Bedrock · Python · Browser AI",
    description:
      "Learning through AI integrations and model-driven experiments.",
    project: "johnnycloud",
  },
  {
    name: "Frontend",
    tools: "React · TypeScript · Tailwind CSS",
    description:
      "Responsive interfaces, accessible controls and browser state.",
    project: "coderush",
  },
  {
    name: "Backend",
    tools: "Node.js · Express · Python · Java",
    description: "API design, serverless functions and application services.",
    project: "hive",
  },
  {
    name: "Databases",
    tools: "Firestore · MongoDB · PostgreSQL",
    description:
      "Data modeling and persistence, from local state to cloud storage.",
    project: "hive",
  },
];
