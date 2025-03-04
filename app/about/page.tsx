import Card from "../ui/cards";


export default function AboutSection() {
	return (
		<>
			{/* 소갯말 */}
			<Card 
			title="안녕하세요! 개발자 이정모입니다."
			subtitle="저는 제가 하는 일에 진심입니다."
			delay={100}
			>
				<div>
				진심이 담긴 일이면 끊임없이 새로운 아이디어를 도입하게 되고 더 좋은 경험을 만든다고 믿어요. <br />
				함께 작업하는 일이면, 혼자 빠르게 가는 것보다 함께 멀리 나아가는 팀의 가치를 믿으며 작업하고 있습니다. <br />
				모든 경험에는 배울 점이 있습니다.  <br/>
				직접 경험하고 만들어보며 더 나은, 더 발전할 수 있는 개발자가 되겠습니다. <br />
				
				</div>
			</Card>
		</>
	)
}
