import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowRight, Clock, Users, Target, ExternalLink, Zap, Package } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import PageLayout from '../PageLayout';
import ScrollReveal from '../ScrollReveal';
import ArchitectureDiagramPlaceholder from '../ArchitectureDiagramPlaceholder';
import { fadeInUp } from '../../utils/animations';

const base = import.meta.env.BASE_URL;
const img = (file: string) => `${base}images/${file}`;

type Study = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  team: string;
  client: string;
  image: string;
  technologies: string[];
  challenge: string;
  success?: string[];
  diagram?: string;
  decisions?: string[];
  security?: string[];
  results: string[];
  keyFeatures: string[];
  technicalHighlights: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  /** Quantifiable impact metrics (Linear Storytelling) */
  impact: string[];
  /** Scope: what was in scope */
  scope: string;
  /** Product: what we built */
  product: string;
};

const CaseStudiesPage: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);

  const caseStudies: Readonly<Study[]> = [
    {
      id: 'johnnycloud-serverless',
      title: 'JohnnyCloud — Serverless Cost & Security Alerts',
      subtitle: 'Centralize events, normalize, and notify in sub-second time using an event-driven, pay-per-use pipeline.',
      category: 'Cloud / Serverless',
      duration: '4 weeks',
      team: 'Solo Developer',
      client: 'Personal Project',
      image: img('johnnycloud-vpc-ec2.jpg'),
      technologies: ['AWS', 'S3', 'EventBridge', 'Lambda', 'DynamoDB', 'SNS', 'CloudWatch', 'IAM', 'KMS'],
      challenge: 'Teams lacked a unified, low-cost path to fan out cost and security alerts quickly.',
      success: ['p95 processing < 500 ms', '≈ $0.42–$1.00 monthly cost', '90% rule coverage', 'Strict least-privilege IAM'],
      diagram: 'S3 / EventBridge → Lambda (normalize) → DynamoDB → SNS fan-out; CloudWatch logs/metrics.',
      decisions: ['DynamoDB single-table design', 'SNS over SES for pluggable notifications', 'EventBridge pattern filtering'],
      security: ['KMS for env/secrets', 'Scoped IAM per function', 'DLQs on Lambdas'],
      results: ['Cut alert fan-out time from ~5s to ~1.2s', 'Observed cost ≈ $0.42/month in test profile'],
      keyFeatures: ['Event-driven normalization', 'Fan-out via SNS', 'CloudWatch dashboards'],
      technicalHighlights: ['Idempotency keys', 'TTL + sparse GSIs', 'Retry + DLQ strategies'],
      githubUrl: 'https://github.com/Eskinder185/cloud-launchpad-vpc-ec2',
      liveUrl: null,
      impact: ['Reduced alert fan-out time by ~76% (5s → 1.2s)', 'Monthly cost under $1 at portfolio traffic', 'p95 processing < 500 ms end-to-end'],
      scope: 'Event ingestion (S3/EventBridge), normalization Lambda, DynamoDB single-table, SNS fan-out, CloudWatch observability.',
      product: 'Serverless pipeline: event-driven normalization, idempotent writes, and multi-protocol notifications.',
    },
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
    {
      id: 'hybrid-cloud-security-lab',
      title: 'Hybrid Cloud Security Home Lab',
      subtitle: 'Enterprise-style cloud & network infrastructure for security and DevOps experimentation.',
      category: 'Infrastructure / Security',
      duration: 'Ongoing',
      team: 'Solo Engineer',
      client: 'Infrastructure Lab',
      image: img('Hybrid Cloud Security Home Lab.jpg'),
      technologies: ['Proxmox', 'Linux', 'Networking', 'Cloud Security', 'Virtualization', 'AWS Concepts'],
      challenge: 'Need a hands-on environment that mirrors enterprise cloud and security setups.',
      keyFeatures: ['Virtualization with Proxmox', 'Network segmentation', 'Storage services', 'Monitoring and observability'],
      technicalHighlights: ['Hybrid cloud design', 'Enterprise-style patterns', 'DevOps workflow experimentation'],
      results: ['Realistic lab for cloud and security learning', 'Reusable patterns for production architectures'],
      githubUrl: 'https://github.com/Eskinder185/Hybrid-Cloud-Security-Lab',
      liveUrl: null,
      impact: ['Realistic environment for security and cloud practice', 'Reusable architecture patterns for production'],
      scope: 'Proxmox virtualization, network segmentation, storage, and monitoring in a home-lab setup.',
      product: 'Documented hybrid lab with Proxmox, Linux, and AWS-style concepts for training and demos.',
    },
  ];

  const handleExternalLink = (url: string) => window.open(url, '_blank');
  const handleStudySelect = (studyId: string) => setSelectedStudy((curr) => (curr === studyId ? null : studyId));

  return (
    <PageLayout maxWidth="default">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Linear storytelling: Impact + Scope + Product. Quantifiable outcomes and 3D architecture placeholders.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-16">
        {caseStudies.map((study, index) => (
          <ScrollReveal key={study.id} staggerIndex={index}>
            <article className="rounded-2xl glass-panel border border-white/10 overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Visual: image + 3D diagram placeholder */}
                <div className="lg:col-span-2 relative">
                  <div className="relative h-56 lg:min-h-[220px] overflow-hidden">
                    <ImageWithFallback
                      src={`${study.image}?v=1`}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="px-3 py-1 bg-gradient-to-r from-violet-500 to-cyan-500 text-white border-none">
                        {study.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <ArchitectureDiagramPlaceholder label="3D architecture (Three.js)" />
                  </div>
                </div>

                {/* Linear Story: Impact + Scope + Product */}
                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col">
                  <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                  <p className="text-gray-300 text-sm mb-6">{study.subtitle}</p>

                  <div className="grid grid-cols-3 gap-2 mb-6 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {study.duration}</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {study.team}</span>
                    <span className="flex items-center gap-1"><Target className="w-3 h-3" /> {study.client}</span>
                  </div>

                  <div className="space-y-6 flex-1">
                    <section>
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-violet-300 uppercase tracking-wider mb-2">
                        <Zap className="w-4 h-4" /> Impact
                      </h3>
                      <ul className="space-y-1">
                        {study.impact.map((m, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-emerald-400 mt-0.5">•</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                        Scope
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.scope}</p>
                    </section>

                    <section>
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-amber-300/90 uppercase tracking-wider mb-2">
                        <Package className="w-4 h-4" /> Product
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.product}</p>
                    </section>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {study.technologies.slice(0, 5).map((tech, i) => (
                      <Badge key={i} variant="outline" className="px-2 py-1 text-xs bg-white/5 border-white/20 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                    {study.technologies.length > 5 && (
                      <Badge variant="outline" className="px-2 py-1 text-xs bg-violet-500/20 border-violet-500/50 text-violet-300">
                        +{study.technologies.length - 5}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button
                      onClick={() => handleStudySelect(study.id)}
                      className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold rounded-full"
                    >
                      <span className="flex items-center gap-2">
                        {selectedStudy === study.id ? 'Hide Details' : 'Read Full Case Study'}
                        <ArrowRight className={`w-4 h-4 ${selectedStudy === study.id ? 'rotate-90' : ''}`} />
                      </span>
                    </Button>
                    {study.githubUrl && (
                      <Button
                        onClick={() => handleExternalLink(study.githubUrl!)}
                        variant="outline"
                        size="sm"
                        className="border-white/20 hover:border-violet-500/50 text-gray-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Repo
                      </Button>
                    )}
                    {study.liveUrl && (
                      <Button onClick={() => handleExternalLink(study.liveUrl!)} size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Expandable details (existing structure) */}
              {selectedStudy === study.id && (
                <motion.div
                  className="border-t border-white/10 bg-white/5 p-8"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-red-400">The Problem</h3>
                        <p className="text-gray-300 leading-relaxed text-sm">{study.challenge}</p>
                      </div>
                      {study.diagram && (
                        <div>
                          <h3 className="text-lg font-bold mb-2 text-blue-400">Architecture</h3>
                          <p className="text-gray-300 font-mono text-sm">{study.diagram}</p>
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-violet-400">Key Features</h3>
                        <ul className="space-y-1 text-sm text-gray-300">
                          {study.keyFeatures.map((f, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-violet-400">•</span> {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {study.success?.length ? (
                        <div>
                          <h3 className="text-lg font-bold mb-2 text-teal-400">Success Metrics</h3>
                          <ul className="space-y-1 text-sm text-gray-300">
                            {study.success.map((s, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-emerald-400">•</span> {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {study.decisions?.length ? (
                        <div>
                          <h3 className="text-lg font-bold mb-2 text-orange-400">Key Decisions</h3>
                          <ul className="space-y-1 text-sm text-gray-300">
                            {study.decisions.map((d, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-amber-400">•</span> {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {study.security?.length ? (
                        <div>
                          <h3 className="text-lg font-bold mb-2 text-pink-400">Security</h3>
                          <ul className="space-y-1 text-sm text-gray-300">
                            {study.security.map((sec, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-fuchsia-400">•</span> {sec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-cyan-400">Results</h3>
                        <ul className="space-y-1 text-sm text-gray-300">
                          {study.results.map((r, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-cyan-400">•</span> {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-indigo-400">Technical Highlights</h3>
                        <ul className="space-y-1 text-sm text-gray-300">
                          {study.technicalHighlights.map((t, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-indigo-400">•</span> {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </article>
          </ScrollReveal>
        ))}
      </div>

      <div className="text-center mt-16">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          variant="outline"
          className="border-white/20 hover:border-violet-500/50 text-gray-300 hover:text-white"
        >
          Back to Top
        </Button>
      </div>
    </PageLayout>
  );
};

export default CaseStudiesPage;
