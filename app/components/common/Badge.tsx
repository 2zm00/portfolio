import React from "react";

interface BadgeProps {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

export default function Badge({ children, className, onClick }: BadgeProps) {
    return (
		<div className={`align-center rounded-xl dark:bg-zinc-800 my-auto px-2 py-1 pr-2 transition-transform transform hover:scale-105 ${className || ""}`} onClick={onClick}>
		{children}
		</div>
	);
}

