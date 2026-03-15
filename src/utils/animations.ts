import type { Variants } from 'framer-motion';

/** Shared easing curve for entrance and scroll animations */
export const EASING = [0.25, 0.46, 0.45, 0.94] as const;

/** Default stagger delay between children (seconds) */
export const STAGGER_CHILDREN = 0.08;

/** Duration for entrance animations */
export const DURATION_FAST = 0.25;
export const DURATION_NORMAL = 0.4;
export const DURATION_SLOW = 0.6;

/** Reusable Framer Motion variants for consistent UX */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_NORMAL, delay: i * STAGGER_CHILDREN, ease: EASING },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION_NORMAL } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION_NORMAL, ease: EASING } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION_NORMAL, ease: EASING } },
};

/** Page transition: fade + slight vertical slide */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASING } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
};

/** Scroll-triggered: use with motion.* and whileInView */
export const scrollReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASING },
  },
};

/** Intersection options for scroll animations - once, small margin */
export const defaultViewport = {
  once: true,
  margin: '-40px 0px -40px 0px',
  amount: 0.2,
} as const;

/** Hero section: staggered headline with fade-in-up, name glow */
export const heroHeadlineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 + i * 0.1, ease: EASING },
  }),
};
