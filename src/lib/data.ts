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
    title: "House Price Prediction (End-to-End ML)",
    description: "End-to-end machine learning project for predicting house prices using feature engineering, Random Forest, and XGBoost with deployment via Streamlit. Covers full ML lifecycle from EDA to production.",
    tags: ["Python", "XGBoost", "Random Forest", "Streamlit"],
    github: "https://github.com/Muradamen/house-price-prediction-end-to-end-ml",
    featured: true,
    insights: "XGBoost model achieved lowest RMSE after hyperparameter tuning, outperforming baseline by 35%.",
  },
  {
    id: "5",
    title: "Employee Attrition Risk Analysis",
    description: "Predictive HR Analytics platform designed to reduce turnover. Uses machine learning to identify high-risk employees and provides data-driven retention strategies through an interactive AI dashboard.",
    tags: ["Python", "Machine Learning", "HR Analytics", "Streamlit"],
    github: "https://github.com/Muradamen/Employee-Attrition-Risk-Analysis",
    featured: true,
    insights: "ML model identified key attrition drivers — overtime and job satisfaction — enabling targeted retention programs.",
  },
  {
    id: "6",
    title: "Financial Fraud Detection ML",
    description: "End-to-end machine learning pipeline for detecting fraudulent financial transactions using imbalanced learning techniques and model optimization. Handles extreme class imbalance with SMOTE and ensemble methods.",
    tags: ["Python", "Scikit-learn", "SMOTE", "Classification"],
    github: "https://github.com/Muradamen/financial-fraud-detection-ml",
    insights: "Achieved 99.5% recall on fraud detection while maintaining low false positive rate using ensemble methods.",
  },
  {
    id: "7",
    title: "NLP Sentiment Analysis (Production)",
    description: "Production-ready NLP sentiment analysis system using TF-IDF, Logistic Regression, and SVM with full ML pipeline, evaluation, and deployment-ready architecture.",
    tags: ["Python", "NLP", "TF-IDF", "SVM"],
    github: "https://github.com/Muradamen/nlp-sentiment-analysis-production",
    insights: "SVM classifier achieved 92% accuracy on sentiment classification with optimized TF-IDF features.",
  },
  {
    id: "8",
    title: "Loan Approval Prediction ML",
    description: "Machine learning system to automate credit risk assessment. Comparing Decision Tree and Random Forest models to predict loan eligibility based on CIBIL scores, income, and asset data.",
    tags: ["Python", "Decision Tree", "Random Forest", "Classification"],
    github: "https://github.com/Muradamen/loan-approval-prediction-ml",
    insights: "Random Forest achieved 97%+ accuracy, identifying CIBIL score and income as strongest predictors.",
  },
  {
    id: "9",
    title: "Customer Segmentation Clustering",
    description: "End-to-end unsupervised ML project using K-Means and Hierarchical Clustering to perform customer segmentation and generate actionable business insights for targeted marketing.",
    tags: ["Python", "K-Means", "Clustering", "Unsupervised ML"],
    github: "https://github.com/Muradamen/customer-segmentation-clustering-kmeans-hierarchical-uml",
    insights: "Identified 4 distinct customer segments enabling personalized marketing strategies per group.",
  },
  {
    id: "10",
    title: "E-commerce Customer Growth Forecasting",
    description: "Predictive models using Decision Tree and Random Forest Regressors to forecast year-over-year e-commerce customer growth rates. Evaluated with RMSLE for business planning optimization.",
    tags: ["Python", "Random Forest", "Forecasting", "Regression"],
    github: "https://github.com/Muradamen/ecommerce-customer-growth-forecasting-ml",
    insights: "Forecasting model reduced planning error by 28%, enabling more accurate inventory and marketing budgets.",
  },
  {
    id: "11",
    title: "Maji Ndogo Water Crisis Analysis",
    description: "Comprehensive data exploration, cleaning, and anomaly detection for water crisis management in Africa. Used SQL and Python to identify corruption patterns and optimize water source improvements.",
    tags: ["Python", "SQL", "Pandas", "Data Cleaning"],
    image: "/src/assets/project-data.jpg",
    github: "https://github.com/Muradamen",
    insights: "Detected data anomalies suggesting fraudulent water quality reports, leading to audit recommendations.",
  },
  {
    id: "12",
    title: "Harari ASR Research",
    description: "AI-powered Automatic Speech Recognition system for Harari language preservation. Applied machine learning models and NLP techniques for low-resource language processing and dataset creation.",
    tags: ["Python", "Machine Learning", "NLP", "Scikit-learn"],
    image: "/src/assets/project-asr.jpg",
    github: "https://github.com/Muradamen",
    insights: "Achieved 78% accuracy on a custom-built Harari language dataset with limited training samples.",
  },
  {
    id: "13",
    title: "Credit Card Anomaly Detection (GMM)",
    description: "Unsupervised anomaly detection on credit card transactions using Gaussian Mixture Models (GMM) to identify suspicious patterns without labeled data.",
    tags: ["Python", "GMM", "Anomaly Detection", "Unsupervised ML"],
    github: "https://github.com/Muradamen/creditcard-anomaly-detection-gmm",
    insights: "GMM model detected 94% of known fraud cases without requiring any labeled training data.",
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
  { name: "XGBoost", icon: "⚡", category: "Machine Learning" },
  { name: "TF-IDF/NLP", icon: "📝", category: "Machine Learning" },
  { name: "Excel", icon: "📗", category: "Tools" },
  { name: "Linux", icon: "🐧", category: "Tools" },
  { name: "Streamlit", icon: "🚀", category: "Tools" },
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
