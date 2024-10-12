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
                <h1 className="font-semibold text-3xl">Jeongmo Lee</h1>
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
                  title="반갑습니다."
                  subtitle="저는 이정모라고합니다."
                  delay={100}
                >
                  <div>
                  현재 아주 열심히 노력중입니다.
                  
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
                    title="Certifications"
                    className="mt-2 !bg-black !bg-opacity-80 text-white text-opacity-90">
                      - Licensed Occupational Therapist, Registered.<br/>
                      - SQLDeveloper (Database)<br/>
                      - Certified Specialist in Integrated Functional Movement<br/>
                      - Certified Psychological Counselor <br/>
                    </Card>

                      <Card
                      title="Qualifications"
                      className="mt-2 !bg-black !bg-opacity-80 text-white text-opacity-90">
                      - Bachelor of Science in Occupational Therapy<br/>
                      - Kangwon National University, Korea<br/>
                      - GPA : 4+/4.5<br/>
                      - TOEIC : 880+ (2022) <br/>
                      </Card>
                  </div>
                  </Card>
                  <div className = "mt-2 grid grid-cols-2 gap-6">
                  <Card 
                  title="연락처" 
                  delay={300} 
                  >
                    <div className="">
                      비밀입니다.
                    </div>
                  </Card>

                  <Card 
                  title="Language" 

                  delay={400} 
                  >
                    <div>
                      아직 말도 할 줄 모릅니다.

                    </div>
                  </Card>
                  <Card 
                  title="경력" 
                  delay={500} 
                  ><div>
                    신입 개발자. 하지만 이전 경력은 화려하다 볼 수 있습니다.
                    </div>
                    </Card>

                  <Card 
                  title="기술 스택" 
                  delay={600} 
                  ><div>
                    HTML, CSS JavaScript, React, Next.js, Python, 등 등 
                    </div>
                    
                    </Card>
                    <div className="md:grid-cols-2 grid gap-6">
                    <Card title="작은거" delay={700}>
                      <div>
                        작은거 함 보여드립니다.
                      </div>
                    </Card>
                    <Card title="작은거2" delay={700}>
                      <div>
                        작은거2 함 보여드립니다.
                      </div>
                    </Card>
                    </div>
                </div>
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