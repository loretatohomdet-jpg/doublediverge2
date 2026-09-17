export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  technologies: string[];
  keyOutcome: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  divergentPhase: 'Diverge' | 'Converge' | 'Diverge' | 'Converge' | 'Scale';
  activities: string[];
  deliverables: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  shortDescription: string;
  challenge: string;
  divergence: string;
  solution: string;
  technologies: string[];
  impact: string[];
  stats: { value: string; label: string }[];
  accentGradient: string;
}

export interface InsightArticle {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  organisation: string;
  serviceInterest: string[];
  message: string;
}
