import Image from "next/image";
import Card from "./ui/cards";
import './globals.css'

export default function Home() {
  return (
    <div className="bg-darkgray text-white text-opacity-90 min-h-screen flex flex-col">
      <div className="flex-grow flex px-4 py-2 justify-center">
        <div className="flex flex-col lg:flex-row max-w-[1300px] w-full mx-auto sm:px-6 lg:px-8 pt-8 pb-16">
          
          {/* 프로필 */}
          <div className="lg:w-[360px] flex justify-center mb-8 lg:mb-0">
            <div className="lg:fixed lg:h-screen pt-8 max-lg:px-4 animate-fadeUp">
              <div className="flex flex-col max-lg:items-center mb-4">
                <Image 
                  src="/images/profile.jpg" 
                  alt="zmo"
                  className="mb-4 size-24 rounded-lg "
                  width={200} 
                  height={200}
                />
              </div>
              <div>
                <h1 className="font-semibold text-3xl">Jeong Mo Lee</h1>
                <p className="text-neutral-500">zmo</p>
              </div>
            </div>
          </div>

          {/* 메인 컨텐츠 */}
          <div className="flex-1 text-darkgray text-opacity-90">
            <main className="w-full">
              <div className="flex flex-col gap-4 mx-auto max-w-[810px] pt-12">
                {/* 소갯말 */}
                <Card 
                  title="안녕하세요 이정모입니다."
                  subtitle="몰입을 좋아하는 개발자입니다."
                  delay={100}
                >
                  <div>
                  끊임없이 새로운 아이디어를 도입하고 발전시키며, 개발에 대해 접근합니다. <br />
                  혼자 빠르게 가는 것 보다, 함께 멀리 나아가는 팀의 가치를 믿습니다. <br />
                  직접 경험하고 만들어보는 과정을 통해 문제를 해결하며, <br/>
                  실행 속에서 배우는 성장을 추구합니다. <br />
                  과정에서 쌓이는 열정과 노력을 자양분 삼아 성장하겠습니다. <br />
                  저는 오늘보다 더 나은 내일을 만드는 개발자가 되겠습니다.
                  
                  </div>
                </Card>

                {/* 본문 */}
                {/* 2열 태그: grid grid-cols-2 */}
                <div className="mt-2 flex flex-col gap-6">
                  <Card 
                  title="" 
                  delay={200} 
                  >
                  <div >
                    <Card
                    title="자격증"
                    className="mt-2 !bg-black !bg-opacity-80 text-white text-opacity-90">
                      작업치료사 면허 (25400)<br/>
                      SQLDeveloper (자격 번호: SQLD-054000856)<br/>
                      통합기능운동 전문가 (2020-001872)<br/>
                      심리상담사 1급 (2023-25-A75-0487) <br/>
                    </Card>

                      <Card
                      title="학력"
                      className="mt-2 !bg-black !bg-opacity-80 text-white text-opacity-90">
                      작업치료학과 학사<br/>
                      강원대학교 졸업<br/>
                      학점 : 4+/4.5<br/>
                      TOEIC : 800+ (2022) <br/>
                      </Card>
                  </div>
                  </Card>
                  <Card 
                  title="기술 스택" 
                  delay={600} 
                  ><div>
                    React, Next.js, Python <br />
                    Django, FastAPI, Typescript, TailwindCSS, Javascript, Streamlit <br />
                    Docker, Kubernetes, AWS, Linux, Ubuntu, Nginx <br />
                    AWS S3, MinIO <br />
                    MySQL, PostgreSQL, MongoDB, Redis <br />

                    <br/>
                    <br/>
                    Pandas, Numpy <br/>
                    BeautifulSoup, Selenium, FinanceDataReader <br/>
                    TensorFlow, Pytorch, Scikit-learn <br/>
                    OpenCV, Pillow, MediaPipe <br/>
                    Matplotlib, Plotly <br/>

                    <br/>
                    <br/>
                    Github, Notion, Slack

                    </div>
                    
                    </Card>

                  <div className = "mt-2 grid grid-cols-2 gap-6">
                  <Card 
                  title="연락처" 
                  delay={300} 
                  >
                    <div className="">
                      dwa010301@gmail.com 이메일
                      <br/>
                      https://github.com/2zm00 깃허브
                      <br/>
                      https://discordapp.com/users/397246059228823572 디스코드

                    </div>
                  </Card>

                  <Card 
                  title="언어" 

                  delay={400} 
                  >
                    <div>
                      한국어, English

                    </div>
                  </Card>
                  <Card 
                  title="경력" 
                  delay={500} 
                  ><div>
                    회복기 재활병원 근무 (2023.05 ~ 2024.05) <br/>
                    대학병원 및 지역사회 실습 및 인턴 (2021.12 ~ 2022.07)
                    </div>
                    </Card>


                    
                    <Card title="교육" delay={700}>
                      <div>
                      멋쟁이 사자처럼 Banckend Python 12기. <br/>
                        - 파이썬을 활용한 고도화 아키텍처 설계 및 개발 <br/>
                        - 웹 개발 및 AI 기반 API 개발 <br/>
                        - 팀 프로젝트를 통한 실무 협업 경험
                      </div>
                    </Card>

                    
                </div>
                <Card title="프로젝트" delay={800}>
                      <div>
                        나 와따 - 방명록 프로젝트 (2024.09) <br/>
                        AI 로또 추천  팀 프로젝트 (2024.10) <br/>
                        개인 포트폴리오 프로필 페이지 (2024.12) <br/>
                        Fiton v1 - 피트니스 수업 관리 팀 프로젝트 (2024.12)<br/>
                        Jeongmo.dev - 개인 포트폴리오 홈페이지 (2024.12)<br/>
                        Fiton v2 - 피트니스 수업 관리 팀 프로젝트 (2025.01)<br/>






                      </div>
                    </Card>
              </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8">
        <p className="text-neutral-400 text-center">© 2024 zmo. All rights reserved.</p>
      </footer>
    </div>
  )
}