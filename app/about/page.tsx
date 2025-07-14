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
데이터셋의 결측치를 처리하고, 모델 학습에 적합한 형태로 정제 및 전처리 경험이 있습니다. <br />
Vector DB 대규모 벡터 데이터를 인덱싱하고, 의미 기반 검색기능의 응답 시간 100ms로 최적화시켰습니다. <br />
Docker를 활용한 배포 프로세스 구축하여 배포 장애율 66% 감소시킨 경험이 있습니다.  <br />
백엔드 뿐만 아니라 프론트엔드, Devops에 대한 학습으로 관련 이슈를 파악할 수 있습니다.<br />
				
				</div>
			</Card>

			
		</>
	)
}
