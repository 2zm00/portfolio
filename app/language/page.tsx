import Card from "../ui/cards";
import Badge from "../ui/Badge";



export default function LanguageSection() {
	return (
		<>
		<Card title="언어" delay={450} >
			<Badge className="my-4 text-center"> 한국어 </Badge>
			<Badge className="my-4 text-center"> English </Badge>
		</Card>
		</>
	)
}

