import React from 'react';
import type { MaxWidthKey } from '../utils/layout';
import { PAGE_WRAPPER_CLASS, MAX_WIDTH } from '../utils/layout';

interface PageLayoutProps {
  children: React.ReactNode;
  /** Content width: narrow (max-w-4xl), default (max-w-6xl), wide (max-w-7xl) */
  maxWidth?: MaxWidthKey;
  /** Optional extra class on the inner container */
  className?: string;
}

/**
 * Shared page layout: same wrapper and content width for all non-hero pages.
 * Ensures consistent pt-24 (nav clearance), pb-20, px-6 and centered content.
 */
const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  maxWidth = 'default',
  className = '',
}) => {
  return (
    <div className={PAGE_WRAPPER_CLASS}>
      <div className={`${MAX_WIDTH[maxWidth]} w-full min-w-0 max-w-full ${className}`.trim()}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
