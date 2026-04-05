import React, { useEffect, useMemo, useRef, useState } from 'react';

/**
 * Single source of truth for site-wide background.
 * Premium, restrained: dark base + 1-2 soft radial light sources + subtle technical grid + vignette.
 * pointer-events-none + -z-10 so it sits behind all sections and does not block scroll.
 * Minimal motion only (slow drift + optional cursor-reactive glow).
 */
const AnimatedBackground: React.FC = () => {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mql) return;

    const update = () => setPrefersReducedMotion(!!mql.matches);
    update();

    // Safari compatibility
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', update);
      return () => mql.removeEventListener('change', update);
    }

    // eslint-disable-next-line deprecation/deprecation
    mql.addListener(update);
    // eslint-disable-next-line deprecation/deprecation
    return () => mql.removeListener(update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!glowRef.current) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const startX = w * 0.5;
    const startY = h * 0.45;
    targetRef.current = { x: startX, y: startY };
    currentRef.current = { x: startX, y: startY };
    glowRef.current.style.setProperty('--cx', `${startX}px`);
    glowRef.current.style.setProperty('--cy', `${startY}px`);

    const tick = () => {
      const el = glowRef.current;
      if (!el) return;

      const t = targetRef.current;
      const c = currentRef.current;

      // Easing / smoothing factor
      c.x += (t.x - c.x) * 0.10;
      c.y += (t.y - c.y) * 0.10;

      el.style.setProperty('--cx', `${c.x}px`);
      el.style.setProperty('--cy', `${c.y}px`);

      // Continue animating while we are still converging
      const dx = Math.abs(t.x - c.x);
      const dy = Math.abs(t.y - c.y);
      if (dx > 0.5 || dy > 0.5) {
        rafRef.current = window.requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current == null) rafRef.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [prefersReducedMotion]);

  const ambientLightStyle = useMemo(() => {
    const animation = prefersReducedMotion ? undefined : 'mesh-shift 160s ease-in-out infinite';
    return {
      background: `
        radial-gradient(ellipse 65% 55% at 45% 22%, rgba(139, 92, 246, 0.11) 0%, rgba(139, 92, 246, 0.035) 44%, transparent 72%),
        radial-gradient(ellipse 55% 48% at 78% 65%, rgba(34, 211, 238, 0.08) 0%, rgba(34, 211, 238, 0.025) 42%, transparent 78%)
      `,
      backgroundSize: '220% 220%',
      opacity: 0.88,
      animation,
      willChange: 'background-position',
    } as React.CSSProperties;
  }, [prefersReducedMotion]);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#05050B]" />

      {/* 1) Soft cinematic light sources (low opacity, very blurred by gradient falloff) */}
      <div
        className="absolute inset-0"
        style={{
          ...ambientLightStyle,
        }}
      />

      {/* 2) Cursor-reactive ambient glow (soft + performance-friendly via CSS vars) */}
      <div
        ref={glowRef}
        className="absolute inset-0"
        style={
          {
            background: `
              radial-gradient(800px circle at var(--cx, 50%) var(--cy, 50%),
                rgba(139, 92, 246, 0.14) 0%,
                rgba(34, 211, 238, 0.07) 22%,
                transparent 58%)
            `,
            opacity: 0.65,
            filter: 'blur(18px)',
            transition: prefersReducedMotion ? undefined : 'opacity 0.2s ease-out',
          } as React.CSSProperties
        }
      />

      {/* 3) Subtle technical grid / mesh overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(255,255,255,0.032) 1px, transparent 1px),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.026) 1px, transparent 1px),
            repeating-linear-gradient(45deg, rgba(34,211,238,0.028) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px, 72px 72px, 144px 144px',
          backgroundPosition: '0 0, 0 0, 0 0',
          opacity: 0.055,
          animation: prefersReducedMotion ? undefined : 'mesh-shift 210s ease-in-out infinite',
          willChange: 'background-position',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 78%)',
        }}
      />

      {/* 4) Vignette for depth + readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 72%, rgba(0,0,0,0.88) 100%)',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
