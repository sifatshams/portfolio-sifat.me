// types and interfaces
export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface SkillItem {
  code: string;
  index: string;
  name: string;
  role: string;
}

export interface Project {
  id: string;
  category: string;
  eyebrow: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  sourceUrl: string;
  accentImage: "kanban" | "commerce" | "api";
}

export interface ExperienceItem {
  period: string;
  role: string;
  place: string;
  points: string[];
  current?: boolean;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  code: string;
  type: "Certificate" | "Learning";
  url: string;
}

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
}

export interface AboutPillar {
  key: string;
  title: string;
  description: string;
}
