import React from 'react';
import { PROFILE } from '../constants';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 py-16 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="mb-8 text-slate-400 max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities in Data Science and Machine Learning.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-sky-500 group-hover:border-sky-500/30 transition-all">
                  <Mail size={18} />
                </div>
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {PROFILE.email}
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-sky-500 group-hover:border-sky-500/30 transition-all">
                  <Phone size={18} />
                </div>
                <span className="text-slate-400">{PROFILE.phone}</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-sky-500 group-hover:border-sky-500/30 transition-all">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-400">{PROFILE.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
             <div className="flex gap-4 mb-8">
              {PROFILE.socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-lg border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-500 hover:bg-sky-600 hover:border-sky-600 hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;