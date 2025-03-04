import Card from "../ui/cards";
import { SiReact, SiNextdotjs, SiPython, SiDjango, SiFastapi, SiTypescript, SiTailwindcss, SiJavascript, SiStreamlit , SiDocker, SiKubernetes, SiLinux, SiUbuntu, SiNginx, SiAmazons3, SiMinio, SiMysql, SiPostgresql, SiMongodb, SiPandas, SiNumpy, SiSelenium, SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiMediapipe, SiPlotly, SiGithub, SiNotion, SiSlack } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import Badge from "../ui/Badge";


export default function TechSection() {
	return (
		<>
		<Card 
		title="기술 스택" 
		delay={300} 
		>
			<div className="flex flex-wrap gap-2">
			<Badge className="border-2 border-gray-200 dark:border-0"><SiReact size={20} title="React" style={{display: "inline-block", marginBottom: "3px"}} color="#61DAFB" /> React </Badge> 
			<Badge className="border-2 border-gray-200 dark:border-0"><SiNextdotjs size={20} title="Next.js" style={{display: "inline-block", marginBottom: "3px"}} color="#000000" /> Next.js </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"><SiPython size={20} title="Python" style={{display: "inline-block", marginBottom: "3px"}} color="#3776AB" /> Python </Badge>
			</div>
			<br />

			<div className="flex flex-wrap gap-2">
			<Badge className="border-2 border-gray-200 dark:border-0"><SiDjango size={20} title="Django" style={{display: "inline-block", marginBottom: "3px"}} color="#092E20" /> Django </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"><SiFastapi size={20} title="FastAPI" style={{display: "inline-block", marginBottom: "3px"}} color="#009688" /> FastAPI </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"><SiTypescript size={20} title="Typescript" style={{display: "inline-block", marginBottom: "3px"}} color="#3178C6" /> Typescript </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"><SiTailwindcss size={20} title="TailwindCSS" style={{display: "inline-block", marginBottom: "3px"}} color="#06B6D4" /> TailwindCSS </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"><SiJavascript size={20} title="Javascript" style={{display: "inline-block", marginBottom: "3px"}} color="#F7DF1E" /> Javascript </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"><SiStreamlit size={20} title="Streamlit" style={{display: "inline-block", marginBottom: "3px"}} color="#FF4500" /> Streamlit </Badge>
			</div>
			<br />
			<div className="flex flex-wrap gap-2">
			<Badge className="border-2 border-gray-200 dark:border-0"><SiDocker size={20} title="Docker" style={{display: "inline-block", marginBottom: "3px"}} color="#2496ED" /> Docker </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"><SiKubernetes size={20} title="Kubernetes" style={{display: "inline-block", marginBottom: "3px"}} color="#326CE5" /> Kubernetes </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <FaAws size={20} title="AWS" style={{display: "inline-block", marginBottom: "3px"}} color="#FF9900" /> AWS </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiLinux size={20} title="Linux" style={{display: "inline-block", marginBottom: "3px"}} color="#FCC624" /> Linux </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiUbuntu size={20} title="Ubuntu" style={{display: "inline-block", marginBottom: "3px"}} color="#E95420" /> Ubuntu </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiNginx size={20} title="Nginx" style={{display: "inline-block", marginBottom: "3px"}} color="#009639" /> Nginx </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiAmazons3 size={20} title="AWS S3" style={{display: "inline-block", marginBottom: "3px"}} color="#FF9900" /> AWS S3 </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiMinio size={20} title="Minio" style={{display: "inline-block", marginBottom: "3px"}} color="#C72E49" /> Minio </Badge>
			</div>
			<br/>
			<br/>
			<div className="flex flex-wrap gap-2">
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiMysql size={20} title="MySQL" style={{display: "inline-block", marginBottom: "3px"}} color="#4479A1" /> MySQL </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiPostgresql size={20} title="PostgreSQL" style={{display: "inline-block", marginBottom: "3px"}} color="#4169E1" /> PostgreSQL </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiMongodb size={20} title="MongoDB" style={{display: "inline-block", marginBottom: "3px"}} color="#47A248" /> MongoDB </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <DiRedis size={20} title="Redis" style={{display: "inline-block", marginBottom: "3px"}} color="#FF4438" /> Redis </Badge>
			</div>
			<br/>
			<br/>
			<div className="flex flex-wrap gap-2">
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiPandas size={20} title="Pandas" style={{display: "inline-block", marginBottom: "3px"}} color="#150458"/> Pandas </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiNumpy size={20} title="Numpy" style={{display: "inline-block", marginBottom: "3px"}} color="#013243"/> Numpy </Badge>
			<br/>

			<Badge className="border-2 border-gray-200 dark:border-0"> BeautifulSoup </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiSelenium size={20} title="Selenium" style={{display: "inline-block", marginBottom: "3px"}} color="#43B02A"/> Selenium </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> FinanceDataReader </Badge>

			<br/>

			<Badge className="border-2 border-gray-200 dark:border-0"> <SiTensorflow size={20} title="TensorFlow" style={{display: "inline-block", marginBottom: "3px"}} color="#FF6F00"/> TensorFlow </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiPytorch size={20} title="Pytorch" style={{display: "inline-block", marginBottom: "3px"}} color="#EE4C2C"/> Pytorch </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiScikitlearn size={20} title="Scikit-learn" style={{display: "inline-block", marginBottom: "3px"}} color="#F7931E"/> Scikit-learn </Badge>

			<br/>

			<Badge className="border-2 border-gray-200 dark:border-0"> <SiOpencv size={20} title="OpenCV" style={{display: "inline-block", marginBottom: "3px"}} color="#5C3EE8"/> OpenCV </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> Pillow </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiMediapipe size={20} title="MediaPipe" style={{display: "inline-block", marginBottom: "3px"}} color="#0097A7" /> MediaPipe </Badge>

			<br/>

			<Badge className="border-2 border-gray-200 dark:border-0"> Matplotlib </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiPlotly size={20} title="Plotly" style={{display: "inline-block", marginBottom: "3px"}} color="#3F4F75"/> Plotly </Badge>
			</div>

			<br/>
			<br/>
			<div className="flex flex-wrap gap-2">
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiGithub size={20} title="Github" style={{display: "inline-block", marginBottom: "3px"}} color="#181717"/> Github </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiNotion size={20} title="Notion" style={{display: "inline-block", marginBottom: "3px"}} color="#000000"/> Notion </Badge>
			<Badge className="border-2 border-gray-200 dark:border-0"> <SiSlack size={20} title="Slack" style={{display: "inline-block", marginBottom: "3px"}} color="#4A154B"/> Slack </Badge>
			</div>
		
		</Card>	
		</>
	)
}

