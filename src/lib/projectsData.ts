export interface ProjectCaseStudy {
  slug: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  website: string;
  problemStatement: string;
  architecture: string;
  keyFeatures: string[];
  challenges: string[];
  screenshots?: string[];
}

export const projectsData: ProjectCaseStudy[] = [
  {
    slug: "jeevanrakshak",
    title: "JeevanRakshak",
    description:
      'JeevanRakshak (जीवनरक्षक — "Life Saver") is a production-grade, offline-first Progressive Web App designed to provide instant, expert-verified emergency guidance when every second counts.',
    image: "/Projects/JeevanRakshak.png",
    techStack: ["Next.js", "TypeScript", "PWA", "AI"],
    github: "https://github.com/siddhesh940/JeevanRakshak.git",
    website: "https://jeevan-rakshak-mu.vercel.app/",
    problemStatement:
      "In emergency situations, people often panic and waste critical seconds searching for reliable guidance. Existing solutions require internet connectivity and often provide generic advice that doesn't apply to specific emergencies.",
    architecture:
      "Built with Next.js and TypeScript using a service worker architecture for offline-first capability. The app caches all emergency protocols locally using IndexedDB, while the AI engine runs inference on pre-loaded models for instant response without network dependency.",
    keyFeatures: [
      "Offline-first PWA with cached emergency protocols",
      "AI-powered situation assessment and guidance",
      "Step-by-step emergency response instructions",
      "Location-based nearby hospital and emergency service finder",
      "Multi-language support for regional accessibility",
      "One-tap emergency SOS with location sharing",
    ],
    challenges: [
      "Ensuring AI models run efficiently on mobile devices without a network connection",
      "Designing a UI that works under stress and panic situations — large buttons, clear instructions",
      "Caching all medical protocols while keeping the app lightweight",
      "Testing emergency scenarios across different device types and network conditions",
    ],
  },
  {
    slug: "aerosentinel-ai",
    title: "AeroSentinel AI",
    description:
      "AI-powered aviation safety system that predicts flight risks and detects anomalies using real-time flight data. Provides risk alerts and emergency recommendations for pilots and operators.",
    image: "/Projects/AerpGuardian.png",
    techStack: ["React", "Python", "AI/ML", "TypeScript"],
    github: "https://github.com/siddhesh940/AeroSentinel-AI.git",
    website: "https://aero-sentinel-ai-3leq.vercel.app/",
    problemStatement:
      "Aviation safety relies heavily on manual monitoring and post-incident analysis. There's a critical need for real-time predictive systems that can identify risks before they escalate into emergencies.",
    architecture:
      "The frontend is built with React and TypeScript for a responsive dashboard. The backend uses Python with Flask for the AI/ML inference engine. Machine learning models trained on historical flight data perform real-time anomaly detection and risk scoring.",
    keyFeatures: [
      "Real-time flight risk prediction using ML models",
      "Anomaly detection dashboard with visual alerts",
      "Historical flight data analysis and trend identification",
      "Emergency recommendation engine for pilots",
      "Risk scoring with confidence intervals",
      "Interactive data visualization with charts and maps",
    ],
    challenges: [
      "Training ML models on limited publicly available aviation data",
      "Achieving low-latency predictions for real-time monitoring",
      "Balancing sensitivity vs specificity in anomaly detection to avoid false alarms",
      "Designing an intuitive dashboard that pilots can understand at a glance",
    ],
  },
  {
    slug: "dbguardian-ai",
    title: "DBGuardian AI",
    description:
      "AI-powered Oracle Database Performance Analysis Tool that works like a Senior DBA — identifies problematic SQL, performs root cause analysis, and provides actionable recommendations.",
    image: "/Projects/DB_Guardian.png",
    techStack: ["React", "TypeScript", "Oracle", "AI"],
    github: "https://github.com/siddhesh940/DBGuardian-AI.git",
    website: "https://db-guardian-ai.vercel.app/",
    problemStatement:
      "Database performance tuning requires deep expertise that many teams lack. Slow queries hidden in large systems can cause cascading performance issues, and traditional tools provide raw metrics without actionable insights.",
    architecture:
      "React frontend with TypeScript for the analysis dashboard. The AI engine analyzes SQL execution plans, AWR reports, and performance metrics. Uses pattern matching and ML to identify problematic queries and generate optimization recommendations.",
    keyFeatures: [
      "Automated SQL performance analysis and optimization suggestions",
      "Root cause analysis for database slowdowns",
      "AI-generated query rewrite recommendations",
      "Visual execution plan analysis",
      "Performance trend monitoring and alerting",
      "One-click report generation for DBAs",
    ],
    challenges: [
      "Parsing and understanding complex Oracle execution plans",
      "Building a knowledge base of SQL optimization patterns",
      "Handling diverse database configurations and versions",
      "Generating recommendations that are safe to apply in production",
    ],
  },
  {
    slug: "cyberrakshak-ai",
    title: "CyberRakshak AI",
    description:
      "Personal Protection System against Social Media Scams and Digital Fraud. Detects and prevents cyber threats using AI-driven analysis.",
    image: "/Projects/CyberRakshak AI.png",
    techStack: ["React", "AI/ML", "TypeScript", "Tailwind"],
    github: "https://github.com/siddhesh940/CyberRakshak-AI-.git",
    website: "https://cyber-rakshak-ai.vercel.app/",
    problemStatement:
      "Online scams and digital fraud are increasingly sophisticated, targeting vulnerable users through social media, phishing emails, and fake websites. Most users lack the tools to identify these threats in real-time.",
    architecture:
      "Built with React and TypeScript with an AI-powered analysis engine. Uses NLP models to analyze text content, URL patterns, and social media profiles to detect potential scams and fraud attempts.",
    keyFeatures: [
      "Real-time scam detection for social media messages",
      "URL safety analysis and phishing detection",
      "Fake profile identification using behavioral analysis",
      "Threat severity scoring and risk assessment",
      "User education with scam pattern explanations",
      "Browser extension integration for passive protection",
    ],
    challenges: [
      "Keeping up with evolving scam tactics and patterns",
      "Minimizing false positives that reduce user trust",
      "Processing messages in real-time without privacy concerns",
      "Supporting multiple languages and regional scam patterns",
    ],
  },
  {
    slug: "interview-ai",
    title: "Interview.AI",
    description:
      "AI-powered interview preparation platform with real-time mock interviews, intelligent question generation, resume builder, performance analytics, and company-wise preparation tools.",
    image: "/Projects/Interview.AI.png",
    techStack: ["Next.js", "TypeScript", "AI", "Tailwind"],
    github: "https://github.com/siddhesh940/Interview.AI.git",
    website: "https://interview-ai-ruddy.vercel.app/",
    problemStatement:
      "Students struggle with interview preparation due to lack of structured practice opportunities and personalized feedback. Coaching sessions are expensive and generic mock interview platforms don't adapt to individual skill levels.",
    architecture:
      "Built with Next.js 15 and TypeScript for the frontend, using OpenAI GPT-4 for question generation and response evaluation. The system uses WebSocket for real-time interview sessions and PostgreSQL with Prisma ORM for data persistence.",
    keyFeatures: [
      "AI-powered real-time mock interviews with adaptive difficulty",
      "Intelligent question generation based on role and company",
      "Resume analysis with ATS compatibility scoring",
      "Performance analytics dashboard with progress tracking",
      "Company-specific interview preparation modules",
      "Speech-to-text for verbal interview practice",
    ],
    challenges: [
      "Fine-tuning AI prompts for relevant and appropriately difficult questions",
      "Implementing low-latency WebSocket communication for smooth interviews",
      "Building an accurate resume parser that handles diverse formats",
      "Creating meaningful analytics from subjective interview performance data",
    ],
  },
  {
    slug: "campus-ai",
    title: "CampusAI",
    description:
      "Transforms the traditional student onboarding process into a seamless, AI-driven digital ecosystem delivering structured, personalized, and real-time guidance from admission to integration.",
    image: "/Projects/Campus AI.png",
    techStack: ["React", "AI", "TypeScript", "Node.js"],
    github: "https://github.com/siddhesh940/CampusAI.git",
    website: "https://campusai-livid.vercel.app/",
    problemStatement:
      "College onboarding is fragmented — students navigate between multiple portals, WhatsApp groups, and orientation sessions. Important information gets lost, and the experience varies wildly between departments.",
    architecture:
      "React frontend with Node.js backend providing a unified onboarding platform. AI chatbot handles student queries, while the recommendation engine personalizes the onboarding journey based on department, interests, and academic background.",
    keyFeatures: [
      "AI-powered onboarding chatbot for instant query resolution",
      "Personalized onboarding checklists and timelines",
      "Department-specific resource recommendations",
      "Peer matching for mentorship and study groups",
      "Interactive campus map with navigation",
      "Document verification and submission tracking",
    ],
    challenges: [
      "Integrating with existing college management systems",
      "Handling diverse query types from students across departments",
      "Personalizing recommendations without extensive user data initially",
      "Ensuring the system scales during peak admission periods",
    ],
  },
  {
    slug: "skill-autofill",
    title: "SkillAutofill",
    description:
      "An intelligent system that analyzes job descriptions and user profiles to provide skill gap analysis, personalized learning roadmaps, resume improvements, and more.",
    image: "/Projects/SkillAutofill.png",
    techStack: ["React", "AI/ML", "TypeScript", "Tailwind"],
    github: "https://github.com/siddhesh940/Skill_Autofill_System.git",
    website: "https://skill-autofill-system.vercel.app/",
    problemStatement:
      "Job seekers often don't know which skills they're missing for their target roles. The gap between a candidate's profile and job requirements is usually assessed manually, leading to missed opportunities and unfocused skill development.",
    architecture:
      "React frontend with AI-powered NLP backend. Job descriptions are parsed using NLP to extract required skills, which are then compared against the user's profile to generate a gap analysis and personalized learning roadmap.",
    keyFeatures: [
      "Automated job description parsing and skill extraction",
      "Skill gap analysis with visual reports",
      "Personalized learning roadmap generation",
      "Resume improvement suggestions based on target roles",
      "Skill trend analysis across industries",
      "Integration with online learning platforms",
    ],
    challenges: [
      "Accurately parsing diverse job description formats",
      "Mapping equivalent skills across different naming conventions",
      "Generating practical and prioritized learning roadmaps",
      "Keeping the skill database current with industry trends",
    ],
  },
  {
    slug: "resume-iq",
    title: "ResumeIQ",
    description:
      "Create ATS-friendly resumes with intelligent JD Analysis. Simplifies the process of building professional, optimized resumes in minutes.",
    image: "/Projects/ResumeIQ.png",
    techStack: ["React", "TypeScript", "AI", "Tailwind"],
    github: "https://github.com/siddhesh940/resumeIQ.git",
    website: "https://resume-iq-weld.vercel.app/",
    problemStatement:
      "Most resumes get rejected by Applicant Tracking Systems before a human ever reads them. Candidates don't understand ATS formatting requirements and fail to optimize their resumes for specific job descriptions.",
    architecture:
      "Built with React and TypeScript. The AI engine analyzes resume content against ATS algorithms, scores compatibility, and provides real-time optimization suggestions. Templates are rendered using a custom PDF generation pipeline.",
    keyFeatures: [
      "ATS compatibility scoring and optimization",
      "AI-powered JD analysis and keyword matching",
      "Multiple professional resume templates",
      "Real-time preview and editing",
      "PDF export with professional formatting",
      "Section-by-section improvement suggestions",
    ],
    challenges: [
      "Reverse-engineering ATS algorithms for accurate scoring",
      "Generating PDF output that matches the visual editor exactly",
      "Balancing keyword optimization with natural, readable content",
      "Supporting diverse resume formats and career backgrounds",
    ],
  },
  {
    slug: "gitvio",
    title: "GitVio",
    description:
      "Create beautiful portfolio websites directly from your GitHub profile. Instantly generate a polished developer portfolio.",
    image: "/Projects/GitVio.png",
    techStack: ["Next.js", "TypeScript", "GitHub API", "Tailwind"],
    github: "https://github.com/siddhesh940/GitVio.git",
    website: "https://git-vio-npib.vercel.app/",
    problemStatement:
      "Developers need portfolio websites but building one from scratch takes time away from actual coding. GitHub profiles contain all the necessary information but aren't visually appealing or shareable as a professional portfolio.",
    architecture:
      "Built with Next.js and TypeScript. Uses the GitHub GraphQL API to fetch user profile data, repositories, contributions, and README content. Generates a complete portfolio site with customizable themes in real-time.",
    keyFeatures: [
      "One-click portfolio generation from GitHub username",
      "Automatic project showcase from pinned repositories",
      "Contribution graph and activity visualization",
      "Customizable themes and layouts",
      "SEO-optimized output with meta tags",
      "Shareable portfolio links",
    ],
    challenges: [
      "Handling GitHub API rate limits gracefully",
      "Parsing and rendering diverse README formats",
      "Creating responsive layouts that work for varying amounts of content",
      "Generating portfolios that feel unique despite using templates",
    ],
  },
  {
    slug: "star-weather",
    title: "Star Weather Performance",
    description:
      "Advanced weather website where users can view current conditions, forecasts, air quality, weather maps, and more — built for a seamless, responsive experience.",
    image: "/Projects/Star Weather Performance.png",
    techStack: ["React", "TypeScript", "API", "Tailwind"],
    github: "https://github.com/siddhesh940/Star_WeatherPerformance.git",
    website: "https://star-weather-performance-52tu.vercel.app/",
    problemStatement:
      "Existing weather apps are either cluttered with ads and unnecessary features or lack the detailed data that weather enthusiasts need. There's a need for a clean, fast, and comprehensive weather dashboard.",
    architecture:
      "Built with React and TypeScript using multiple weather APIs (OpenWeatherMap, AirVisual) for comprehensive data. Implements aggressive caching and lazy loading for performance, with Service Worker for offline access to recent data.",
    keyFeatures: [
      "Real-time weather data with multiple data sources",
      "5-day forecast with hourly breakdown",
      "Air quality index monitoring",
      "Interactive weather maps",
      "Location-based automatic detection",
      "Responsive design optimized for performance",
    ],
    challenges: [
      "Aggregating data from multiple weather APIs with different formats",
      "Optimizing render performance for real-time data updates",
      "Creating smooth and informative weather visualizations",
      "Handling geolocation permissions and fallbacks gracefully",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}
