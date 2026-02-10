import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'
import { Button } from '../components/ui/Button'

export const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // 模擬登入
    setTimeout(() => {
      setIsLoading(false)
      alert('登入成功！使用者：' + username)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-foodpanda-secondary to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-foodpanda-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-3xl">FF</span>
          </div>
          <h1 className="text-4xl font-bold text-foodpanda-primary mb-2">
            Family<span className="text-foodpanda-accent">Food</span>
          </h1>
          <p className="text-gray-600">家庭點餐系統</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">歡迎回來</h2>
          <p className="text-gray-600 mb-6">請登入您的帳號</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                使用者名稱
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FaUser className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="輸入使用者名稱"
                  className="input-field pl-12"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                密碼
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FaLock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="輸入密碼"
                  className="input-field pl-12 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-5 h-5 text-gray-400" />
                  ) : (
                    <FaEye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <h4 className="font-medium text-blue-800 mb-2">測試帳號：</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 管理員：nick20130104 / nick20130104</li>
                <li>• 訂單接收者：123456 / 123456</li>
                <li>• 一般使用者：任意帳號密碼</li>
              </ul>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              isLoading={isLoading}
            >
              登入
            </Button>

            <div className="text-center">
              <Link
                to="/register"
                className="text-foodpanda-primary hover:text-pink-600 font-medium"
              >
                註冊新帳號
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
