import GithubActivity from "../components/github/GithubActivity";
import GitHubStats from "../components/github/GitHubStats";
import AchievementsSection from "../sections/AchievementsSection";
import BlogsSection from "../sections/BlogsSection";
import ContactSection from "../sections/ContactSection";
import EducationSection from "../sections/EducationSection";
import ExperienceSection from "../sections/ExperienceSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import ResumeSection from "../sections/ResumeSection";
import SkillsSection from "../sections/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <GithubActivity />
      <GitHubStats />
      <BlogsSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
