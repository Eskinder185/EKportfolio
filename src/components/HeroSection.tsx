import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { heroHeadlineVariants } from '../utils/animations';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const typewriterPhrases = [
  'I build cloud infrastructure',
  'I engineer secure systems',
  'I create modern DevOps workflows',
  'I explore AI-powered engineering',
  'I design cloud + security solutions',
];

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullText = typewriterPhrases[currentPhrase];

    if (isTyping) {
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 30);
      } else {
        setCurrentPhrase((p) => (p + 1) % typewriterPhrases.length);
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentPhrase]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 80, damping: 20 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const moveX = (e.clientX - centerX) / 40;
      const moveY = (e.clientY - centerY) / 40;
      mouseX.set(moveX);
      mouseY.set(moveY);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1HlszDCCB0-5d97KdFlKHqmg81xWTsVvX/view?usp=drive_link', '_blank');
  };

  const heroOrbs = [
    { size: 120, x: '15%', y: '20%', color: 'rgba(139, 92, 246, 0.15)', delay: 0 },
    { size: 80, x: '85%', y: '25%', color: 'rgba(34, 211, 238, 0.12)', delay: 1.2 },
    { size: 100, x: '50%', y: '75%', color: 'rgba(139, 92, 246, 0.1)', delay: 2.4 },
    { size: 60, x: '80%', y: '70%', color: 'rgba(34, 211, 238, 0.14)', delay: 0.8 },
    { size: 70, x: '25%', y: '55%', color: 'rgba(99, 102, 241, 0.1)', delay: 1.6 },
  ];

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero-specific animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 30%, rgba(88, 28, 135, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 80% at 80% 20%, rgba(6, 78, 119, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 70% 60% at 50% 80%, rgba(30, 58, 138, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: '200% 200%',
            animation: 'mesh-shift 28s ease-in-out infinite',
            willChange: 'background-position',
          }}
        />
        {heroOrbs.map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-[60px]"
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
              background: orb.color,
              transform: 'translate(-50%, -50%)',
              animation: 'hero-orb-float 20s ease-in-out infinite',
              animationDelay: `${orb.delay}s`,
              willChange: 'transform',
            }}
          />
        ))}
        {/* Soft particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`p-${i}`}
            className="absolute w-1 h-1 rounded-full bg-violet-500/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: 'hero-particle-drift 8s ease-in-out infinite',
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Cursor glow (subtle spotlight following pointer) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          className="rounded-full blur-[100px] w-96 h-96 shrink-0 opacity-[0.08]"
          style={{
            x,
            y,
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Hero illustration - network nodes (large screens) */}
      <div className="hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2 w-56 h-56 opacity-30 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          <defs>
            <linearGradient id="hero-node-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.4)" />
              <stop offset="100%" stopColor="rgba(34, 211, 238, 0.3)" />
            </linearGradient>
          </defs>
          {[40, 80, 120, 160].map((cx, i) =>
            [50, 100, 150].map((cy, j) => (
              <g key={`${i}-${j}`}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={4}
                  fill="url(#hero-node-grad)"
                  className="animate-pulse"
                  style={{ animationDelay: `${(i + j) * 0.2}s` }}
                />
                {j < 2 && <line x1={cx} y1={cy} x2={cx} y2={cy + 50} stroke="rgba(139, 92, 246, 0.2)" strokeWidth="0.5" />}
                {i < 3 && <line x1={cx} y1={cy} x2={cx + 40} y2={cy} stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.5" />}
              </g>
            ))
          )}
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center relative z-10 pt-16 pb-24">
        {/* Welcome element — UFO-inspired capsule badge (hovering motion) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroHeadlineVariants}
          custom={0}
          className="inline-flex items-center gap-4 px-8 py-4 sm:px-12 sm:py-5 rounded-[2rem] mb-14 sm:mb-16 backdrop-blur-xl transition-all duration-300 hover:-translate-y-4 hover:scale-[1.02] group hover:shadow-[0_0_0_2px_rgba(139,92,246,0.6),0_0_60px_rgba(139,92,246,0.4),0_0_120px_rgba(34,211,238,0.2)]"
          style={{
            animation: 'hero-welcome-float 8s ease-in-out infinite, hero-welcome-glow 5s ease-in-out infinite',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(34, 211, 238, 0.05) 50%, rgba(139, 92, 246, 0.06) 100%)',
            border: '2px solid rgba(139, 92, 246, 0.4)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 0 0 1px rgba(34, 211, 238, 0.15)',
            willChange: 'transform',
          }}
        >
          {/* UFO / alien-tech icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
            aria-hidden
          >
            <ellipse cx="12" cy="14" rx="8" ry="2.5" fill="currentColor" opacity="0.95" />
            <ellipse cx="12" cy="13" rx="5" ry="2" fill="currentColor" opacity="0.7" />
            <circle cx="12" cy="11" r="2" fill="currentColor" />
            <circle cx="8" cy="12" r="0.6" fill="rgba(255,255,255,0.9)" />
            <circle cx="16" cy="12" r="0.6" fill="rgba(255,255,255,0.9)" />
          </svg>
          <span className="text-lg sm:text-xl font-semibold text-gray-100 tracking-wide">
            Welcome to My Universe
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroHeadlineVariants}
          custom={1}
          className="mb-10 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            Hi, I'm{' '}
            <span
              className="gradient-text inline-block"
              style={{ animation: 'hero-name-glow 4s ease-in-out infinite' }}
            >
              Eskinder
            </span>
          </h1>
          <p className="mt-4 sm:mt-5 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400 tracking-tight">
            Cloud Engineer · Security Builder · AI Explorer
          </p>
        </motion.div>

        {/* Typewriter supporting text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroHeadlineVariants}
          custom={2}
          className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-16 sm:mb-20 min-h-[2.5rem] flex items-center justify-center"
        >
          <span
            className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent bg-[length:200%_auto] font-medium"
            style={{ animation: 'hero-typewriter-gradient 6s ease infinite' }}
          >
            {displayText}
          </span>
          <span
            className="inline-block w-[2px] h-5 sm:h-6 bg-cyan-400 ml-0.5"
            style={{ animation: 'hero-cursor-blink 0.9s step-end infinite' }}
            aria-hidden
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroHeadlineVariants}
          custom={3}
          className="flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center"
        >
          <Button
            onClick={() => onNavigate('projects')}
            className="group relative px-12 py-6 overflow-hidden text-lg font-semibold rounded-full transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 bg-gradient-to-r from-violet-500 via-violet-600 to-cyan-500 text-white border-0 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5),0_0_30px_rgba(34,211,238,0.2)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore Projects
              <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button
            onClick={handleResumeClick}
            variant="outline"
            className="group relative px-12 py-6 overflow-hidden text-lg font-semibold rounded-full transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 border-2 border-violet-500/50 bg-white/[0.02] hover:border-cyan-500/60 hover:bg-white/[0.05] text-white hover:shadow-[0_0_40px_rgba(139,92,246,0.35),0_0_20px_rgba(34,211,238,0.15)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Download className="w-6 h-6 transition-transform duration-300 group-hover:translate-y-0.5" />
              View Résumé
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
