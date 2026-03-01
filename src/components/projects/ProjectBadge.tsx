"use client";

interface ProjectBadgeProps {
  label: string;
}

export default function ProjectBadge({ label }: ProjectBadgeProps) {
  return (
    <span
      className="inline-block px-2.5 py-1 text-xs font-medium rounded-md
                 bg-slate-100 dark:bg-slate-800
                 text-slate-700 dark:text-slate-300
                 border border-slate-200 dark:border-slate-700
                 transition-colors duration-200"
    >
      {label}
    </span>
  );
}
