import { experienceUpdates } from '../../data/portfolio-updates';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import PageLayout from '../PageLayout';
import ScrollReveal from '../ScrollReveal';

interface ExperiencePageProps {
  onNavigate: (page: string) => void;
}

export type Experience = {
  id: string;
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  relatedProject: string | null;
};

function TimelineMilestone({
  exp,
  index,
  onCompanyClick,
  onRelatedClick,
}: {
  exp: Experience;
  index: number;
  onCompanyClick: (url: string) => void;
  onRelatedClick: (project: string) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { amount: 0.3, once: false });

  return (
    <ScrollReveal staggerIndex={index}>
      <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        {/* Timeline node — pulse glow when in view */}
        <div
          className={`absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 ${isInView ? 'timeline-node-glow' : ''}`}
        />
        {/* Content card */}
        <div
          ref={cardRef}
          className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'}`}
        >
          <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20">
            <div className="absolute -top-3 left-6">
              <span className="px-4 py-1 text-sm font-medium bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-full">
                {exp.period}
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                {exp.companyUrl ? (
                  <button
                    onClick={() => onCompanyClick(exp.companyUrl!)}
                    className="text-violet-400 hover:text-violet-300 transition-colors duration-200 flex items-center gap-1 group/company"
                  >
                    {exp.company}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/company:opacity-100 transition-opacity duration-200" />
                  </button>
                ) : (
                  <span className="text-violet-400">{exp.company}</span>
                )}
                <span className="text-gray-500">•</span>
                <span className="text-gray-400 text-sm">{exp.type}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                {exp.location}
              </div>
            </div>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-6 leading-relaxed">
              {exp.description}
            </p>
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="flex items-start gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-medium rounded bg-white/10 border border-white/20 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {exp.relatedProject && (
              <button
                onClick={() => onRelatedClick(exp.relatedProject!)}
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group/link"
              >
                View related work
                <ChevronRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-200" />
              </button>
            )}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

const ExperiencePage: React.FC<ExperiencePageProps> = ({ onNavigate }) => {
  const experiences = experienceUpdates;

  const handleCompanyClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleRelatedProjectClick = (project: string) => {
    if (project.includes('#')) {
      const [page] = project.split('#');
      onNavigate(page);
      // handle hash scroll in app router if needed
    } else {
      onNavigate(project);
    }
  };

  return (
    <PageLayout maxWidth="narrow">
      <ScrollReveal>
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From operations discipline to cloud-first, security-minded engineering—bootcamp, degree, and AWS labs powering real projects.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500 transform md:-translate-x-0.5" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <TimelineMilestone
              key={exp.id}
              exp={exp}
              index={index}
              onCompanyClick={handleCompanyClick}
              onRelatedClick={handleRelatedProjectClick}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default ExperiencePage;
