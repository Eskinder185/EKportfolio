import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import EvidenceMedia from './EvidenceMedia';
import { Button } from './ui/button';
import type { CaseStudyEvidence } from '../data/case-studies';

interface ProjectEvidenceGalleryProps {
  projectId: string;
  evidence: CaseStudyEvidence[];
}

function EvidenceItem({ item }: { item: CaseStudyEvidence }) {
  return (
    <EvidenceMedia
      image={item.image}
      alt={item.alt}
      title={item.title}
      description={item.description}
      type={item.type}
      aspectRatio="16 / 10"
      className="h-full min-h-[240px]"
    />
  );
}

export default function ProjectEvidenceGallery({ projectId, evidence }: ProjectEvidenceGalleryProps) {
  const pageSize = 3;
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(evidence.length / pageSize);
  const safePage = Math.min(page, Math.max(pageCount - 1, 0));
  const visibleEvidence = useMemo(
    () => evidence.slice(safePage * pageSize, safePage * pageSize + pageSize),
    [evidence, safePage],
  );
  const firstVisible = safePage * pageSize + 1;
  const lastVisible = Math.min(firstVisible + visibleEvidence.length - 1, evidence.length);

  return (
    <section aria-labelledby={`${projectId}-evidence-heading`} className="rounded-2xl border border-white/10 bg-black/15 p-5 md:p-7">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-cyan-300">
            <ImageIcon className="h-4 w-4" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">Evidence gallery</span>
          </div>
          <h3 id={`${projectId}-evidence-heading`} className="text-2xl font-bold text-white">
            Evidence
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-400">
            Placeholder slots remain visible until verified, sanitized project images are added.
          </p>
        </div>
        <p className="text-xs text-gray-500" aria-live="polite">
          Showing {firstVisible}–{lastVisible} of {evidence.length}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleEvidence.map((item) => (
          <EvidenceItem key={item.title} item={item} />
        ))}
      </div>

      {pageCount > 1 && (
        <div className="mt-6 flex flex-col items-stretch justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => setPage((current) => Math.max(0, current - 1))}
            disabled={safePage === 0}
            className="w-full sm:w-auto"
          >
            <ChevronLeft aria-hidden="true" />
            Previous evidence
          </Button>
          <div className="flex items-center justify-center gap-2" aria-label={`Evidence page ${safePage + 1} of ${pageCount}`}>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                aria-label={`Show evidence page ${index + 1}`}
                aria-current={safePage === index ? 'page' : undefined}
                className="group flex h-8 w-8 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <span
                  aria-hidden="true"
                  className={`h-2.5 rounded-full transition-all ${
                    safePage === index ? 'w-6 bg-cyan-300' : 'w-2.5 bg-white/20 group-hover:bg-white/35'
                  }`}
                />
              </button>
            ))}
          </div>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => setPage((current) => Math.min(pageCount - 1, current + 1))}
            disabled={safePage === pageCount - 1}
            className="w-full sm:w-auto"
          >
            Next evidence
            <ChevronRight aria-hidden="true" />
          </Button>
        </div>
      )}
    </section>
  );
}
