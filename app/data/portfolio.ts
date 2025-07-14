

export const portfolio = {
	description: `
### TechFit | 팀프로젝트

수강생의 이력서를 AI가 분석하여 역량 기반 정량 평가 및 인사담당자의 성향에 맞는 인재 추천 시스템 구축 []()

FastAPI Next.js LangChain PostgreSQL PGVector
Dramatiq Torch Docker Redis

2025.06.30 ~ 2025.07.30

[멋쟁이사자처럼 신사업 기반 마련]
- MSA 서버, Docker, Redis, PGVector 운영
- 추후 고도화를 위한 기반 설계 및 마련
- GitAction를 통한 무중단 배포 파이프라인 구축

[이력서 분석 및 스코어링 시스템 구축]
- 이력서 텍스트 전처리 파이프라인 구축
- 이력서 스코어링 로직 구현 (Pandas Numpy)
- 코사인 유사도, LLM 쿼리 의미 검색 구현
- 이력서 평가 및 피드백 시스템 구축

[시스템 병목지점 식별 및 처리량 개선]
- Dramtiq를 이용한 비동기 처리 및 서비스 동시성 최적화

[채용공고 매칭 알고리즘 구축]
- 채용공고 직무기술서와 사용자 이력서 비교

[회원관리 시스템]
- JWT를 이용한 사용자 인증 및 인가 시스템 구축
- 소셜로그인을 통한 특정 API에 대한 접근 제어


### 인재 역량 태그 추론 | 개인프로젝트

회사, 재직기간, 직무 만 존재하는 인재 데이터를 기반으로 LLM 을 활용하여 어떤 경험을 했는지, 어떤 역량을 가지고 있는지 추론하는 서비스 [[Github]](https://github.com/2zm00/AI-Talent-Inference)

FastAPI LangChain PostgreSQL PGVector OpenAI-Embedding Pytest Docker

2025.05.19 ~ 2025.05.23

[HR, IT 도메인 지식을 갖춘 LLM 쿼리 RAG 기반의 인재 추론 서비스 구축]
- LangChain VectorStore, Retriever, VectorDB를 활용한 검색 시스템 구축 및 최적화 경험
- FastAPI를 사용하여 딥러닝 모델을 서빙하는 고성능 API를 구축
- 사전 학습 모델(Pre-trained Model)을 로드하여, 특정 자연어 처리
- Docker를 통해 MSA 환경에 배포하여 안정적으로 운영
- 사용자의 인재 데이터를 기반으로 필터링 알고리즘을 구축

[백터DB 및 데이터셋 관련 기반 마련]
- Retrieve 데이터셋의 결측치를 처리하고, 모델 학습에 적합한 형태로 데이터 정제 학습 및 전처리
- Vector DB(PGVector)를 사용하여 대규모 벡터 데이터를 인덱싱하고, 의미 기반 검색(Semantic Search) 기능의 응답 시간을 100ms로 최적화
- Pytest 단위테스트, 모킹테스트를 통해 테스트 커버리지 80% 이상 유지



### Fiton v2 | 팀프로젝트 | 팀리드

수강생, 강사, 운영자 모두를 위한 효율적인 헬스케어 수업 관리 웹 서비스 [[Github]](https://github.com/2zm00/Fiton_v2)

FastAPI Django Next.js React Langchain HuggingFace Mediapipe AWS OCI PostgreSQL MySQL

2025.01.17 ~ 2025.02.19

[기존 서비스 고도화 [[Github]](https://github.com/2zm00/Fiton_v2_zmo)]
-  MSA 아키텍처를 활용한 서비스 고도화
- 서비스 고도화 기획 단계부터 참여, 백엔드 및 프론트엔드 메인 설계 담당
- LLM 기반 자동화 코드 리뷰 도입 (PR 리뷰 시간 70% 감소)


[헬스케어 수업관리 서비스 구현]
- 핵심 도메인(헬스케어, 회원관리) 관리 기능 개발
- 역할별 데이터 접근 권한 및 API 엔드포인트 구현
- 로그인 및 온보딩 추가 정보 입력 기능 개발

[RAG 챗봇 서비스 개발]
- LangChain 및 HuggingFace LLM 기반 RAG 파이프라인 구축
- 지능형 SQL 쿼리 생성을 통해 DB 정보 연동
- 수업/운동/센터 기반 컨텍스트 챗봇 API 엔드포인트 개발


[운동 자세 분석 서비스 개발]
- 주요 관절 각도를 계산하여 정량적인 자세 분석 수행 (Mediapipe)
- 자세 랜드마크 및 각도 정보를 시각화하여 피드백 제공 (Pose-Landmarker)
- 영상 업로드, 자동 분석 처리 파이프라인 구축


[서비스 성능 최적화]
- API 성능 최적화와 데이터 처리 개선
	 (응답시간 40% 단축, 20% 메모리 절감)
- 스토리지 서버 도입으로 비용 절감 
	(월 23$ -> 0$)
- 배포 프로세스 구축하여 배포 장애율 66%감소
- TDD 기반 모킹데이터를 통해 안정적인 코드 관리


### Fiton v1 | 팀프로젝트 | 팀리드
수강생, 강사, 운영자 모두를 위한 효율적인 헬스케어 수업 관리 웹 서비스 [[Github]](https://github.com/2zm00/Fiton_Project)

Django React PostgreSQL TossPayments

2024.12.11 ~ 2024.12.30


[헬스케어 관리 서비스 신규 개발 [[Github]](https://github.com/2zm00/Fiton_Project_zmo)]
- 역할별 대시보드 구현 (수강생, 강사, 센터장)
- 역할 기반 접근 제어 (RBAC) 설계 및 구현
- 검색 기능 성능 최적화 (API 호출 횟수 70% 감소)

[PG사 결제 게이트웨이 연동]
- 안정적인 PG 연동 개발 (TossPayments)
- UUID 활용 주문 데이터 무결성 확보
- 각 상품(수강권, 회원권)에 따른 결제 정보 연동




### Give a Lotto | 팀 프로젝트
로또 번호 통계 분석부터 AI 예측, 데이터 시각화 활용 프로젝트 [[Github]](https://github.com/2zm00/lotto)

Pandas NumPy Matplotlib TensorFlow PyTorch Folium

2024.11.05 ~ 2024.11.07 

[로또 번호 예측 서비스 개발]
- 데이터 파이프라인을 구축하여 Matplotlib, Ploty를 활용한 데이터 대시보드를 구축
- 한국로또공사 API에서 과거 당첨 번호 1,107회차 데이터 수집 → Pandas로 정제
- 80% 학습 데이터 / 20% 검증 데이터 분할 후 학습 기여
- 데이터 수집 → 모델 학습 → 서빙 파이프라인을 구현
	`
}


export default portfolio;