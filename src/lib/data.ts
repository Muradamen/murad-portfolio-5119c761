export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  insights?: string;
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
  category: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Python Foundations for Data Processing",
    description: "Built a comprehensive data processing pipeline using Python fundamentals — covering data ingestion, transformation, cleaning, and export. Demonstrates core skills in file handling, data structures, and automation for analytical workflows.",
    tags: ["Python", "Pandas", "NumPy", "Data Processing"],
    image: "/src/assets/project-python-foundations.jpg",
    github: "https://github.com/Muradamen",
    featured: true,
    insights: "Automated data cleaning reduced manual processing time by 70%, enabling faster insights delivery.",
  },
  {
    id: "2",
    title: "Global Superstore Sales Dashboard",
    description: "Interactive Power BI dashboard analyzing global superstore sales data. Uncovered regional sales trends, product category performance, and customer segmentation insights to drive strategic business decisions.",
    tags: ["Power BI", "Data Visualization", "Business Intelligence", "DAX"],
    image: "/src/assets/project-superstore.jpg",
    github: "https://github.com/Muradamen",
    featured: true,
    insights: "Identified top 3 underperforming regions and recommended targeted strategies that could boost revenue by 15%.",
  },
  {
    id: "3",
    title: "Global Water Access Analysis",
    description: "Data analytics project investigating global water access disparities using real-world datasets. Applied SQL queries and Python analysis to uncover patterns in water infrastructure, population coverage, and resource allocation across regions.",
    tags: ["Python", "SQL", "Pandas", "Data Analytics"],
    image: "/src/assets/project-water-access.jpg",
    github: "https://github.com/Muradamen",
    featured: true,
    insights: "Revealed that 40% of rural communities lacked basic water access, informing resource allocation priorities.",
  },
  {
    id: "4",
    title: "Maji Ndogo Water Crisis Analysis",
    description: "Comprehensive data exploration, cleaning, and anomaly detection for water crisis management in Africa. Used SQL and Python to identify corruption patterns and optimize water source improvements.",
    tags: ["Python", "SQL", "Pandas", "Data Cleaning"],
    image: "/src/assets/project-data.jpg",
    github: "https://github.com/Muradamen",
    insights: "Detected data anomalies suggesting fraudulent water quality reports, leading to audit recommendations.",
  },
  {
    id: "5",
    title: "Harari ASR Research",
    description: "AI-powered Automatic Speech Recognition system for Harari language preservation. Applied machine learning models and NLP techniques for low-resource language processing and dataset creation.",
    tags: ["Python", "Machine Learning", "NLP", "Scikit-learn"],
    image: "/src/assets/project-asr.jpg",
    github: "https://github.com/Muradamen",
    insights: "Achieved 78% accuracy on a custom-built Harari language dataset with limited training samples.",
  },
  {
    id: "6",
    title: "Social Media Analytics Dashboard",
    description: "Built an analytics dashboard aggregating data from multiple social platforms. Features real-time data visualization, sentiment trends, and engagement metrics for data-driven content strategy.",
    tags: ["Python", "Matplotlib", "Seaborn", "API Integration"],
    image: "/src/assets/project-social.jpg",
    github: "https://github.com/Muradamen",
    insights: "Visualized engagement patterns revealing optimal posting times, increasing reach by 25%.",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "MiraTech Solutions",
    role: "Founder & Data Analyst",
    period: "2023 - Present",
    description: "Leading data-driven decision making and building analytics solutions for local Ethiopian communities.",
    achievements: [
      "Built interactive dashboards using Power BI for business performance tracking",
      "Automated data pipelines reducing report generation time by 60%",
      "Led youth empowerment programs through data literacy and AI training",
    ],
  },
  {
    id: "2",
    company: "ALX Africa / ExploreAI",
    role: "Data Science Fellow",
    period: "2022 - 2023",
    description: "Completed intensive data science program with hands-on projects in analytics, ML, and visualization.",
    achievements: [
      "Completed end-to-end data analysis projects using Python, SQL, and Power BI",
      "Built predictive models and performed statistical analysis on real-world datasets",
      "Mastered data cleaning, EDA, and visualization for actionable business insights",
    ],
  },
  {
    id: "3",
    company: "Freelance",
    role: "Data Analyst",
    period: "2021 - 2022",
    description: "Delivered data analysis and visualization solutions for clients seeking business insights.",
    achievements: [
      "Performed SQL optimization and data visualization for strategic business decisions",
      "Created automated reporting pipelines with Python and Pandas",
      "Conducted exploratory data analysis uncovering key trends for stakeholders",
    ],
  },
];

export const techStack: TechItem[] = [
  // Programming
  { name: "Python", icon: "🐍", category: "Programming" },
  { name: "SQL", icon: "📊", category: "Programming" },
  // Data Analysis
  { name: "Pandas", icon: "🐼", category: "Data Analysis" },
  { name: "NumPy", icon: "🔢", category: "Data Analysis" },
  { name: "Jupyter", icon: "📓", category: "Data Analysis" },
  // Visualization
  { name: "Power BI", icon: "📈", category: "Visualization" },
  { name: "Matplotlib", icon: "📉", category: "Visualization" },
  { name: "Seaborn", icon: "🎨", category: "Visualization" },
  // Tools
  { name: "Git", icon: "📦", category: "Tools" },
  { name: "GitHub", icon: "🐙", category: "Tools" },
  { name: "PostgreSQL", icon: "🐘", category: "Tools" },
  // ML
  { name: "Scikit-learn", icon: "🤖", category: "Machine Learning" },
  { name: "Excel", icon: "📗", category: "Tools" },
  { name: "Linux", icon: "🐧", category: "Tools" },
];

export const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "SQL"],
    icon: "💻",
  },
  {
    title: "Data Analysis",
    skills: ["Pandas", "NumPy", "Jupyter Notebook", "Excel"],
    icon: "📊",
  },
  {
    title: "Visualization",
    skills: ["Power BI", "Matplotlib", "Seaborn"],
    icon: "📈",
  },
  {
    title: "Tools & Databases",
    skills: ["Git", "GitHub", "PostgreSQL", "Linux"],
    icon: "🛠️",
  },
];

export const socialLinks = {
  github: "https://github.com/Muradamen",
  linkedin: "https://linkedin.com/in/muradamin",
  email: "muradamin@miratech.dev",
};

export const aboutText = `I am a results-driven Data Analyst & aspiring Data Scientist from Ethiopia, passionate about transforming raw data into actionable business insights.

I specialize in Python, SQL, and Power BI to perform exploratory data analysis, build interactive dashboards, and uncover trends that drive strategic decision-making. With a strong foundation in statistical analysis and machine learning, I solve real-world problems through data-driven approaches.`;
