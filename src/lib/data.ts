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
    title: "Harar Safestay",
    description: "Smart hotel & visitor management system with police integration. Built with React, Django REST Framework, and PostgreSQL for secure guest tracking.",
    tags: ["React", "Django", "PostgreSQL", "REST API"],
    image: "/src/assets/project-hotel.jpg",
    github: "https://github.com/Muradamen",
    featured: true,
  },
  {
    id: "2",
    title: "Social Media Dashboard",
    description: "Aggregates & visualizes data from multiple social platforms. Real-time analytics with interactive charts and data exploration features.",
    tags: ["React", "TypeScript", "Data Visualization", "API Integration"],
    image: "/src/assets/project-social.jpg",
    github: "https://github.com/Muradamen",
    featured: true,
  },
  {
    id: "3",
    title: "MiraTech Solutions Website",
    description: "Modern single-page startup website for digital training and software solutions. Built with TypeScript and Tailwind CSS for Ethiopian communities.",
    tags: ["TypeScript", "Tailwind CSS", "React", "SPA"],
    image: "/src/assets/project-miratech.jpg",
    github: "https://github.com/Muradamen",
    live: "https://miratech.dev",
  },
  {
    id: "4",
    title: "Maji Ndogo Data Analysis",
    description: "Comprehensive data exploration, cleaning, and anomaly detection for water crisis management in Africa. SQL and Python-based insights project.",
    tags: ["Python", "SQL", "Pandas", "Data Analysis"],
    image: "/src/assets/project-data.jpg",
    github: "https://github.com/Muradamen",
    featured: true,
  },
  {
    id: "5",
    title: "Harari ASR Research",
    description: "AI-powered Automatic Speech Recognition system for Harari language preservation. Machine learning models for low-resource language processing.",
    tags: ["Python", "Machine Learning", "NLP", "AI"],
    image: "/src/assets/project-asr.jpg",
    github: "https://github.com/Muradamen",
  },
  {
    id: "6",
    title: "PlasticSpotter",
    description: "Environmental application for tracking and reporting plastic pollution. Mobile-friendly solution for community-based waste management.",
    tags: ["React", "Mobile", "Environmental", "GIS"],
    image: "/src/assets/project-plastic.jpg",
    github: "https://github.com/Muradamen",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "MiraTech Solutions",
    role: "Founder & Full Stack Developer",
    period: "2023 - Present",
    description: "Building digital training and software solutions for local Ethiopian communities.",
    achievements: [
      "Founded tech startup focused on digital literacy in Ethiopia",
      "Developed multiple web applications using React and Django",
      "Led youth empowerment programs through AI and technology training",
    ],
  },
  {
    id: "2",
    company: "ALX Africa",
    role: "Software Engineering Fellow",
    period: "2022 - 2023",
    description: "Completed intensive software engineering program with practical team projects.",
    achievements: [
      "Completed full-stack development milestones with React and Django",
      "Built collaborative projects with international team members",
      "Mastered data structures, algorithms, and system design",
    ],
  },
  {
    id: "3",
    company: "Freelance",
    role: "Data Analyst & Web Developer",
    period: "2021 - 2022",
    description: "Delivered custom web applications and data analysis solutions for clients.",
    achievements: [
      "Performed SQL optimization and data visualization for business insights",
      "Built responsive web applications with modern JavaScript frameworks",
      "Conducted exploratory data analysis using Python and Pandas",
    ],
  },
];

export const techStack: TechItem[] = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🎯" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "JavaScript", icon: "💛" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "SQL", icon: "📊" },
  { name: "Pandas", icon: "🐼" },
  { name: "Git", icon: "📦" },
  { name: "Docker", icon: "🐳" },
  { name: "REST API", icon: "🔌" },
  { name: "HTML/CSS", icon: "🌐" },
  { name: "Jupyter", icon: "📓" },
  { name: "Linux", icon: "🐧" },
  { name: "Kotlin", icon: "🟣" },
];

export const socialLinks = {
  github: "https://github.com/Muradamen",
  linkedin: "https://linkedin.com/in/muradamin",
  twitter: "https://twitter.com/muradamin",
  email: "muradamin@miratech.dev",
};

export const aboutText = `I am a passionate Full Stack Developer & Data Analyst from Ethiopia, driven by curiosity for technology and a love for solving real-world problems with software and data.

I specialize in building modern web applications (React + Django + PostgreSQL) and performing data exploration, cleaning, and visualization for actionable insights. As the founder of MiraTech Solutions, I'm dedicated to digital literacy and youth empowerment through technology.`;
