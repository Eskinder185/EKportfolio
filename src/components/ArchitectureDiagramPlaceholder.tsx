import React from 'react';
import { Box } from 'lucide-react';

/**
 * Placeholder for a 3D architecture diagram (Three.js).
 * Replace this container's content with a React Three Fiber or raw Three.js scene when ready.
 */
const ArchitectureDiagramPlaceholder: React.FC<{ label?: string }> = ({
  label = '3D architecture diagram (Three.js)',
}) => (
  <div
    className="relative flex flex-col items-center justify-center min-h-[200px] rounded-xl border border-dashed border-white/20 bg-white/5 text-gray-400"
    aria-label={label}
  >
    <Box className="w-10 h-10 mb-3 opacity-50" />
    <span className="text-sm font-medium">{label}</span>
    <span className="text-xs mt-1 text-gray-500">Placeholder — integrate Three.js scene here</span>
  </div>
);

export default ArchitectureDiagramPlaceholder;
