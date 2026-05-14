"use client";

import SectionWrapper from "../components/SectionWrapper";
import ResumeCard from "../components/resume/ResumeCard";

export default function ResumeSection() {
  return (
    <SectionWrapper id="resume" title="Resume">
      {/* Subtitle */}
      <p className="text-center text-gray-500 dark:text-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
        Download my resume to learn more about my experience, projects, and
        technical skills.
      </p>

      <div className="max-w-7xl mx-auto px-4">
        <ResumeCard
          fileName="CV — Saee Bhanuskar"
          filePath="/Resume/Saee_Bhanuskar_CV.pdf"
          description="Full Stack Developer with hands-on experience in web development, Python, Flask, and database design. Explore my complete professional profile."
        />
      </div>
    </SectionWrapper>
  );
}
