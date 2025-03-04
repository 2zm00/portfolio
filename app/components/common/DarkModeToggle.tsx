'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// 클라이언트 렌더링 체크
	useEffect(() => setMounted(true), []);

	return (
		<div className="flex items-center justify-center">
			<button
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				className={`relative w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full focus:outline-none transition-colors ${
				!mounted && 'opacity-50'
				}`}
			>
			
			<span
			className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
				theme === 'dark' ? 'translate-x-6' : ''
			}`}
			></span>
		</button>
		</div>
	);
}
