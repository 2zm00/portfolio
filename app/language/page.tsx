import Card from "../components/common/Cards";


export default function LanguageSection() {
	return (
		<>
		<Card title="언어" delay={450} className="align-center rounded-xl dark:bg-lightgray my-auto px-2 py-1 pr-2 transition-transform transform hover:scale-105 flex flex-col gap-4" >
			{/* i18n 도입 시 버튼들을 세로로 배치 */}
			{/* <div className="flex flex-col gap-4"> */}
				<button className="flex items-center py-1 justify-center">한국어</button>
				<button className="flex items-center py-1 justify-center">English</button>
			{/* </div> */}
		</Card>
		</>
	)
}

