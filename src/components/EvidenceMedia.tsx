import React, { useState } from 'react';
import EvidencePlaceholder, { type EvidencePlaceholderType } from './EvidencePlaceholder';
import { cn } from './ui/utils';

interface EvidenceMediaProps {
  image: string | null;
  alt: string;
  title: string;
  description: string;
  type: EvidencePlaceholderType;
  aspectRatio?: string;
  className?: string;
  showCaption?: boolean;
}

const base = (import.meta as any).env.BASE_URL as string;

function resolveImagePath(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${base}${path.replace(/^\/+/, '')}`;
}

export default function EvidenceMedia({
  image,
  alt,
  title,
  description,
  type,
  aspectRatio = '16 / 10',
  className,
  showCaption = true,
}: EvidenceMediaProps) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!image || imageFailed) {
    return (
      <EvidencePlaceholder
        title={title}
        description={description}
        type={type}
        aspectRatio={aspectRatio}
        className={className}
      />
    );
  }

  return (
    <figure className={cn('flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]', className)}>
      <div className="min-h-0 overflow-hidden bg-black/25" style={{ aspectRatio }}>
        <img
          src={resolveImagePath(image)}
          alt={alt}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className="h-full w-full object-cover"
        />
      </div>
      {showCaption && (
        <figcaption className="border-t border-white/10 p-4">
          <p className="font-semibold text-white">{title}</p>
          <p className="mt-1 text-sm leading-relaxed text-gray-400">{description}</p>
        </figcaption>
      )}
    </figure>
  );
}
