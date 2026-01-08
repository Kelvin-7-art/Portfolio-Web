export const profile = {
  name: "Kelvin Khotso Kgarudi",
  shortName: "Kelvin Kgarudi",
  location: "Potchefstroom, North-West, South Africa",
  role: "Machine Learning & Data Science Honours Student",
  headline: "AI Applications | Fraud Detection | Time Series Forecasting | Computer Vision",
  email: "kgotsokgarudi@gmail.com",
  phone: "+27 79 523 8702",
  bio: "I'm an Honours student in Data Science, passionate about building end-to-end machine learning applications—from data preprocessing and feature engineering to model training, evaluation, and deployment. My work focuses on creating intelligent systems that solve real-world problems.",
  aboutExtended: "With a deep interest in AI applications for finance, fraud detection, and intelligent systems, I combine technical expertise with a commitment to ethical tech innovation. I believe in the power of technology to transform industries and improve lives, guided by Christian values of integrity and service to others.",
  cvPath: "/Kelvin_Kgarudi_CV.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/kelvin-k-641837291/",
    github: "https://github.com/Kelvin-7-art",
    youtube: "https://www.youtube.com/@TekMonger"
  },
  interests: [
    "AI in Finance",
    "Fraud Detection Systems",
    "Intelligent Automation",
    "Christian Mentorship",
    "Tech Innovation"
  ]
};

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: "ml" | "fraud" | "forecasting" | "cv" | "nlp";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string[];
}

export const projects: Project[] = [
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection System",
    description: "End-to-end ML system for detecting fraudulent transactions using ensemble methods and neural networks.",
    longDescription: "A comprehensive group project implementing multiple machine learning models to detect credit card fraud. The system compares Logistic Regression, Random Forest, Gradient Boosting, SVM, and Neural Networks, with detailed performance metrics and a deployed Streamlit dashboard for real-time predictions.",
    techStack: ["Python", "scikit-learn", "TensorFlow", "Streamlit", "Pandas", "NumPy"],
    category: "fraud",
    githubUrl: "https://github.com/Kelvin-7-art",
    liveUrl: "https://fraud-detection-demo.streamlit.app",
    featured: true,
    metrics: ["F1 Score: 0.94", "ROC-AUC: 0.98", "Precision-Recall Optimized"]
  },
  {
    id: "stock-forecasting",
    title: "AI Stock/Crypto/Forex Forecasting App",
    description: "Advanced time-series forecasting application for financial markets using Prophet, ARIMA, LSTM, and GRU models.",
    longDescription: "A sophisticated forecasting application that combines traditional statistical methods with deep learning for accurate market predictions. Features include volatility alerts, technical indicators, and interactive visualizations for stocks, cryptocurrencies, and forex pairs.",
    techStack: ["Python", "Prophet", "TensorFlow", "Keras", "Streamlit", "Plotly"],
    category: "forecasting",
    githubUrl: "https://github.com/Kelvin-7-art",
    liveUrl: "https://stock-forecast-demo.streamlit.app",
    featured: true,
    metrics: ["MAPE: 3.2%", "Real-time Predictions", "Multi-asset Support"]
  },
  {
    id: "llm-chatbot",
    title: "AI Chatbot Web App (LLM)",
    description: "Intelligent conversational AI powered by LangChain and OpenAI/open-source LLMs.",
    longDescription: "A flexible chatbot application built with LangChain that supports multiple LLM backends. Features include conversation memory, context-aware responses, and easy deployment for various use cases.",
    techStack: ["Python", "LangChain", "OpenAI API", "Streamlit", "FastAPI"],
    category: "nlp",
    githubUrl: "https://github.com/Kelvin-7-art",
    featured: true
  },
  {
    id: "face-recognition",
    title: "Face Recognition Attendance System",
    description: "Automated attendance tracking using facial recognition with CNN-based embeddings.",
    longDescription: "An intelligent attendance system that uses computer vision to recognize faces and automatically log attendance. Built with OpenCV for face detection and custom CNN models for generating face embeddings.",
    techStack: ["Python", "OpenCV", "TensorFlow", "CNN", "SQLite"],
    category: "cv",
    githubUrl: "https://github.com/Kelvin-7-art",
    featured: false
  },
  {
    id: "emotion-detection",
    title: "Human Emotion Detection",
    description: "Real-time emotion detection system using YOLO and TensorFlow for facial expression analysis.",
    longDescription: "A computer vision application that detects and classifies human emotions in real-time. Uses YOLO for face detection and a TensorFlow model trained on facial expression datasets to identify emotions like happiness, sadness, anger, and surprise.",
    techStack: ["Python", "YOLO", "TensorFlow", "OpenCV", "Keras"],
    category: "cv",
    githubUrl: "https://github.com/Kelvin-7-art",
    featured: false
  },
  {
    id: "image-classifier",
    title: "Machine Learning Image Classifier",
    description: "Custom image classification model with Streamlit deployment for easy inference.",
    longDescription: "A flexible image classification system that can be trained on custom datasets. Features include data augmentation, transfer learning options, and a user-friendly Streamlit interface for predictions.",
    techStack: ["Python", "TensorFlow", "Keras", "Streamlit", "NumPy"],
    category: "ml",
    githubUrl: "https://github.com/Kelvin-7-art",
    liveUrl: "https://image-classifier-demo.streamlit.app",
    featured: false
  },
  {
    id: "real-estate-predictor",
    title: "Real Estate Price Predictor",
    description: "ML model for predicting property prices based on various features and market data.",
    longDescription: "A regression-based application that predicts real estate prices using features like location, size, amenities, and market trends. Deployed as an interactive Streamlit app for easy property valuation.",
    techStack: ["Python", "scikit-learn", "XGBoost", "Streamlit", "Pandas"],
    category: "ml",
    githubUrl: "https://github.com/Kelvin-7-art",
    liveUrl: "https://real-estate-predictor.streamlit.app",
    featured: false
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis Tweets Web App",
    description: "NLP application for analyzing sentiment in social media posts and tweets.",
    longDescription: "A natural language processing application that analyzes the sentiment of tweets and social media posts. Uses pre-trained models and custom fine-tuning for accurate sentiment classification.",
    techStack: ["Python", "NLTK", "Transformers", "Streamlit", "Pandas"],
    category: "nlp",
    githubUrl: "https://github.com/Kelvin-7-art",
    liveUrl: "https://sentiment-tweets-demo.streamlit.app",
    featured: false
  }
];

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    icon: "Code2",
    skills: ["Python", "SQL", "R", "C++", "JavaScript"]
  },
  {
    name: "Machine Learning / AI",
    icon: "Brain",
    skills: ["scikit-learn", "TensorFlow", "PyTorch", "Keras", "XGBoost", "LightGBM"]
  },
  {
    name: "Data & Analytics",
    icon: "BarChart3",
    skills: ["Pandas", "NumPy", "Feature Engineering", "Model Evaluation", "Time Series Analysis", "Statistical Analysis"]
  },
  {
    name: "Deployment & Tools",
    icon: "Cloud",
    skills: ["Streamlit", "Git/GitHub", "Jupyter", "Google Colab", "Docker", "FastAPI"]
  },
  {
    name: "Computer Vision",
    icon: "Eye",
    skills: ["OpenCV", "YOLO", "CNN Architectures", "Image Processing", "Face Recognition"]
  },
  {
    name: "NLP & LLMs",
    icon: "MessageSquare",
    skills: ["LangChain", "Transformers", "NLTK", "spaCy", "OpenAI API", "Prompt Engineering"]
  }
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerLogo: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: "ibm-ml",
    title: "IBM Machine Learning Specialization",
    issuer: "IBM",
    issuerLogo: "IBM",
    date: "2024",
    credentialId: "IBM-ML-2024-XXX"
  },
  {
    id: "ibm-dl",
    title: "IBM Deep Learning with PyTorch, Keras & TensorFlow Specialization",
    issuer: "IBM",
    issuerLogo: "IBM",
    date: "2024",
    credentialId: "IBM-DL-2024-XXX"
  },
  {
    id: "ibm-keras-tf",
    title: "Deep Learning with Keras & TensorFlow",
    issuer: "IBM",
    issuerLogo: "IBM",
    date: "2023",
    credentialId: "IBM-KT-2023-XXX"
  },
  {
    id: "ibm-pytorch",
    title: "Introduction to Neural Networks and PyTorch",
    issuer: "IBM",
    issuerLogo: "IBM",
    date: "2023",
    credentialId: "IBM-PT-2023-XXX"
  },
  {
    id: "upenn-crypto",
    title: "Cryptocurrency and Blockchain: An Introduction to Digital Currencies",
    issuer: "University of Pennsylvania",
    issuerLogo: "UPenn",
    date: "2023",
    credentialId: "UPENN-CB-2023-XXX"
  },
  {
    id: "sds-r",
    title: "R Programming A-Z",
    issuer: "SuperDataScience",
    issuerLogo: "SDS",
    date: "2022",
    credentialId: "SDS-R-2022-XXX"
  }
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  current: boolean;
}

export const education: Education[] = [
  {
    id: "honours",
    degree: "Honours in Data Science",
    institution: "North-West University",
    location: "Potchefstroom, South Africa",
    period: "2024 - Present",
    description: "Specializing in Machine Learning, AI Applications, and Advanced Statistical Methods. Focus on fraud detection, time-series forecasting, and computer vision applications.",
    current: true
  },
  {
    id: "bachelors",
    degree: "Bachelor of Science in Computer Science",
    institution: "North-West University",
    location: "Potchefstroom, South Africa",
    period: "2021 - 2023",
    description: "Strong foundation in algorithms, data structures, programming, and mathematics. Developed interest in machine learning and data science.",
    current: false
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Sarah Mitchell",
    role: "Professor of Data Science",
    company: "North-West University",
    content: "Kelvin demonstrates exceptional analytical skills and a deep understanding of machine learning concepts. His work on fraud detection systems shows remarkable attention to detail and practical application."
  },
  {
    id: "t2",
    name: "James Thompson",
    role: "Senior ML Engineer",
    company: "FinTech Solutions",
    content: "Working with Kelvin on the forecasting project was a pleasure. His ability to translate complex ML models into production-ready applications is impressive for someone at his level."
  },
  {
    id: "t3",
    name: "Dr. Michael Chen",
    role: "Research Lead",
    company: "AI Research Lab",
    content: "Kelvin's commitment to ethical AI development and his technical proficiency make him a standout candidate. His work on computer vision projects demonstrates both creativity and rigor."
  }
];

export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "ml", label: "Machine Learning" },
  { value: "fraud", label: "Fraud Detection" },
  { value: "forecasting", label: "Forecasting" },
  { value: "cv", label: "Computer Vision" },
  { value: "nlp", label: "NLP / LLM" }
];
