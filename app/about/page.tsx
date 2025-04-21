import Card from "../components/common/Cards";
import "../styles/markdown.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import portpolio from "../data/portpolio";
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
디바운싱 기법을 활용한 검색 기능으로 API 호출 횟수 70% 감소시켰습니다. <br />
데이터베이스 연동 및 비교 분석 경험으로 초기 설정시간 83% 단축, 쓰기 처리량 320% 향상시켰습니다. <br />
또한 사용자 접근성을 고려한 컴포넌트를 통해 체류시간 및 리텐션율을 40% 향상시켰습니다. <br />
이미지 최적화 툴을 적용하여 30% 리소스를 감소, 개선하여 Lighthouse 50점에서 70점으로 상승시켰습니다. <br />
프론트엔드 뿐만 아니라 백엔드 학습을 통한 전체 프로세스를 이해를 통해 관련 이슈를 파악할 수 있습니다.
				
				</div>
			</Card>

			<Card className="markdown" title="프로젝트">
				<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeSanitize, rehypeRaw]}
				>
							{portpolio.description}
							</ReactMarkdown>
			</Card>
		</>
	)
}
