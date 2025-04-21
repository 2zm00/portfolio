import Card from "../components/common/Cards";
import Badge from "../components/common/Badge";
import { SiReact, SiNextdotjs, SiPython, SiDjango, SiFastapi, SiTypescript, SiTailwindcss, SiJavascript, SiDocker, SiKubernetes, SiLinux, SiMysql, SiPostgresql, SiMongodb, SiGithub, SiNotion, SiSlack } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiRedis } from "react-icons/di";



export default function TechSection() {
	return (
		<>
		<Card 
		title="기술 스택" 
		delay={300} 
		>
			<div className="py-2"> 언어 </div>
			<div className="flex flex-wrap gap-2 text-dark dark:text-white pb-2">
			<Badge className="border-2 border-gray-200 dark:border-0"><SiPython size={20} title="Python" style={{display: "inline-block", marginBottom: "3px"}} color="#3776AB" /> Python </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"><SiTypescript size={20} title="Typescript" style={{display: "inline-block", marginBottom: "3px"}} color="#3178C6" /> Typescript </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"><SiJavascript size={20} title="Javascript" style={{display: "inline-block", marginBottom: "3px"}} color="#F7DF1E" /> Javascript </Badge>
			</div>
		
			<div className="py-2"> 웹 </div>
			<div className="flex flex-wrap gap-2 text-dark dark:text-white pb-2">
			<Badge className="border-2 border-gray-200 dark:border-0"><SiReact size={20} title="React" style={{display: "inline-block", marginBottom: "3px"}} color="#61DAFB" /> React </Badge> 
			<Badge className="border-2 border-gray-200 dark:border-0"><SiNextdotjs size={20} title="Next.js" style={{display: "inline-block", marginBottom: "3px"}} color="#000000" /> Next.js </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"><SiDjango size={20} title="Django" style={{display: "inline-block", marginBottom: "3px"}} color="#092E20" /> Django </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"><SiFastapi size={20} title="FastAPI" style={{display: "inline-block", marginBottom: "3px"}} color="#009688" /> FastAPI </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"><SiTailwindcss size={20} title="TailwindCSS" style={{display: "inline-block", marginBottom: "3px"}} color="#06B6D4" /> TailwindCSS </Badge>
			</div>


			<div className="py-2"> 인프라 </div>
			<div className="flex flex-wrap gap-2 text-dark dark:text-white pb-2">
			<Badge className="border-2 border-gray-200 dark:border-0"><SiDocker size={20} title="Docker" style={{display: "inline-block", marginBottom: "3px"}} color="#2496ED" /> Docker </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"><SiKubernetes size={20} title="Kubernetes" style={{display: "inline-block", marginBottom: "3px"}} color="#326CE5" /> Kubernetes </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <FaAws size={20} title="AWS" style={{display: "inline-block", marginBottom: "3px"}} color="#FF9900" /> AWS </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiLinux size={20} title="Linux" style={{display: "inline-block", marginBottom: "3px"}} color="#FCC624" /> Linux </Badge>
			</div>

			<div className="py-2"> 데이터베이스 </div>
			<div className="flex flex-wrap gap-2 text-dark dark:text-white pb-2 ">
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiMysql size={20} title="MySQL" style={{display: "inline-block", marginBottom: "3px"}} color="#4479A1" /> MySQL </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiPostgresql size={20} title="PostgreSQL" style={{display: "inline-block", marginBottom: "3px"}} color="#4169E1" /> PostgreSQL </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiMongodb size={20} title="MongoDB" style={{display: "inline-block", marginBottom: "3px"}} color="#47A248" /> MongoDB </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <DiRedis size={20} title="Redis" style={{display: "inline-block", marginBottom: "3px"}} color="#FF4438" /> Redis </Badge>
			</div>

			<div className="py-2"> 기타 </div>
			<div className="flex flex-wrap gap-2 text-dark dark:text-white pb-2">
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiGithub size={20} title="Github" style={{display: "inline-block", marginBottom: "3px"}} color="#181717"/> Github </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiNotion size={20} title="Notion" style={{display: "inline-block", marginBottom: "3px"}} color="#000000"/> Notion </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiSlack size={20} title="Slack" style={{display: "inline-block", marginBottom: "3px"}} color="#4A154B"/> Slack </Badge>
			</div>
		
		</Card>	
		</>
	)
}

