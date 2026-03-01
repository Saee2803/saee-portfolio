"use client";

import { type IconType } from "react-icons";
import SkillIcon from "./SkillIcon";

export interface SkillItem {
  icon: IconType;
  name: string;
  color?: string;
}

interface SkillCategoryProps {
  skills: SkillItem[];
  tags?: string[];
}

export default function SkillCategory({ skills, tags }: SkillCategoryProps) {
  return (
    <div>
      {/* Icon grid */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillIcon
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            color={skill.color}
          />
        ))}
      </div>

      {/* Optional tags */}
      {tags && tags.length > 0 && (
        <div className="mt-3 pt-3 border-t border-slate-700/30">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-medium rounded-full 
                           bg-indigo-900/30 
                           text-indigo-300
                           border border-indigo-700/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
