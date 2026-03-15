import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import ToolstackHeatmap from '../../sections/ToolstackHeatmap';
import EduCerts from '../../sections/EduCerts';
import PageLayout from '../PageLayout';
import ScrollReveal from '../ScrollReveal';
import { MapPin, Globe, Calendar } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'expertise' | 'innovation'>('vision');

  const photoUrl = `${import.meta.env.BASE_URL}eskinder.jpg`;

  // ---- Top tabs -------------------------------------------------------------
  const visionContent = {
    description:
      'I believe technology should solve real problems and create meaningful impact. My journey spans cloud engineering, cybersecurity, and AI. I always focused on secure, scalable, and user-centric solutions.',
    technologies: [
      'Cloud Architecture',
      'Zero Trust Security',
      'AI/ML Engineering',
      'DevSecOps',
      'Microservices',
      'Event-Driven Systems',
    ],
  };

  const expertiseContent = {
    description:
      'I design robust cloud infrastructure, implement practical security, and build data-driven apps. I enjoy clean architectures, IaC, and repeatable delivery.',
    technologies: [
      'AWS (re/Start)',
      'Kubernetes',
      'Terraform',
      'Python / TypeScript',
      'React / Node.js',
      'PostgreSQL / MongoDB',
    ],
  };

  const innovationContent = {
    description:
      'I experiment with RAG patterns, reinforcement learning, and modern web stacks—then fold the useful bits into real projects.',
    technologies: [
      'RAG + Vector Search',
      'LLM Tooling',
      'Reinforcement Learning',
      'Dash / Plotly',
      'CI/CD & Observability',
      'Container Security',
    ],
  };

  const tabContent = {
    vision: visionContent,
    expertise: expertiseContent,
    innovation: innovationContent,
  } as const;



  const current = tabContent[activeTab];

  return (
    <PageLayout maxWidth="default">
      <ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10">
                <ImageWithFallback
                  src={photoUrl}
                  alt="Eskinder Kassahun"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-green-300">Available for projects</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Eskinder Kassahun</span>
              </h1>
              <h2 className="text-xl text-gray-300 mb-6">
                Cloud Security Engineer &amp; Full-Stack Developer
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Georgia, GA
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Remote Worldwide
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  4+ Years Experience
                </div>
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10">
                <TabsTrigger value="vision" className="data-[state=active]:bg-violet-500 data-[state=active]:text-white">
                  Vision
                </TabsTrigger>
                <TabsTrigger value="expertise" className="data-[state=active]:bg-violet-500 data-[state=active]:text-white">
                  Expertise
                </TabsTrigger>
                <TabsTrigger value="innovation" className="data-[state=active]:bg-violet-500 data-[state=active]:text-white">
                  Innovation
                </TabsTrigger>
              </TabsList>

              <div className="mt-6">
                <TabsContent value={activeTab} className="space-y-6">
                  <p className="text-gray-300 leading-relaxed text-lg">{current.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {current.technologies.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="px-3 py-1 bg-white/5 border-white/20 text-gray-300 hover:bg-violet-500/20 hover:border-violet-500/50 transition-all duration-200"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-20">
          <ToolstackHeatmap />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-20">
          <EduCerts />
        </div>
      </ScrollReveal>
    </PageLayout>
  );
};

export default AboutPage;
