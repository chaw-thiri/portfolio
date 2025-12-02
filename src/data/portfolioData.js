// Portfolio data for Chaw Thiri San

export const personalInfo = {
  name: "Chaw Thiri San",
  title: "Student & AI Researcher",
  tagline: "Passionate about NLP, Computer Vision, and Data Science",
  email: "chawthiri177@gmail.com",
  phone: "",
  location: "Incheon, Korea",
  bio: "I am a Valedictorian and Honor Student at INHA University, pursuing a BS in Integrated Systems Engineering with a GPA of 4.38/4.5. I am passionate about leveraging cutting-edge technologies to solve real-world problems. My research interests span across NLP, computer vision, quantum cryptography, and data science.",

  // Social links
  social: {
    github: "https://github.com/chaw-thiri",
    linkedin: "https://linkedin.com/in/chaw-thiri-san",
    twitter: "",
    website: "https://chaw-thiri.github.io/portfolio/",
    scholar: "https://scholar.google.com/citations?user=ngi2m7AAAAAJ&hl=en",
    orcid: "https://orcid.org/0009-0004-4680-8483",
  },

  // Profile image (place in public folder)
  image: "public/profile.JPG",
};

export const skills = {
  categories: [
    {
      title: "Programming & Development",
      skills: ["Python", "SQL", "Git", "APIs", "C++" , "React"],
    },
    {
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Keras", "Matplotlib", "Pandas", "NumPy"],
    },
    {
      title: "NLP & Deep Learning",
      skills: ["DistilBERT", "Transformers", "Natural Language Processing", "CNNs"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Docker", "Raspberry Pi", "TurtleBot"],
    },
    {
      title: "Web Scraping & APIs",
      skills: ["Selenium", "BeautifulSoup", "News API", "RESTful APIs"],
    },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Unique Person Tracking and Counting",
    description: "Finetuned BOT-Sort model with yolo11n for person re-identification to ensure accurate unique person counting throughout video footage. Optimized for Raspberry Pi deployment to reduce computational workload while maintaining accuracy.",
    image: "/projects/person-tracking.jpg",
    technologies: ["TensorFlow", "Docker", "Ultralytics", "Raspberry Pi", "TurtleBot", "YOLO11n", "BOT-Sort"],
    github: "https://github.com/chaw-thiri/Unique-Person-Counter-using-Re-id-",
    demo: "https://github.com/chaw-thiri/Unique-Person-Counter-using-Re-id-/blob/main/t_homeplus1.mp4",
    featured: true,
  },
  {
    id: 2,
    title: "Call Volume Detection",
    description: "Winner of 1st prize at hackathon. Time-series prediction project on NYC 311 call center data implementing multiple tree-based ML models (XGBRegressor, LightGBM, CatBoost, Random Forest). Includes statistical anomaly detection and Power BI dashboard visualization.",
    image: "/projects/call-volume.jpg",
    technologies: ["Python", "XGBoost", "LightGBM", "CatBoost", "Power BI", "Statistical Analysis"],
    github: "https://github.com/chaw-thiri/City-311-Insights-Challenge",
    demo: "",
    featured: true,
  },
  {
    id: 3,
    title: "Earthquake Prediction Model",
    description: "CNN-based model to predict future earthquakes using historical seismic data. Utilizes Keras regressor with Adam optimizer and Grid Search to estimate earthquake magnitude and crack depth with high accuracy.",
    image: "/projects/earthquake.jpg",
    technologies: ["TensorFlow", "Keras", "CNNs", "Python", "Matplotlib", "Grid Search"],
    github: "https://github.com/chaw-thiri/earthquake_detection_-_crack_depth_estimation",
    demo: "",
    featured: true,
  },
  {
    id: 4,
    title: "Clickbait Detector",
    description: "AI-powered tool for classifying news headlines using DistilBERT with high accuracy. Features real-time predictions through Streamlit app, integrates web scraping (Selenium, BeautifulSoup), News API, and interactive EDA visualizations.",
    image: "/projects/clickbait.jpg",
    technologies: ["DistilBERT", "PyTorch", "NLP", "Streamlit", "Selenium", "BeautifulSoup", "News API", "Plotly"],
    github: "https://github.com/chaw-thiri/clickbait_detection",
    demo: "",
    featured: true,
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
    citations: 4,
    year: 2025,
    tags: ["Agriculture", "AI", "Robotics", "IoT", "5G", "Sustainability"],
  },
  {
    id: 2,
    title: "Quantum Cryptography in Biometric Security: A Comprehensive Review of Algorithms and Integration Challenges",
    authors: "Chaw Thiri San, Vijay Kakani",
    venue: "Journal of Industrial Information Integration (Elsevier) - Under Review",
    type: "Journal Article",
    abstract: "Investigates quantum-resilient biometric security via post-quantum cryptography and quantum-native protocols (QKD, entanglement), analyzing vulnerabilities, security-performance trade-offs, and implementation challenges for practical quantum-secure authentication systems.",
    link: "",
    pdf: "",
    citations: 0,
    year: 2025,
    tags: ["Quantum Cryptography", "Biometric Security", "Post-Quantum", "QKD", "Authentication"],
  },
  {
    id: 3,
    title: "Large Language Models and Eye-Tracking: Investigating Code Comprehension and Programmer Behaviors",
    authors: "Chaw Thiri San",
    venue: "Advanced Engineering Informatics (Elsevier) - Under Review",
    type: "Journal Article",
    abstract: "Conducts an in-depth review on limitations in LLMs' code understanding due to lack of cognitive grounding and explores how eye-tracking data can inform more human-centered, interpretable, and functionally accurate models while addressing trust and critical thinking in AI-generated code.",
    link: "",
    pdf: "",
    citations: 0,
    year: 2025,
    tags: ["LLM", "Eye-Tracking", "Code Comprehension", "Human-AI Interaction"],
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
    image: "/certifications/ml-specialization.jpg",
    skills: ["Machine Learning", "Deep Learning", "Neural Networks"],
  },
  {
    id: 2,
    title: "DevNet Associate",
    issuer: "Cisco",
    date: "2024",
    credentialId: "903f50f3-38c3-4598-9f3a-fa2ed6d04d5c",
    link: "https://www.credly.com/badges/903f50f3-38c3-4598-9f3a-fa2ed6d04d5c/linked_in_profile",
    image: "/certifications/devnet.jpg",
    skills: ["Network Automation", "APIs", "Python"],
  },
  {
    id: 3,
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "2024",
    credentialId: "",
    link: "https://www.credly.com/badges/c8cd0341-834a-4714-8d93-24b6309311af/linked_in_profile",
    image: "/certifications/ccna.jpg",
    skills: ["Networking", "Routing", "Switching"],
  },
  {
    id: 4,
    title: "CyberOps Associate",
    issuer: "Cisco",
    date: "2024",
    credentialId: "",
    link: "https://www.credly.com/badges/5acc96de-6b98-44ad-b285-2cec03797ac6/linked_in_profile",
    image: "/certifications/cyberops.jpg",
    skills: ["Cybersecurity", "Network Security", "Threat Detection"],
  },
  {
    id: 5,
    title: "TensorFlow Keras Bootcamp",
    issuer: "OpenCV University",
    date: "2024",
    credentialId: "",
    link: "",
    image: "/certifications/tensorflow.jpg",
    skills: ["TensorFlow", "Keras", "Deep Learning"],
  },
  {
    id: 6,
    title: "OpenCV Bootcamp",
    issuer: "OpenCV University",
    date: "2024",
    credentialId: "a311db67d6ee4a9e8a571ca3af562a07",
    link: "https://courses.opencv.org/certificates/a311db67d6ee4a9e8a571ca3af562a07",
    image: "/certifications/opencv.jpg",
    skills: ["OpenCV", "Computer Vision", "Image Processing"],
  },
];

export const awards = [
  {
    id: 1,
    title: "Winner of Humblebee AI's 2025 Hackathon",
    issuer: "Humblebee AI",
    date: "2025",
    description: "First place winner in the AI hackathon competition.",
  },
  {
    id: 2,
    title: "Most Creative Award at Seoul Global Startup Center Hackathon",
    issuer: "Seoul Global Startup Center",
    date: "November 2025",
    description: "Recognized for the most creative solution in the hackathon.",
  },
  {
    id: 3,
    title: "2nd Award at Inha University SGCS Capstone Competition",
    issuer: "INHA University",
    date: "December 2025",
    description: "Second place in the capstone design competition.",
  },
  
  {
    id: 4,
    title: "Global Scholarship 1 & 2 (100% tuition waiver)",
    issuer: "INHA University",
    date: "2022-2025",
    description: "Continuing full tuition scholarship for maintaining GPA above 4.3.",
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
