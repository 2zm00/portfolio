"use client";

import Card from "../ui/cards";
import Badge from "../ui/Badge";
import { MdAlternateEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { SiDiscord } from "react-icons/si";


export default function ContactSection() {
	return (
		<>
			<Card title="연락처" delay={400} >
				<Badge className="my-4" onClick={() => window.open("mailto:dwa010301@gmail.com", "_blank")}> 
					<MdAlternateEmail size={20} title="Email" style={{display: "inline-block", marginBottom: "3px", marginRight: "5px"}} /> 
					dwa010301@gmail.com 
				</Badge>
				<Badge className="my-4" onClick={() => window.open("https://github.com/2zm00", "_blank")}> 
					<SiGithub size={20} title="Github" style={{display: "inline-block", marginBottom: "3px", marginRight: "5px"}} /> 
					Github
				</Badge>
				<Badge className="my-4" onClick={() => window.open("https://discordapp.com/users/397246059228823572", "_blank")}> 
					<SiDiscord size={20} title="Discord" style={{display: "inline-block", marginBottom: "3px", marginRight: "5px"}} /> 
					정모
				</Badge>
			</Card>
		</>
	)
}

