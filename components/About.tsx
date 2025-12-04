import React from 'react';
import { PROFILE, EDUCATION, ACHIEVEMENTS, CERTIFICATIONS } from '../constants';
import { Award, GraduationCap, FileBadge, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-transparent relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-indigo-900/10 rounded-full blur-[80px] pointer-events-none"></div>
      
      {/* Decorative Grid */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10 pointer-events-none">
        <div className="w-full h-full border-r-2 border-b-2 border-sky-500 rounded-br-3xl"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-sky-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {PROFILE.summary}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="p-6 bg-black/40 backdrop-blur-md rounded-xl border border-slate-800 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/5 transition-all group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-sky-900/10 text-sky-500 rounded-lg group-hover:bg-sky-500/10 transition-colors">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-200">Education</h3>
            </div>
            {EDUCATION.map((edu, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h4 className="font-semibold text-slate-100">{edu.institution}</h4>
                <p className="text-sky-500 text-sm mb-1">{edu.degree}</p>
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>{edu.period}</span>
                  <span className="font-medium bg-slate-900 px-2 py-0.5 rounded text-slate-400 border border-slate-800">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications - Clickable */}
          <div className="p-6 bg-black/40 backdrop-blur-md rounded-xl border border-slate-800 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all group">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-3 bg-indigo-900/10 text-indigo-500 rounded-lg group-hover:bg-indigo-500/10 transition-colors">
                <FileBadge size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-200">Certifications</h3>
            </div>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <a 
                  key={index} 
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block group/item border-l-2 border-slate-700 pl-4 hover:border-indigo-500 transition-all cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-slate-200 text-sm group-hover/item:text-indigo-400 transition-colors">{cert.name}</h4>
                    <ExternalLink size={12} className="text-slate-600 group-hover/item:text-indigo-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-slate-500 text-xs">{cert.issuer}</p>
                  <p className="text-slate-600 text-xs mt-1">{cert.date}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="p-6 bg-black/40 backdrop-blur-md rounded-xl border border-slate-800 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 transition-all group">
             <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-900/10 text-amber-500 rounded-lg group-hover:bg-amber-500/10 transition-colors">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-200">Achievements</h3>
            </div>
            {ACHIEVEMENTS.map((ach, index) => (
              <div key={index}>
                <h4 className="font-semibold text-slate-100">{ach.title}</h4>
                <p className="text-sm text-slate-400 italic mb-2">{ach.organization} | {ach.year}</p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;