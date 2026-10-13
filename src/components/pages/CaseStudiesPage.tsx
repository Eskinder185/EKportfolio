import { applicationCaseStudies } from '../../data/application-case-studies';
import { projectCoverUrl } from '../../data/project-covers';
import { networkCaseStudies } from '../../data/network-case-studies';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowRight, Clock, Users, Target, ExternalLink, Zap, Package } from 'lucide-react';
import ProjectCover from '../ui/ProjectCover';
import PageLayout from '../PageLayout';
import ScrollReveal from '../ScrollReveal';
import { fadeInUp } from '../../utils/animations';

export type Study = {
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

  const caseStudies = [...networkCaseStudies, ...applicationCaseStudies];

  const orderedCaseStudies = caseStudies.map(study => ({
    ...study,
    image: projectCoverUrl(study.id, study.image)
  })).sort((a,b) => {
    const order=['netshield','aegissoc','professionaldev','tewahedodaily'];
    const rank=(id:string)=>{const position=order.indexOf(id);return position<0?order.length:position;};
    return rank(a.id)-rank(b.id);
  });

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
        {orderedCaseStudies.map((study, index) => (
          <ScrollReveal key={study.id} staggerIndex={index} className="w-full min-w-0 max-w-full">
            <article className="rounded-2xl glass-panel border border-white/10 overflow-hidden w-full min-w-0 max-w-full">
              <div className="grid lg:grid-cols-5 gap-0 w-full min-w-0">
                {/* Visual: image */}
                <div className="lg:col-span-2 relative min-w-0">
                  <div className="relative h-56 lg:min-h-[220px] overflow-hidden">
                    <ProjectCover
                      id={study.id}
                      cover={study.image}
                      title={study.title}
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
