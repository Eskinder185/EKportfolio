/**
 * Shared layout constants — aligns with PAGE_LAYOUT_STRUCTURE_BACKGROUND_ANIMATION.md.
 * Use these so all pages follow the same layout pattern.
 */

/** Root wrapper for every non-hero page (clears fixed nav, consistent padding) */
export const PAGE_WRAPPER_CLASS = 'min-h-screen pt-24 pb-24 px-5 sm:px-8';

/** Content container max-widths */
export const MAX_WIDTH = {
  /** Experience, CTA on home */
  narrow: 'max-w-4xl mx-auto',
  /** About, Contact, Case Studies, Home sections */
  default: 'max-w-6xl mx-auto',
  /** Projects, Books */
  wide: 'max-w-7xl mx-auto',
} as const;

export type MaxWidthKey = keyof typeof MAX_WIDTH;
