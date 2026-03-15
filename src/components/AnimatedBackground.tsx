import React, { useMemo } from 'react';

/**
 * Single source of truth for global background (PAGE_LAYOUT_STRUCTURE_BACKGROUND_ANIMATION.md).
 * Fixed, GPU-accelerated layer: gradient mesh + glowing blobs.
 * pointer-events-none + -z-10 so it sits behind all sections and does not block scroll.
 * No page-specific background logic lives here; pages rely on this component only.
 */
const AnimatedBackground: React.FC = () => {
  const blobs = useMemo(
    () => [
      { size: 280, x: '12%', y: '18%', color: 'rgba(139, 92, 246, 0.32)', duration: 28, variant: 'a' as const },
      { size: 200, x: '78%', y: '22%', color: 'rgba(34, 211, 238, 0.28)', duration: 24, variant: 'b' as const },
      { size: 320, x: '48%', y: '72%', color: 'rgba(59, 130, 246, 0.22)', duration: 32, variant: 'a' as const },
      { size: 160, x: '88%', y: '78%', color: 'rgba(139, 92, 246, 0.26)', duration: 26, variant: 'b' as const },
      { size: 220, x: '18%', y: '58%', color: 'rgba(34, 211, 238, 0.2)', duration: 30, variant: 'a' as const },
      { size: 180, x: '62%', y: '42%', color: 'rgba(99, 102, 241, 0.18)', duration: 22, variant: 'b' as const },
    ],
    []
  );

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden
    >
      {/* Base dark blue so content area is never too bright */}
      <div className="absolute inset-0 bg-[#0b0b12]" />

      {/* Subtle animated gradient mesh — violet, cyan, dark blue */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: `
            radial-gradient(ellipse 70% 45% at 15% 25%, rgba(88, 28, 135, 0.25) 0%, transparent 55%),
            radial-gradient(ellipse 55% 70% at 88% 18%, rgba(6, 78, 119, 0.22) 0%, transparent 55%),
            radial-gradient(ellipse 65% 55% at 52% 82%, rgba(30, 58, 138, 0.28) 0%, transparent 55%),
            radial-gradient(ellipse 50% 50% at 50% 50%, rgba(45, 55, 72, 0.15) 0%, transparent 70%)
          `,
          backgroundSize: '220% 220%',
          animation: 'mesh-shift 24s ease-in-out infinite',
          willChange: 'background-position',
        }}
      />

      {/* Glowing blurred shapes — slow organic motion, GPU-friendly transform only */}
      {blobs.map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-[80px]"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            background: blob.color,
            transform: 'translate(-50%, -50%)',
            animation: `blob-float-${blob.variant} ${blob.duration}s ease-in-out infinite`,
            animationDelay: `${i * 2.4}s`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
