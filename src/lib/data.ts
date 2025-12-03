export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface TechItem {
  name: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "CloudSync Platform",
    description: "A real-time collaborative workspace with WebSocket integration, enabling seamless team collaboration across distributed systems.",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "2",
    title: "AI Code Reviewer",
    description: "Automated code review tool powered by GPT-4, analyzing pull requests for bugs, security vulnerabilities, and best practices.",
    tags: ["Python", "OpenAI", "FastAPI", "Docker"],
    github: "https://github.com",
    featured: true,
  },
  {
    id: "3",
    title: "DevMetrics Dashboard",
    description: "Analytics dashboard for engineering teams, tracking velocity, deployment frequency, and code quality metrics.",
    tags: ["Next.js", "TypeScript", "D3.js", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "4",
    title: "SecureVault API",
    description: "End-to-end encrypted file storage API with zero-knowledge architecture and multi-factor authentication.",
    tags: ["Go", "gRPC", "Redis", "Kubernetes"],
    github: "https://github.com",
  },
  {
    id: "5",
    title: "Smart Contract Auditor",
    description: "Automated security analysis tool for Ethereum smart contracts, detecting common vulnerabilities and gas optimizations.",
    tags: ["Solidity", "TypeScript", "Foundry", "Web3.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "6",
    title: "ML Pipeline Framework",
    description: "Scalable machine learning pipeline orchestrator with automated hyperparameter tuning and model versioning.",
    tags: ["Python", "MLflow", "Airflow", "AWS"],
    github: "https://github.com",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp Inc.",
    role: "Senior Software Engineer",
    period: "2022 - Present",
    description: "Leading backend architecture for cloud-native applications serving millions of users.",
    achievements: [
      "Architected microservices platform reducing latency by 40%",
      "Led team of 5 engineers delivering critical features",
      "Implemented CI/CD pipelines cutting deployment time by 60%",
    ],
  },
  {
    id: "2",
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Built core product features from ideation to production deployment.",
    achievements: [
      "Developed real-time collaboration features using WebSockets",
      "Optimized database queries improving response times by 70%",
      "Created reusable component library adopted across 3 teams",
    ],
  },
  {
    id: "3",
    company: "Digital Agency",
    role: "Software Engineer",
    period: "2018 - 2020",
    description: "Delivered custom web applications for enterprise clients.",
    achievements: [
      "Built 15+ client applications using React and Node.js",
      "Mentored 3 junior developers through code reviews",
      "Introduced automated testing increasing coverage to 85%",
    ],
  },
];

export const techStack: TechItem[] = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "Go", icon: "🔵" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Redis", icon: "🔴" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "AWS", icon: "☁️" },
  { name: "GraphQL", icon: "◼️" },
  { name: "TailwindCSS", icon: "🎨" },
  { name: "Git", icon: "📦" },
  { name: "Linux", icon: "🐧" },
];

export const socialLinks = {
  github: "https://github.com/muradamin",
  linkedin: "https://linkedin.com/in/muradamin",
  twitter: "https://twitter.com/muradamin",
  email: "hello@muradamin.dev",
};

export const aboutText = `I'm a software engineer with a passion for building elegant, scalable systems. 
With 5+ years of experience across startups and enterprise, I specialize in distributed systems, 
cloud architecture, and developer tooling. I believe in writing clean, maintainable code and 
contributing to open-source projects that make developers' lives easier.`;
