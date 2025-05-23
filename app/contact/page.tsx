"use client";

import Card from "../components/common/Cards";
import { MdEmail, MdPhone } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";


export default function ContactSection() {
	return (
		<>
			<Card title="연락처" delay={500} className="align-center rounded-xl dark:bg-lightgray my-auto px-2 py-1 pr-2 transition-transform transform hover:scale-105 flex flex-col gap-4" >
				<button onClick={() => window.open("http://jeongmo.o-r.kr/", "_blank")} className="flex items-center py-1"> 
					<FaGlobe size={20} title="Website" style={{display: "inline-block", marginBottom: "3px", marginRight: "5px"}} /> 
					http://jeongmo.o-r.kr
				</button>
								<button onClick={() => window.open("https://github.com/2zm00", "_blank")} className="flex items-center py-1"> 
					<SiGithub size={20} title="Github" style={{display: "inline-block", marginBottom: "3px", marginRight: "5px"}} /> 
					https://github.com/2zm00
				</button>
				<button onClick={() => window.open("tel:+821043422399", "_blank")} className="flex items-center py-1">
					<MdPhone size={20} title="Phone" style={{display: "inline-block", marginBottom: "3px", marginRight: "5px"}} /> 
					010-4342-2399
				</button>
				<button onClick={() => window.open("mailto:dwa010301@gmail.com", "_blank")} className="flex items-center py-1">
					<MdEmail size={20} title="Email" style={{display: "inline-block", marginBottom: "3px", marginRight: "5px"}} /> 
					dwa010301@gmail.com
				</button>
				<button onClick={() => window.open("https://www.linkedin.com/in/leejeongmo/", "_blank")} className="flex items-center py-1"> 
					<FaLinkedin size={20} title="Discord" style={{display: "inline-block", marginBottom: "3px", marginRight: "5px"}} /> 
					leejeongmo
				</button>
								<button onClick={() => window.open("https://discordapp.com/users/397246059228823572", "_blank")} className="flex items-center py-1"> 
					<SiDiscord size={20} title="Discord" style={{display: "inline-block", marginBottom: "3px", marginRight: "5px"}} /> 
					2zm00
				</button>
				
			</Card>
		</>
	)
}

