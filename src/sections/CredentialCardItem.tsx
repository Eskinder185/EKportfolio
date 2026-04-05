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
    <div className="group relative p-6 rounded-2xl border border-[color:var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-sm shadow-[var(--shadow-inset-soft)] transition-[background-color,border-color,box-shadow,transform] duration-300 hover:bg-[var(--surface-card-hover)] hover:border-[color:var(--border-muted)] hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.38)]">
      <div
        className={`w-12 h-12 rounded-[var(--radius-ui)] bg-gradient-to-r ${c.gradient} p-3 mb-4 group-hover:scale-[1.04] transition-transform duration-300 flex items-center justify-center shadow-[var(--shadow-inset-soft)]`}
      >
        <span className="text-xl" aria-hidden>
          {c.icon}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h3 className="font-bold text-white group-hover:text-violet-200/95 transition-colors duration-300">
          {c.title}
        </h3>
        {c.inProgress && (
          <span className="rounded-md border border-amber-300/35 bg-amber-400/10 px-2 py-0.5 text-[10px] tracking-wide text-amber-200/95">
            In Progress
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground group-hover:text-foreground/75 transition-colors duration-300">
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
