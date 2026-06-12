import { Experience } from "@/Types/experience.type";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "INKLUDE SKILLIA",
    position: "Frontend Developer",
    employmentType: "Freelance",
    location: "Remote",
    startDate: "2026-06",
    endDate: "Present",
    current: true,
    description:
      "Building modern, user-friendly websites with a strong focus on performance, SEO, and user experience. Developing responsive applications using Next.js and modern frontend technologies.",
    achievements: [
      "Built SEO-optimized web applications",
      "Improved website performance and Core Web Vitals",
      "Developed responsive user interfaces",
      "Implemented scalable frontend architecture",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "Tailwind CSS"],
  },

  {
    id: "2",
    company: "Mecarvi Technologies",
    position: "Frontend Developer",
    employmentType: "Full Time",
    location: "Remote",
    startDate: "2025-04",
    endDate: "2026-03",
    current: false,
    description:
      "Built and maintained a large-scale Next.js application containing more than 30 pages while leveraging performance optimization techniques and modern frontend practices.",
    achievements: [
      "Maintained 30+ page Next.js application",
      "Improved application performance and load speed",
      "Implemented reusable component architecture",
      "Collaborated with backend teams for API integrations",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "SQL",
      "Tailwind CSS",
      "REST APIs",
    ],
  },

  {
    id: "3",
    company: "Nizami's Soft Tech",
    position: "Senior Software Developer",
    employmentType: "Full Time",
    location: "Multan, Pakistan",
    startDate: "2024-10",
    endDate: "2025-03",
    current: false,
    description:
      "Architected and delivered a full-stack outreach platform similar to Mergo using the MERN stack. Managed development and VPS deployment from start to finish.",
    achievements: [
      "Designed complete MERN architecture",
      "Handled VPS deployment and server management",
      "Built full-stack outreach platform",
      "Integrated APIs and automation workflows",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Next.js",
      "SQL",
      "VPS Deployment",
    ],
  },

  {
    id: "4",
    company: "Codex Technologies",
    position: "MERN Stack Developer",
    employmentType: "Part Time",
    location: "Multan, Pakistan",
    startDate: "2023-12",
    endDate: "2024-07",
    current: false,
    description:
      "Developed React-based client projects including social platforms, advertising systems, and portfolio applications while integrating payment solutions.",
    achievements: [
      "Delivered 3 client projects successfully",
      "Built responsive React interfaces",
      "Integrated payment gateways",
      "Worked on production-ready frontend applications",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Payment Gateways",
      "JavaScript",
    ],
  },

  {
    id: "5",
    company: "ST Learning Training Institute",
    position: "Frontend Developer Intern",
    employmentType: "Internship",
    location: "Pakistan",
    startDate: "2023-03",
    endDate: "2023-08",
    current: false,
    description:
      "Integrated REST APIs into a multi-vendor inventory management application built with React, covering inventory management, menus, and payment workflows.",
    achievements: [
      "Integrated 15+ REST APIs",
      "Worked on inventory management modules",
      "Implemented payment flow integrations",
      "Collaborated with senior developers",
    ],
    technologies: ["React", "Node.js", "REST APIs", "SQL", "JavaScript"],
  },
];
