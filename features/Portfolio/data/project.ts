import { Project } from "@/Types/project.type";

export const projects: Project[] = [
  {
    id: "1",
    slug: "ai-social-media-scheduler",

    title: "AI Social Media Scheduler",

    tagline: "Manage and automate social media publishing with AI.",

    shortDescription:
      "Multi-platform social media scheduling platform with AI-powered content generation.",

    overview:
      "A complete social media management platform allowing users to create, schedule, and manage content across multiple social channels.",

    thumbnail: "/portfolio/aisocial.png",

    coverImage: "/portfolio/aisocial.png",

    gallery: [
      "/portfolio/aisocial.png",
      "/projects/social/2.webp",
      "/projects/social/3.webp",
    ],

    category: "AI Application",

    featured: true,

    completionDate: "2026",

    duration: "3 Months",

    role: "Full Stack Developer",

    technologies: [
      "Next.js",
      "TypeScript",
      "Clerk",
      "Redux Toolkit",
      "OpenAI",
      "Tailwind CSS",
    ],
    stack: "Full Stack",
    features: [
      "AI Content Generation",
      "Post Scheduling",
      "Calendar View",
      "Kanban Board",
      "Multi Platform Publishing",
      "Analytics Dashboard",
    ],

    challenges: [
      "Managing multiple social APIs",
      "Content scheduling reliability",
      "AI integration",
    ],

    solutions: [
      "Reusable API architecture",
      "Queue-based scheduling",
      "OpenAI-powered workflows",
    ],

    outcomes: [
      "Reduced manual posting effort",
      "Improved content management workflow",
    ],

    liveUrl: "",
    githubUrl: "",

    seoTitle: "AI Social Media Scheduler",
    seoDescription: "AI-powered social media management platform.",
  },

  {
    id: "2",

    slug: "mern-tic-tac-toe",

    title: "Advanced MERN Tic Tac Toe",

    tagline: "Real-time multiplayer gaming experience.",

    shortDescription:
      "Feature-rich multiplayer Tic Tac Toe application built using MERN stack.",

    overview:
      "Interactive gaming platform supporting multiplayer matches, leaderboards, authentication, and game history.",

    thumbnail: "/projects/tictactoe/thumb.webp",

    coverImage: "/projects/tictactoe/cover.webp",

    gallery: [],

    category: "Web Application",

    featured: true,

    completionDate: "2025",

    duration: "1 Month",

    role: "Full Stack Developer",
    stack: "Frontend",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],

    features: [
      "Multiplayer",
      "Authentication",
      "Leaderboard",
      "Game History",
      "Dark Mode",
    ],

    challenges: ["Real-time synchronization", "State management"],

    solutions: ["Socket.io implementation", "Optimized game architecture"],

    outcomes: ["Smooth multiplayer gameplay", "Scalable architecture"],

    liveUrl: "",
    githubUrl: "",

    seoTitle: "MERN Tic Tac Toe",
    seoDescription: "Real-time multiplayer Tic Tac Toe game.",
  },

  {
    id: "3",

    slug: "warranty-claim-management",

    title: "Warranty Claim Management System",

    tagline: "Streamlined product warranty handling.",

    shortDescription: "Digital warranty claim processing platform.",

    overview:
      "A system for submitting, tracking, and managing product warranty claims.",

    thumbnail: "/projects/warranty/thumb.webp",

    coverImage: "/projects/warranty/cover.webp",

    gallery: [],

    category: "Management System",

    featured: true,

    completionDate: "2025",

    duration: "2 Months",
    stack: "Frontend",
    role: "Frontend Developer",

    technologies: ["Next.js", "TypeScript", "Formik", "Yup", "Redux Toolkit"],

    features: [
      "Claim Submission",
      "Tracking System",
      "Validation",
      "Admin Dashboard",
    ],

    challenges: ["Complex form validation", "User experience optimization"],

    solutions: ["Formik integration", "Reusable form components"],

    outcomes: ["Faster claim processing", "Reduced paperwork"],

    liveUrl: "",
    githubUrl: "",

    seoTitle: "Warranty Claim System",
    seoDescription: "Digital warranty management application.",
  },

  {
    id: "4",

    slug: "multi-level-dashboard",

    title: "Multi-Level Dashboard",

    tagline: "Enterprise-grade nested dashboard architecture.",

    shortDescription:
      "Fully responsive dashboard with dynamic nested navigation.",

    overview:
      "Complex dashboard architecture supporting multiple sections and dynamic sidebars.",

    thumbnail: "/projects/dashboard/thumb.webp",

    coverImage: "/projects/dashboard/cover.webp",

    gallery: [],

    category: "Dashboard",

    featured: true,

    completionDate: "2025",

    duration: "2 Months",

    role: "Frontend Developer",
    stack: "Frontend",

    technologies: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],

    features: [
      "Nested Navigation",
      "Role-based Access",
      "Responsive Design",
      "Reusable Components",
    ],

    challenges: ["Scalable navigation architecture"],

    solutions: ["Dynamic sidebar system"],

    outcomes: ["Improved maintainability", "Better user navigation"],

    liveUrl: "",
    githubUrl: "",

    seoTitle: "Enterprise Dashboard",
    seoDescription: "Advanced multi-level dashboard architecture.",
  },
];
