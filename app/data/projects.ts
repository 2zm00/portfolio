import { Project } from "../types/Project";

export const projects: Project[] = [
	{
		id: 1,
		title: "Fiton v2 - 팀 프로젝트",
		date: "2025.01.17 ~ 2025.02.19 (약 31일) 3인 기여",
		image: "images/fitonv2.webp",
		description: `
## 01 | 프로젝트 소개 - v1을 발전시킨 헬스케어 프로젝트


[프로젝트 리뷰 레포지토리](https://github.com/2zm00/fiton_v2_zmo) / 
[깃허브 레포지토리](https://github.com/2zm00/fiton_v2) / 
[WBS](https://docs.google.com/spreadsheets/d/1IAD58a9fe4KGy730ykC-XTgU4SGzh7CECLaEMhFYmRQ/edit?gid=1991800281#gid=1991800281)

<div align="center">

#React #Next.js #Django #FastAPI #postgres #MySQL #Docker #AWS

</div>

### 기술 스택 

<div align="center">

| 영역         | 기술 스택                                                                 |
|--------------|--------------------------------------------------------------------------|
| **프론트엔드** | React, Next.js, Typescript, TailwindCSS   |
| **백엔드**    |  Django, FastAPI, Python                  |
| **데이터베이스** |       MySQL, PostgreSQL      |
| **인프라**       |  AWS S3, MinIO, AWS EC2, OCI                                    |
| **CI/CD**        | Docker, Github Actions  |
| **웹 서버**      | Nginx |
| **AI/ML**        | LangChaing, HugginFace, MediaPipe                               |

</div>


## 02 | 프로젝트 개요 
피트니스 산업의 지속적인 성장과 건강에 대한 관심 증가에 따라, 기존 PT 수업관리의 비효율적인 시스템을 개선하고자 헬스케어 수업관리 서비스를 구현했습니다. 기존의 전화나 메시지로 이루어지던 수업 관리를 체계화하여 수강생, 강사, 센터 운영자 모두에게 효율적인 관리 시스템을 제공하고자 합니다.


## 03 | 진행한 일 
- 기존 MVT 모델에서 MSA 아키텍처 설계 및 마이그레이션 기여


	(Django -> Next.js/Django/FastAPI를 사용하는 MSA 아키텍처 구조)
- AWS S3 스토리지 비용문제 이슈를 MinIO를 도입하여 비용 절감 (월 23$ -> 0$로 절감)<br/>
	(매 월 1TB 스토리지 100만 GET 요청 EC2 프리티어 인스턴스 기준)
- AI 챗봇 구현 과정에서 비동기 요청 흐름과 UI 상태 동기화 이슈를 Hook과 함수형 업데이트 패턴을 활용한 비동기 컨텍스트 분리패턴으로 해결
- GitHub Pull Request 기반 코드 리뷰 과정에서 ChatGPT 자동화 코드 리뷰 기능을 도입하여 PR당 평균 리뷰 시간을 180분에서 30분으로 단축(70% 감소)
- TDD 기반 모킹 데이터를 통해 안정적인 아키텍처를 구축

## 04 | 과정 
- 문서화 및 컨벤션 정의를 통해 팀원들과의 협업 커뮤니케이션을 이끌었음.

	(WBS, Flowchart, ERD 설계, 커밋 컨벤션 문서화, API 연동 정의서, 기능 명세서, GithubProject Milestone 활용)

- RESTful API 설계 및 통신, 데이터 처리 로직을 구현하여 백엔드와의 통신을 최적화했습니다.
- JWT 기반 인증으로 RBAC를 구축하여 사용자 권한을 관리했습니다.
- 모바일 반응형 UI/UX 컴포넌트를 설계하여 사용자 경험을 개선했습니다.
- SSR/CSR 렌더링을 적용하여 페이지 로딩 속도를 개선했습니다.
- React Hook을 이용한 상태관리를 통해 컴포넌트 간의 데이터 흐름을 효율적으로 관리했습니다.
- 재사용 가능한 컴포넌트를 개발하여 코드의 유지보수성을 높였습니다.
- 기존 MVT 모델에서 MSA 아키텍처 설계 및 마이그레이션 기여했습니다.

	(기존 Django -> Next.js/Django/FastAPI를 사용하는 MSA 아키텍처 구조)
- TDD기반 모킹데이터를 통해 안정적인 아키텍처를 구축하였습니다.


-  AI기반 API와 운동자세 분석 기능을 구현하여 성능 최적화와 데이터 처리속도 개선했습니다.

	(비동기 처리 지원으로 기존 사용 대비 응답시간 40% 단축, 초당 처리량 300% 향상,  20% 메모리 사용량 절감 )
- Langchain과 HugginFace를 활용하여 AI 챗봇을 구현
했습니다.

    또한 이를 활용하여 RAG(정보 검색 기반 생성형 AI) 기능을 구현했습니다.
- MediaPipe를 활용하여 운동자세 분석 기능을 구현했습니다.

- AWS S3 스토리지 비용문제 이슈를 MinIO를 도입하여 비용 절감했습니다.  (월 23$ -> 0$로 절감) 
- Github Actions와 Docker를 활용한 일관된 배포 프로세스를 구축하여 배포 장애율이 66% 감소하였습니다. (1800s -> 600s)

	(배포시간 평균 1800s 에서 600s으로 단축)
 
## 05 | 결과물 
 [(프로젝트 리뷰는 여기)](https://github.com/2zm00/fiton_v2_zmo)에서 확인하실 수 있습니다.
-  WBS, FlowChart, ERD, API 연동정의서, Milestone 아키텍처
 
## 06 | 성장 한 점 
- MSA 아키텍처 구조에 대한 전체적인 구조를 구현하여 흐름을 파악하였습니다.
- 기존 프로젝트에서 시스템 확장을 통해 실제 서비스 수준으로 발전시킨 프로젝트이기 때문에 팀 리드로서 프로젝트 전반을 관리하며 팀원들과의 협업능력과 문제해결 역량을 키울 수 있었습니다. 
- 개발 직군에서 요구되는 시스템 설계 능력, 효율적인 협업스킬을 이해하고 적용했습니다.
- 팀원이 이탈하려는 이슈가 있었지만, 코드 리뷰 자동화와 1:1 피드백 세션을 진행하고 데일리 미팅 확대로 실시간 이슈를 해결하고 팀원이 프로젝트에 끝까지 참여하여 목표를 성공적으로 달성했던 경험이 있습니다.

## 07 | 역량 
- 모던 프론트엔드 개발 : React, Next.js을 활용한 SPA 아키텍처를 설계하였습니다.
- MSA 아키텍처 설계 : Frontend + Backend + DB + 인프라를 통합하여 MSA 아키텍처 설계하였습니다.
- 커뮤니케이션 및 협업 : WBS, Flowchart, ERD, API 연동정의서, Milestone 아키텍처 문서화를 통해 팀원들과의 협업을 이끌었습니다.
- 코드리뷰 : Git Flow + 자동화 코드리뷰를 통해 품질 관리 시스템을 개발하였습니다.
- 비용 최적화 : MinIO + S3 호환 아키텍처 설계를 통해 비용을 절감하였습니다.
- 백오피스 시스템 : RBAC 기반의 백오피스 시스템을 설계하였습니다.
`
	},

	{
		id: 2,
		title: "Fiton v1 - 팀 프로젝트",
		date: "2024.12.11 ~ 2024.12.30 (약 19일) 3인 기여",
		image: "images/fitonv1.webp",
		description: `
## 01 | 프로젝트 소개 - 헬스케어 수업관리 프로젝트


[프로젝트 리뷰 레포지토리](https://github.com/2zm00/Fiton_Project_zmo) / 
[깃허브 레포지토리](https://github.com/2zm00/Fiton_Project) / 
[ERD 다이어그램](https://www.erdcloud.com/d/298fbiaFf2XZf4Etd)  / 
[요구사항정의서](https://docs.google.com/spreadsheets/d/1z0MNgjmX_-icLs5omh3fUv9CrDgwp_VYDUaUMc3BOqk/edit?usp=sharing)


<div align="center">

#Django #Python #TailwindCSS #JavaScript #PostgreSQL #TossPayments #KakaoMapAPI

</div>

### 기술 스택 

<div align="center">

| 영역         | 기술 스택                                                                 |
|--------------|--------------------------------------------------------------------------|
| **백엔드**    |  Python, Django                  |
| **프론트엔드** | Javascript, TailwindCSS   |
| **데이터베이스** |       PostgreSQL      |
| **인프라**       |  Git                                    |
| **기타**        | TossPayments, KakaoMapAPI  |


</div>


## 02 | 프로젝트 개요 
 피트니스 산업의 지속적인 성장과 건강에 대한 관심 증가에 따라, 기존 PT 수업관리의 비효율적인 시스템을 개선하고자 Django 기반의 웹 서비스를 구현했습니다. 기존의 전화나 메시지로 이루어지던 수업 관리를 체계화하여 수강생, 강사, 센터 운영자 모두에게 효율적인 관리 시스템을 제공하고자 합니다.

 
## 03 | 진행한 일 
- 디바운싱 기법을 활용한 검색 기능 개발 

	(API 호출 횟수 70% 감소, 세션 당 28회-> 8회)
- RBAC(역할 기반 접근 제어) 설계 및 구현
- PG사 결제 게이트웨이 연동 (TossPayments)


	(실제 서비스 시 PG사 평균 15일 정산 -> 토스페이먼츠 PG 평균 5일 정산)


	(브랜드 페이를 도입하여 간편 결제 시스템 도입)
- 인트로 애니메이션 및 서비스 UI 구현
- 역할 별 대시보드 구현


## 04 | 과정 

- 디바운싱 기법을 활용한 검색 기능을 개발하여 API 호출 횟수 70% 감소시켰습니다.
- TossPayments 결제 모듈을 도입하여 PG 결제 프로세스를 이해했습니다.
- ERD 설계 및 요구사항 정의서를 통해 팀원들과의 협업 커뮤니케이션을 이끌었습니다.
- 역할 기반 접근 제어 시스템(RBAC)을 설계하여 역할 별 대시보드를 구현했습니다.
	또한, 이를 활용하여 양방향 인증 프로세스를 통해 강사 인증 시스템을 구축하였습니다.
- KakaoMapAPI를 활용하여 센터 등록 및 검색 기능을 구현했습니다.
- 인트로 애니메이션 및 전체 프로젝트 디자인을 주도하였습니다.


## 05 | 결과물 
[(프로젝트 리뷰는 여기)](https://github.com/2zm00/Fiton_Project_zmo)에서 확인하실 수 있습니다.
- 문서화 작업물 : WBS, ERD


## 06 | 성장 한 점 
- 일관된 디자인 인터페이스를 통해 사용자 경험에 대해 이해하였습니다.
- TossPayments 결제 모듈을 도입하여 PG 결제 프로세스를 파악하였습니다.
- 디바운싱 기법을 적용하여 검색 호출 최적화에 대해 이해하였습니다.



## 07 | 역량 
- 호출 최적화 : 디바운싱 기법을 적용한 검색 기능을 개발하였습니다.
- 결제 모듈 도입 : PG사 결제 시스템 도입하고 이해하였습니다.
- 커뮤니케이션 및 협업 : Github, Notion 등을 통해 팀원들과의 원활한 커뮤니케이션 향상에 기여하였습니다.

`
	},
// 	{
// 		id: 3,
// 		title: "Jeongmo.dev",
// 		date: "2024.12.05 ~ 2024.12.12 (약 7일)",
// 		image: "images/jeongmodev.webp",
// 		description: `
// ## 01 | 프로젝트 소개 


// [깃허브 레포지토리](https://github.com/2zm00/Jeongmo.dev) / 
// [홈페이지 링크](https://jeongmodev.vercel.app/) 



// <div align="center">

//  #Next.js #React #TailwindCSS #Typescript #Wavesurfer.js #MusicFX
// #Three.js #framer-motion #ImageFX #Vercel #Docker

// </div>

// ### 기술 스택 

// <div align="center">

// | 영역         | 기술 스택                                                                 |
// |--------------|--------------------------------------------------------------------------|
// | **프론트엔드** | Next.js, React, TailwindCSS, Typescript  |
// | **배포** |       Vercel, Docker      |
// | **인프라**       |  Git                                    |
// | **기타**        | Three.js, Wavesurfer.js, framer-motion, MusicFX, ImageFX   |


// </div>


// ## 02 | 프로젝트 개요 
//  기존의 정적 프로필 페이지를 넘어 놀거리가 있는 공간을 만들고자 기획했습니다. 음악, 3D 그래픽, 실시간 상호작용을 결합해 방문자가 머물며 즐길 수 있는 경험을 제공하는 것이 목표였습니다.
 
// ## 03 | 진행한 일 
// - 'musicFX'를 활용한 AI 음악 생성 및 플레이리스트를 관리하였습니다.
// - 'Wavesurfer.js'로 음악 재생 및 시각화 기능을 구현하였습니다.
// - 사용자 인터렉션을 위해 Three.js를 활용한 3D 모델링과 마우스 반응형 애니메이션을 적용하였습니다.
// - Framer-motion을 통해  UI 요소에 동적 효과를 추가하였습니다.
// - 저를 소개하는 간단한 프로필과 프로젝트 페이지를 구현하였습니다.
    

// ## 04 | 과정 
// ### 프론트엔드
// - React 컴포넌트 화를 통해 재사용 가능한 컴포넌트를 사용하였습니다.
// - React Hook을 사용하여 상태를 효율적으로 관리하였습니다.

// ### 뮤직플레이어
// - musicFX를 활용하여 '808 base', 'trap beat' 등의 프롬프트를 활용하여 뮤직을 생성하였습니다.
// - Wavesurfer.js를 활용하여 음악 재생 및 시각화 기능을 구현하였습니다.
// - 사용자 브라우저 환경에 따라 배경음악 재생 기능을 추가하였습니다.

// ### 사용자 인터렉션
// - 기존 Babylon.js에서 Three.js를 사용함으로써 3D Mesh 모델링을 사용하는 컴포넌트를 구현하였습니다.
// - Framer-motion을 통해 UI 요소에 FadeIn 동적 효과를 구현하였습니다.
// - 사용자와의 커뮤니케이션을 위해 간단한 이메일 전송 시스템을 구현하였습니다.


// ## 05 | 결과물 
// 홈페이지 : 이미지

 
// ## 06 | 성장 한 점 
// - React 컴포넌트, React Hook의 중요성을 깨달았습니다.
// - Three.js, Babylon.js 등의 3D 모델링 라이브러리에 대한 경험을 하였습니다.
// - 생성형 AI 모델을 사용하여 프롬프트를 구성하고 그에 따른 결과물을 활용하였습니다.
// - Wavesurfer.js를 활용하여 시각-청각 통합의 사용자 경험을 구현했습니다.


// ## 07 | 역량
// - React 심화 이해 : 커스텀 훅 제작과 상태 관리 효율화 
// - 기술 통합 : Three.js, Wavesurfer.js 등 다양한 라이브러리 적용
// - 라이브러리 활용: 6개 이상의 라이브러리 통합 과정에서 의존성 관리 중요성 체득
// - 사용자 경험 : 사용자 경험을 생각하여 인터랙티브 요소 도입

// 		`
// 	},	
	{
		id: 4,
		title: "Give a Lotto", 
		date: "2024.11.05 ~ 2024.11.07 (약 3일) 3인 기여",
		image: "images/lotto.webp",
		description: 
		`
## 01 | 프로젝트 소개 - AI 로또 추천 프로젝트


[깃허브 레포지토리](https://github.com/2zm00/Lotto) / 
[기획안](https://www.notion.so/likelion/3-0bfda114955d495398e86bb2b97761c7?pvs=4)



<div align="center">

 #Streamlit #Python #Pandas #Numpy #MatPlotlib #TensorFlow #Pytorch #Folium

</div>

### 기술 스택 

<div align="center">

| 영역         | 기술 스택                                                                 |
|--------------|--------------------------------------------------------------------------|
| **프론트엔드** | Streamlit  |
| **백엔드** | Python |
| **데이터 시각화** |  Pandas, NumPy|
| **AI/ML**       |  TensorFlow, PyTorch|
| **기타**        | Folium  |


</div>


## 02 | 프로젝트 개요 
 기존 로또 서비스의 단순 무작위 추첨 방식을 개선하고자 기획되었습니다. 1,107회차 이상의 과거 당첨 데이터를 기반으로 **통계 분석 → AI 예측 → 시각화** 파이프라인을 구축해 머신러닝과 실시간 데이터를 활용한 로또 분석 번호를 제공하는 것이 핵심 목표였습니다.
 
## 03 | 진행한 일 
- 데이터 파이프라인을 구축하여 Matplotlib, Ploty를 활용한 데이터 대시보드를 구축
- 한국로또공사 API에서 과거 당첨 번호 1,107회차 데이터 수집 → Pandas로 정제
- TensorFlow 기반 ANN 모델 설계에 기여 (은닉층 3개, ReLU 활성화 함수 사용)
- 80% 학습 데이터 / 20% 검증 데이터 분할 후 학습 기여
- 데이터 수집 → 모델 학습 → 서빙 파이프라인을 구현하여 MLOps 초기 경험
- 모델 예측 결과에 대한 통계적 해석 능력 습득
    

## 04 | 과정 
### 사용자 데이터 대시보드
- 한국로또공사 API에서 과거 당첨 번호 1,107회차 데이터 수집 → Pandas로 정제하였습니다.
- 사용자 연령대/성별/지역별 분석을 진행하였습니다.


	(Matplotlib 막대 그래프, Plotly 차트 구현)

### 지도 대시보드
- Folium으로 전국 당첨 판매점 지도 시각화 (카카오맵 API → 오픈소스 전환)

### AI 추첨 시스템
- TensorFlow 기반 ANN 모델 설계 (은닉층 3개, ReLU 활성화 함수 사용).
- 80% 학습 데이터 / 20% 검증 데이터 분할 후 500 epoch 학습 진행.


## 05 | 결과물 
홈페이지 : 이미지

 
## 06 | 성장 한 점 
- 데이터 수집 → 모델 학습 → 서빙 파이프라인을 구현하여 MLOps 초기 경험을 했습니다.
- MatPlotlib와 Plotly 조합으로 데이터 시각화 능력을 확보하였습니다.
- Git Flow를 활용하여 3인 팀 병렬 개발 효율성을 관리하였습니다.



## 07 | 역량
- 실시간 데이터 파이프라인 구축: API ↔ DB ↔ 시각화 E2E를 경험하였습니다.
- MachineLearning : 모델 예측 결과에 대한 통계적 해석 능력을 습득하였습니다.


		`
	},
	{
		id: 5,
		title: "나 와따", 
		date: "2024.09 ~",
		image: "images/nawatta.webp",
		description: `
## 01 | 프로젝트 소개 - 방명록 프로젝트


[깃허브 레포지토리](https://github.com/2zm00/nawatta) / 
[홈페이지 링크](https://nawatta.vercel.app/) 



<div align="center">

#React #Next.js #Typescript #TailwindCSS #MySQL #Postgres #MongoDB #Vercel

</div>

### 기술 스택 

<div align="center">

| 영역         | 기술 스택                                                                 |
|--------------|--------------------------------------------------------------------------|
| **프론트엔드** | Next.js, React, TailwindCSS, Typescript  |
| **데이터베이스** |      MySQL → Postgres → MongoDB     |
| **배포**       |  Vercel|



</div>


## 02 | 프로젝트 개요 
 **소셜 로그인 기반의  방명록 프로젝트**로, 2024년 9월부터 진행 중인 개인 프로젝트입니다. 첫 웹 서비스 개발 경험을 통해 기술 선택-구현-개선 사이클을 체득했습니다.
 
## 03 | 진행한 일 
- OAuth2.0 기반 다중 소셜 로그인 구현 (로그인 소요 시간 85% 단축)
- 방명록 CRUD 개발 
- 데이터베이스 비교하여 초기설정 시간 83% 단축, 쓰기 처리량 320% 향상
- 애니메이션, 테마 구현으로 40% 시각적 피로도 감소, 체류시간 40% 상승
- 자체 이미지 최적화 툴을 적용하여 30% 리소스 감소 (Lighthouse 50점에서 70점으로 상승)



    

## 04 | 과정 

- OAuth 2.0 프로토콜을 적용하여 Google, GitHub, Kakao, Naver 소셜로그인을 구현하여 사용자 동선을 85% 단축하였습니다.

	(OAuth 2.0 프로토콜 적용)

	(자체 회원가입 45 ~ 60초 소요, 소셜 로그인 3 ~ 5초 소요)

- MySQL에서 연결 편의성을 고려하여 Postgres를 사용하였습니다.


	(Next.js API Routes와 직접 연결을 통해 초기 설정 시간을 30분 → 5분 으로 단축)
-  이후 NoSQL인 MongoDB를 채택함으로써 배치 처리시간을 단축하였습니다.


	(MongoDB는 100MB 이상 문서 처리 시 MySQL 대비 쓰기 처리량 320% 향상)

	(100K rows 기준 배치처리시간 MongoDB<1초 MySQL 45~46초)

- 사용자 입력 메세지에 대해 사용자의 이름 및 작성 시간을 구성하는 방명록 기능을 구현하였습니다.

## 05 | 결과물 
- 이미지


 
## 06 | 성장 한 점 
- 서비스 전반에 기술 선택에 대한 고민을 경험하였습니다.
- 단순한 프론트엔드 구현을 넘어 지속적인 발전을 위해 백엔드 및 Devops 학습을 결심하였습니다.
- 로그인 프로세스와 OAuth 프로토콜에 대해 이해하였습니다.
- RDBMS와 NoSQL 등 데이터베이스에 대해 이해하였습니다. 


## 07 | 역량
- 로그인 기능 구현 : OAuth, 자체 로그인 구현 적용을 비교하였습니다.
- 데이터베이스 : MySQL, PostgrSQL, MongoDB 비교하여 데이터베이스를 선택하였습니다.
		`
	},
	{
		id: 6,
		title: "프로필 페이지", 
		date: "2024.10.12 ~",
		image: "images/jeongmoprofile.webp",
		description: `
## 01 | 프로젝트 소개 - 프로필 페이지


[깃허브 레포지토리](https://github.com/2zm00/portfolio) / 
[홈페이지 링크](https://jeongmoprofile.vercel.app/) 



<div align="center">

#React #Next.js #Typescript #TailwindCSS #Scrolly-telling #Framer-motion

</div>

### 기술 스택 

<div align="center">

| 영역         | 기술 스택                                                                 |
|--------------|--------------------------------------------------------------------------|
| **프론트엔드** | Next.js, React, TailwindCSS, Typescript  |
| **기타** |      Scrolly-telling → Framer-motion     |
| **배포**       |  Vercel|



</div>


## 02 | 프로젝트 개요 
개발자로서 개인 브랜딩의 중요성을 인지하고, 역량을 직관적으로 보여줄 수 있는 플랫폼을 구축하고자 시작했습니다. 모바일과 데스크톱 환경에서 모두 최적화된 접근성을 제공하며, 시각적 일관성을 유지하기 위해 반응형 디자인과 다크/라이트 모드를 도입했습니다.
 
## 03 | 진행한 일 
- 사용자의 접근성을 고려해 모바일 반응형 디자인을 구현하였습니다.

	(반응형 디자인을 통해 체류시간 35% 증가 - Google 연구)	
- 사용자 환경을 고려하여 다크/라이트 테마를 구현하였습니다.


	(우측 상단 다크모드 토글 버튼을 통해 구현)



	(다크모드 구현 시 약 40% 시각적 피로 감소, 라이트 모드 구현 시 낯 시간대 가독성 25% 향상)
- 자연스러운 효과를 제공하기 위하여 애니메이션 라이브러리를 사용하였습니다.


	(애니메이션 구현을 통해 체류시간 및 리텐션율 40% 상승)

    

## 04 | 과정 
### 애니메이션 
- 초기 Scrolly-telling 사용 → Framer Motion으로 변경해 복잡한 인터랙션을 간소화하였습니다.
- Fade-In, Hover, 스크롤 애니메이션 등의 효과를 이해하였습니다.

### 테마
- Next-themes을 통해 다크모드 구현 → 시스템 설정 연동 및 localStorage에 테마 상태를 저장하였습니다.




## 05 | 결과물 
- 이미지


 
## 06 | 성장 한 점 
- 사용자 경험에 대해 이해하였습니다.
- 이후 i18n을 통한 번역기능 도입을 결심하였습니다. (구현 예정)


## 07 | 역량
- 애니메이션 기반 UX 설계 : 사용자 참여도 향상을 위한 인터랙티브 요소 도입
- 접근성 개선 :포용적 디자인 구현
- "기술은 사용자를 위한 경험으로 완성된다"는 철학으로, 사용자 중심의 솔루션을 제안하겠습니다.
		`
	},


];