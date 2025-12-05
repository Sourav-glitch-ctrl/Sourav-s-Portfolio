import { Project, Experience, Education, Certification, SkillCategory, SectionId } from './types';
import { Github, Linkedin, Mail } from 'lucide-react';

export const RESUME_URL = "https://drive.google.com/file/d/1D3gz5a6mBTAQ5znqD6-tNWnf7cqzjrjS/view?usp=drive_link";
// Using the Google Drive direct download link format
export const RESUME_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1D3gz5a6mBTAQ5znqD6-tNWnf7cqzjrjS";

export const PROFILE = {
  name: "Sourav Patra",
  title: "Data Science & Machine Learning Enthusiast",
  location: "Navi Mumbai",
  email: "souravpatra9976@gmail.com",
  phone: "+91-8169058272",
  socials: [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/souravpatra07', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/Sourav-glitch-ctrl', icon: Github },
    { name: 'Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=souravpatra9976@gmail.com', icon: Mail },
  ],
  summary: "Data Science and Machine Learning enthusiast pursuing B.E. in Electronics and Telecommunication Engineering. Skilled in Python, TensorFlow, Scikit-learn, and SQL with a strong foundation in statistics, algorithms, and data preprocessing. Passionate about applying analytical thinking and model optimization to real-world problems.",
  technicalSummary: "Machine Learning • Data Science • Python • TensorFlow • PyTorch • SQL • Data Visualization • Feature Engineering • Model Evaluation"
};

export const EDUCATION: Education[] = [
  {
    institution: "Fr. Conceicao Rodrigues Institute of Technology",
    degree: "B.E. in Electronics & Telecommunication Engineering",
    period: "2023–2027",
    score: "CGPA: 9.16 / 10.0"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Development Intern",
    company: "InfinityPool Finnotech",
    period: "May 2025 – Present",
    points: [
      "Implemented and backtested ML models within the 'Options Strategy Engine' to automate trading signal generation.",
      "Engineered data pipelines using Python for feature extraction and financial data cleaning.",
      "Optimized model accuracy via feature selection and cross-validation for robust performance."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Real-Time Object Detection System",
    year: "2025",
    description: [
      "Developed a real-time object detection pipeline using YOLOv8 and OpenCV, processing live video streams at 30 FPS.",
      "Applied non-max suppression and confidence thresholds to improve detection accuracy by 15%."
    ],
    techStack: ["Python", "YOLOv8", "OpenCV", "Deep Learning"],
    link: "https://github.com/Sourav-glitch-ctrl"
  },
  {
    title: "Automatic Railway Gate Control System",
    year: "2024",
    description: [
      "Designed an IoT-based safety system using Arduino and ultrasonic sensors for automated gate control.",
      "Integrated GSM alerts to notify authorities of train proximity and gate status."
    ],
    techStack: ["IoT", "Arduino", "C++", "Sensors", "GSM"],
    link: "https://github.com/Sourav-glitch-ctrl"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Supervised Machine Learning",
    issuer: "Stanford University (Coursera)",
    date: "Dec 2024",
    credentialId: "MXGT579HCPBW",
    link: "https://www.coursera.org/account/accomplishments/verify/MXGT579HCPBW"
  },
  {
    name: "Data Science Essentials with Python",
    issuer: "Cisco Networking Academy",
    date: "Jun 2025",
    link: "#"
  },
  {
    name: "Data Science and Generative AI",
    issuer: "Physics Wallah",
    date: "Ongoing",
    link: "#"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Runner-Up – Ideation Competition",
    organization: "IETE (SIES Nerul)",
    year: "2024",
    description: "Proposed a mobile app that tracks and rewards healthy screen-time habits, recognized among 20+ teams. Presented research, prototype, and market impact to a technical jury."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming",
    skills: ["Python", "C++", "SQL", "C"]
  },
  {
    name: "Data Science",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Feature Engineering"]
  },
  {
    name: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Regression", "Classification", "CNNs", "Model Evaluation"]
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Jupyter", "VS Code", "Streamlit", "Power BI"]
  },
  {
    name: "Concepts",
    skills: ["Data Preprocessing", "Model Tuning", "Data Visualization", "REST APIs", "OOP"]
  }
];

// Data for Recharts Radar Chart
export const SKILL_CHART_DATA = [
  { subject: 'Python', A: 95, fullMark: 100 },
  { subject: 'ML/DL', A: 85, fullMark: 100 },
  { subject: 'SQL/Data', A: 90, fullMark: 100 },
  { subject: 'IoT/C++', A: 75, fullMark: 100 },
  { subject: 'Visualization', A: 80, fullMark: 100 },
  { subject: 'DevOps/Git', A: 70, fullMark: 100 },
];

export const NAV_LINKS = [
  { id: SectionId.HOME, label: 'Home' },
  { id: SectionId.ABOUT, label: 'About' },
  { id: SectionId.EXPERIENCE, label: 'Experience' },
  { id: SectionId.PROJECTS, label: 'Projects' },
  { id: SectionId.SKILLS, label: 'Skills' },
  { id: SectionId.CONTACT, label: 'Contact' },
];