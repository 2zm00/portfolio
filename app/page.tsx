import './globals.css'
import ProfileSection from "./profile/page";
import AboutSection from "./about/page";
import CertificationSection from "./certification/page";
import EducationSection from "./education/page";
import TechSection from "./tech/page";
import ContactSection from "./contact/page";
// import LanguageSection from "./language/page";
// import ExperienceSection from "./experience/page";
import TrainingSection from "./training/page";
import ProjectSection from "./project/page";
import DarkModeToggle from "./components/common/DarkModeToggle";

export default function Home() {
  return (
    <div className="text-darkgray dark:bg-dark dark:text-white text-opacity-90 min-h-screen flex flex-col">
      <div className="w-full flex px-6 py-4 justify-end">
        <DarkModeToggle />
      </div>
      <div className="flex-grow flex px-4 py-2 justify-center">
        <div className="flex flex-col lg:flex-row max-w-[1300px] w-full mx-auto sm:px-6 lg:px-8 pt-8 pb-16">
          <ProfileSection />

          <div className="flex-1 text-darkgray dark:text-white text-opacity-90">
            <main className="w-full">
              <div className="flex flex-col gap-4 mx-auto max-w-[810px] pt-12">
                <AboutSection />

                {/* 본문 */}
                {/* 2열 태그: grid grid-cols-2 */}
                <div className="mt-2 flex flex-col gap-6">
                  
                  <TechSection />
                  <ProjectSection />
                  

                    <div className = "mt-2 grid grid-cols-2 gap-6">
                    <ContactSection />
                    {/* <LanguageSection /> */}
                    {/* <ExperienceSection /> */}
                    <CertificationSection />
                    
                    </div>
                    <TrainingSection />
                    <EducationSection />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 flex justify-center items-center ">
        <p className="text-neutral-400 text-center">© 2025 2zm00. All rights reserved.</p>
      </footer>
    </div>
  )
}