import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Printer, MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { PROFILE, EDUCATION, EXPERIENCE, PROJECTS, CERTIFICATIONS, ACHIEVEMENTS, SKILL_CATEGORIES } from '../constants';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
  autoPrint?: boolean;
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({ isOpen, onClose, autoPrint }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen && autoPrint) {
      const timer = setTimeout(() => {
        window.print();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoPrint]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const content = (
    <div 
      id="resume-portal-root"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto print:p-0 print:bg-white print:overflow-visible print:static print:block font-serif text-slate-900"
    >
      {/* Controls - Hidden during print */}
      <div className="fixed top-6 right-6 flex gap-4 print:hidden z-[110]">
        <button 
          onClick={() => window.print()}
          className="p-3 bg-sky-600 hover:bg-sky-500 text-white rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer font-sans"
          title="Print / Save as PDF"
        >
          <Printer size={20} />
          <span className="text-sm font-medium">Print / PDF</span>
        </button>
        <button 
          onClick={onClose}
          className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full shadow-lg transition-all cursor-pointer"
          title="Close"
        >
          <X size={20} />
        </button>
      </div>

      {/* Resume Page (A4 Aspect Ratio) */}
      <div 
        id="resume-content"
        className="bg-white w-full max-w-[210mm] min-h-[297mm] shadow-2xl mx-auto p-[15mm] md:p-[20mm] relative print:shadow-none print:w-full print:max-w-none print:min-h-0 print:mx-0 print:p-0 leading-snug"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold uppercase tracking-widest mb-3 text-black">{PROFILE.name}</h1>
          
          <div className="flex flex-wrap justify-center items-center gap-x-3 text-[10pt] text-gray-800 mb-1">
            <span className="flex items-center gap-1"><MapPin size={12} strokeWidth={2.5} /> {PROFILE.location}</span>
            <span className="text-gray-400">|</span>
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-1 hover:text-sky-700"><Mail size={12} strokeWidth={2.5} /> {PROFILE.email}</a>
            <span className="text-gray-400">|</span>
            <span className="flex items-center gap-1"><Phone size={12} strokeWidth={2.5} /> {PROFILE.phone}</span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-3 text-[10pt] text-gray-800">
             <a href={PROFILE.socials[0].url} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-sky-700">
               <Linkedin size={12} strokeWidth={2.5} /> linkedin.com/in/souravpatra07
             </a>
             <span className="text-gray-400">|</span>
             <a href={PROFILE.socials[1].url} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-sky-700">
               <Github size={12} strokeWidth={2.5} /> github.com/Sourav-glitch-ctrl
             </a>
          </div>
        </div>

        {/* Technical Summary */}
        <div className="mb-5">
          <h2 className="text-[11pt] font-bold uppercase border-b border-gray-300 mb-2 pb-0.5 text-black">Technical Summary</h2>
          <p className="text-[10pt] text-gray-800">{PROFILE.technicalSummary}</p>
        </div>

        {/* Professional Summary */}
        <div className="mb-5">
          <h2 className="text-[11pt] font-bold uppercase border-b border-gray-300 mb-2 pb-0.5 text-black">Professional Summary</h2>
          <p className="text-[10pt] text-justify text-gray-800 leading-relaxed">
            {PROFILE.summary}
          </p>
        </div>

        {/* Education */}
        <div className="mb-5">
          <h2 className="text-[11pt] font-bold uppercase border-b border-gray-300 mb-2 pb-0.5 text-black">Education</h2>
          {EDUCATION.map((edu, index) => (
            <div key={index} className="text-[10pt]">
              <div className="flex justify-between font-bold text-black">
                <span>{edu.institution}</span>
                <span>{edu.period}</span>
              </div>
              <div className="text-gray-800">{edu.degree}</div>
              <div className="font-semibold text-gray-900">{edu.score}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-5">
          <h2 className="text-[11pt] font-bold uppercase border-b border-gray-300 mb-2 pb-0.5 text-black">Skills</h2>
          <div className="text-[10pt] space-y-1 text-gray-800">
            {SKILL_CATEGORIES.map((cat, index) => (
              <div key={index} className="flex">
                <span className="font-bold text-black min-w-[140px] w-[140px]">{cat.name}:</span>
                <span className="flex-1">{cat.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-5">
          <h2 className="text-[11pt] font-bold uppercase border-b border-gray-300 mb-2 pb-0.5 text-black">Certifications</h2>
          <div className="space-y-3 text-[10pt]">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index}>
                <div className="flex justify-between font-bold text-black">
                  <span>{cert.name}</span>
                  <span className="font-normal text-gray-600 text-[9pt]">{cert.date}</span>
                </div>
                <div className="italic text-gray-700 text-[9pt]">{cert.issuer}</div>
                {cert.credentialId && <div className="text-gray-600 text-[9pt]">Credential: {cert.credentialId}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-5">
          <h2 className="text-[11pt] font-bold uppercase border-b border-gray-300 mb-2 pb-0.5 text-black">Experience</h2>
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="text-[10pt] mb-3 last:mb-0">
              <div className="flex justify-between">
                <span className="font-bold text-black">{exp.role}</span>
                <span className="text-gray-600">{exp.period}</span>
              </div>
              <div className="italic text-gray-700 mb-1">{exp.company}</div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-gray-800">
                {exp.points.map((point, i) => (
                  <li key={i} className="pl-1">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="mb-5">
          <h2 className="text-[11pt] font-bold uppercase border-b border-gray-300 mb-2 pb-0.5 text-black">Projects</h2>
          {PROJECTS.map((proj, index) => (
            <div key={index} className="text-[10pt] mb-3 last:mb-0">
              <div className="flex justify-between">
                <span className="font-bold text-black">{proj.title}</span>
                <span className="text-gray-600">{proj.year}</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-gray-800 mt-1">
                {proj.description.map((desc, i) => (
                  <li key={i} className="pl-1">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

         {/* Achievements */}
         <div className="mb-5">
            <h2 className="text-[11pt] font-bold uppercase border-b border-gray-300 mb-2 pb-0.5 text-black">Achievements</h2>
            {ACHIEVEMENTS.map((ach, index) => (
                <div key={index} className="text-[10pt] mb-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-black">{ach.title}</span>
                    <span className="text-gray-600">{ach.year}</span>
                  </div>
                  <div className="italic text-gray-700 mb-1">{ach.organization}</div>
                  <ul className="list-disc list-outside ml-4 text-gray-800">
                    <li className="pl-1">{ach.description}</li>
                  </ul>
                </div>
              ))}
         </div>
      </div>
      
      {/* Print Styles Injection */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-portal-root, #resume-portal-root * {
            visibility: visible;
          }
          #resume-portal-root {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: white;
            padding: 0;
            margin: 0;
          }
          #resume-content {
            box-shadow: none;
            width: 100%;
            max-width: none;
            margin: 0;
            padding: 0;
          }
          /* Ensure controls are definitely hidden */
          button { display: none !important; }
        }
      `}</style>
    </div>
  );

  return createPortal(content, document.body);
};

export default ResumeViewer;