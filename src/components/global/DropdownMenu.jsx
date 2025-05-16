import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const DropdownMenu = ({ label, icon: Icon, children, isActive }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative px-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center w-full px-4 py-3 hover:bg-gray-100 rounded-[10px] ${isActive ? 'bg-[#EEF4FF]' : ''}`}
            >
                {Icon && <Icon className="w-5 h-5 mr-2" />}
                <span>{label}</span>
                {children && (
                    <ChevronDownIcon
                        className={`w-4 h-4 ml-auto ${isOpen ? 'rotate-180' : ''}`}
                    />
                )}
                {
                    isActive && (
                        <span className="absolute w-1.5 h-full bg-[#EEF4FF] rounded-tr-2xl rounded-br-2xl top-0 left-0" />
                    )
                }
            </button>

            {isOpen && children && (
                <div className="ml-4 mt-1">
                    {children}
                </div>
            )}
        </div>
    )
}

export default DropdownMenu