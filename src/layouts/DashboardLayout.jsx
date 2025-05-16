import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'
import Treatment from '../pages/Treatment'

export default function DashboardLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/treatment" element={<Treatment />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}