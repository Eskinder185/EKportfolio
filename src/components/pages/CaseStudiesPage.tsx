import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowRight, Clock, Users, Target, ExternalLink, Zap, Package } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import PageLayout from '../PageLayout';
import ScrollReveal from '../ScrollReveal';
import { fadeInUp } from '../../utils/animations';

const base = (import.meta as any).env.BASE_URL as string;
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
    {
      id: 'orthodoxpath',
      title: 'OrthodoxPath — Faith-Centered Learning Platform',
      subtitle:
        'A practice-first Ethiopian Orthodox learning experience: guided prayer and mezmur workflows, language support, liturgical calendar awareness, and respectful link-out to trusted sources.',
      category: 'Product / UX / EdTech',
      duration: 'Concept & prototype',
      team: 'Solo Developer',
      client: 'Personal Project',
      image: img('ortho.jpg'),
      technologies: [
        'React',
        'Vite',
        'Modular pages',
        'Component architecture',
        'Content-driven UI',
        'YouTube embed workflow',
        'Calendar data model (planned)',
      ],
      challenge:
        'Religious sites often behave as static archives: scattered materials, weak learning paths, missing memorization tools, and copyright barriers to hosting prayer, mezmur, and liturgy directly. Ethiopian Orthodox learners—especially in the diaspora—also face language friction (Amharic / Ge’ez) and calendar complexity without a single calm, structured place to practice.',
      success: [
        'Practice-first positioning reduces copyright risk while staying useful',
        'Clear split: original guidance on-platform, sacred texts via trusted external links',
        'Mezmur Practice Workspace: listen, paste lyrics, replay, and memorize in one flow',
        'IA reads as a real learning product (Home → Learn → Practice → Language → Calendar → Progress)',
      ],
      diagram:
        'IA: Home | Learn | Practice | Language | Calendar | Progress. Practice hub: prepare → listen → repeat → read → memorize → review. External resources: open originals in new tab (prayers, mezmur, liturgy PDFs, pronunciation, alphabet tools). Calendar: Gregorian ↔ Ethiopian date, fasting, feasts, weekday themes (data-driven roadmap).',
      decisions: [
        'Practice-first platform, not a copied-content repository',
        'Original summaries + structured flows + memorization support instead of reproducing restricted texts',
        'User-controlled workspace (paste lyrics + embed video) for legal, interactive study',
        'Respectful gamification: streaks, milestones, paths—no loud or childish mechanics',
      ],
      security: [
        'Copyright-aware design: link-out strategy for protected prayer, mezmur, audio, and PDFs',
        'Transparent separation between platform copy and third-party sources',
      ],
      results: [
        'Demonstrates product thinking across strategy, UX, IA, and front-end planning under real constraints',
        'Turned content limitations into a clearer, more defensible portfolio narrative',
        'Scoped a scalable path: richer practice, calendar data, progress persistence, and habit features',
      ],
      keyFeatures: [
        'Six-section IA: Home, Learn, Practice, Language, Calendar, Progress',
        'Practice flows with guided steps (prepare, listen, repeat, read, memorize, review)',
        'Mezmur Practice Workspace: lyrics area + YouTube embed, replay, chunking, memorization',
        'External resource system: trusted links in new tabs for prayers, mezmur, liturgy, media',
        'Calendar direction: Ethiopian ↔ Gregorian, fasting, feasts, weekday meaning, seasons',
        'Language support framing: alphabet, writing, pronunciation alongside faith content',
        'Progress area for paths, consistency, milestones, and review habits (roadmap)',
        'Three-layer content model: original copy, external resources, structured calendar data',
      ],
      technicalHighlights: [
        'React + Vite with modular pages and reusable layout/section components',
        'Separation of content and layout for maintainable page text and future data',
        'Embedded YouTube workflow for listen-along / transcription-style practice',
        'Future-ready Ethiopian Orthodox calendar data model and display layers',
        'Foundation for session persistence, notes, and gentle gamification without scope creep in v1',
      ],
      githubUrl: 'https://github.com/Eskinder185/OrthodoxPath',
      liveUrl: 'https://orthodoxpath.pages.dev/',
      impact: [
        'Copyright-safe architecture: learning value without hosting restricted liturgical corpora',
        'Single structured product story for beginners, returning learners, and diaspora audiences',
        'Interactive differentiator (Mezmur workspace) vs. typical static religious sites',
      ],
      scope:
        'End-to-end concept for a calm, respectful learning companion: six top-level destinations, practice-centric flows, Amharic/Ge’ez support, Ethiopian calendar education, progress tracking hooks, and a content strategy that balances originality, reverence, and legal reuse boundaries.',
      product:
        'OrthodoxPath is a guided, practice-first web experience—original intros and workflows on-site, sacred and copyrighted materials reached through curated external links, plus a roadmap for calendar logic, memorization engines, and habit-based engagement tuned for faith-appropriate tone.',
    },
  ];

  const handleExternalLink = (url: string) => window.open(url, '_blank');
  const handleStudySelect = (studyId: string) => setSelectedStudy((curr) => (curr === studyId ? null : studyId));

  return (
    <PageLayout maxWidth="default" className="min-w-0">
      <ScrollReveal className="w-full min-w-0 max-w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Linear storytelling: Impact + Scope + Product. Quantifiable outcomes and architecture visuals.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-16 w-full min-w-0 max-w-full">
        {caseStudies.map((study, index) => (
          <ScrollReveal key={study.id} staggerIndex={index} className="w-full min-w-0 max-w-full">
            <article className="rounded-2xl glass-panel border border-white/10 overflow-hidden w-full min-w-0 max-w-full">
              <div className="grid lg:grid-cols-5 gap-0 w-full min-w-0">
                {/* Visual: image */}
                <div className="lg:col-span-2 relative min-w-0">
                  <div className="relative h-56 lg:min-h-[220px] overflow-hidden">
                    <ImageWithFallback
                      src={`${study.image}?v=1`}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-auto max-w-[calc(100%-1.5rem)] sm:max-w-[min(100%,20rem)]">
                      <Badge className="px-3 py-1.5 bg-gradient-to-r from-violet-500 to-cyan-500 text-white border-none !whitespace-normal text-left leading-snug max-w-full min-w-0 shrink items-start justify-start h-auto">
                        {study.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Linear Story: Impact + Scope + Product */}
                <div className="lg:col-span-3 p-4 sm:p-6 lg:p-8 flex flex-col min-w-0 max-w-full">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 break-words">{study.title}</h2>
                  <p className="text-gray-300 text-sm mb-6 break-words">{study.subtitle}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5 min-w-0"><Clock className="w-3 h-3 shrink-0" /> <span className="break-words">{study.duration}</span></span>
                    <span className="flex items-center gap-1.5 min-w-0"><Users className="w-3 h-3 shrink-0" /> <span className="break-words">{study.team}</span></span>
                    <span className="flex items-center gap-1.5 min-w-0"><Target className="w-3 h-3 shrink-0" /> <span className="break-words">{study.client}</span></span>
                  </div>

                  <div className="space-y-6 flex-1">
                    <section>
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-violet-300 uppercase tracking-wider mb-2">
                        <Zap className="w-4 h-4" /> Impact
                      </h3>
                      <ul className="space-y-1">
                        {study.impact.map((m, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start gap-2 min-w-0">
                            <span className="text-emerald-400 mt-0.5 shrink-0">•</span>
                            <span className="break-words min-w-0">{m}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                        Scope
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed break-words">{study.scope}</p>
                    </section>

                    <section>
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-amber-300/90 uppercase tracking-wider mb-2">
                        <Package className="w-4 h-4" /> Product
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed break-words">{study.product}</p>
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

                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6 w-full min-w-0">
                    <Button
                      onClick={() => handleStudySelect(study.id)}
                      className="w-full sm:w-auto bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold rounded-full shrink-0"
                    >
                      <span className="flex items-center justify-center gap-2 text-center">
                        {selectedStudy === study.id ? 'Hide Details' : 'Read Full Case Study'}
                        <ArrowRight className={`w-4 h-4 shrink-0 ${selectedStudy === study.id ? 'rotate-90' : ''}`} />
                      </span>
                    </Button>
                    <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto min-w-0">
                    {study.githubUrl && (
                      <Button
                        onClick={() => handleExternalLink(study.githubUrl!)}
                        variant="outline"
                        size="sm"
                        className="flex-1 sm:flex-initial min-w-[7rem] border-white/20 hover:border-violet-500/50 text-gray-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 shrink-0" />
                        Repo
                      </Button>
                    )}
                    {study.liveUrl && (
                      <Button onClick={() => handleExternalLink(study.liveUrl!)} size="sm" className="flex-1 sm:flex-initial min-w-[7rem] bg-cyan-500 hover:bg-cyan-600 text-white">
                        Live Demo
                      </Button>
                    )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Expandable details (existing structure) */}
              {selectedStudy === study.id && (
                <motion.div
                  className="border-t border-white/10 bg-white/5 p-4 sm:p-6 md:p-8 w-full min-w-0 max-w-full"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                >
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8 min-w-0">
                    <div className="space-y-6 min-w-0">
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold mb-2 text-red-400">The Problem</h3>
                        <p className="text-gray-300 leading-relaxed text-sm break-words">{study.challenge}</p>
                      </div>
                      {study.diagram && (
                        <div className="min-w-0">
                          <h3 className="text-lg font-bold mb-2 text-blue-400">Architecture</h3>
                          <p className="text-gray-300 font-mono text-xs sm:text-sm break-words whitespace-pre-wrap">{study.diagram}</p>
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-violet-400">Key Features</h3>
                        <ul className="space-y-1 text-sm text-gray-300">
                          {study.keyFeatures.map((f, i) => (
                            <li key={i} className="flex items-start gap-2 min-w-0">
                              <span className="text-violet-400 shrink-0">•</span>
                              <span className="break-words min-w-0">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-6 min-w-0">
                      {study.success?.length ? (
                        <div className="min-w-0">
                          <h3 className="text-lg font-bold mb-2 text-teal-400">Success Metrics</h3>
                          <ul className="space-y-1 text-sm text-gray-300">
                            {study.success.map((s, i) => (
                              <li key={i} className="flex items-start gap-2 min-w-0">
                                <span className="text-emerald-400 shrink-0">•</span>
                                <span className="break-words min-w-0">{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {study.decisions?.length ? (
                        <div className="min-w-0">
                          <h3 className="text-lg font-bold mb-2 text-orange-400">Key Decisions</h3>
                          <ul className="space-y-1 text-sm text-gray-300">
                            {study.decisions.map((d, i) => (
                              <li key={i} className="flex items-start gap-2 min-w-0">
                                <span className="text-amber-400 shrink-0">•</span>
                                <span className="break-words min-w-0">{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {study.security?.length ? (
                        <div className="min-w-0">
                          <h3 className="text-lg font-bold mb-2 text-pink-400">Security</h3>
                          <ul className="space-y-1 text-sm text-gray-300">
                            {study.security.map((sec, i) => (
                              <li key={i} className="flex items-start gap-2 min-w-0">
                                <span className="text-fuchsia-400 shrink-0">•</span>
                                <span className="break-words min-w-0">{sec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold mb-2 text-cyan-400">Results</h3>
                        <ul className="space-y-1 text-sm text-gray-300">
                          {study.results.map((r, i) => (
                            <li key={i} className="flex items-start gap-2 min-w-0">
                              <span className="text-cyan-400 shrink-0">•</span>
                              <span className="break-words min-w-0">{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold mb-2 text-indigo-400">Technical Highlights</h3>
                        <ul className="space-y-1 text-sm text-gray-300">
                          {study.technicalHighlights.map((t, i) => (
                            <li key={i} className="flex items-start gap-2 min-w-0">
                              <span className="text-indigo-400 shrink-0">•</span>
                              <span className="break-words min-w-0">{t}</span>
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
