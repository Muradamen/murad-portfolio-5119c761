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
    title: "ChurnGuard AI — Enterprise Customer Retention",
    description: "AI-powered customer churn prediction and revenue optimization system with explainable AI and a decision intelligence dashboard built for telecom operators.",
    tags: ["Python", "Explainable AI", "Streamlit", "Classification"],
    image: "/src/assets/project-employee-attrition.jpg",
    github: "https://github.com/Muradamen/ChurnGuard-AI-Enterprise-Customer-Retention-System",
    featured: true,
    insights: "Surfaces high-risk customers and revenue impact, enabling proactive retention plays that protect ARR.",
  },
  {
    id: "2",
    title: "Sales Insights — SQL & Power BI",
    description: "End-to-end data analysis project using SQL and Power BI to identify sales trends and revenue decline for a hardware supplier, with a decision-ready executive dashboard.",
    tags: ["SQL", "Power BI", "DAX", "Business Intelligence"],
    image: "/src/assets/project-superstore.jpg",
    github: "https://github.com/Muradamen/sales-insights-powerbi",
    featured: true,
    insights: "Pinpointed underperforming markets and product lines, guiding a targeted revenue recovery strategy.",
  },
  {
    id: "3",
    title: "HR Workforce Presence Analytics — Power BI",
    description: "End-to-end HR analytics solution using Power BI, Power Query, and DAX to transform raw attendance data into insights on workforce presence, WFH behavior, and employee well-being.",
    tags: ["Power BI", "Power Query", "DAX", "HR Analytics"],
    image: "/src/assets/project-superstore.jpg",
    github: "https://github.com/Muradamen/hr-workforce-presence-analytics-powerbi",
    featured: true,
    insights: "Enabled operations leaders to track presence patterns and make data-driven workforce decisions.",
  },
  {
    id: "4",
    title: "Patient Segmentation — Healthcare Clustering",
    description: "Patient segmentation using Gower distance and hierarchical clustering on mixed healthcare data (demographic, clinical, financial), delivered through an interactive Streamlit dashboard.",
    tags: ["Python", "Clustering", "Healthcare", "Streamlit"],
    image: "/src/assets/project-customer-segmentation.jpg",
    github: "https://github.com/Muradamen/patient-segmentation-healthcare-clustering",
    insights: "Revealed actionable patient cohorts to support targeted care programs and resource planning.",
  },
  {
    id: "5",
    title: "House Price Prediction (End-to-End ML)",
    description: "End-to-end machine learning project for predicting house prices using feature engineering, Random Forest, and XGBoost, deployed via Streamlit.",
    tags: ["Python", "XGBoost", "Random Forest", "Streamlit"],
    image: "/src/assets/project-house-price.jpg",
    github: "https://github.com/Muradamen/house-price-prediction-end-to-end-ml",
    featured: true,
    insights: "XGBoost achieved the lowest RMSE after tuning, outperforming the baseline by 35%.",
  },
  {
    id: "6",
    title: "Real Estate Price Prediction",
    description: "Machine learning model predicting house prices from property and socio-economic features, demonstrating a complete data science workflow from EDA to model evaluation.",
    tags: ["Python", "Regression", "EDA", "Statistical Modeling"],
    image: "/src/assets/project-house-price.jpg",
    github: "https://github.com/Muradamen/real-estate-price-prediction-ml",
    insights: "Identified key socio-economic drivers of price, supporting investment and valuation decisions.",
  },
  {
    id: "7",
    title: "Employee Attrition Risk Analysis",
    description: "Predictive HR analytics platform identifying high-risk employees and recommending data-driven retention strategies through an interactive AI dashboard.",
    tags: ["Python", "Machine Learning", "HR Analytics", "Streamlit"],
    image: "/src/assets/project-employee-attrition.jpg",
    github: "https://github.com/Muradamen/Employee-Attrition-Risk-Analysis",
    insights: "Surfaced overtime and job satisfaction as top attrition drivers, enabling targeted retention programs.",
  },
  {
    id: "8",
    title: "E-commerce Customer Growth Forecasting",
    description: "Predictive models using Decision Tree and Random Forest Regressors to forecast year-over-year e-commerce customer growth, evaluated with RMSLE for budget and capacity planning.",
    tags: ["Python", "Random Forest", "Forecasting", "Regression"],
    image: "/src/assets/project-ecommerce-forecast.jpg",
    github: "https://github.com/Muradamen/ecommerce-customer-growth-forecasting-ml",
    insights: "Reduced planning error by 28%, sharpening inventory and marketing budget decisions.",
  },
  {
    id: "9",
    title: "Recommender System",
    description: "Built a recommender system inspired by Amazon and Netflix patterns to help users discover relevant content while improving engagement and business KPIs.",
    tags: ["Python", "Recommender", "Collaborative Filtering", "ML"],
    image: "/src/assets/project-customer-segmentation.jpg",
    github: "https://github.com/Muradamen/recommender-system",
    insights: "Personalized recommendations improve discovery and lift engagement-driven revenue.",
  },
  {
    id: "10",
    title: "Financial Fraud Detection ML",
    description: "End-to-end machine learning pipeline for detecting fraudulent financial transactions using imbalanced learning techniques and model optimization.",
    tags: ["Python", "Scikit-learn", "SMOTE", "Classification"],
    image: "/src/assets/project-fraud-detection.jpg",
    github: "https://github.com/Muradamen/financial-fraud-detection-ml",
    insights: "Achieved 99.5% recall on fraud detection while keeping false positives low using ensemble methods.",
  },
  {
    id: "11",
    title: "NLP Sentiment Analysis (Production)",
    description: "Production-ready NLP sentiment analysis system using TF-IDF, Logistic Regression, and SVM with full ML pipeline, evaluation, and deployment-ready architecture.",
    tags: ["Python", "NLP", "TF-IDF", "SVM"],
    image: "/src/assets/project-nlp-sentiment.jpg",
    github: "https://github.com/Muradamen/nlp-sentiment-analysis-production",
    insights: "SVM classifier reached 92% accuracy on sentiment classification with optimized TF-IDF features.",
  },
  {
    id: "12",
    title: "Loan Approval Prediction ML",
    description: "ML system to automate credit risk assessment, comparing Decision Tree and Random Forest to predict loan eligibility from CIBIL scores, income, and asset data.",
    tags: ["Python", "Decision Tree", "Random Forest", "Classification"],
    image: "/src/assets/project-loan-approval.jpg",
    github: "https://github.com/Muradamen/loan-approval-prediction-ml",
    insights: "Random Forest achieved 97%+ accuracy, with CIBIL score and income as the strongest predictors.",
  },
  {
    id: "13",
    title: "Customer Segmentation — K-Means & Hierarchical",
    description: "End-to-end unsupervised ML project using K-Means and Hierarchical Clustering to segment customers and generate actionable marketing insights.",
    tags: ["Python", "K-Means", "Clustering", "Unsupervised ML"],
    image: "/src/assets/project-customer-segmentation.jpg",
    github: "https://github.com/Muradamen/customer-segmentation-clustering-kmeans-hierarchical-uml",
    insights: "Identified 4 distinct customer segments enabling personalized marketing per group.",
  },
  {
    id: "14",
    title: "Unsupervised Learning Clustering",
    description: "Unsupervised learning project using K-Means and Hierarchical Clustering to analyze patterns, segment data, and extract actionable insights.",
    tags: ["Python", "Clustering", "Unsupervised ML", "EDA"],
    image: "/src/assets/project-customer-segmentation.jpg",
    github: "https://github.com/Muradamen/unsupervised-learning-clustering-project",
    insights: "Uncovered hidden structure in unlabeled data to support discovery-driven decisions.",
  },
  {
    id: "15",
    title: "Credit Card Anomaly Detection (GMM)",
    description: "Unsupervised anomaly detection on credit card transactions using Gaussian Mixture Models to identify suspicious patterns without labeled data.",
    tags: ["Python", "GMM", "Anomaly Detection", "Unsupervised ML"],
    image: "/src/assets/project-anomaly-detection.jpg",
    github: "https://github.com/Muradamen/creditcard-anomaly-detection-gmm",
    insights: "GMM detected 94% of known fraud cases without any labeled training data.",
  },
  {
    id: "16",
    title: "Student Performance Prediction",
    description: "End-to-end ML project predicting student exam scores using Linear Regression and Decision Tree, with thorough EDA and model evaluation.",
    tags: ["Python", "Linear Regression", "Decision Tree", "EDA"],
    image: "/src/assets/project-house-price.jpg",
    github: "https://github.com/Muradamen/student-performance-prediction-ml",
    insights: "Quantified the impact of study habits and attendance on academic performance.",
  },
  {
    id: "17",
    title: "Maji Ndogo — Agricultural Data Pipeline",
    description: "Data engineering and validation pipeline ensuring agricultural decision data is 100% accurate, verified, and statistically sound.",
    tags: ["Python", "Data Engineering", "Validation", "Pandas"],
    image: "/src/assets/project-water-access.jpg",
    github: "https://github.com/Muradamen/Maji-Ndogo-Agricultural-Data-Pipeline",
    insights: "Established a trusted data foundation enabling confident agricultural policy decisions.",
  },
  {
    id: "18",
    title: "Maji Ndogo Water Services — Part 3",
    description: "Comprehensive analysis transforming extensive survey data into actionable insights and sustainable solutions for water access and quality.",
    tags: ["Python", "SQL", "Data Analysis", "Reporting"],
    image: "/src/assets/project-water-access.jpg",
    github: "https://github.com/Muradamen/Integrated-Project-Maji-Ndogo-Water-Services-Part-3-",
    insights: "Delivered final recommendations to improve water access and quality for affected communities.",
  },
  {
    id: "19",
    title: "Maji Ndogo Water Services — Part 2",
    description: "Advanced SQL analysis to uncover anomalies, identify high-risk water sources, and evaluate employee performance for better resource management.",
    tags: ["SQL", "Anomaly Detection", "Data Analysis"],
    image: "/src/assets/project-water-access.jpg",
    github: "https://github.com/Muradamen/Integrated-Project-Maji-Ndogo-Water-Services-Part-2-",
    insights: "Flagged high-risk water sources and performance gaps, informing operational priorities.",
  },
  {
    id: "20",
    title: "Maji Ndogo — Data Exploration (Part 1)",
    description: "Initial data exploration, cleaning, and preparation for the Maji Ndogo water services project, building the analytical foundation for later phases.",
    tags: ["Python", "SQL", "Data Cleaning", "EDA"],
    image: "/src/assets/project-water-access.jpg",
    github: "https://github.com/Muradamen/Maji_Ndogo_Part_1_Data_Exploration",
    insights: "Created a clean, analysis-ready dataset that powered the full Maji Ndogo project series.",
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

export const aboutText = `I am a Data Analyst & AI Solutions Builder based in Ethiopia, focused on transforming raw data into meaningful insights that drive real business results.

I specialize in using Python, SQL, and Power BI to clean, analyze, and visualize data—helping businesses understand their performance, identify trends, and make smarter decisions.

I have completed advanced training through ALX Africa, where I built practical, real-world projects such as customer churn prediction systems and business intelligence dashboards.

Currently, I focus on helping small and medium businesses understand their data clearly, track performance through dashboards, and make confident, data-driven decisions. I am open to freelance opportunities, collaborations, and data-driven projects.`;

export const aboutHighlights = [
  "Cleaning and transforming complex datasets into structured, usable formats",
  "Building interactive dashboards for real-time insights",
  "Analyzing customer and sales data to uncover patterns",
  "Developing simple machine learning models for prediction and optimization",
];

export const services = [
  {
    title: "Data Cleaning & Transformation",
    description: "Turn messy, inconsistent data into clean, structured datasets ready for analysis and reporting.",
    icon: "Database",
  },
  {
    title: "Dashboard Development",
    description: "Interactive Power BI and Streamlit dashboards that surface KPIs and trends in real time.",
    icon: "LayoutDashboard",
  },
  {
    title: "Business Data Analysis & Insights",
    description: "Deep analysis of sales, customer, and operations data to uncover growth opportunities.",
    icon: "TrendingUp",
  },
  {
    title: "Basic Machine Learning Models",
    description: "Practical ML models for prediction, segmentation, and process optimization.",
    icon: "Brain",
  },
];
