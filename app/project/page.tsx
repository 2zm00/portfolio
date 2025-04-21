'use client'

import { useState } from "react";
import Card from "../components/common/Cards";
import { projects } from "../data/projects";
import { Project } from "@/app/types/Project";
import ProjectCard from "../components/project/ProjectCard";
import ProjectModal from "../components/project/ProjectModal";


const ProjectSection: React.FC = () => {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	return (
	<>
	<Card title="프로젝트 상세" delay={400}>
		<div className="grid grid-cols-2 gap-4">
			{projects.map((project) => (
			<ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
			))}
		</div>
	</Card>

		{selectedProject && (
		<ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
		)}
	</>
	);
}

export default ProjectSection;