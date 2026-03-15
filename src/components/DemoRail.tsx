// src/components/DemoRail.tsx
type Clip = { title:string; caption:string; src?:string; placeholder?:boolean; cta?:{label:string; href:string} };
const clips: Clip[] = [
  { title:"JohnnyCloud", caption:"GuardDuty alert pops into dashboard", src:"/demos/johnnycloud.gif", cta:{label:"Open project", href:"#projects"} },
  { title:"AstraFocusNexus", caption:"AI-powered productivity dashboard with focus tracking, task management, and performance insights.", src:"/demos/AstraFocusNexus.gif", cta:{label:"Open project", href:"#projects"} },
  { title:"CodeRush", caption:"Interactive coding practice platform built to improve speed, accuracy, and language fluency.", src:"/demos/CodeRush.gif", cta:{label:"Open project", href:"#projects"} },
];

export default function DemoRail() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See It in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            8–12s silent loops showcasing key features and interactions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {clips.map((c) => (
            <figure
              key={c.title}
              className="group relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 overflow-hidden"
            >
              {/* Video, image, or placeholder container with aspect ratio */}
              <div className="aspect-[16/9] w-full overflow-hidden">
                {c.placeholder ? (
                  <div className="h-full w-full flex items-center justify-center bg-white/5 border-b border-white/10">
                    <p className="text-sm text-gray-500 text-center px-4">
                      {c.title} Preview Coming Soon
                    </p>
                  </div>
                ) : c.src!.endsWith('.gif') ? (
                  <img
                    src={c.src}
                    alt={`${c.title} demo`}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <video
                    src={c.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    aria-label={`${c.title} demo video`}
                  />
                )}
              </div>
              
              {/* Content overlay */}
              <div className="p-6">
                <figcaption>
                  <div className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                    {c.title}
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed mb-4">
                    {c.caption}
                  </p>
                  
                  {c.cta && (
                    <a 
                      href={c.cta.href}
                      className="inline-flex items-center text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors duration-300 group-hover:translate-x-1 transform"
                    >
                      {c.cta.label}
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </figcaption>
              </div>

              {/* Arrow indicator */}
              <div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
