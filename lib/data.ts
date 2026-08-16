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
    category: "DEVELOPER PLATFORM SYSTEM",
    eyebrow: "Featured Work",
    title: "Portfolio CMS",
    description:
      "Full-stack portfolio platform with admin controls, analytics, messaging, and authentication.",
    stack: ["React", "Express", "MongoDB", "JWT", "JavaScript"],
    liveUrl: "https://sifatcoder.vercel.app/",
    sourceUrl: "https://github.com/sifatshams/sifats-personal-portfolio",
    accentImage: "kanban",
  },
  {
    id: "commerce-control",
    category: "NEWS PLATFORM HUB",
    eyebrow: "Featured Work",
    title: "News Portal",
    description:
      "A modern news platform built for seamless content publishing, management, and discovery.",
    stack: ["React.js", "JavaScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    sourceUrl: "https://github.com/sifatshams/news-portal-app",
    accentImage: "commerce",
  },
  {
    id: "node-raw-api",
    category: "VANILLA-NODE-REST-API",
    eyebrow: "Featured Work",
    title: "Raw Node API",
    description:
      "A RESTful HTTP API built using pure Node.js standard modules without relying on any external frameworks like Express.",
    stack: ["Node.js", "REST API", "No Framework", "JavaScript", "MongoDB"],
    liveUrl: "#",
    sourceUrl: "https://github.com/sifatshams/raw-node-api-project",
    accentImage: "api",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2022 — Present",
    role: "Full Stack Web Developer · Learning & Development",
    place: "Self-Directed · Chattogram, Bangladesh",
    current: true,
    points: [
      "Continuously developing full-stack web development skills since 2022, with a strong focus on backend engineering and modern web application architecture.",
      "Built hands-on projects using JavaScript, React, Node.js, Express.js, MongoDB, PostgreSQL, REST APIs, JWT authentication, and Next.js.",
      "Developed strong practical skills in database design, API development, authentication, CRUD operations, deployment, and production-oriented application development.",
    ],
  },
  {
    period: "Nov 2022 — Feb 2023",
    role: "Data Entry & Web Research Specialist",
    place: "Freelance · Self-Employed · Remote",
    points: [
      "Conducted online research and collected, verified, and organized business and contact data using Microsoft Excel.",
      "Worked remotely on project-based tasks for international clients, maintaining accuracy, consistency, and well-structured data delivery.",
      "Strengthened research, data management, attention-to-detail, and remote collaboration skills through client-focused projects.",
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
