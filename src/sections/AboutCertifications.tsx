import React from 'react';
import { CredentialCardItem, type CredentialCardData } from './CredentialCardItem';

const certifications: CredentialCardData[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    org: 'AWS',
    icon: '☁️',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    org: 'AWS',
    icon: '🏗️',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'CompTIA Security+ ce Certification',
    org: 'CompTIA',
    icon: '🔐',
    gradient: 'from-indigo-500 to-sky-600',
  },
  {
    title: 'ISC2 Certified in Cybersecurity (CC)',
    org: 'ISC2',
    icon: '🛡️',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Six Sigma Yellow Belt Professional',
    org: '6sigmastudy / VMEdu',
    icon: '📊',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'OSHA 10 Hour General Industry Safety and Health',
    org: 'NYC Construction Safety Training LLC',
    icon: '⚠️',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Cisco Certified Network Associate (CCNA)',
    org: 'Cisco',
    icon: '🌐',
    gradient: 'from-slate-500 to-slate-600',
    inProgress: true,
  },
];

export default function AboutCertifications() {
  const inProgressCerts = certifications.filter((c) => c.inProgress).length;

  return (
    <section className="py-20 px-6" aria-labelledby="certifications-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="certifications-heading" className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Industry certifications and professional credentials that strengthen my foundation
            across cloud, cybersecurity, operations, and continuous improvement.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <CredentialCardItem key={c.title} c={c} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 rounded-2xl border border-[color:var(--border-subtle)] bg-[var(--surface-card)] shadow-[var(--shadow-inset-soft)] backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{certifications.length}</div>
              <div className="text-sm text-gray-400">Credentials</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{inProgressCerts}</div>
              <div className="text-sm text-gray-400">In Progress</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
