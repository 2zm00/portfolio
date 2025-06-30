import Card from "../components/common/Cards";

export default function AboutSection() {
	return (
		<>
			{/* 소갯말 */}
			<Card 
			title="이정모"
			subtitle="dwa010301@gmail.com   |   010-4342-2399"
			delay={100}
			className="text-darkgray text-opacity-70 dark:text-white dark:text-opacity-70"
			>
				<div>
				제한된 리소스 환경에서 기획 단계에서부터 개발 경험이 있습니다. <br />
LangChain 및 HuggingFace LLM 기반 RAG 파이프라인을 구축한 경험이 있습니다. <br />
Docker를 활용한 배포 프로세스 구축하여 배포 장애율 66% 감소시킨 경험이 있습니다.  <br />
디바운싱 기법을 활용한 검색 기능으로 API 호출 횟수 70% 감소시켰습니다. <br />
데이터베이스 연동 및 비교 분석 경험으로 초기 설정시간 83% 단축, 쓰기 처리량 320% 향상시켰습니다. <br />
백엔드 뿐만 아니라 프론트엔드, Devops에 대한 학습으로 관련 이슈를 파악할 수 있습니다.<br />
				
				</div>
			</Card>

			
		</>
	)
}
