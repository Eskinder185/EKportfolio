import React from 'react';
import {
  Award,
  ChartNoAxesCombined,
  Code2,
  FileText,
  GitCompareArrows,
  ImageIcon,
  Network,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { cn } from './ui/utils';

export type EvidencePlaceholderType =
  | 'architecture'
  | 'dashboard'
  | 'screenshot'
  | 'report'
  | 'certificate'
  | 'workflow'
  | 'before-after'
  | 'code-output';

type EvidencePlaceholderProps = {
  title: string;
  description: string;
  type: EvidencePlaceholderType;
  aspectRatio?: string;
  className?: string;
};

const typeConfig: Record<
  EvidencePlaceholderType,
  { label: string; icon: LucideIcon }
> = {
  architecture: { label: 'Architecture placeholder', icon: Network },
  dashboard: { label: 'Dashboard placeholder', icon: ChartNoAxesCombined },
  screenshot: { label: 'Screenshot placeholder', icon: ImageIcon },
  report: { label: 'Report placeholder', icon: FileText },
  certificate: { label: 'Certificate placeholder', icon: Award },
  workflow: { label: 'Workflow placeholder', icon: Workflow },
  'before-after': { label: 'Before-and-after placeholder', icon: GitCompareArrows },
  'code-output': { label: 'Code output placeholder', icon: Code2 },
};

export default function EvidencePlaceholder({
  title,
  description,
  type,
  aspectRatio = '16 / 9',
  className,
}: EvidencePlaceholderProps) {
  const { label, icon: Icon } = typeConfig[type];

  return (
    <div
      role="img"
      aria-label={`${title}. ${description}`}
      className={cn(
        'relative isolate flex min-h-40 w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-cyan-300/30 bg-white/[0.035] p-6 text-center shadow-[var(--shadow-inset-soft)]',
        className,
      )}
      style={{ aspectRatio }}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_58%),linear-gradient(135deg,rgba(139,92,246,0.08),transparent)]"
      />

      <div className="max-w-xs">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-cyan-200">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        <span className="mb-3 inline-flex rounded-full border border-amber-300/25 bg-amber-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-amber-200">
          {label}
        </span>
        <p className="text-base font-semibold text-white">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
      </div>
    </div>
  );
}
