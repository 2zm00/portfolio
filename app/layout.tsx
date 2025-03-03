import '@/app/ui/global.css';
import { Metadata } from 'next';
import "../app/favicon.ico"
import { Noto_Sans_KR } from "next/font/google"
// import { #localfontname } from "next/font/local" 
// 로컬폰트 임포트

const Noto = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin']
})

// 로컬폰트 적용
// const LocalFont = localfontname({
//   src: [{
//     path:
//     weight:
//     style:
//   }]
// })

//메타데이터 설정 
export const metadata: Metadata = {
  title: {
    template: '%s | leezmo.dev',
    default: 'Jeong Mo Lee (zmo)',
  },
  description: '이정모의 개인 포트폴리오 웹사이트 입니다. ',
  keywords: ' portfolio, web developer, zmo, 2zm00, next.js, react, typescript, tailwindcss, python, django, docker, kubernetes, aws, ci/cd, devops, branding, backend, frontend, fullstack, ',
  icons : {
    icon : '../app/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Noto.className}>
        {children}
      </body>
    </html>
  );
}