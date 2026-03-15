// src/sections/ToolstackHeatmap.tsx
import React, { useState } from 'react';
import { Cloud, Code2, Settings, Shield } from 'lucide-react';

type Tool = {
  name: string;
  heat: "core" | "regular" | "learning"; // how strong / recent
};

type Group = {
  label: string;
  icon: React.ComponentType<any>;
  gradient: string;
  tools: Tool[];
};

const groups: Group[] = [
  {
    label: "AWS",
    icon: Cloud,
    gradient: "from-orange-500 to-amber-600",
    tools: [
      { name: "EC2", heat: "core" },
      { name: "S3", heat: "core" },
      { name: "IAM", heat: "core" },
      { name: "Lambda", heat: "regular" },
      { name: "CloudFront", heat: "regular" },
      { name: "DynamoDB", heat: "regular" },
      { name: "RDS", heat: "learning" },
      { name: "Budgets/Cost Alerts", heat: "regular" },
      { name: "GuardDuty", heat: "regular" },
    ],
  },
  {
    label: "Web",
    icon: Code2,
    gradient: "from-violet-500 to-purple-600",
    tools: [
      { name: "React", heat: "core" },
      { name: "TypeScript", heat: "core" },
      { name: "Node.js", heat: "regular" },
      { name: "Vite", heat: "regular" },
      { name: "Tailwind CSS", heat: "core" },
    ],
  },
  {
    label: "DevOps / IaC",
    icon: Settings,
    gradient: "from-cyan-500 to-blue-600",
    tools: [
      { name: "GitHub Actions (CI/CD)", heat: "regular" },
      { name: "Docker", heat: "regular" },
      { name: "Terraform", heat: "learning" },
      { name: "CloudFormation", heat: "learning" },
      { name: "Monitoring (CloudWatch)", heat: "regular" },
    ],
  },
  {
    label: "Security",
    icon: Shield,
    gradient: "from-emerald-500 to-teal-600",
    tools: [
      { name: "JWT / Auth", heat: "regular" },
      { name: "OWASP basics", heat: "regular" },
      { name: "Least-Privilege IAM", heat: "core" },
      { name: "Audit Logs", heat: "regular" },
    ],
  },
];

function chipClass(heat: Tool["heat"]) {
  switch (heat) {
    case "core":
      // brightest chip (heaviest usage / most recent)
      return "bg-white/15 border-white/20 text-white hover:bg-white/20 hover:border-white/30 hover:scale-105";
    case "regular":
      // medium chip
      return "bg-white/8 border-white/15 text-white/90 hover:bg-white/12 hover:border-white/25 hover:scale-105";
    default:
      // light chip (learning / less recent)
      return "bg-white/5 border-white/10 text-white/70 hover:bg-white/8 hover:border-white/20 hover:scale-105";
  }
}

export default function ToolstackHeatmap() {
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            My real tools, weighted by usage. Darker chips = more core/recent experience.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="rounded-md border border-white/20 bg-white/15 px-3 py-1 text-white text-xs font-medium">Core</span>
              <span className="text-gray-400">Expert level</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-md border border-white/15 bg-white/8 px-3 py-1 text-white/90 text-xs font-medium">Regular</span>
              <span className="text-gray-400">Proficient</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-white/70 text-xs font-medium">Learning</span>
              <span className="text-gray-400">Exploring</span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {groups.map((group, groupIndex) => {
            const IconComponent = group.icon;
            return (
              <article
                key={group.label}
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20"
                onMouseEnter={() => setHoveredGroup(group.label)}
                onMouseLeave={() => setHoveredGroup(null)}
              >
                {/* Header with icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${group.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
                      {group.label}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {group.tools.length} tools
                    </p>
                  </div>
                </div>

                {/* Tools grid */}
                <div className="flex flex-wrap gap-3">
                  {group.tools.map((tool, toolIndex) => (
                    <div
                      key={tool.name}
                      className={`relative rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${chipClass(tool.heat)}`}
                      aria-label={`${tool.name} – ${tool.heat}`}
                      title={`${tool.name} • ${tool.heat} proficiency`}
                    >
                      {tool.name}
                      
                      {/* Hover glow effect */}
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${group.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
                      
                      {/* Pulse animation for core tools */}
                      {tool.heat === "core" && (
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Background glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${group.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`} />
                
                {/* Animated border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${group.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm`} />
              </article>
            );
          })}
        </div>

        {/* Interactive stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {groups.reduce((acc, group) => acc + group.tools.filter(t => t.heat === "core").length, 0)}
              </div>
              <div className="text-sm text-gray-400">Core Skills</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {groups.reduce((acc, group) => acc + group.tools.length, 0)}
              </div>
              <div className="text-sm text-gray-400">Total Tools</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {groups.length}
              </div>
              <div className="text-sm text-gray-400">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
