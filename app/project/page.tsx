'use client'

import { useState } from "react";
import Card from "../components/common/Cards";
import { projects } from "../data/projects";
import ProjectCard from "../components/project/ProjectCard";
import ProjectModal from "../components/project/ProjectModal";


const ProjectSection: React.FC = () => {
	const [selectedProject, setSelectedProject] = useState<any>(null);

	return (
	<>
	<Card title="프로젝트" delay={300}>
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