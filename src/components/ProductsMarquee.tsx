import React, { useState } from 'react';
import { projectPills, moreProjectPills } from '../data/projects-pills';

const ProductsMarquee: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  
  // Use featured projects by default, show more when toggled
  const displayedProjects = showMore ? [...projectPills, ...moreProjectPills] : projectPills;
  
  // Duplicate for infinite scroll
  const duplicated = [...displayedProjects, ...displayedProjects];

  return (
    <div className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projects I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Highlights from my GitHub and coursework across cloud, security, and full-stack
          </p>
          
          {/* Show More/Less Toggle */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 group"
          >
            <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
              {showMore ? 'Show Less' : `Show More (${moreProjectPills.length} additional)`}
            </span>
            <svg 
              className={`ml-2 w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-300 ${showMore ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="relative">
          {/* Fade edges - overlay scrims */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 via-gray-900/90 to-transparent z-10 pointer-events-none" />

          {/* Marquee container */}
          <div className="flex items-center animate-marquee hover:pause">
            {duplicated.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-none mx-6 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 group animate-pulse-glow"
                style={{ animationDelay: `${index * 0.5}s` }}
                aria-label={item.label}
              >
                <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  {item.label}
                </span>
                {/* Subtle glow effect */}
                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </a>
            ))}
          </div>
        </div>

        {/* Secondary row with reverse animation */}
        <div className="relative mt-8">
          {/* Fade edges - overlay scrims */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 via-gray-900/90 to-transparent z-10 pointer-events-none" />

          <div className="flex items-center" style={{ animation: 'marquee 25s linear infinite reverse' }}>
            {duplicated.slice().reverse().map((item, index) => (
              <a
                key={`reverse-${index}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-none mx-6 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-white/5 backdrop-blur-sm hover:from-violet-500/20 hover:to-cyan-500/20 transition-all duration-300 group"
                aria-label={item.label}
              >
                <span className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300 whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Plain <style> works in Vite/React; no Next.js-specific jsx attribute */}
      <style>{`
        .hover\\:pause:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
};

export default ProductsMarquee;
