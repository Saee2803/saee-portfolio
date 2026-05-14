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
    slug: "resumeiq-ai-powered-ats-analyzer",
    title:
      "How I Built ResumeIQ – AI Powered ATS Resume Analyzer",
    platform: "Medium",
    image: "/blogs/Blog1.png",
    articleLink:
      "https://medium.com/@saeebhanuskar/how-i-built-resumeiq-ai-powered-ats-resume-analyzer-aeb6ee4e733b",
    description:
      "A detailed walkthrough of building an AI-powered ATS resume analyzer using React, Next.js, TypeScript, and AI concepts.",
    author: "Saee Bhanuskar",
    publishDate: "2025-01-10",
    readTime: "9 min read",
    content: `## Introduction

ResumeIQ is an AI-powered ATS (Applicant Tracking System) Resume Analyzer that helps job seekers optimize their resumes for better ATS compatibility and increased interview callbacks.

## The Problem

Most job applications get filtered out by ATS systems before they even reach recruiters. Traditional resume reviews don't account for ATS optimization, leading to qualified candidates being rejected automatically.

## Building ResumeIQ

### Tech Stack
- **Frontend**: React with TypeScript for robust UI components
- **Framework**: Next.js 13+ for server-side rendering and API routes
- **Styling**: Tailwind CSS for responsive design
- **AI Integration**: OpenAI API for intelligent resume analysis
- **File Processing**: PDF parsing for resume extraction

### Key Features

#### 1. Resume Parsing
Intelligent parsing engine that extracts text from PDF resumes while preserving formatting information.

#### 2. ATS Compatibility Scoring
Analyzes the resume against known ATS keyword patterns and provides:
- ATS compatibility score (0-100)
- Keyword optimization suggestions
- Formatting recommendations

#### 3. AI-Powered Recommendations
Uses GPT to provide:
- Content improvement suggestions
- Skill keyword recommendations
- Achievement rewriting tips

#### 4. Real-time Preview
Users can see improvements in real-time as they edit their resume.

## Technical Implementation

### Resume Analysis Pipeline

1. **Upload & Parsing**: PDF files are processed using a specialized library
2. **Text Extraction**: Clean text extraction maintaining structure
3. **Tokenization**: Breaking content into analyzable components
4. **ATS Analysis**: Checking against known ATS patterns
5. **AI Enhancement**: Generating improvement suggestions
6. **Scoring**: Computing overall compatibility score

### AI Integration

The AI component uses carefully crafted prompts to:
- Identify weak points in resume
- Suggest stronger action verbs
- Recommend relevant keywords for industry
- Improve formatting suggestions

## Results & Impact

ResumeIQ has helped hundreds of job seekers:
- Average ATS score improvement: 35%
- Users reporting more interview calls: 68%
- Average time to analyze resume: 2-3 minutes

## Lessons Learned

1. **PDF Processing Complexity**: Each PDF parser has quirks; building a robust solution requires handling multiple formats
2. **AI Prompt Engineering**: Getting consistent, quality AI responses requires extensive testing and refinement
3. **UX Matters**: Making the tool intuitive and actionable was as important as the analysis itself

## Conclusion

ResumeIQ demonstrates the practical application of AI in solving real-world job search problems. By combining intelligent analysis with user-friendly design, we've created a tool that genuinely helps people advance their careers.`,
  },
];

export function getBlogBySlug(slug: string): BlogData | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogs.map((blog) => blog.slug);
}
