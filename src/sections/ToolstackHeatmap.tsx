// src/sections/ToolstackHeatmap.tsx — Artifact Bento Inventory (AWS, Security, AI)
import React from 'react';
import { Cloud, Shield, Brain } from 'lucide-react';

const clusters = [
  {
    id: 'aws',
    label: 'AWS',
    subtitle: 'Artifact of Thinking',
    icon: Cloud,
    gradient: 'from-orange-500 to-amber-600',
    artifact: 'vpc',
  },
  {
    id: 'security',
    label: 'Security',
    subtitle: 'Artifact of Thinking',
    icon: Shield,
    gradient: 'from-violet-500 to-purple-600',
    artifact: 'typescript',
  },
  {
    id: 'ai',
    label: 'AI',
    subtitle: 'Artifact of Thinking',
    icon: Brain,
    gradient: 'from-emerald-500 to-teal-600',
    artifact: 'confusion-matrix',
  },
] as const;

function TypeScriptSnippet() {
  return (
    <div className="p-4 font-mono text-xs leading-relaxed bg-black/30 rounded-lg border border-white/10 overflow-x-auto">
      <pre className="text-gray-300">
        <span className="text-purple-400">async function</span>{' '}
        <span className="text-cyan-300">fetchSecure</span>
        <span className="text-gray-500">{'<'}</span>
        <span className="text-amber-300">T</span>
        <span className="text-gray-500">{'>'}</span>
        <span className="text-gray-500">(</span>
        <span className="text-orange-300">url</span>
        <span className="text-gray-500">: string)</span>
        <span className="text-gray-500">: Promise</span>
        <span className="text-gray-500">{'<'}</span>
        <span className="text-amber-300">T</span>
        <span className="text-gray-500">{'>'}</span>
        <span className="text-gray-500">{' {'}</span>
        {'\n  '}
        <span className="text-purple-400">const</span> res ={' '}
        <span className="text-purple-400">await</span>{' '}
        <span className="text-cyan-300">fetch</span>
        <span className="text-gray-500">(url);</span>
        {'\n  '}
        <span className="text-purple-400">if</span>
        <span className="text-gray-500"> (!res.ok)</span>{' '}
        <span className="text-purple-400">throw new</span>{' '}
        <span className="text-amber-300">Error</span>
        <span className="text-gray-500">(res.statusText);</span>
        {'\n  '}
        <span className="text-purple-400">return</span> res
        <span className="text-gray-500">.</span>
        <span className="text-cyan-300">json</span>
        <span className="text-gray-500">();</span>
        {'\n'}
        <span className="text-gray-500">{'}'}</span>
      </pre>
    </div>
  );
}

function VPCDiagram() {
  return (
    <div className="p-4 flex items-center justify-center min-h-[140px] bg-black/20 rounded-lg border border-white/10">
      <svg viewBox="0 0 240 140" className="w-full max-w-[220px] h-auto" aria-hidden>
        <defs>
          <linearGradient id="vpc-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(251,146,60,0.2)" />
            <stop offset="100%" stopColor="rgba(245,158,11,0.15)" />
          </linearGradient>
          <linearGradient id="pub-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(34,211,238,0.15)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0.05)" />
          </linearGradient>
          <linearGradient id="priv-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(139,92,246,0.12)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0.04)" />
          </linearGradient>
        </defs>
        {/* VPC boundary */}
        <rect x="10" y="10" width="220" height="120" rx="6" fill="url(#vpc-fill)" stroke="rgba(251,146,60,0.5)" strokeWidth="1.5" />
        <text x="120" y="26" textAnchor="middle" className="fill-gray-400" fontSize="10" fontFamily="monospace">VPC 10.0.0.0/16</text>
        {/* Public subnet */}
        <rect x="20" y="38" width="95" height="42" rx="4" fill="url(#pub-fill)" stroke="rgba(34,211,238,0.45)" strokeWidth="1" />
        <text x="67" y="54" textAnchor="middle" className="fill-cyan-400/90" fontSize="8" fontFamily="monospace">Public A</text>
        <text x="67" y="66" textAnchor="middle" className="fill-gray-500" fontSize="7">10.0.1.0/24</text>
        <circle cx="67" cy="74" r="4" fill="rgba(34,211,238,0.4)" />
        <text x="67" y="78" textAnchor="middle" className="fill-gray-500" fontSize="6">IGW</text>
        {/* Private subnet */}
        <rect x="125" y="38" width="95" height="42" rx="4" fill="url(#priv-fill)" stroke="rgba(139,92,246,0.45)" strokeWidth="1" />
        <text x="172" y="54" textAnchor="middle" className="fill-violet-400/90" fontSize="8" fontFamily="monospace">Private A</text>
        <text x="172" y="66" textAnchor="middle" className="fill-gray-500" fontSize="7">10.0.2.0/24</text>
        <rect x="166" y="70" width="12" height="8" rx="1" fill="rgba(139,92,246,0.35)" />
        <text x="172" y="78" textAnchor="middle" className="fill-gray-500" fontSize="6">NAT</text>
        {/* DB / internal */}
        <rect x="72" y="88" width="96" height="34" rx="4" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
        <text x="120" y="104" textAnchor="middle" className="fill-emerald-400/90" fontSize="8" fontFamily="monospace">Private B (DB)</text>
        <text x="120" y="116" textAnchor="middle" className="fill-gray-500" fontSize="7">10.0.3.0/24</text>
      </svg>
    </div>
  );
}

function ConfusionMatrixViz() {
  const cellClass = 'flex items-center justify-center text-[10px] font-semibold font-mono rounded border border-white/20';
  return (
    <div className="p-4 flex flex-col items-center gap-2 bg-black/20 rounded-lg border border-white/10">
      <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Confusion Matrix</span>
      <div className="grid grid-cols-2 gap-1.5">
        <div className={`${cellClass} bg-emerald-500/25 text-emerald-300 w-14 h-10`}>TP</div>
        <div className={`${cellClass} bg-rose-500/25 text-rose-300 w-14 h-10`}>FP</div>
        <div className={`${cellClass} bg-rose-500/25 text-rose-300 w-14 h-10`}>FN</div>
        <div className={`${cellClass} bg-emerald-500/25 text-emerald-300 w-14 h-10`}>TN</div>
      </div>
      <div className="flex gap-3 text-[8px] text-gray-500">
        <span>Pred ↑</span>
        <span>Actual →</span>
      </div>
    </div>
  );
}

export default function ToolstackHeatmap() {
  return (
    <section className="py-20 px-6" aria-labelledby="artifact-bento-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="artifact-bento-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Artifact Bento <span className="gradient-text">Inventory</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Each skill as a distinct tile with an Artifact of Thinking: architecture, code, and ML evaluation.
          </p>
        </div>

        <div className="bento-grid">
          {clusters.map((cluster) => {
            const IconComponent = cluster.icon;
            return (
              <div
                key={cluster.id}
                className="bento-tile bento-span-4 flex flex-col overflow-hidden glass-panel"
              >
                <div className="p-5 pb-3 flex items-center gap-3 border-b border-white/10">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cluster.gradient} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cluster.label}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{cluster.subtitle}</p>
                  </div>
                </div>
                <div className="p-5 pt-4 flex-1 min-h-0">
                  {cluster.artifact === 'typescript' && <TypeScriptSnippet />}
                  {cluster.artifact === 'vpc' && <VPCDiagram />}
                  {cluster.artifact === 'confusion-matrix' && <ConfusionMatrixViz />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
