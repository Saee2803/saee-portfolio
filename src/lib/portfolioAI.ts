// Portfolio knowledge base for the AI chatbot
// This provides all the context the chatbot needs to answer questions

export const portfolioContext = {
  name: "Saee Bhanuskar",
  title: "Full-Stack Developer",
  email: "saeebhanuskar@gmail.com",
  github: "https://github.com/Saee2803",
  linkedin: "https://linkedin.com/in/saee-bhanuskar",
  leetcode: "https://leetcode.com/u/Saee2803/",

  about:
    "Saee Bhanuskar is a passionate Full-Stack Developer specializing in Python and Flask. He builds scalable web applications and enjoys solving real-world problems through technology.",

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "Node.js",
    "Tailwind CSS",
    "AI/ML",
    "Oracle Database",
    "PostgreSQL",
    "Prisma ORM",
    "Git/GitHub",
    "REST APIs",
    "PWA",
    "Framer Motion",
  ],

  projects: [
    {
      name: "JeevanRakshak",
      description:
        'JeevanRakshak (जीवनरक्षक — "Life Saver") is a production-grade, offline-first Progressive Web App designed to provide instant, expert-verified emergency guidance when every second counts.',
      tech: ["Next.js", "TypeScript", "PWA", "AI"],
      link: "https://jeevan-rakshak-mu.vercel.app/",
    },
    {
      name: "CyberRakshak AI",
      description:
        "Personal Protection System against Social Media Scams and Digital Fraud using AI-driven analysis.",
      tech: ["React", "AI/ML", "TypeScript", "Tailwind"],
      link: "https://cyber-rakshak-ai.vercel.app/",
    },
    {
      name: "Interview.AI",
      description:
        "AI-powered interview preparation platform with real-time mock interviews, intelligent question generation, resume builder, and performance analytics.",
      tech: ["Next.js", "TypeScript", "AI", "Tailwind"],
      link: "https://interview-ai-ruddy.vercel.app/",
    },
    {
      name: "CampusAI",
      description:
        "AI-driven digital ecosystem for student onboarding — delivering structured, personalized, and real-time guidance from admission to integration.",
      tech: ["React", "AI", "TypeScript", "Node.js"],
      link: "https://campus-ai-alpha.vercel.app/",
    },
    {
      name: "SkillAutofill",
      description:
        "Intelligent system that analyzes job descriptions and user profiles to provide skill gap analysis and personalized learning roadmaps.",
      tech: ["React", "AI/ML", "TypeScript", "Tailwind"],
      link: "https://skill-autofill.vercel.app/",
    },
    {
      name: "ResumeIQ",
      description:
        "Create ATS-friendly resumes with intelligent JD Analysis in minutes.",
      tech: ["React", "TypeScript", "AI", "Tailwind"],
      link: "https://resumeiqq.vercel.app/",
    },
    {
      name: "GitVio",
      description:
        "Create beautiful portfolio websites directly from your GitHub profile.",
      tech: ["Next.js", "TypeScript", "GitHub API", "Tailwind"],
      link: "https://gitvio.vercel.app/",
    },
    {
      name: "Star Weather Performance",
      description:
        "Advanced weather website with current conditions, forecasts, air quality, and weather maps.",
      tech: ["React", "TypeScript", "API", "Tailwind"],
      link: "https://starweatherperformance.vercel.app",
    },
    {
      name: "HealthFraud MLChain",
      description:
        "ML-powered fraud detection system for healthcare that identifies fraudulent claims and suspicious patterns.",
      tech: ["Python", "Machine Learning", "Flask", "React"],
      link: "https://healthfraudmlchain.onrender.com",
    },
    {
      name: "NLP Smart Assistant",
      description:
        "Intelligent conversational assistant powered by Natural Language Processing with contextual intelligence.",
      tech: ["Python", "NLP", "Flask", "React"],
      link: "https://nlp-backend-a9w9.onrender.com",
    },
    {
      name: "ConnectMe",
      description:
        "Social networking platform for meaningful connections and collaboration with like-minded individuals.",
      tech: ["React", "Node.js", "MongoDB", "WebSockets"],
      link: "https://connectme-mu.vercel.app/",
    },
  ],

  blogs: [
    {
      title:
        "Building an AI-Powered Interview Preparation Platform — Interview.ai",
      platform: "AWS Builder Center",
      link: "https://builder.aws.com/content/39RVN7qrqJdi6rEjGYBynXnqgnA/building-an-ai-powered-interview-preparation-platform-interviewai",
    },
    {
      title:
        "Building an AI-Powered Interview Preparation Platform — Interview.ai",
      platform: "Medium",
      link: "https://medium.com/@saeebhanuskar/building-an-ai-powered-interview-preparation-platform-interview-ai-a9dab9cdb082",
    },
  ],
};

// Simple keyword-based response engine (no API key required)
interface ChatResponse {
  text: string;
}

export function generateChatResponse(query: string): ChatResponse {
  const q = query.toLowerCase().trim();
  const ctx = portfolioContext;

  // Greetings
  if (/^(hi|hello|hey|hola|namaste|sup|yo)\b/.test(q)) {
    return {
      text: `Hello! 👋 I'm Saee's portfolio assistant. I can tell you about my projects, skills, experience, and more. What would you like to know?`,
    };
  }

  // Who is / about
  if (/who\s*(is|are)|about|tell me about|introduce/.test(q)) {
    return {
      text: `${ctx.about}\n\nI have built ${ctx.projects.length}+ production-grade projects using technologies like Python, Flask, React, TypeScript, and more.`,
    };
  }

  // Contact
  if (/contact|reach|email|mail|connect|hire|hiring/.test(q)) {
    return {
      text: `You can reach me through:\n\n📧 Email: ${ctx.email}\n🔗 LinkedIn: ${ctx.linkedin}\n💻 GitHub: ${ctx.github}\n\nOr use the Contact section on this portfolio!`,
    };
  }

  // Skills / technologies
  if (/skill|tech|technolog|stack|language|framework|tool|know/.test(q)) {
    return {
      text: `My proficiency:\n\n${ctx.skills.map((s) => `• ${s}`).join("\n")}\n\nI specialize in Python, Flask, and full-stack web development.`,
    };
  }

  // AI projects specifically
  if (
    /ai\s*project|artificial intelligence|machine learning|ml\s*project/.test(q)
  ) {
    const aiProjects = ctx.projects.filter((p) =>
      p.tech.some(
        (t) => t.toLowerCase().includes("ai") || t.toLowerCase().includes("ml"),
      ),
    );
    const list = aiProjects
      .map((p) => `🤖 **${p.name}** — ${p.description}`)
      .join("\n\n");
    return {
      text: `I have built ${aiProjects.length} AI-powered projects:\n\n${list}`,
    };
  }

  // Specific project queries
  for (const project of ctx.projects) {
    const projectName = project.name.toLowerCase();
    if (
      q.includes(projectName) ||
      q.includes(projectName.replace(/[.\s]/g, ""))
    ) {
      return {
        text: `**${project.name}**\n\n${project.description}\n\n🛠 Tech Stack: ${project.tech.join(", ")}\n🔗 Live: ${project.link}`,
      };
    }
  }

  // All projects
  if (/project|built|build|portfolio|work|app|application/.test(q)) {
    const list = ctx.projects
      .map((p) => `• **${p.name}** — ${p.description.slice(0, 80)}...`)
      .join("\n");
    return {
      text: `I have built ${ctx.projects.length} projects:\n\n${list}\n\nAsk me about any specific project for more details!`,
    };
  }

  // Blogs
  if (/blog|article|write|writing|publication|medium|aws/.test(q)) {
    const list = ctx.blogs
      .map((b) => `📝 ${b.title} (${b.platform})`)
      .join("\n");
    return {
      text: `I have published technical articles:\n\n${list}\n\nCheck out the Blogs section for full reads!`,
    };
  }

  // GitHub
  if (/github|git|repo|repository|open source|contribution/.test(q)) {
    return {
      text: `Check out my GitHub profile: ${ctx.github}\n\nI actively contribute to open source and have ${ctx.projects.length}+ public repositories covering web development and more.`,
    };
  }

  // Resume
  if (/resume|cv|download/.test(q)) {
    return {
      text: `You can view and download my resume from the Resume section on this portfolio. It includes my education, experience, projects, and skills.`,
    };
  }

  // Education
  if (/education|study|university|college|degree|school/.test(q)) {
    return {
      text: `You can find details about my education in the Education section of this portfolio. I have a strong academic background in Computer Science and Engineering.`,
    };
  }

  // Experience
  if (/experience|work|job|internship|company|career/.test(q)) {
    return {
      text: `Check out the Experience section on this portfolio for details about my professional experience, internships, and career journey.`,
    };
  }

  // Thank you
  if (/thank|thanks|thx/.test(q)) {
    return {
      text: `You're welcome! 😊 Feel free to ask anything else about my work and skills.`,
    };
  }

  // Default fallback
  return {
    text: `I can help you learn about me:\n\n• 🚀 Projects (10+ built)\n• 💻 Technical Skills\n• 📝 Blog Articles\n• 📧 Contact Information\n• 🎓 Education\n• 💼 Experience\n• 📄 Resume\n\nWhat would you like to know?`,
  };
}
