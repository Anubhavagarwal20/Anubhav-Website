// ─── Navigation ────────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ─── Projects ──────────────────────────────────────────────────────────────────
export interface Project {
  id: number;
  number: string;
  name: string;
  category: string;
  summary: string;
  tags: string[];
  url?: string; // Only set when a real public URL is confirmed
  featured?: boolean;
  role?: string;
  details?: string[];
}

// ─── Experience ────────────────────────────────────────────────────────────────
export interface ExperienceEntry {
  id: number;
  number: string;
  organization: string;
  role: string;
  type: string; // e.g. "Part-time", "Internship", "Freelance"
  period?: string; // Only when confirmed
  description: string;
  tags: string[];
}

// ─── Skills ────────────────────────────────────────────────────────────────────
export interface SkillCategory {
  category: string;
  skills: string[];
}

// ─── Services ──────────────────────────────────────────────────────────────────
export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
}
