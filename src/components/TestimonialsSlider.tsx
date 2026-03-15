import React from 'react';
import { testimonials } from '../data/testimonials';

const TestimonialsSlider: React.FC = () => {

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const handleLinkedInClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Testimonials from clients and colleagues I've had the pleasure to work with
          </p>
        </div>

        <div className="relative">
          {/* Fade edges - overlay scrims */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 via-gray-900/90 to-transparent z-10 pointer-events-none" />

          {/* Sliding container */}
          <div className="flex animate-marquee hover:pause">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-80 mx-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 group"
              >
                {/* Quote */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-violet-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <button
                    onClick={() => handleLinkedInClick(testimonial.linkedin)}
                    className={`w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold mr-4 transition-transform duration-200 ${
                      testimonial.linkedin ? 'hover:scale-110 cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    {getInitials(testimonial.name)}
                  </button>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-violet-300 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSlider;