import type { Study } from '../components/pages/CaseStudiesPage';
import { caseStudyUpdates } from './portfolio-updates';

const base = (import.meta as any).env.BASE_URL;
const img = (file: string) => `${base}images/${file}`;

export const applicationCaseStudies: Readonly<Study[]> = [
    {
      id: 'professionaldev',
      title: 'ProfessionalDev — Career Growth & Skill Tracking Platform',
      subtitle: 'A modern developer career-planning platform for skills, certifications, projects, and milestones.',
      category: 'Frontend / Career Tools',
      duration: '3 weeks',
      team: 'Solo Developer',
      client: 'Personal Project',
      image: img('profdev.jpg'),
      technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
      challenge: 'Developers need a structured way to map learning paths and organize career goals.',
      success: ['Unified dashboard', 'Clean responsive interface', 'Structured views for learning paths'],
      keyFeatures: ['Skills and certifications tracking', 'Project and milestone organization', 'Learning path visualization'],
      technicalHighlights: ['React + TypeScript with Vite', 'TailwindCSS', 'Component-based architecture'],
      results: ['Single dashboard for career planning', 'Clear progress visualization'],
      githubUrl: 'https://github.com/Eskinder185/professionaldev',
      liveUrl: 'https://eskinder185.github.io/professionaldev/',
      impact: ['Single place for skills, certs, and projects', 'Faster progress visibility with structured views'],
      scope: 'Skills, certifications, projects, and learning paths in one dashboard with responsive UI.',
      product: 'React SPA with TypeScript, Vite, and TailwindCSS; component-based architecture.',
    },
    ...caseStudyUpdates.filter(study => study.id === 'tewahedodaily')
  ];
