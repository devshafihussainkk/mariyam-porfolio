
export interface Competency {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  icon: string;
  type: 'relevant' | 'transferable';
}

export interface LeadershipItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  bullets?: string[];
  subItems?: { title: string; subtitle: string }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  level: 'Postgraduate' | 'Undergraduate';
  icon: string;
}
