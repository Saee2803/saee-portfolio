export interface BlogData {
  slug: string;
  title: string;
  description: string;
  image: string;
  platform: string;
  articleLink: string;
  author: string;
  publishDate: string;
  readTime: string;
  content: string;
}

export const blogs: BlogData[] = [
  {
    slug: "building-ai-interview-platform-aws",
    title:
      "Building an AI-Powered Interview Preparation Platform — Interview.ai",
    platform: "AWS Builder Center",
    image: "/blogs/Blog1.png",
    articleLink:
      "https://builder.aws.com/content/39RVN7qrqJdi6rEjGYBynXnqgnA/building-an-ai-powered-interview-preparation-platform-interviewai",
    description:
      "This article explains the architecture, design, and development process of an AI-powered interview preparation platform that provides real-time mock interviews, resume analysis, and performance tracking for students.",
    author: "Siddhesh Patil",
    publishDate: "2025-12-15",
    readTime: "8 min read",
    content: `## Introduction

Interview.ai is an AI-powered interview preparation platform designed to help students prepare for technical interviews through automated mock interviews, analytics, and resume improvement tools.

## Architecture

The platform is built using a modern microservices architecture with the following key components:

- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **Backend**: Node.js with Express
- **AI Engine**: OpenAI GPT-4 for question generation and evaluation
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with multiple providers

## Key Features

### Real-time Mock Interviews
The platform provides real-time mock interviews with AI-powered question generation tailored to specific roles and companies.

### Resume Analysis
An intelligent resume analyzer that provides actionable feedback on formatting, content, and ATS compatibility.

### Performance Tracking
Comprehensive analytics dashboard that tracks progress over time, identifies weak areas, and suggests improvement paths.

## Conclusion

Interview.ai demonstrates how AI can be leveraged to democratize interview preparation, making quality practice accessible to all students regardless of their background or resources.`,
  },
  {
    slug: "building-ai-interview-platform-medium",
    title:
      "Building an AI-Powered Interview Preparation Platform — Interview.ai",
    platform: "Medium",
    image: "/blogs/Blog2.png",
    articleLink:
      "https://medium.com/@patilsiddhesh2810/building-an-ai-powered-interview-preparation-platform-interview-ai-a9dab9cdb082",
    description:
      "A deep dive into building Interview.ai, an intelligent platform that helps students prepare for technical interviews through automated mock interviews, analytics, and resume improvement tools.",
    author: "Siddhesh Patil",
    publishDate: "2025-12-20",
    readTime: "10 min read",
    content: `## The Vision

The idea for Interview.ai came from a simple observation: most students struggle with interview preparation not because they lack knowledge, but because they lack structured practice opportunities.

## Technical Deep Dive

### Frontend Architecture
We chose Next.js 15 for its excellent server-side rendering capabilities and the new App Router for better code organization.

### AI Integration
The AI engine uses a combination of:
- **GPT-4** for generating contextual interview questions
- **Whisper** for speech-to-text processing during mock interviews
- **Custom ML models** for evaluating response quality

### Database Design
The database schema was designed to support:
- User profiles with skill tracking
- Interview session recordings and transcripts
- Performance metrics and analytics data

## Challenges & Solutions

### Real-time Communication
Implementing real-time mock interviews required WebSocket connections with fallback to Server-Sent Events for reliability.

### AI Response Quality
Fine-tuning GPT-4 prompts to generate relevant, difficulty-appropriate questions was an iterative process that required extensive testing.

## Results

Since launch, the platform has helped over 500 students prepare for technical interviews, with a 73% improvement in interview performance metrics.

## Future Roadmap

- Group mock interview sessions
- Company-specific interview preparation modules
- Integration with job boards for direct application tracking`,
  },
];

export function getBlogBySlug(slug: string): BlogData | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogs.map((blog) => blog.slug);
}
