export const portfolioData = {
  personal: {
    name: "R SURABHI",
    shortName: "Surabhi",
    title: "Computer Science & Data Science Engineer",
    subtitles: [
      "AI & Data Science Undergrad",
      "Full-Stack Platform Developer",
      "Machine Learning & Privacy Systems",
      "Microsoft Certified Power BI Analyst"
    ],
    tagline: "Building ideas into impactful solutions through technology and creativity.",
    bio: "Computer Science & Data Science undergraduate at CMR Institute of Technology, Bengaluru (CGPA 8.81). Passionate about combining mathematical rigor with modern software engineering — specializing in privacy-preserving data systems, machine learning, and interactive full-stack platforms.",
    location: "Bengaluru, India",
    college: "CMR Institute of Technology (CMRIT)",
    cgpa: "8.81 / 10.0",
    gradYear: "2027",
    email: "r.surabhi.2005@gmail.com",
    collegeEmail: "rsu23csds@cmrit.ac.in",
    phone: "+91 9482452588",
    dob: "10th March, 2005",
    languages: ["English", "Kannada", "Hindi"],
    hobbies: ["Drawing & Sketching", "Book Reading", "Classical & Contemporary Dancing", "Volleyball"],
    socials: {
      github: "https://github.com/rsu23csds",
      linkedin: "http://linkedin.com/in/r-surabhi-64630430a",
      leetcode: "https://leetcode.com/u/r_surabhi_/",
    }
  },

  stats: [
    { label: "Academic CGPA", value: "8.81", suffix: " / 10", caption: "CMRIT Bengaluru" },
    { label: "Hackathon Victory", value: "1st", suffix: " Place", caption: "CMRIT SIH 2025" },
    { label: "Core Platforms", value: "03", suffix: " Systems", caption: "AI, Privacy & Full-Stack" },
    { label: "Certified Analyst", value: "Certificate", suffix: "", caption: "Microsoft Power BI" },
  ],

  projects: [
    {
      id: "privacy-guardian",
      title: "Dataset Privacy & Intelligence Guardian",
      category: "Privacy AI / Full-Stack System",
      timeline: "2024 - 2025",
      highlight: "Flagship Research & Application",
      description: "Developed a full-stack platform to analyze CSV datasets, detect sensitive information, assess privacy risks and automate data anonymization.",
      longDescription: "Integrated automated detection for Personally Identifiable Information (PII) and implemented k-anonymity, l-diversity, and re-identification attack simulations to evaluate data exposure. Built purpose-aware anonymization, automated data cleaning, and ML utility benchmarking to measure predictive performance before and after data sanitization. Implemented dataset version tracking, privacy regression detection, and audit report generation with AWS cloud integration.",
      techStack: ["Python", "FastAPI", "React", "PostgreSQL", "Scikit-learn", "AWS", "k-Anonymity"],
      metrics: [
        { label: "PII Detection", val: "Automated Entity Recognition" },
        { label: "Privacy Metric", val: "k-Anonymity & l-Diversity" },
        { label: "ML Benchmarking", val: "Utility Preservation Analysis" },
        { label: "Cloud Deployment", val: "AWS Integration" }
      ],
      features: [
        "Automated PII detection across CSV tabular datasets",
        "Empirical attack simulation for linkage and attribute disclosure evaluation",
        "Utility benchmarking comparing model performance before and after sanitization",
        "Dataset version tracking, privacy regression detection and audit report generation"
      ],
      badge: "Flagship Project",
      color: "#7e142e"
    },
    {
      id: "sunsafe-uv",
      title: "SunSafe: Smart UV Safety Platform",
      category: "MERN Full-Stack & Geolocation",
      timeline: "2024",
      highlight: "Real-time Telemetry & Health Alerts",
      description: "Developed a MERN-based full-stack application to retrieve, process, store, and visualize real-time and historical UV index data using geolocation.",
      longDescription: "Developed RESTful APIs using Node.js and Express.js and integrated MongoDB Atlas for storing and retrieving timestamped UV records. Implemented input validation, API integration, and error handling to improve application reliability.",
      techStack: ["React", "Vite", "Node.js", "Express.js", "MongoDB Atlas", "RESTful APIs", "Geolocation API"],
      metrics: [
        { label: "Architecture", val: "MERN Full-Stack" },
        { label: "Data Telemetry", val: "Real-time & Historical UV Index" },
        { label: "Geolocation", val: "Coordinates-based Solar Mapping" },
        { label: "Database", val: "MongoDB Atlas Timeseries" }
      ],
      features: [
        "Real-time and historical UV index data retrieval and processing using geolocation",
        "RESTful APIs using Node.js and Express.js with robust error handling",
        "MongoDB Atlas integration for storing and retrieving timestamped UV records",
        "Input validation and API integration to ensure platform reliability"
      ],
      badge: "MERN Stack",
      color: "#87a986"
    },
    {
      id: "phishguard-ai",
      title: "PhishGuard: AI Phishing Detection Platform",
      category: "Machine Learning & Cybersecurity",
      timeline: "2024 - 2025",
      highlight: "Threat Intelligence & Machine Learning",
      description: "Developed an AI-powered phishing detection platform using a Random Forest model to analyze URL and email features and identify potential threats.",
      longDescription: "Integrated threat intelligence APIs (VirusTotal & Google Safe Browsing), implemented explainable risk scoring, JWT authentication, and SSRF protection for secure threat analysis.",
      techStack: ["React", "Vite", "Python", "FastAPI", "MongoDB", "Random Forest ML", "VirusTotal API", "Google Safe Browsing API", "JWT"],
      metrics: [
        { label: "Model Classifier", val: "Random Forest Ensemble" },
        { label: "Feature Extraction", val: "Lexical & URL Threat Indicators" },
        { label: "Threat Feeds", val: "VirusTotal + Google Safe Browsing" },
        { label: "Security & Auth", val: "SSRF Protection & JWT Authentication" }
      ],
      features: [
        "Random Forest model analyzing URL and email features to identify threats",
        "Integration of live threat intelligence APIs (VirusTotal & Google Safe Browsing)",
        "Explainable risk scoring for transparent threat assessment",
        "SSRF protection and JWT authentication for secure operational workflows"
      ],
      badge: "AI Cybersecurity",
      color: "#991b3b"
    }
  ],

  skillsCategories: [
    {
      id: "ai",
      title: "AI & Machine Learning",
      skills: [
        {
          name: "LLM Fundamentals & Prompt Engineering",
          description: "Prompting, Few-shot & System Prompts."
        },
        {
          name: "RAG Fundamentals",
          description: "Retrieval-Augmented Generation Concepts."
        },
        {
          name: "Scikit-learn & Machine Learning",
          description: "Random Forest, Classification & Regression."
        },
        {
          name: "Privacy-Preserving Techniques (k-Anonymity, l-Diversity)",
          description: "Data Anonymization & Re-identification Risk."
        }
      ]
    },
    {
      id: "languages",
      title: "Programming Languages",
      skills: [
        {
          name: "Python",
          description: "Primary Programming Language."
        },
        {
          name: "SQL",
          description: "Queries, Joins & Database Operations."
        },
        {
          name: "Java (Basic)",
          description: "Core OOP & Basic Data Structures."
        },
        {
          name: "JavaScript",
          description: "Modern Web & Asynchronous Programming."
        },
        {
          name: "HTML & CSS",
          description: "Responsive UI & Semantic Design."
        }
      ]
    },
    {
      id: "databases",
      title: "Databases & Analytics",
      skills: [
        {
          name: "PostgreSQL & MySQL",
          description: "Relational Database Modeling & Queries."
        },
        {
          name: "MongoDB & MongoDB Atlas",
          description: "Document-Based Database Operations."
        },
        {
          name: "Microsoft Power BI",
          description: "Data Visualization & Interactive Dashboards."
        },
        {
          name: "Tableau & Microsoft Excel",
          description: "Business Intelligence & Data Analysis."
        }
      ]
    },
    {
      id: "frameworks",
      title: "Frameworks & Development Tools",
      skills: [
        {
          name: "React & Vite",
          description: "Component-Based Frontend Development."
        },
        {
          name: "FastAPI",
          description: "Python REST API Development."
        },
        {
          name: "Node.js & Express.js",
          description: "Backend API Development."
        },
        {
          name: "Git, GitHub & VS Code",
          description: "Version Control & Development Environment."
        }
      ]
    },
    {
      id: "systems",
      title: "Systems & Platforms",
      skills: [
        {
          name: "Windows & Linux",
          description: "Cross-Platform Operating Environments."
        },
        {
          name: "AWS",
          description: "Cloud Platform Fundamentals."
        }
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.) — Computer Science Engineering (Data Science)",
      institution: "CMR Institute of Technology (CMRIT), Bengaluru",
      period: "2023 – 2027 (Pursuing)",
      grade: "8.81 CGPA",
      details: "Specializing in Data Science, Machine Learning, Mathematical Foundations of Computing, Cloud Technologies, and Algorithms.",
      location: "Bengaluru, Karnataka"
    },
    {
      degree: "Class XII — PCM",
      institution: "Pramana PU College, Raichur",
      period: "2021 – 2023",
      grade: "85.83%",
      details: "Physics, Chemistry, and Mathematics curriculum focusing on analytical and quantitative problem solving.",
      location: "Raichur, Karnataka"
    },
    {
      degree: "Class X",
      institution: "Infant Jesus School, Raichur",
      period: "Passed 2021",
      grade: "91.68%",
      details: "Comprehensive academic foundation with academic honors and participation in extracurricular activities.",
      location: "Raichur, Karnataka"
    }
  ],

  certifications: [
    {
      title: "Microsoft Certified: Power BI Data Analyst",
      issuer: "Microsoft",
      badgeCode: "Certificate",
      description: "Data analysis, data preparation, modeling, visualization, and interactive dashboards.",
      year: "2024",
      highlight: true
    },
    {
      title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
      issuer: "Coursera",
      badgeCode: "ALGO-SPEC",
      description: "Algorithms design and complexity analysis.",
      year: "2024",
      highlight: false
    },
    {
      title: "Theory of Computation",
      issuer: "NPTEL",
      badgeCode: "NPTEL-TOC",
      description: "Formal languages, automata theory, and computational complexity.",
      year: "2024",
      highlight: false
    },
    {
      title: "100 Days of Python Bootcamp",
      issuer: "Udemy",
      badgeCode: "PY-100D",
      description: "Comprehensive Python programming and practical software development.",
      year: "2023",
      highlight: false
    }
  ],

  achievements: [
    {
      title: "Winner — Internal SIH Hackathon 2025",
      org: "CMR Institute of Technology",
      year: "2025",
      description: "Won in the Internal SIH Hackathon 2025 organized by CMRIT.",
      category: "Hackathon",
      trophy: true
    },
    {
      title: "Participant — SIH Internal Hackathon 2024",
      org: "CMR Institute of Technology",
      year: "2024",
      description: "Participated in the SIH Internal Hackathon 2024.",
      category: "Hackathon",
      trophy: false
    },
    {
      title: "VTU Inter-University Volleyball Tournament Player",
      org: "Visvesvaraya Technological University (VTU)",
      year: "2024",
      description: "Participated in the VTU Inter-University Volleyball Tournament (2024), representing the college in competitive team sports.",
      category: "Athletics",
      trophy: false
    },
    {
      title: "Inter-College Throwball Tournament Competitor",
      org: "New Horizon College",
      year: "2024",
      description: "Competed in the Inter-College Throwball Tournament organized by New Horizon College (2024).",
      category: "Athletics",
      trophy: false
    }
  ],

  leadership: [
    {
      role: "Member — Anti-Drug Committee",
      org: "CMRIT Campus Initiative",
      impact: "Contributing to campus awareness initiatives and environmental awareness campaigns, including Nasha Mukt Bharat and Khushaal Bharat.",
      icon: "ShieldAlert"
    },
    {
      role: "Member — Peer Support Team (PST) & Peer Learning Team (PLT)",
      org: "CMR Institute of Technology",
      impact: "Assisting fellow students in academic learning, technical problem solving, and peer guidance.",
      icon: "Users"
    },
    {
      role: "Member — Samskrutika Kannada Sanga",
      org: "CMR Institute of Technology",
      impact: "Member of Samskrutika Kannada Sanga in CMRIT promoting cultural and linguistic heritage.",
      icon: "Sparkles"
    }
  ]
};
