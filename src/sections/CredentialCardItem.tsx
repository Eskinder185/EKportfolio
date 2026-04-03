import React from 'react';

export type CredentialCardData = {
  title: string;
  org: string;
  icon: string;
  gradient: string;
  inProgress?: boolean;
};

export function CredentialCardItem({ c }: { c: CredentialCardData }) {
  return (
    <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20">
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${c.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
      >
        <span className="text-xl" aria-hidden>
          {c.icon}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-2">
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

      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${c.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}
      />

      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${c.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm`}
      />
    </div>
  );
}
