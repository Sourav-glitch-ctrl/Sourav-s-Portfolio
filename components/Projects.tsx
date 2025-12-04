import React from 'react';
import { PROJECTS } from '../constants';
import { FolderGit2, ExternalLink, ArrowUpRight, Code2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-transparent relative overflow-hidden">
      {/* Abstract Background - Cyber Lines & Dots */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-900/50 to-transparent"></div>
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[80px] pointer-events-none"></div>
      
      {/* Code Brackets Decoration */}
      <div className="absolute left-4 top-20 text-slate-800/20 font-mono text-9xl font-bold pointer-events-none select-none">
        {'{'}
      </div>
      <div className="absolute right-4 bottom-20 text-slate-800/20 font-mono text-9xl font-bold pointer-events-none select-none">
        {'}'}
      </div>

      {/* Dotted Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="group bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-sky-500/5 transition-all duration-500 border border-slate-800 hover:border-slate-600 flex flex-col cursor-pointer relative"
            >
              {/* Hover Glow Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Abstract Corner Accent */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-sky-500/10 rounded-full blur-xl group-hover:bg-sky-500/20 transition-all duration-500"></div>

              <div className="p-8 flex-1 relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-black/60 rounded-xl border border-slate-800 group-hover:border-sky-500/30 transition-colors">
                    <FolderGit2 className="text-slate-500 group-hover:text-sky-500 transition-colors" size={24} />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono bg-black/60 border border-slate-800 px-3 py-1 rounded-full text-slate-500 group-hover:text-slate-300 transition-colors">
                      {project.year}
                    </span>
                    <div className="bg-black/60 p-2 rounded-full border border-slate-800 group-hover:border-sky-500/30 group-hover:bg-sky-500/10 transition-colors">
                      <ArrowUpRight size={18} className="text-slate-500 group-hover:text-sky-400 transition-colors" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-800 pl-3 group-hover:border-sky-900/50 transition-colors">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>

              <div className="px-8 pb-8 pt-0 mt-auto relative z-10">
                 <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-slate-400 bg-black/60 px-3 py-1.5 rounded-md border border-slate-800 group-hover:border-slate-700 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;