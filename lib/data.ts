import type {
  AboutPillar,
  Certificate,
  ExperienceItem,
  NavLink,
  Project,
  ServiceItem,
  SkillItem,
  StatItem,
} from "@/types";

export const SITE = {
  name: "Sifat Bin Anwar",
  initials: "SA",
  role: "Full Stack Web Developer",
  country: "Bangladesh",
  github: "https://github.com/sifatshams",
  githubHandle: "sifatshams",
  email: "sifatbin.official@gmail.com",
  linkedin: "https://linkedin.com/in/sifatshams",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const HERO_TECH_ORBIT = ["React", "TS", "Next", "Node", "Mongo"];

export const STATS: StatItem[] = [
  { value: "4+", label: "Years Learning", sublabel: "of deliberate practice" },
  { value: "15+", label: "Projects Completed", sublabel: "shipped end to end" },
  { value: "18", label: "Technologies", sublabel: "across the stack" },
  { value: "200+", label: "Problem Solving", sublabel: "algorithm challenges" },
];

export const ABOUT_PILLARS: AboutPillar[] = [
  {
    key: "mission",
    title: "Mission",
    description:
      "Ship software that feels effortless — fast, accessible and maintainable long after launch day.",
  },
  {
    key: "vision",
    title: "Vision",
    description:
      "Build products from Bangladesh that hold up next to the best engineering teams in the world.",
  },
  {
    key: "mindset",
    title: "Mindset",
    description:
      "Read the docs, measure before optimising, and treat every abstraction as a debt to justify.",
  },
];

export const SKILLS: SkillItem[] = [
  { code: "RE", index: "01", name: "React", role: "UI architecture" },
  { code: "NE", index: "02", name: "Next.js", role: "SSR & routing" },
  { code: "JA", index: "03", name: "JavaScript", role: "ES2024" },
  { code: "TY", index: "04", name: "TypeScript", role: "Type safety" },
  { code: "NO", index: "05", name: "Node.js", role: "Runtime" },
  { code: "EX", index: "06", name: "Express", role: "HTTP layer" },
  { code: "MO", index: "07", name: "MongoDB", role: "Documents" },
  { code: "FI", index: "08", name: "Firebase", role: "Auth & realtime" },
  { code: "TA", index: "09", name: "Tailwind", role: "Design systems" },
  { code: "GI", index: "10", name: "Git", role: "Versioning" },
  { code: "GI", index: "11", name: "GitHub", role: "Collaboration" },
  { code: "RE", index: "12", name: "REST API", role: "Contracts" },
  { code: "JW", index: "13", name: "JWT", role: "Sessions" },
];

export const PROJECTS: Project[] = [
  {
    id: "taskflow",
    category: "COLLABORATIVE PROJECT WORKSPACE",
    eyebrow: "Featured Work",
    title: "TaskFlow",
    description:
      "Drag-ready kanban workspace with optimistic updates, presence indicators and granular activity history for distributed teams.",
    stack: ["React", "Express", "MongoDB", "JWT", "Firebase"],
    liveUrl: "#",
    sourceUrl: SITE.github,
    accentImage: "kanban",
  },
  {
    id: "commerce-control",
    category: "HEADLESS COMMERCE DASHBOARD",
    eyebrow: "Featured Work",
    title: "Commerce Control",
    description:
      "Headless storefront control panel for catalog, pricing and fulfilment with real-time inventory sync and audit-safe editing.",
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    sourceUrl: SITE.github,
    accentImage: "commerce",
  },
  {
    id: "zeruslex-api",
    category: "DEVELOPER PLATFORM & DOCS",
    eyebrow: "Featured Work",
    title: "Zeruslex API",
    description:
      "Public API product surface with interactive request playground, usage metering and versioned reference documentation.",
    stack: ["Next.js", "REST API", "TypeScript", "Node.js"],
    liveUrl: "#",
    sourceUrl: SITE.github,
    accentImage: "api",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2025 — Present",
    role: "Freelance Full Stack Developer",
    place: "Remote · Worldwide",
    current: true,
    points: [
      "Design and ship production web applications for founders and small product teams.",
      "Own architecture decisions from database schema to deployment pipeline.",
      "Reduced average page load by 48% across three client projects.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Frontend Developer (Contract)",
    place: "Startup Studio · Chattogram",
    points: [
      "Built a reusable component library adopted across four internal products.",
      "Introduced typed API clients, cutting integration bugs significantly.",
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "Complete Web Development",
    issuer: "Programming Hero",
    year: "2024",
    code: "PH-WD-2024",
    url: "#",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2024",
    code: "FCC-JS-DSA",
    url: "#",
  },
  {
    title: "Backend Development with Node.js",
    issuer: "Meta / Coursera",
    year: "2025",
    code: "META-NODE-25",
    url: "#",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2023",
    code: "FCC-RWD-23",
    url: "#",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    index: "01",
    title: "Modern Web Applications",
    description:
      "Product-grade SPAs and SSR apps with clean architecture and measurable performance budgets.",
  },
  {
    index: "02",
    title: "REST APIs",
    description:
      "Documented, validated and versioned endpoints with auth, rate limiting and observability.",
  },
  {
    index: "03",
    title: "Admin Dashboards",
    description:
      "Data-dense internal tools: role-based access, tables, charts and audit trails.",
  },
  {
    index: "04",
    title: "Landing Pages",
    description:
      "High-conversion marketing pages engineered for Core Web Vitals and accessibility.",
  },
  {
    index: "05",
    title: "Full Stack Applications",
    description:
      "End-to-end delivery from schema design to CI/CD and production monitoring.",
  },
  {
    index: "06",
    title: "Responsive Websites",
    description:
      "Pixel-consistent layouts from 320px to ultrawide with zero layout shift.",
  },
];
