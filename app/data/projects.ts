import { Project } from "../types/Project";

export const projects: Project[] = [
	{
		id: 1,
		title: "Fiton v2 - 팀 프로젝트",
		date: "2025.01.17 ~ 2025.02.19 (약 31일) 3인 기여",
		image: "images/fitonv2.webp",
		description: `
## 01 | 프로젝트 소개 - v1을 발전시킨 헬스케어 프로젝트
2025.01.17 ~ 2025 02.19 (약 31일간)
3명이 참여했습니다.

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
- 이전 헬스케어 수업관리 프로젝트에서 발전시킨 프로젝트입니다.

	(Django 만 사용하는 기존 프로젝트 -> Next.js/Django/FastAPI를 사용하는 MSA 아키텍처 구조를 통해 애자일하게 관리합니다.)
 - AWS S3 스토리지 비용문제 이슈를 MinIO를 도입하여 월 23$의 비용을 0$으로 절감했습니다. 

 	(매 월 1TB 스토리지 100만 GET 요청 EC2 프리티어 인스턴스 기준)
- AI 챗봇 구현 과정에서 비동기 요청 흐름과 UI 상태 동기화 이슈를 Hook과 함수형 업데이트 패턴을 활용한 비동기 컨텍스트 분리패턴으로 FastAPI 요청 상태와 UI 렌더링을 동기화하여 해결했습니다.
- GitHub Pull Request 기반 코드 리뷰 과정에서 ChatGPT 자동화 코드 리뷰 기능을 도입하여 PR당 평균 리뷰 시간을 180분에서 30분으로 단축시켰습니다(70% 감소).
- TDD 기반 모킹 데이터를 통해 안정적인 아키텍처를 구축했습니다.

## 04 | 과정 
### 팀 리드
- WBS, Flowchart, ERD 설계, 커밋 컨벤션 문서화, API 연동 정의서, 기능 명세서, GithubProject Milestone을 통해 팀원들과의 협업 커뮤니케이션을 이끌었습니다.
### 프론트엔드
- Next.js 기반 환경 구축 및 반응형 UI/UX를 설계하였습니다. RestAPI 연동과 훅을 이용한 상태관리를 구현하였습니다.
### 백엔드
- FastAPI 기반  AI 모델 API와 운동자세 분석 기능을 구현하여 성능 최적화와 데이터 처리속도 개선했습니다. 

	(비동기 처리 지원으로 기존 Django 사용 대비 응답시간 40% 단축, 초당 처리량 300% 향상,  20% 메모리 사용량 절감 )
 ### 인프라
- 프론트엔드/스토리지 서버를 AWS EC2로 운영하였습니다. AWS S3 스토리지 비용문제 이슈를 MinIO를 도입하여 비용을 절감했습니다.
### CI/CD
- Github Actions와 Docker를 활용한 일관된 배포 프로세스를 구축하여 배포 장애율이 66% 감소하였습니다. 

	(배포시간 평균 1800s 에서 600s으로 단축)
 
## 05 | 결과물 
프로젝트 결과물은 [(여기)](https://github.com/2zm00/fiton_v2_zmo)에서 확인하실 수 있습니다.
- 문서화 작업물 : WBS, FlowChart, ERD, API 연동정의서, Milestone 아키텍처
- 프론트엔드 : 반응형 디자인
- 백엔드 : 운동자세분석, 챗봇 사진
 
## 06 | 성장 한 점 
- MSA 아키텍처 구조에 대한 전체적인 구조를 구현하여 흐름을 파악하였습니다.
- 기존 프로젝트에서 시스템 확장을 통해 실제 서비스 수준으로 발전시킨 프로젝트이기 때문에 팀 리드로서 프로젝트 전반을 관리하며 팀원들과의 협업능력과 문제해결 역량을 키울 수 있었습니다. 
- 개발 직군에서 요구되는 시스템 설계 능력, 효율적인 협업스킬을 이해하고 적용했습니다.
- 팀원이 이탈하려는 이슈가 있었지만, 코드 리뷰 자동화와 1:1 피드백 세션을 진행하고 데일리 미팅 확대로 실시간 이슈를 해결하고 팀원이 프로젝트에 끝까지 참여하여 목표를 성공적으로 달성했던 경험이 있습니다.

## 07 | 나의 역량 
- 비용 최적화 : MinIO + S3 호환 아키텍처 설계 능력
- AI 처리 : MediaPipe + FastAPI 조합의 시스템 구축
- 팀 협업 : Git Flow + 자동화 리뷰 시스템을 통한 코드 품질 관리
- 해당 프로젝트를 통해 클라우드 네이티브 아키텍처 설계 역량과 실제 서비스 운영 노하우를 체득했으며, 헬스케어 분야의 기술적 도전과제 해결에 대한 자신감을 얻었습니다.
`
	},

	{
		id: 2,
		title: "Fiton v1 - 팀 프로젝트",
		date: "2024.12.11 ~ 2024.12.30 (약 19일)",
		image: "images/fitonv1.webp",
		description: `Fiton v1 | 헬스케어 수업 관리 플랫폼 <br/>
`
	},
	{
		id: 3,
		title: "Jeongmo.dev",
		date: "2024.12.05 ~ 진행 중",
		image: "images/jeongmodev.webp",
		description:" Jeongmo.dev | 저를 소개하는 홈페이지입니다."
	},	
	{
		id: 4,
		title: "AI 로또 추천 프로젝트", 
		date: "2024.11.05 ~ 2024.11.07 (약 3일)",
		image: "images/lotto.webp",
		description: "Give a Lotto | AI 로또 추천 서비스"
	},
	{
		id: 5,
		title: "나 와따", 
		date: "2024.09 ~",
		image: "images/nawatta.webp",
		description: "나 와따 | 방명록 프로젝트"
	},
	{
		id: 6,
		title: "프로필 페이지", 
		date: "2024.10.12 ~",
		image: "images/jeongmoprofile.webp",
		description: "저를 소개하는 간단한 프로필 페이지입니다."
	},


];