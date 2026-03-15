import React from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { scrollReveal, defaultViewport } from '../utils/animations';

interface ScrollRevealProps extends Omit<MotionProps, 'initial' | 'animate' | 'whileInView' | 'viewport'> {
  children: React.ReactNode;
  /** Override viewport options */
  viewport?: { once?: boolean; margin?: string; amount?: number };
  /** Stagger index for child stagger */
  staggerIndex?: number;
}

/**
 * Wraps content and animates it into view on scroll. Uses Framer Motion's whileInView
 * for 60fps-friendly scroll animations with a single intersection observer.
 */
const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  viewport = defaultViewport,
  staggerIndex = 0,
  ...rest
}) => {
  const delay = staggerIndex * 0.08;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: scrollReveal.hidden,
        visible: {
          ...scrollReveal.visible,
          transition: { ...scrollReveal.visible.transition, delay },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
