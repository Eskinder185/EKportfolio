import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { heroHeadlineVariants } from '../utils/animations';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1HlszDCCB0-5d97KdFlKHqmg81xWTsVvX/view?usp=drive_link', '_blank');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center relative z-10 pt-20 pb-28">
        {/* Improves contrast behind headline + CTA without adding “glow” */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 rounded-[2rem] bg-black/35 backdrop-blur-sm border border-white/5"
        />
        {/* 1. One small badge above the headline */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroHeadlineVariants}
          custom={0}
          className="inline-block mb-10"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-400 border border-white/10 bg-white/5">
            Cloud & Security Engineer
          </span>
        </motion.div>

        {/* 2. Dominant headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heroHeadlineVariants}
          custom={1}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6"
        >
          Hi, I'm <span className="gradient-text">Eskinder</span>
        </motion.h1>

        {/* 3. One short supporting sentence */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={heroHeadlineVariants}
          custom={2}
          className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-lg mx-auto mb-14"
        >
          I build secure, scalable cloud systems and modern DevOps workflows.
        </motion.p>

        {/* 4. Two CTAs — cleaner spacing and alignment */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroHeadlineVariants}
          custom={3}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => onNavigate('projects')}
            className="w-full sm:w-auto px-8 py-3 text-base font-medium rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:from-violet-600 hover:to-cyan-600 transition-colors border-0"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4 ml-2 inline-block" />
          </Button>
          <Button
            onClick={handleResumeClick}
            variant="outline"
            className="w-full sm:w-auto px-8 py-3 text-base font-medium rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-colors"
          >
            <Download className="w-4 h-4 mr-2 inline-block" />
            View Résumé
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
