import React from "react";
import { Project } from "@/app/types/Project";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      className="cursor-pointer rounded-lg shadow-lg hover:shadow-lg transition-transform transform hover:scale-105 dark:bg-zinc-800"
      onClick={() => onClick(project)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-3 text-center ">
        <h3 className="text-lg font-bold ">{project.title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
