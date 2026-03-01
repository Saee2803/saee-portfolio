"use client";

import ProjectCard, { ProjectData } from "./ProjectCard";

interface ProjectsGridProps {
  projects: ProjectData[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
