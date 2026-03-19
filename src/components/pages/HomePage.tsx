import React from 'react';
import HeroSection from '../HeroSection';
import StatsRow from '../StatsRow';
import FeaturesSection from '../FeaturesSection';
import DemoRail from '../DemoRail';
import TestimonialsSlider from '../TestimonialsSlider';
import ApproachSection from '../ApproachSection';
import CTASection from '../CTASection';
import ScrollReveal from '../ScrollReveal';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

/** Section spacing: generous vertical rhythm (Apple-inspired clarity) */
const SECTION_SPACING = 'py-24 md:py-32';

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Hero — full viewport, no competing content */}
      <ScrollReveal>
        <HeroSection onNavigate={onNavigate} />
      </ScrollReveal>

      {/* 2. Trust / metrics strip */}
      <ScrollReveal className={SECTION_SPACING}>
        <StatsRow />
      </ScrollReveal>

      {/* 3. Featured work */}
      <ScrollReveal className={SECTION_SPACING}>
        <DemoRail />
      </ScrollReveal>

      {/* 4. What I Offer — editorial width, no side-by-side */}
      <ScrollReveal className={SECTION_SPACING}>
        <FeaturesSection onNavigate={onNavigate} />
      </ScrollReveal>

      {/* 5. My Approach — editorial width */}
      <ScrollReveal className={SECTION_SPACING}>
        <ApproachSection />
      </ScrollReveal>

      {/* 6. Testimonials */}
      <ScrollReveal className={SECTION_SPACING}>
        <TestimonialsSlider />
      </ScrollReveal>

      {/* 7. Contact CTA */}
      <ScrollReveal className={SECTION_SPACING}>
        <CTASection onNavigate={onNavigate} />
      </ScrollReveal>
    </div>
  );
};

export default HomePage;
