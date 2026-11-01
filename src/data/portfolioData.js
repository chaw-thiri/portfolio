// Portfolio data for Chaw Thiri San

export const personalInfo = {
  name: "Chaw Thiri San",
  title: "Open to research collaborations",
  tagline: "My work spans natural language processing, computer vision, and trustworthy AI. Feel free to contact me to discuss research collaborations.",
  email: "chawthiri177@gmail.com",
  phone: "",
  location: "Incheon, Korea",
  bio: "My research interests center on natural language processing, computer vision, and trustworthy AI. Through applied projects and published research, I explore how machine learning systems can be evaluated and used in practice. I welcome research collaborations and academic partnerships.",

  // Social links
  social: {
    github: "https://github.com/chaw-thiri",
    linkedin: "https://linkedin.com/in/chaw-thiri-san", 
    scholar: "https://scholar.google.com/citations?user=ngi2m7AAAAAJ&hl=en",
    medium: "https://medium.com/@chawthirisan"
  },

  // Profile image (place in public folder)
  image: "/portfolio/profile.jpg",
};

export const skills = {
  categories: [
    {
      title: "Machine Learning & Evaluation",
      description: "Comparing predictive models on time-series and wearable sensor data.",
      skills: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "Model comparison", "Error analysis"],
    },
    {
      title: "NLP & LLM Security",
      description: "Fine-tuning and evaluating headline classifiers and prompt-injection detectors.",
      skills: ["DistilBERT", "Transformer fine-tuning", "Text classification", "Prompt-injection detection", "Threshold analysis", "Generalization testing"],
    },
    {
      title: "Computer Vision & Robotics",
      description: "Detection, persistent identities, and perception integrated with robot control.",
      skills: ["OpenCV", "YOLO", "BoT-SORT", "Person re-identification", "ROS 2", "TurtleBot3"],
    },
  ],
};

export const projects = [
  {
    id: 1,
    title: "PromptShield · LLM Security Lab",
    category: "AI & NLP",
    highlight: "Research prototype",
    description: "An experimental prompt-injection detector that fine-tunes DistilBERT to screen untrusted documents before they reach a local Llama model. Evaluates attack detection, benign false alarms, and useful task completion through reproducible studies, with documented limits in generalization.",
    technologies: ["Python", "DistilBERT", "PyTorch", "Ollama", "Llama 3.2"],
    github: "https://github.com/chaw-thiri/llm-security-lab",
  },
  {
    id: 8,
    title: "TENG Sensor · Rehabilitation Analysis",
    category: "Data Science",
    description: "Compares machine learning and neural network models on rehabilitation monitoring signals from wearable TENG nanosensors. Classifies participants and sensor locations using configurable signal windows, with confusion matrices to compare model behavior.",
    technologies: ["Python", "scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy"],
    github: "https://github.com/chaw-thiri/ai-teng-nano-sensor",
  },
  {
    id: 2,
    title: "Vision360 · Autonomous Robot Vision",
    category: "Computer Vision",
    description: "A vision and navigation system for TurtleBot3 that combines pedestrian detection, lane following, and traffic sign recognition. Integrates ROS 2 control, emergency stopping, and a browser interface for live camera monitoring and manual control.",
    technologies: ["Python", "ROS 2", "YOLOv8", "OpenCV", "FastAPI", "TurtleBot3"],
    github: "https://github.com/chaw-thiri/vision360",
  },
  {
    id: 5,
    title: "City 311 · Call Volume Forecasting",
    category: "Data Science",
    highlight: "1st place · Humblebee AI Hackathon",
    description: "Analyzes NYC 311 service requests to forecast call volumes and reveal seasonal patterns. Compares tree-based regression models, investigates statistical anomalies, and presents service trends and data quality issues in a Power BI dashboard.",
    technologies: ["Python", "XGBoost", "LightGBM", "CatBoost", "scikit-learn", "Power BI"],
    github: "https://github.com/chaw-thiri/City-311-Insights-Challenge",
    demo: "https://drive.google.com/file/d/14U43gzWZZ6PYs7vOT1VAhWfcVDHBRuI3/view",
  },
  {
    id: 4,
    title: "Unique Person Tracking and Counting",
    category: "Computer Vision",
    description: "Combines YOLO11n detection with BoT-SORT re-identification to maintain person IDs through occlusion and count unique visitors in video. Includes configurable frame skipping and annotated video exports with bounding boxes, persistent IDs, and count overlays.",
    technologies: ["Python", "YOLO11n", "BoT-SORT", "Ultralytics", "OpenCV"],
    github: "https://github.com/chaw-thiri/Unique-Person-Counter-using-Re-id-",
    demo: "https://github.com/chaw-thiri/Unique-Person-Counter-using-Re-id-/blob/main/t_homeplus1.mp4",
  },
  {
    id: 3,
    title: "Clickbait Detector",
    category: "AI & NLP",
    description: "A headline classification pipeline built around a fine-tuned DistilBERT model. Combines news scraping and News API integration with a Streamlit app for confidence scores, label corrections, dataset updates, and interactive exploratory analysis.",
    technologies: ["DistilBERT", "PyTorch", "Streamlit", "Selenium", "BeautifulSoup", "Plotly"],
    github: "https://github.com/chaw-thiri/clickbait_detection",
    demo: "https://youtu.be/SHChMa8tb0M",
  },
];

export const publications = [
  {
    id: 1,
    title: "Smart Precision Weeding In Agriculture Using 5IR Technologies",
    authors: "Chaw Thiri San, Vijay Kakani",
    venue: "Electronics (MDPI), 2025",
    type: "Journal Article",
    abstract: "Conducted an in-depth review on how 5IR technologies (AI, robotics, IoT, 5G, edge computing) are transforming weeding in agriculture. Highlighted sustainable, data-driven practices that reduce herbicide use and enhance crop yield. Proposed scalable solutions for global adoption, especially in low-resource settings.",
    link: "https://www.mdpi.com/2079-9292/14/13/2517",
    pdf: "https://www.mdpi.com/2079-9292/14/13/2517/pdf",
    citations: 15,
    year: 2025,
    tags: ["Agriculture", "AI", "Robotics", "IoT", "5G", "Sustainability"],
  },
];

export const experience = [
  {
    id: 1,
    type: "education",
    title: "BS, Integrated Systems Engineering",
    organization: "INHA University",
    location: "Incheon, South Korea",
    startDate: "Aug 2022",
    endDate: "Present",
    description: "Pursuing a Bachelor of Science in Integrated Systems Engineering with a focus on artificial intelligence, computer vision, NLP and data science.",
    highlights: [
      "GPA: 4.38/4.5 (Valedictorian and Honor Student)",
      "Full Tuition Global Scholarship (2022-2025)",
    ],
    logo: "/logos/inha.png",
  },
  {
    id: 2,
    type: "work",
    title: "Python Programming Tutor",
    organization: "Inha University",
    location: "Incheon, South Korea",
    startDate: "Sep 2023",
    endDate: "Dec 2023",
    description: "Provided one-on-one tutoring in software programming using Python, helping students understand fundamental programming concepts and develop practical coding skills.",
    highlights: [
      "Taught Python programming fundamentals",
      "Guided students through practical coding projects",
      "Developed customized learning materials",
    ],
    logo: "",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2024",
    credentialId: "",
    link: "https://www.coursera.org/account/accomplishments/specialization/5KSQ5T5QRK2B",
    skills: ["Machine Learning", "Deep Learning", "Neural Networks"],
  },
];

export const awards = [
  {
    id: 1,
    title: "Winner of Humblebee AI's 2025 Hackathon",
    issuer: "Humblebee AI",
    date: "2025",
    description: "First place winner in the AI hackathon competition.",
    image: "/portfolio/certifications/humblebee_ai_hackathon.jpg"
  },
  {
    id: 2,
    title: "Most Creative Award at Seoul Global Startup Center Hackathon",
    issuer: "Seoul Global Startup Center",
    date: "November 2025",
    description: "Recognized for the most creative solution in the hackathon.",
    image: "/portfolio/certifications/seoul_global_startup_hackthon.jpg"
  },
  {
    id: 3,
    title: "2nd Award at Inha University SGCS Capstone Competition",
    issuer: "INHA University",
    date: "December 2025",
    description: "Second place in the capstone design competition.",
    image: "/portfolio/certifications/inha_capstone.jpg"
  },
];



// Language proficiencies
export const languages = [
  {
    language: "Burmese",
    proficiency: "Native",
  },
  {
    language: "English",
    proficiency: "Advanced (IELTS 8)",
  },
  {
    language: "Korean",
    proficiency: "Pre-intermediate",
  },
];

// Chatbot knowledge base
export const chatbotKnowledge = {
  researchInterests: [
    "Natural Language Processing (NLP) - Sentiment analysis, text classification, transformer models",
    "Computer Vision - Object detection, person re-identification, YOLO models, real-time tracking",
    "Quantum Cryptography - Post-quantum algorithms, biometric security, QKD protocols",
    "Machine Learning - Deep learning, CNNs, time-series prediction, ensemble methods",
    "Agricultural AI - Smart weeding, precision agriculture, 5IR technologies, IoT integration",
    "Biometric Security - Quantum-resilient authentication, secure systems",
    "Large Language Models - Code comprehension, LLM limitations, cognitive grounding",
    "Human-AI Interaction - Eye-tracking integration, interpretable AI, trust in AI systems",
    "Data Science - Statistical analysis, data visualization, predictive modeling",
    "Robotics & Edge Computing - Raspberry Pi deployment, TurtleBot, model optimization"
  ],
  availability: "Currently pursuing Bachelor's degree in Integrated Systems Engineering at INHA University (expected graduation 2026). GPA: 4.38/4.5. Full tuition Global Scholarship recipient. Open to research collaborations, internship opportunities, and academic partnerships in AI/ML, computer vision, and quantum cryptography.",
  achievements: [
    "Published first-author paper in MDPI Electronics journal (15 citations)",
    "Two papers under review at Elsevier journals (Journal of Industrial Information Integration, Advanced Engineering Informatics)",
    "Winner of Humblebee AI's 2025 Hackathon (1st place)",
    "Most Creative Award at Seoul Global Startup Center Hackathon",
    "2nd Award at INHA University SGCS Capstone Competition",
    "Valedictorian and Honor Student at INHA University",
    "Multiple professional certifications including Cisco DevNet Associate, CCNA, CyberOps Associate",
    "Machine Learning Specialization from DeepLearning.AI",
    "OpenCV Bootcamp certification"
  ],
  technicalExpertise: {
    programmingLanguages: "Python (primary), SQL, C++, React, Git",
    mlFrameworks: "TensorFlow, PyTorch, Keras, Scikit-learn, OpenCV",
    nlpTools: "DistilBERT, Transformers, BERT-based models",
    dataScience: "Pandas, NumPy, Matplotlib, Plotly, statistical analysis",
    mlModels: "XGBoost, LightGBM, CatBoost, Random Forest, CNNs, YOLO11n, BOT-Sort",
    tools: "Docker, Raspberry Pi, TurtleBot, Streamlit, Power BI",
    webTech: "Selenium, BeautifulSoup, RESTful APIs, News API"
  },
  notableProjects: {
    personTracking: "Finetuned BOT-Sort with YOLO11n for unique person counting on Raspberry Pi - real-time deployment optimized for edge computing",
    callVolume: "1st place hackathon winner - Time-series prediction with ensemble ML models (XGBoost, LightGBM, CatBoost) on NYC 311 data",
    clickbaitDetector: "NLP tool using DistilBERT for news headline classification with Streamlit interface and real-time API integration",
    earthquakePrediction: "CNN-based model for seismic prediction with magnitude and crack depth estimation using Keras and Grid Search"
  },
  researchFocus: "My research bridges theoretical foundations with practical applications - from quantum-secure biometric systems to agricultural AI solutions. I'm particularly interested in making AI systems more interpretable, trustworthy, and grounded in human cognition.",
  collaborationInterests: "Looking for opportunities in: AI research labs, computer vision projects, quantum computing applications, agricultural technology, NLP systems, and interdisciplinary AI projects combining multiple domains.",

  // Domain-specific expertise mapping for intelligent responses
  expertiseDomains: {
    frontend: {
      skills: ["React", "JavaScript/ES6+", "HTML5/CSS3", "Responsive Design", "styled-components", "Framer Motion animations"],
      projects: ["Portfolio Website - Built with React, Vite, styled-components with dark/light mode toggle and smooth animations"],
      experience: "Self-taught frontend development through building personal projects and modern web applications",
      technologies: "React, Vite, styled-components, framer-motion, responsive design principles",
      evidence: "This portfolio website itself demonstrates frontend skills - built entirely with React including custom animations, theme system, and responsive design"
    },
    backend: {
      skills: ["Python", "RESTful APIs", "SQL databases", "Docker containerization", "API integration"],
      projects: [
        "Clickbait Detector - Backend API integration with News API, web scraping with Selenium and BeautifulSoup",
        "Call Volume Detection - Data pipeline with NYC 311 API integration"
      ],
      certifications: ["Cisco DevNet Associate - Network Automation and APIs"],
      technologies: "Python Flask/FastAPI, SQL, Docker, REST APIs, web scraping"
    },
    machineLearning: {
      skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Deep Learning", "Model Training & Fine-tuning"],
      projects: [
        "Person Tracking - Fine-tuned YOLO11n and BOT-Sort models",
        "Call Volume Detection - Ensemble ML with XGBoost, LightGBM, CatBoost, Random Forest",
        "Earthquake Prediction - CNN-based regression model with Grid Search optimization",
        "Clickbait Detector - Fine-tuned DistilBERT transformer model"
      ],
      certifications: ["Machine Learning Specialization (DeepLearning.AI)"],
      publications: "Applied ML techniques in 3 research papers (1 published, 2 under review)",
      experience: "2+ years hands-on ML experience with computer vision, NLP, and time-series prediction"
    },
    computerVision: {
      skills: ["OpenCV", "YOLO models", "Object Detection", "Person Re-identification", "Image Processing", "Real-time tracking"],
      projects: [
        "Person Tracking - YOLO11n + BOT-Sort for unique person counting with re-identification",
        "Earthquake Prediction - CNN-based visual pattern recognition"
      ],
      certifications: ["OpenCV Bootcamp (OpenCV University)"],
      technologies: "OpenCV, YOLO11n, BOT-Sort, TensorFlow, PyTorch, Ultralytics",
      deployment: "Optimized models for Raspberry Pi edge deployment"
    },
    nlp: {
      skills: ["Transformers", "DistilBERT", "BERT", "Text Classification", "Sentiment Analysis", "Natural Language Processing"],
      projects: ["Clickbait Detector - DistilBERT for news headline classification with 94%+ accuracy"],
      publications: ["Large Language Models and Eye-Tracking paper (under review at Advanced Engineering Informatics)"],
      technologies: "DistilBERT, PyTorch, Transformers library, tokenization, fine-tuning",
      applications: "Text classification, sentiment analysis, headline authenticity detection"
    },
    dataScience: {
      skills: ["Pandas", "NumPy", "Matplotlib", "Plotly", "Statistical Analysis", "Data Visualization", "Feature Engineering"],
      projects: [
        "Call Volume Detection - Time-series analysis, statistical anomaly detection, Power BI dashboards",
        "Clickbait Detector - Exploratory Data Analysis with interactive Plotly visualizations"
      ],
      technologies: "Python (Pandas, NumPy, Matplotlib, Seaborn, Plotly), SQL, Power BI, statistical modeling",
      experience: "Extensive EDA and data preprocessing across multiple ML projects"
    },
    webScraping: {
      skills: ["Selenium", "BeautifulSoup", "Web Automation", "Data Extraction", "API Integration"],
      projects: ["Clickbait Detector - Automated web scraping with Selenium and BeautifulSoup, News API integration"],
      technologies: "Selenium WebDriver, BeautifulSoup4, Requests, News API, RESTful APIs"
    },
    deployment: {
      skills: ["Docker", "Edge Computing", "Model Optimization", "Raspberry Pi", "Real-time Systems"],
      projects: ["Person Tracking - Optimized YOLO model for Raspberry Pi deployment, Docker containerization"],
      technologies: "Docker, Raspberry Pi 4, TurtleBot integration, model quantization, edge optimization",
      certifications: ["Cisco DevNet Associate - focuses on deployment automation"]
    },
    networking: {
      skills: ["Network Fundamentals", "APIs", "Network Security", "Automation"],
      certifications: [
        "Cisco DevNet Associate - Network automation, APIs, Python for networking",
        "CCNA: Introduction to Networks - Routing, switching, network protocols",
        "CyberOps Associate - Cybersecurity operations, network security, threat detection"
      ],
      technologies: "RESTful APIs, network protocols, security best practices"
    },
    research: {
      publications: [
        "Smart Precision Weeding in Agriculture Using 5IR Technologies (MDPI Electronics, 2025) - 15 citations",
        "Quantum Cryptography in Biometric Security (Elsevier JIII - Under Review)",
        "Large Language Models and Eye-Tracking (Elsevier AEI - Under Review)"
      ],
      domains: ["Agricultural AI", "Quantum Cryptography", "Biometric Security", "LLMs", "Human-AI Interaction"],
      approach: "Bridges theoretical foundations with practical applications, focuses on interpretable and trustworthy AI"
    },
    quantumComputing: {
      research: "Quantum Cryptography in Biometric Security paper - explores post-quantum cryptography, QKD protocols, quantum-resilient authentication",
      knowledge: "Post-quantum algorithms, quantum key distribution, quantum entanglement for security, biometric system hardening",
      publications: "Paper under review at Journal of Industrial Information Integration (Elsevier)"
    },
    robotics: {
      skills: ["TurtleBot", "Raspberry Pi", "Embedded Systems", "Real-time Processing"],
      projects: ["Person Tracking - Deployed on Raspberry Pi with TurtleBot integration for mobile robot applications"],
      technologies: "TurtleBot platform, Raspberry Pi 4, embedded Linux, real-time computer vision"
    }
  }
};
