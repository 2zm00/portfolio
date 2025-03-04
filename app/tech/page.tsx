import Card from "../ui/cards";
import { SiReact, SiNextdotjs, SiPython, SiDjango, SiFastapi, SiTypescript, SiTailwindcss, SiJavascript, SiStreamlit , SiDocker, SiKubernetes, SiLinux, SiUbuntu, SiNginx, SiAmazons3, SiMinio, SiMysql, SiPostgresql, SiMongodb, SiRedis, SiPandas, SiNumpy, SiSelenium, SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiMediapipe, SiPlotly, SiGithub, SiNotion, SiSlack } from "react-icons/si";
import { FaAws } from "react-icons/fa";



export default function TechSection() {
	return (
		<>
		<Card 
		title="기술 스택" 
		delay={300} 
		>
			<div className="flex flex-wrap gap-2">
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiReact size={20} title="React" style={{display: "inline-block", marginBottom: "3px"}} /> React </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiNextdotjs size={20} title="Next.js" style={{display: "inline-block", marginBottom: "3px"}} /> Next.js </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiPython size={20} title="Python" style={{display: "inline-block", marginBottom: "3px"}} /> Python </div>
			</div>
			<br />

			<div className="flex flex-wrap gap-2">
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiDjango size={20} title="Django" style={{display: "inline-block", marginBottom: "3px"}} /> Django </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiFastapi size={20} title="FastAPI" style={{display: "inline-block", marginBottom: "3px"}} /> FastAPI </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiTypescript size={20} title="Typescript" style={{display: "inline-block", marginBottom: "3px"}} /> Typescript </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiTailwindcss size={20} title="TailwindCSS" style={{display: "inline-block", marginBottom: "3px"}} /> TailwindCSS </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiJavascript size={20} title="Javascript" style={{display: "inline-block", marginBottom: "3px"}} /> Javascript </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiStreamlit size={20} title="Streamlit" style={{display: "inline-block", marginBottom: "3px"}} /> Streamlit </div>
			</div>
			<br />
			<div className="flex flex-wrap gap-2">
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiDocker size={20} title="Docker" style={{display: "inline-block", marginBottom: "3px"}} /> Docker </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiKubernetes size={20} title="Kubernetes" style={{display: "inline-block", marginBottom: "3px"}} /> Kubernetes </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <FaAws size={20} title="AWS" style={{display: "inline-block", marginBottom: "3px"}} /> AWS </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiLinux size={20} title="Linux" style={{display: "inline-block", marginBottom: "3px"}} /> Linux </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiUbuntu size={20} title="Ubuntu" style={{display: "inline-block", marginBottom: "3px"}} /> Ubuntu </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiNginx size={20} title="Nginx" style={{display: "inline-block", marginBottom: "3px"}} /> Nginx </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiAmazons3 size={20} title="AWS S3" style={{display: "inline-block", marginBottom: "3px"}} /> AWS S3 </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiMinio size={20} title="Minio" style={{display: "inline-block", marginBottom: "3px"}} /> Minio </div>
			</div>
			<br/>
			<br/>
			<div className="flex flex-wrap gap-2">
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiMysql size={20} title="MySQL" style={{display: "inline-block", marginBottom: "3px"}} /> MySQL </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiPostgresql size={20} title="PostgreSQL" style={{display: "inline-block", marginBottom: "3px"}} /> PostgreSQL </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiMongodb size={20} title="MongoDB" style={{display: "inline-block", marginBottom: "3px"}} /> MongoDB </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiRedis size={20} title="Redis" style={{display: "inline-block", marginBottom: "3px"}} /> Redis </div>
			</div>
			<br/>
			<br/>
			<div className="flex flex-wrap gap-2">
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiPandas size={20} title="Pandas" style={{display: "inline-block", marginBottom: "3px"}} /> Pandas </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiNumpy size={20} title="Numpy" style={{display: "inline-block", marginBottom: "3px"}} /> Numpy </div>
			<br/>

			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> BeautifulSoup </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiSelenium size={20} title="Selenium" style={{display: "inline-block", marginBottom: "3px"}} /> Selenium </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> FinanceDataReader </div>

			<br/>

			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiTensorflow size={20} title="TensorFlow" style={{display: "inline-block", marginBottom: "3px"}} /> TensorFlow </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiPytorch size={20} title="Pytorch" style={{display: "inline-block", marginBottom: "3px"}} /> Pytorch </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiScikitlearn size={20} title="Scikit-learn" style={{display: "inline-block", marginBottom: "3px"}} /> Scikit-learn </div>

			<br/>

			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiOpencv size={20} title="OpenCV" style={{display: "inline-block", marginBottom: "3px"}} /> OpenCV </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> Pillow </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiMediapipe size={20} title="MediaPipe" style={{display: "inline-block", marginBottom: "3px"}} /> MediaPipe </div>

			<br/>

			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> Matplotlib </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiPlotly size={20} title="Plotly" style={{display: "inline-block", marginBottom: "3px"}} /> Plotly </div>
			</div>

			<br/>
			<br/>
			<div className="flex flex-wrap gap-2">
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiGithub size={20} title="Github" style={{display: "inline-block", marginBottom: "3px"}} /> Github </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiNotion size={20} title="Notion" style={{display: "inline-block", marginBottom: "3px"}} /> Notion </div>
			<div className="align-center border-2 border-gray-300 rounded-xl px-2 py-1 pr-3 "> <SiSlack size={20} title="Slack" style={{display: "inline-block", marginBottom: "3px"}} /> Slack </div>
			</div>
		
		</Card>	
		</>
	)
}

