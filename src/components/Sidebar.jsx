import React, { useEffect, useState } from 'react'
import { HomeIcon, DocumentIcon, UserIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import DropdownMenu from './global/DropdownMenu'

export default function Sidebar() {
  const [isOpened, setIsOpened] = useState(true)
  useEffect(()=>{
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpened(true)
      } else {
        setIsOpened(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])
  return (
    <div className={`w-64 bg-gray-50 py-2 lg:static absolute z-10 lg:h-auto h-full shadow-lg lg:transform-none transform ${isOpened ? 'translate-x-0' : '-translate-x-full'} transition duration-700`}>
      <div className="flex flex-col gap-4">
        <DropdownMenu label="홈" icon={HomeIcon} isActive={true} />

        <DropdownMenu label="처방 관리" icon={DocumentIcon}>
          <DropdownMenu label="처방 내역" />
          <DropdownMenu label="표준 치료 프로그램" />
        </DropdownMenu>

        <DropdownMenu label="마이페이지" icon={UserIcon}>
          <DropdownMenu label="개인정보 수정" />
        </DropdownMenu>
      </div>
      <div
        onClick={() => setIsOpened(!isOpened)}
        className="lg:hidden w-fit rounded-full absolute right-0 transform translate-x-1/2 bg-gray-50"
      >
            <ArrowLeftCircleIcon className={`font-bold size-10 text-gray-400 ${isOpened ? 'rotate-0' : 'rotate-180 translate-x-2'} transition duration-700`} />
      </div>
      <div className="h-full">
        <div className="flex flex-col justify-center h-full gap-4 px-10">
          <span>사용설명서</span>
          <span>소프트웨어 명칭 및 버전</span>
          <span>의료기기 인증 정보</span>
        </div>
      </div>
    </div>
  )
}