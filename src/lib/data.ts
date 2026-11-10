export const profile = {
  name: "Vinayak Tiwari",
  short: "Vinayak",
  role: "ML Engineer | Data Scientist",
  tagline: "Building intelligent and interactive digital experiences with a retro touch.",
  email: "contact.vinayaktiwari@gmail.com",
  github: "https://github.com/vintiw6",
  linkedin: "https://www.linkedin.com/in/vintiw6",
  resume:
    "https://drive.google.com/file/d/1hHNJfRxXrY4c4xdjYmExJj9_0f1-gDyr/view?usp=sharing",
  bio: [
    "Hello! I'm Vinayak, an ML Engineer and Data Scientist specializing in training and implementing intelligent pipelines.",
    "I build end-to-end machine learning systems, deep learning models, and real-time scrapers that turn complex unstructured data into actionable insights and tools.",
    "Outside of work, I enjoy building small side projects, trying out new tools, and turning ideas into things people can actually use.",
  ],
  stats: [
    { label: "Age", value: "21" },
    { label: "Role", value: "Student" },
    { label: "Experience", value: "8 Months" },
    { label: "Status", value: "Open to Work" },
  ],
  inventory: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "NLP", "Streamlit"],
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  kind: "ml" | "web" | "data" | "game";
};

export const projects: Project[] = [
  {
    slug: "bias-auditor",
    title: "Indian News Bias Auditor",
    description:
      "A real-time NLP pipeline that scrapes 8 major Indian news outlets daily and scores each article for political bias, emotional intensity, clickbait, and framing differences.",
    tags: ["NLP", "Python", "Streamlit", "Transformers", "Scraping"],
    github: "https://github.com/vintiw6/Bias-Checker",
    demo: "https://bias-checker-00.streamlit.app/",
    kind: "ml",
  },
  {
    slug: "football-yolo",
    title: "Football Analysis using YOLO",
    description:
      "Real-time football analysis, tracking players and the ball using YOLO object detection models.",
    tags: ["YOLO", "Computer Vision", "Python", "Deep Learning"],
    github: "https://github.com/vintiw6/Football-Analysis-using-YOLO",
    demo: "https://github.com/vintiw6/Football-Analysis-using-YOLO/blob/main/README.md",
    kind: "ml",
  },
  {
    slug: "brain-tumor",
    title: "Brain Tumor Detection",
    description:
      "Deep learning model for detecting brain tumors from MRI scans with high accuracy.",
    tags: ["Deep Learning", "Python", "Computer Vision", "VGG16"],
    github: "https://github.com/vintiw6/Brain-Tumor-Detection-Using-Deep-Learning/tree/main",
    demo: "https://github.com/vintiw6/Brain-Tumor-Detection-Using-Deep-Learning/blob/main/README.md",
    kind: "ml",
  },
  {
    slug: "dessert-haven",
    title: "Dessert Haven Website",
    description:
      "A delightful website for a dessert shop featuring a responsive design and appetizing gallery.",
    tags: ["Web Design", "HTML/CSS", "Responsive"],
    github: "https://github.com/vintiw6/Projects/tree/main/Dessert-Haven-Website",
    demo: "https://dessert-haven-website.vercel.app/",
    kind: "web",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    description:
      "Real-time weather application consuming OpenWeatherMap API with pixel-perfect UI.",
    tags: ["JavaScript", "API", "CSS"],
    github: "https://github.com/vintiw6/Projects/tree/main/Weather-App",
    demo: "https://vintiw6-weather-app.vercel.app/",
    kind: "web",
  },
  {
    slug: "cc-validator",
    title: "Credit Card Validator",
    description:
      "A secure tool to validate credit card numbers using the Luhn algorithm. Implements real-time validation and card type detection.",
    tags: ["Python", "Algorithm", "Security"],
    github: "https://github.com/vintiw6/Projects/tree/main/CreditCard-Validator",
    demo: "https://github.com/vintiw6/Projects/tree/main/CreditCard-Validator",
    kind: "data",
  },
  {
    slug: "slot-machine",
    title: "Slot Machine",
    description:
      "A fun, interactive slot machine game built with pure JavaScript and CSS animations.",
    tags: ["Game Dev", "JS", "Animation"],
    github: "https://github.com/vintiw6/Projects/tree/main/SlotMachine",
    demo: "https://slotmachine-00.streamlit.app/",
    kind: "game",
  },
  {
    slug: "data-analysis",
    title: "Data Analysis Suite",
    description:
      "Collection of data analysis projects using Pandas and NumPy for insightful visualizations.",
    tags: ["Data Science", "Pandas", "NumPy"],
    github: "https://github.com/vintiw6/Projects/tree/main/DataAnalysis-Basic",
    demo: "https://github.com/vintiw6/Projects/tree/main/DataAnalysis-Basic",
    kind: "data",
  },
  {
    slug: "football-data",
    title: "Football Data Analysis",
    description:
      "In-depth analysis of football match data with visualizations and statistical insights.",
    tags: ["Data Analysis", "Python", "Visualization"],
    github: "https://github.com/vintiw6/Football-Data-Analysis",
    demo: "https://github.com/vintiw6/Football-Data-Analysis/blob/main/Final_Analysis.md",
    kind: "data",
  },
];

export const skillCategories = [
  { title: "Languages", skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"] },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
  },
  {
    title: "Data Science / ML",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Pandas / NumPy",
      "NLP (Transformers)",
      "Computer Vision (YOLO)",
      "Streamlit",
      "SciPy",
      "Matplotlib",
    ],
  },
];

export const experience: { role: string; org: string; period: string; status: "Active" | "Completed" }[] = [
  {
    role: "Research Intern",
    org: "IIIT Naya Raipur",
    period: "Feb – Jun 2026",
    status: "Completed",
  },
  {
    role: "Software Intern",
    org: "CSVTU Forte",
    period: "Apr – Jun 2025",
    status: "Completed",
  },
];
