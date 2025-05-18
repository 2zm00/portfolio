import Image from "next/image";
// import profile from '@/public/images/profile.jpg'
import profile2 from '@/public/images/profile2.webp'



export default function ProfileSection() {
	return (
		<>
		{/* 프로필 */}
		<div className="lg:w-[360px] flex justify-center mb-8 lg:mb-0">
			<div className="lg:fixed lg:h-screen pt-8 max-lg:px-4 animate-fadeUp">
				<div className="flex flex-col max-lg:items-center mb-4">
					<Image 
					src={profile2} 
					alt="zmo"
					className="mb-4 size-24 rounded-lg "
					width={200} 
					height={200}
					priority
					/>
				</div>
				<div>
					<h1 className="font-semibold text-3xl text-darkgray dark:text-white text-opacity-90">Jeong Mo Lee</h1>
					<p className="text-neutral-500">zmo</p>
				</div>
			</div>
		</div>
		</>
	)
}