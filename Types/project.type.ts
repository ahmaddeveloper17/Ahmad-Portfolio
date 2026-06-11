export interface Project {
  id: string;
  slug: string;

  // Basic Info
  title: string;
  tagline: string;
  shortDescription: string;
  overview: string;

  // Visuals
  thumbnail: string;
  coverImage: string;
  gallery: string[];

  // Classification
  category:
    | "Web Application"
    | "Dashboard"
    | "SaaS"
    | "AI Application"
    | "Management System";

  featured: boolean;
  stack: string;

  // Metadata
  completionDate: string;
  duration: string;
  role: string;

  // Tech
  technologies: string[];

  // Features
  features: string[];

  // Business Case
  challenges: string[];
  solutions: string[];
  outcomes: string[];

  // Links
  liveUrl?: string;
  githubUrl?: string;

  // SEO
  seoTitle: string;
  seoDescription: string;
}
