import React from 'react'
import { BellIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md px-6 py-4">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">
                    AIOrtho
                </div>
                <div className="flex items-center gap-4">
                    <BellIcon className="h-6 w-6 text-gray-500" />
                    <div className="h-8 w-8 rounded-full text-[#B6C2D9] bg-gray-200 justify-center items-center flex overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 mt-3">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    )
}