import React, { useState } from 'react'

export default function Dashboard() {
    const [tableData, setTableData] = useState([])
    return (
        <div>
            <div>
                <h1 className="text-sm font-medium mb-12">홈</h1>
            </div>
            <div className="mb-13 flex gap-4">
                <div className="sm:size-20 size-15 rounded-full text-[#B6C2D9] bg-gray-200 justify-center items-center flex overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-full mt-5">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="flex flex-col justify-between items-start">
                    <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">박의사님, 안녕하세요</h1>
                    <p className="xl:text-lg md:text-base text-sm text-[#66798D]">의사 코드 - UH2406001</p>
                </div>
            </div>

            <div className="w-full border border-[#DADFE9] mb-9"></div>

            <div className='mb-1'>
                <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-base font-bold mb-6">Quick Menu</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white md:p-6 sm:p-4 p-3 rounded-lg flex justify-between items-center shadow-2xl shadow-stone-200">
                        <div>
                            <h2 className="sm:mb-4 mb-1 text-[#8395AC] font-semibold xl:text-base sm:text-sm text-xs">빠르고 간편하게</h2>
                            <h3 className="text-[#343F4E] font-bold xl:text-2xl md:text-xl sm:text-base text-sm">
                                처방하기
                            </h3>
                        </div>
                        <span className="text-[#8280FF] text-6xl bg-[#8280FF50] inline-block lg:p-5 sm:4 p-3 rounded-[30%]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="lg:size-6 md:size-5 size-4">
                                <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clipRule="evenodd" />
                                <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                            </svg>
                        </span>
                    </div>
                    <div className="bg-white md:p-6 sm:p-4 p-3 rounded-lg flex justify-between items-center shadow-2xl shadow-stone-200">
                        <div>
                            <h2 className="sm:mb-4 mb-1 text-[#8395AC] font-semibold xl:text-base sm:text-sm text-xs">처음 진료 받는</h2>
                            <h3 className="text-[#343F4E] font-bold xl:text-2xl md:text-xl sm:text-base text-sm">
                                환자 등록하기
                            </h3>
                        </div>
                        <span className="text-[#FEC53D] md:text-6xl text-4xl bg-[#FEC53D50] inline-block lg:p-5 sm:p-4 p-3 rounded-[30%]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="lg:size-6 md:size-5 size-4">
                                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-base font-bold">처방 대기 <span className="text-gray-400 xl:text-[22px] font-medium sm:text-base text-sm">(최근 30일 기준)</span></h2>
                    <button className="bg-[#0052CC] text-white lg:px-5 sm:px-4 px-3 lg:py-3 py-2  rounded-lg md:text-base sm:text-sm text-xs">
                        환자 등록하기
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-stone-200 shadow-2xl">
                    <div className="xl:p-4 p-3">
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium xl:text-2xl md:text-lg sm:text-base text-sm">검색 결과 <span className="text-[#0052CC]">0</span>건</h3>
                            <div className="relative w-1/2">
                                <input
                                    type="search"
                                    placeholder="검색"
                                    className="pl-8 pr-4 py-2 bg-[#F0F3FA] rounded-3xl sm:w-64 w-full xl:text-base text-sm"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="xl:size-6 sm:size-5 size-4 absolute left-2 top-2.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto w-full">
                        <table className="w-full min-h-[712px] table-auto min-w-[800px]">
                            <thead className="bg-[#F1F4F980]">
                                <tr>
                                    <th className="first:xl:px-6 sm:px-2 px-1 first:pl-3 lg:py-3 sm:py-2 py-1 text-left sm:text-sm text-xs font-medium text-gray-500">등록번호</th>
                                    <th className="xl:px-6 sm:px-2 px-1 lg:py-3 sm:py-2 py-1 text-left sm:text-sm text-xs font-medium text-gray-500">환자명</th>
                                    <th className="xl:px-6 sm:px-2 px-1 lg:py-3 sm:py-2 py-1 text-left sm:text-sm text-xs font-medium text-gray-500">성별</th>
                                    <th className="xl:px-6 sm:px-2 px-1 lg:py-3 sm:py-2 py-1 text-left sm:text-sm text-xs font-medium text-gray-500">생년월일</th>
                                    <th className="xl:px-6 sm:px-2 px-1 lg:py-3 sm:py-2 py-1 text-left sm:text-sm text-xs font-medium text-gray-500">S/A</th>
                                    <th className="xl:px-6 sm:px-2 px-1 lg:py-3 sm:py-2 py-1 text-left sm:text-sm text-xs font-medium text-gray-500">근육 반명</th>
                                    <th className="xl:px-6 sm:px-2 px-1 lg:py-3 sm:py-2 py-1 text-left sm:text-sm text-xs font-medium text-gray-500">치료 처방 기간</th>
                                    <th className="xl:px-6 sm:px-2 px-1 lg:py-3 sm:py-2 py-1 text-left sm:text-sm text-xs font-medium text-gray-500">환자 동록일 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-1 inline">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg></th>
                                    <th className="xl:px-6 sm:px-2 px-1 lg:py-3 sm:py-2 py-1 text-left sm:text-sm text-xs font-medium text-gray-500">치료 처방일 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-1 inline">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg></th>
                                    <th className="xl:px-6 sm:px-2 px-1 lg:py-3 sm:py-2 py-1 text-left sm:text-sm text-xs font-medium text-gray-500">처방 상태 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-1 inline">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {tableData.length > 0 ? (
                                    tableData.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="first:xl:px-6 sm:px-2 px-1 first:pl-3 text-sm font-medium text-gray-900">{item.registrationNumber}</td>
                                            <td className="xl:px-6 sm:px-2 px-1 lg:py-3 sm:py-2 py-1 text-sm text-gray-700">{item.patientName}</td>
                                            <td className="xl:px-6 sm:px-2 px-1 lg:py-3 sm:py-2 py-1 text-sm text-gray-700">{item.gender}</td>
                                        </tr>
                                    ))) : (
                                    <tr>
                                        <td colSpan="10" className="px-6 text-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <span className="text-gray-500 mb-4 md:text-base sm:text-sm text-xs">
                                                    '환자 등록' 후 처방이 가능합니다.
                                                </span>
                                                <button className="bg-[#0052CC] text-white lg:px-5 sm:px-4 px-3 lg:py-3 py-2  rounded-lg md:text-base sm:text-sm text-xs">
                                                    환자 등록하기
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="flex items-center justify-start gap-2 mt-4">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>

                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DADFE9]">
                        <span className="text-sm font-bold text-gray-600">1</span>
                    </div>

                    <button className="p-2 text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}