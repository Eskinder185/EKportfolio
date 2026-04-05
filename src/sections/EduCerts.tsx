// src/sections/EduCerts.tsx
import React from 'react';
import { CredentialCardItem, type CredentialCardData } from './CredentialCardItem';

const education: CredentialCardData[] = [
  { title: "B.S. Computer Science", org: "Southern New Hampshire University", icon: "🎓", gradient: "from-blue-500 to-blue-600" },
  { title: "Cloud Practitioner (Training)", org: "Per Scholas", icon: "☁️", gradient: "from-orange-500 to-amber-600" },
  { title: "Full-Stack Developer (Training)", org: "Springboard", icon: "💻", gradient: "from-emerald-500 to-teal-600" },
  { title: "M.S. Cybersecurity", org: "Western Governors University (WGU)", icon: "🛡️", gradient: "from-red-500 to-rose-600", inProgress: true },
];

export default function EduCerts() {
  const inProgressDegrees = education.filter((c) => c.inProgress).length;

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Formal training and degree programs that shaped my foundation in computing and security.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {education.map((c) => (
            <CredentialCardItem key={c.title} c={c} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 rounded-2xl border border-[color:var(--border-subtle)] bg-[var(--surface-card)] shadow-[var(--shadow-inset-soft)] backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {education.length}
              </div>
              <div className="text-sm text-gray-400">Programs</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {inProgressDegrees}
              </div>
              <div className="text-sm text-gray-400">In Progress</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
