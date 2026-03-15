// src/sections/EduCerts.tsx
import React from 'react';

type Card = {
  title: string;
  org: string;
  icon: string;          // swap for SVGs if you prefer
  inProgress?: boolean;  // shows a tiny badge
  gradient: string;      // gradient for hover effects
};

const education: Card[] = [
  { title: "B.S. Computer Science", org: "Southern New Hampshire University", icon: "🎓", gradient: "from-blue-500 to-blue-600" },
  { title: "Cloud Practitioner (Training)", org: "Per Scholas", icon: "☁️", gradient: "from-orange-500 to-amber-600" },
  { title: "Full-Stack Developer (Training)", org: "Springboard", icon: "💻", gradient: "from-emerald-500 to-teal-600" },
  { title: "M.S. Cybersecurity", org: "Western Governors University (WGU)", icon: "🛡️", gradient: "from-red-500 to-rose-600", inProgress: true },
];

const certs: Card[] = [
  { title: "AWS Certified AI Practitioner", org: "Amazon Web Services", icon: "🤖", inProgress: true, gradient: "from-violet-500 to-purple-600" },
  { title: "AWS Certified Solutions Architect", org: "Amazon Web Services", icon: "🏗️", gradient: "from-cyan-500 to-blue-600" },
  { title: "CompTIA Security+", org: "CompTIA", icon: "🔐", gradient: "from-indigo-500 to-sky-600" },
];

function CardItem({ c }: { c: Card }) {
  return (
    <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${c.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
        <span className="text-xl" aria-hidden>{c.icon}</span>
      </div>
      
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
          {c.title}
        </h3>
        {c.inProgress && (
          <span className="rounded-md border border-amber-300/30 bg-amber-300/10 px-2 py-0.5 text-[10px] tracking-wide text-amber-200 animate-pulse">
            In Progress
          </span>
        )}
      </div>
      
      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {c.org}
      </p>

      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${c.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`} />
      
      {/* Animated border */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${c.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm`} />
    </div>
  );
}

export default function EduCerts() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education <span className="gradient-text">&amp; Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My educational journey and professional certifications across cloud, security, and development.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Education</span>
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {education.map((c) => (
              <CardItem key={c.title} c={c} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Certifications</span>
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certs.map((c) => (
              <CardItem key={c.title} c={c} />
            ))}
          </div>
        </div>

        {/* Interactive stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {education.length + certs.length}
              </div>
              <div className="text-sm text-gray-400">Total Credentials</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {certs.filter(c => c.inProgress).length}
              </div>
              <div className="text-sm text-gray-400">In Progress</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {education.length}
              </div>
              <div className="text-sm text-gray-400">Degrees</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
