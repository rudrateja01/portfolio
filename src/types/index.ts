import type { LucideIcon } from 'lucide-react';

export interface Profile {
  name: string;
  fullName: string;
  headline: string;
  heroTagline: string;
  summary: string[];
  resumeUrl: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  photo: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  highlights: string[];
  stack?: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  summary: string[];
  stack: string[];
  icon: LucideIcon;
  repo?: string;
  live?: string;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  score: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  link?: string;
}
