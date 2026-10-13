export const profile = {
  name: 'Eskinder Kassahun',
  firstName: 'Eskinder',
  professionalTitle: 'Cloud Infrastructure & Cybersecurity',
  supportingStatement:
    'Building and securing Windows, Linux, network, and AWS environments through hands-on infrastructure, security monitoring, IAM, vulnerability management, networking, and automation.',
  email: 'eskinderkassahun25@gmail.com',
  githubUrl: 'https://github.com/Eskinder185',
  linkedinUrl: 'https://www.linkedin.com/in/eskinder-kassahun/',
  portfolioUrl: 'https://eskinder.dev',
  // TODO: Add a verified PDF under public/resume/ and set this to its public path.
  // The previous Google Drive URL returned 404 during the September 2026 link audit.
  resumeUrl: null as string | null,
  location: 'Atlanta, GA',
  workPreference: 'Remote or hybrid',
} as const;

export const profileEmailHref = `mailto:${profile.email}`;
export const resumeRequestHref = `${profileEmailHref}?subject=${encodeURIComponent('Resume request')}`;
