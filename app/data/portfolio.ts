

export const portfolio = {
	description: `
### Fiton v2 | 팀프로젝트 | 팀리드
[수강생, 강사, 운영자 모두를 위한 효율적인 헬스케어 수업 관리 웹 서비스(링크)](https://github.com/2zm00/Fiton_v2)

2025.01.17 ~ 2025.02.19

#### 헬스케어 수업 관리 서비스 개선
- Github Actions와 Docker를 활용한 배포 프로세스 구축하여 AWS 서버 배포 장애율 66% 감소 
- AWS S3 스토리지 비용문제 이슈를 MinIO를 도입하여 비용 절감 (월 23$ -> 0$로 절감)
- TDD 기반 모킹데이터를 통해 안정적인 아키텍처 구축
- RESTful API 설계 및 통신, 데이터 처리 로직 구현
- JWT 기반 인증으로 RBAC 구축
- 사용기술 : React, Next.js, Typescript, Django, FastAPI


#### MSA 아키텍처 마이그레이션을 위한 서비스 리뉴얼 [(링크)](https://github.com/2zm00/Fiton_v2_zmo)
- MVT 기반 웹 프로젝트에서 MSA 아키텍처로 전환 (MVT -> Next.js, React, Django, FastAPI)
- 서비스 고도화 기획 단계부터 참여, 프론트엔드 메인 설계 담당
- TypeScript 기반 코드 인터페이스 정의 및 재사용 가능한 컴포넌트 개발
- SSR/CSR 렌더링 적용 및 모바일 반응형 UI/UX 컴포넌트 설계
- 애니메이션 라이브러리 활용 도입으로 사용자 경험 개선
- React Hook을 이용한 상태관리 구현
- LLM 기반 자동화 코드 리뷰 도입

### Fiton v1 | 팀프로젝트 | 팀리드
[수강생, 강사, 운영자 모두를 위한 효율적인 헬스케어 수업 관리 웹 서비스(링크)](https://github.com/2zm00/Fiton_Project)

2024.12.11 ~ 2024.12.30


#### 헬스케어 관리 서비스 신규 개발 [(링크)](https://github.com/2zm00/Fiton_Project_zmo)
- 디바운싱 기법을 활용한 검색 기능 (API 호출 횟수 70% 감소, 세션 당 28회-> 8회)
- 역할 별 대시보드 구현 (수강생, 강사, 센터장)
- 역할 기반 접근 제어 (RBAC) 설계 및 구현
- RBAC 별 양방향 인증 워크플로우 개발
- PG사 결제 게이트웨이 연동
- 인트로 애니메이션 및 UI 구현
- 사용기술 : React, Django, TossPayments



### Nawatta
[방문자들의 기록을 남길 수 있는 방명록 서비스](https://github.com/2zm00/nawatta)

2024.09 ~ 2024.12

#### 방문자 기록 서비스 개발
- 방명록 CRUD 개발 
- OAuth2.0 기반 다중 소셜 로그인 구현 (로그인 소요 시간 85% 단축)
- 데이터베이스 비교하여 초기설정 시간 83% 단축, 쓰기 처리량 320% 향상

#### 사용자 경험 개선
- 애니메이션, 테마 구현으로 40% 시각적 피로도 감소, 체류시간 40% 상승
- 자체 이미지 최적화 툴을 적용하여 30% 리소스 감소 (Lighthouse 50점에서 70점으로 상승)`



};

export default portfolio;