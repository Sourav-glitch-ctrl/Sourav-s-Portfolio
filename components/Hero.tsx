import React, { useState, useEffect } from 'react';
import { PROFILE, RESUME_URL, RESUME_DOWNLOAD_URL } from '../constants';
import { Download, ChevronDown, Eye } from 'lucide-react';

const ROLES = [
  "Coder",
  "Data & ML Engineer",
  "Quantitative Thinker",
  "Software Developer",
  "Lifelong Learner"
];

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", // Coding/Screen
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop", // Hardware/Electronics
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop", // AI/Neural Network
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"  // Tech/Cybersecurity
];

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Standard typing speeds
  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const PAUSE_DURATION = 2000;

  // Typing effect
  useEffect(() => {
    const i = roleIndex % ROLES.length;
    const fullText = ROLES[i];

    const handleTyping = () => {
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }
    };

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === fullText) {
      // Finished typing full word, pause before deleting
      timer = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } else if (isDeleting && text === '') {
      // Finished deleting, move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => prev + 1);
    } else {
      // Continue typing or deleting
      timer = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Background decoration - Local accents */}
      <div className="absolute top-0 right-0 -z-10 opacity-20 translate-x-1/4 -translate-y-1/4 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-[800px] h-[800px] text-sky-900 fill-current animate-[pulse_6s_ease-in-out_infinite]">
          <path d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.5,-41.2C83.9,-26.8,88.5,-11.7,85.8,2.3C83.1,16.3,73.1,29.2,63.1,40.4C53.1,51.6,43.1,61.1,31.4,68.4C19.7,75.7,6.3,80.8,-6.2,80.1C-18.7,79.4,-30.2,72.9,-41.3,64.8C-52.4,56.7,-63.1,47,-71.4,35.2C-79.7,23.4,-85.6,9.5,-83.9,-3.8C-82.2,-17.1,-72.9,-29.8,-62.4,-40.5C-51.9,-51.2,-40.2,-59.9,-27.9,-67.6C-15.6,-75.3,-2.7,-82,10.9,-81.4L24.5,-80.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-20 -translate-x-1/4 translate-y-1/4 pointer-events-none">
         <div className="w-[600px] h-[600px] bg-indigo-950 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500">
              {PROFILE.name}
            </span>
          </h1>
          
          {/* Animated Text Section - Stacked on mobile to prevent layout shift */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 min-h-[5rem] md:min-h-[4rem]">
            <span className="text-2xl md:text-4xl font-semibold text-slate-400">I'm a</span>
            <span className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 border-r-4 border-sky-400 pr-1 animate-pulse tracking-wide w-fit">
              {text}
            </span>
          </div>

          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            Turning data into actionable insights and building intelligent systems with Python, TensorFlow, and Creative Thinking.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              className="px-8 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-medium rounded-lg hover:from-sky-500 hover:to-indigo-500 transition-all shadow-lg hover:shadow-sky-500/25 border border-transparent transform hover:-translate-y-0.5"
            >
              Contact Me
            </button>
            
            <div className="flex gap-3">
              <a 
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-slate-900/80 border border-slate-700 text-slate-300 font-medium rounded-lg hover:border-sky-500 hover:text-sky-400 transition-all flex items-center gap-2 hover:bg-slate-900 transform hover:-translate-y-0.5 backdrop-blur-sm cursor-pointer no-underline"
              >
                <Eye size={18} />
                <span>View CV</span>
              </a>
              <a 
                href={RESUME_DOWNLOAD_URL}
                className="px-5 py-3 bg-slate-900/80 border border-slate-700 text-slate-300 font-medium rounded-lg hover:border-sky-500 hover:text-sky-400 transition-all flex items-center gap-2 hover:bg-slate-900 transform hover:-translate-y-0.5 backdrop-blur-sm cursor-pointer no-underline"
              >
                <Download size={18} />
                <span>Download</span>
              </a>
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            {PROFILE.socials.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-900/50 rounded-full text-slate-400 hover:text-white hover:bg-sky-600 transition-all border border-slate-700 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/20 backdrop-blur-sm"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block group perspective-1000">
           <div className="w-80 h-96 bg-gradient-to-tr from-sky-600 to-purple-600 rounded-2xl rotate-3 absolute top-0 right-10 -z-10 group-hover:rotate-6 transition-all duration-500 blur-md opacity-50 group-hover:opacity-80"></div>
           <div className="w-80 h-96 bg-black rounded-2xl overflow-hidden shadow-2xl relative border border-slate-800 group-hover:border-sky-500/50 transition-all duration-500 transform group-hover:scale-[1.02]">
             {/* Slideshow Images */}
             {HERO_IMAGES.map((img, index) => (
               <img 
                 key={index}
                 src={img} 
                 alt={`Slide ${index + 1}`} 
                 className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                   index === currentImageIndex ? 'opacity-70 group-hover:opacity-100' : 'opacity-0'
                 } grayscale group-hover:grayscale-0`}
               />
             ))}
             
             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-10">
                <div className="text-sky-400 font-mono text-xs mb-1 opacity-70">
                   ~/portfolio/status
                </div>
                <p className="text-slate-200 font-mono text-sm">
                   &gt; System.init()<br/>
                   <span className="text-green-400">"Ready to innovate"</span>
                </p>
             </div>
           </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-700">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;