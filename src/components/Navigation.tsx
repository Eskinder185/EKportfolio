import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  FileText,
  BookOpen,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems: { id: string; label: string; icon: LucideIcon }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'case-studies', label: 'Case Studies', icon: FileText },
  { id: 'books', label: 'Books', icon: BookOpen },
  { id: 'contact', label: 'Get in Touch', icon: MessageCircle },
];

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const tabBarRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(
    navItems.findIndex((i) => i.id === currentPage)
  );
  const [maskStyle, setMaskStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const idx = navItems.findIndex((i) => i.id === currentPage);
    setActiveIndex(idx >= 0 ? idx : 0);
  }, [currentPage]);

  // Update sliding mask position for mobile tab bar (thumb-following pill)
  useEffect(() => {
    const bar = tabBarRef.current;
    if (!bar) return;
    const tabs = bar.querySelectorAll('[data-nav-tab]');
    const activeTab = tabs[activeIndex] as HTMLElement | undefined;
    if (activeTab) {
      const barRect = bar.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      setMaskStyle({
        width: tabRect.width,
        left: tabRect.left - barRect.left,
      });
    }
  }, [activeIndex, currentPage]);

  return (
    <>
      {/* Desktop: left-anchored refractive sidebar (Floating Navigation) */}
      <aside
        className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-2 py-5 px-3 nav-sidebar w-14"
        aria-label="Main navigation"
      >
        <div className="flex flex-col items-center gap-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200 ${
                  isActive
                    ? 'text-[var(--accent)] bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                title={item.label}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="w-5 h-5" strokeWidth={1.75} />
              </button>
            );
          })}
        </div>
        <div className="flex-1 min-h-[24px]" />
      </aside>

      {/* Mobile: bottom-anchored Liquid Glass tab bar with dynamic mask */}
      <nav
        ref={tabBarRef}
        className="md:hidden fixed bottom-4 left-2 right-2 z-50 nav-tab-bar px-1 py-2"
        aria-label="Main navigation"
      >
        <div className="relative flex items-center justify-between w-full px-1">
          {/* Sliding pill mask (follows active tab / thumb position) */}
          <motion.div
            className="nav-tab-mask absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: maskStyle.left,
              width: maskStyle.width,
            }}
            initial={false}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                data-nav-tab
                onClick={() => onNavigate(item.id)}
                className={`relative z-10 flex flex-col items-center justify-center min-w-[40px] min-h-[40px] rounded-xl transition-colors duration-200 ${
                  isActive ? 'text-[var(--accent)]' : 'text-gray-400 active:text-white'
                }`}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="w-4 h-4 min-[390px]:w-5 min-[390px]:h-5" strokeWidth={1.75} />
                <span className="hidden min-[390px]:block text-[9px] mt-0.5 font-medium truncate max-w-[46px] leading-tight whitespace-nowrap">
                  {item.label.replace('Get in Touch', 'Contact')}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
