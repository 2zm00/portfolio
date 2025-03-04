'use client'

import React, { ReactNode } from 'react'
import Image from 'next/image'

interface CardProps {
    title?: string
    subtitle?: string
    imageUrl?: string
    delay?: number
    className?: string
    children: ReactNode
}




export default function Card({ title, subtitle, children, className, imageUrl, delay }: CardProps) {
return (
    <div className={`bg-white dark:bg-lightgray dark:bg-opacity-90 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out w-full h-full flex flex-col animate-fadeIn ${className} opacity-0`}
    style={{ animationDelay: `${delay}ms`,
                animationFillMode: 'forwards'}}>
    {imageUrl && (
        <div className="h-48 w-full overflow-hidden flex-shrink-0">
            {/* 이미지(선택) */}
            <Image 
            src={imageUrl} 
            alt={title || ''} 
            className="w-full h-full object-cover" />
        </div>
    )}
    <div className="p-6 flex-grow overflow-auto">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        {/* 부제목(선택) */}
        {subtitle && (
            <h3 className='text-xl text-gray-600 mb-2'>{subtitle}</h3>
        )}
        {children}
    </div>
    </div>
    )
}



