import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ExperiencePage from './components/pages/ExperiencePage';
import ProjectsPage from './components/pages/ProjectsPage';
import CaseStudiesPage from './components/pages/CaseStudiesPage';
import BooksPage from './components/pages/BooksPage';
import ContactPage from './components/pages/ContactPage';
import { pageTransition } from './utils/animations';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle navigation
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update URL hash for better UX (optional)
    if (page !== 'home') {
      window.history.pushState({}, '', `#${page}`);
    } else {
      window.history.pushState({}, '', '#');
    }
  };

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentPage(hash || 'home');
    };

    // Set initial page based on URL hash
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash) {
      setCurrentPage(initialHash);
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);


  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'experience':
        return <ExperiencePage onNavigate={handleNavigate} />;
      case 'projects':
        return <ProjectsPage />;
      case 'case-studies':
        return <CaseStudiesPage />;
      case 'books':
        return <BooksPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative z-0 min-h-screen" style={{ background: 'var(--background)' }}>
      <AnimatedBackground />
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      <main className="relative layout-grid pb-20 md:pb-6 md:pl-[5.5rem]">
        <div className="layout-grid-inner">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentPage}
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              className="min-h-[60vh] w-full min-w-0 max-w-full"
            >
              {renderCurrentPage()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppContent />
  );
}
