export interface Project {
  title: string;
  year: string;
  description: string[];
  techStack: string[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  CONTACT = 'contact'
}