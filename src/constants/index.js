export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

export const socials = [
  { name: "github", link: "https://github.com/ChamaraJanith", icon: "🐙" },
  { name: "linkedin", link: "https://www.linkedin.com/in/chamara-abeyrathna-a22353376/", icon: "💼" },
];

export const stats = [
  { label: "GPA", value: "3.44" },
  { label: "Projects", value: "15+" },
  { label: "Certs", value: "13+" },
];

const mobile = { name: "Native Android", icon: "📱" };
const web = { name: "Web Dev", icon: "💻" };
const backend = { name: "Backend", icon: "⚙️" };
const ai = { name: "AI/ML", icon: "🧠" };

export const services = [
  { title: "Android Developer", icon: mobile.icon },
  { title: "Web Developer", icon: web.icon },
  { title: "Backend Systems", icon: backend.icon },
  { title: "AI Integration", icon: ai.icon },
];

export const technologies = [
  { name: "Kotlin", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg" },
  { name: "React JS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Node JS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "Three JS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg" },
  { name: "Android", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg" },
  { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "Azure", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
  { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
];

export const experiences = [
  {
    title: "Introduction to Generative AI",
    company_name: "Google",
    icon: "🤖",
    iconBg: "#383E56",
    date: "Sep 2025",
    points: [
      "Large language models",
      "Prompt engineering",
      "Ethical AI implementation"
    ],
  },
  {
    title: "Azure Data Engineer Associate (DP-203)",
    company_name: "Microsoft / Udemy",
    icon: "☁️",
    iconBg: "#E6DEDD",
    date: "Dec 2025",
    points: [
      "Data engineering on Azure",
      "Data pipelines & ETL",
      "Big data analytics"
    ],
  },
  {
    title: "Career Essentials in Software Development",
    company_name: "Microsoft & LinkedIn",
    icon: "💻",
    iconBg: "#100d25",
    date: "July 2025",
    points: [
      "Programming fundamentals",
      "Software development methodologies",
      "Version control & Debugging"
    ],
  },
  {
    title: "AI/ML Engineer - Stage 1 & 2",
    company_name: "SLIIT",
    icon: "🎓",
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Deep learning architectures",
      "Neural networks",
      "Model optimization"
    ],
  },
  {
    title: "AI for Business Professionals",
    company_name: "HP LIFE",
    icon: "🏥",
    iconBg: "#151030",
    date: "2025",
    points: [
      "AI implementation strategies",
      "Business transformation",
      "Ethical AI usage"
    ],
  },
  {
    title: "Python for Beginners",
    company_name: "University of Moratuwa",
    icon: "🐍",
    iconBg: "#100d25",
    date: "Sep 2025",
    points: [
      "Python programming fundamentals",
      "Data structures & functions",
      "Object Oriented Programming"
    ],
  },
];

export const projects = [
  {
    name: "GameHub Mobile",
    description:
      "A futuristic gaming platform built with Kotlin. Features real-time game discovery, user ratings, and a seamless library management experience.",
    tags: [
      { name: "kotlin", color: "blue-text-gradient" },
      { name: "mvvm", color: "green-text-gradient" },
      { name: "retrofit", color: "pink-text-gradient" },
    ],
    image: "/assets/gamehub.png",
    source_code_link: "https://github.com/ChamaraJanith",
  },
  {
    name: "Green Village Ella",
    description:
      "Premium luxury homestay booking engine in Sri Lanka. Integrated with real-time availability, PostgreSQL, and a sleek glassmorphic UI.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node", color: "green-text-gradient" },
      { name: "postgres", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
    source_code_link: "https://github.com/ChamaraJanith/ITP-Project",
  },
  {
    name: "Pro Chess Platform",
    description:
      "A high-performance digital chess arena. Supporting real-time multiplayer via WebSockets with a focus on low-latency interactions.",
    tags: [
      { name: "react18", color: "blue-text-gradient" },
      { name: "websocket", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=800",
    source_code_link: "https://github.com/ChamaraJanith",
  },
  {
    name: "AURA Wellness",
    description:
      "A personal health companion focusing on mental well-being. Features habit loops, mood visualization, and data-driven insights.",
    tags: [
      { name: "kotlin", color: "blue-text-gradient" },
      { name: "room-db", color: "green-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800", 
    source_code_link: "https://github.com/ChamaraJanith",
  },
  {
    name: "Glucose Tracker",
    description:
      "Advanced medical utility for diabetes management. Utilizes ML Kit for OCR-based lab report ingestion and predictive glucose analysis.",
    tags: [
      { name: "kotlin", color: "blue-text-gradient" },
      { name: "ml-kit", color: "green-text-gradient" },
      { name: "ocr", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    source_code_link: "https://github.com/ChamaraJanith",
  },
  {
    name: "Cinemaverse - AI Movie Hub",
    description:
      "A next-generation movie discovery platform with cinematic 3D orbital carousels, Gemini AI-powered recommendations, and specialized user persona dashboards.",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
      { name: "gemini-ai", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    source_code_link: "https://lnkd.in/gefffm6Y",
  },
];
