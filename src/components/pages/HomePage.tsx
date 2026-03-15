import React from 'react';
import HeroSection from '../HeroSection';
import StatsRow from '../StatsRow';
import FeaturesSection from '../FeaturesSection';
import DemoRail from '../DemoRail';
import TestimonialsSlider from '../TestimonialsSlider';
import ApproachSection from '../ApproachSection';
import ProductsMarquee from '../ProductsMarquee';
import CTASection from '../CTASection';
import ScrollReveal from '../ScrollReveal';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      <HeroSection onNavigate={onNavigate} />
      <ScrollReveal>
        <StatsRow />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturesSection onNavigate={onNavigate} />
      </ScrollReveal>
      <ScrollReveal>
        <DemoRail />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSlider />
      </ScrollReveal>
      <ScrollReveal>
        <ApproachSection />
      </ScrollReveal>
      <ScrollReveal>
        <ProductsMarquee />
      </ScrollReveal>
      <ScrollReveal>
        <CTASection onNavigate={onNavigate} />
      </ScrollReveal>
    </div>
  );
};

export default HomePage;