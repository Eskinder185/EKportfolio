// src/components/ui/ProjectCover.tsx
import React, { useEffect, useState } from 'react';
import { isGeneratedCover } from '../../data/project-covers';

type Props = {
  id: string;
  title: string;
  cover?: string;          // e.g. "/images/neon-meme-machine.jpg"
  className?: string;
};

const FallbackArt: React.FC<{ title: string; className?: string }> = ({ title, className }) => (
  <div className={`bg-gradient-to-br from-violet-600/30 to-cyan-600/30 flex items-center justify-center ${className}`}>
    {/* keep your nice generated/fallback art here */}
    <span className="text-white/80 text-sm">{title}</span>
  </div>
);

const ProjectCover: React.FC<Props> = ({ id, title, cover, className }) => {
  const [broken, setBroken] = useState(false);
  useEffect(() => setBroken(false), [cover]);

  if (!cover || broken) {
    return <FallbackArt title={title} className={className} />;
  }

  const picture = (
    <img
      src={cover}
      alt={isGeneratedCover(cover) ? `${title} — AI-generated project cover` : title}
      className={className}
      data-project-id={id}
      loading="lazy"
      decoding="async"
      onError={() => setBroken(true)}
    />
  );
  if (!isGeneratedCover(cover)) return picture;
  return (
    <div className="relative w-full h-full" data-generated-cover={id}>
      {picture}
      <span style={{position:'absolute',right:8,bottom:8,padding:'3px 6px',borderRadius:4,background:'rgba(0,0,0,.65)',color:'#fff',fontSize:10,lineHeight:'14px',pointerEvents:'none'}}>AI-generated cover</span>
    </div>
  );
};

export default ProjectCover;

