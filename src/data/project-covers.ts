const base = (import.meta as any).env.BASE_URL;

// Generated editorial covers. Keep these separate from screenshots and animated demos.
const projectIds = new Set([
  "netshield",
  "aegissoc",
  "astrafocusnexus",
  "professionaldev",
  "coderush",
  "quizforge",
  "johnnycloud-vpc-ec2",
  "pirate-intelligent-agent",
  "animal-shelter-analytics",
  "android-inventory-manager",
  "travel-portal-express",
  "weather",
  "java-security-hardening-artemis",
  "cpp-data-structures-portfolio",
  "java-contact-service-tests",
  "aws-dlp-scanner",
  "driverpass-system-design",
  "coffee-mug-3d-scene",
  "tewahedodaily",
  "hybrid-cloud-security-lab",
  "ethiopian-community-atlanta",
  "orthodoxpath",
  "hive",
  "alignid",
  "secure-task-manager-java",
  "neon-meme-machine",
  "jeopardy-trivia-game",
  "aidetection",
  "progreestracker",
  "eotctimirt",
  "homelab",
  "aws-cloud-launchpad"
]);

export function projectCoverUrl(id: string, fallback: string): string {
  const projectId = id === 'johnnycloud-serverless' ? 'johnnycloud-vpc-ec2' : id;
  return projectIds.has(projectId) ? `${base}images/project-covers-v2/${projectId}.webp` : fallback;
}

export function isGeneratedCover(url?: string): boolean {
  return Boolean(url?.includes('/project-covers-v2/'));
}
