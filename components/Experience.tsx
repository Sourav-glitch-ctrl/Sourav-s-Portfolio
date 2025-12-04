import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-transparent relative overflow-hidden">
      {/* Abstract Background Decorations */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[800px] bg-gradient-to-r from-sky-900/5 to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute right-10 bottom-20 w-32 h-32 border border-slate-800 rounded-full opacity-20 pointer-events-none"></div>
      <div className="absolute right-20 bottom-32 w-16 h-16 border border-sky-500/20 rounded-full opacity-30 pointer-events-none animate-pulse"></div>

      {/* Neural Network SVG Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.07] pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-net" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="#38bdf8" />
              <circle cx="100" cy="80" r="3" fill="#38bdf8" />
              <circle cx="180" cy="20" r="3" fill="#38bdf8" />
              <circle cx="60" cy="150" r="3" fill="#38bdf8" />
              <circle cx="140" cy="150" r="3" fill="#38bdf8" />
              
              <line x1="20" y1="20" x2="100" y2="80" stroke="#38bdf8" strokeWidth="0.5" />
              <line x1="180" y1="20" x2="100" y2="80" stroke="#38bdf8" strokeWidth="0.5" />
              <line x1="60" y1="150" x2="100" y2="80" stroke="#38bdf8" strokeWidth="0.5" />
              <line x1="140" y1="150" x2="100" y2="80" stroke="#38bdf8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-net)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
              
              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                
                {/* Icon (Center) */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center border-2 border-slate-700 shadow-md z-10 group-hover:border-sky-500 transition-colors">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="md:w-[45%] mb-12 md:mb-0">
                   <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-slate-800 shadow-sm hover:shadow-lg hover:border-slate-700 transition-all relative overflow-hidden group/card">
                      {/* Card internal abstract glow */}
                      <div className="absolute -top-10 -right-10 w-20 h-20 bg-sky-500/10 rounded-full blur-xl transition-all group-hover/card:bg-sky-500/20"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500"></div>

                      <div className="flex flex-col mb-4 relative z-10">
                        <h3 className="text-xl font-bold text-slate-200">{exp.role}</h3>
                        <span className="text-sky-500 font-semibold text-sm">{exp.company}</span>
                        <span className="text-xs text-slate-500 mt-1 uppercase tracking-wide">{exp.period}</span>
                      </div>
                      <ul className="space-y-3 relative z-10">
                        {exp.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                            <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-slate-700 group-hover/card:bg-sky-500 transition-colors"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
                
                {/* Spacer for alternate side */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;