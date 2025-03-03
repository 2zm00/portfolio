import Card from "../ui/cards";


export default function ContactSection() {
	return (
		<>
			<Card 
			title="연락처" 
			delay={300} 
			>
				<div className="">
				dwa010301@gmail.com 이메일
				<br/>
				https://github.com/2zm00 깃허브
				<br/>
				https://discordapp.com/users/397246059228823572 디스코드

				</div>
			</Card>
		</>
	)
}

