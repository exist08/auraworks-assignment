import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(credentials)
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center">로그인</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="이메일"
            className="w-full px-4 py-2 border rounded-lg"
            onChange={e => setCredentials({...credentials, email: e.target.value})}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full px-4 py-2 border rounded-lg"
            onChange={e => setCredentials({...credentials, password: e.target.value})}
          />
          <button 
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  )
}