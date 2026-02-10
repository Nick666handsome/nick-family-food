import React, { useState } from 'react'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'
import { Button } from '../components/ui/Button'

export const Profile: React.FC = () => {
  const [formData, setFormData] = useState({
    username: 'nick20130104',
    email: 'admin@familyfood.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('個人資料已更新！')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">個人資料</h1>
        <p className="text-gray-600 mb-8">管理您的帳號設定</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="card">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-6">基本資料</h2>
                
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
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="input-field pl-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      電子郵件
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <FaEnvelope className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field pl-12"
                      />
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <h3 className="text-lg font-bold mb-4">變更密碼</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          目前密碼
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <FaLock className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            type="password"
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleChange}
                            className="input-field pl-12"
                            placeholder="輸入目前密碼"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          新密碼
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <FaLock className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className="input-field pl-12"
                            placeholder="輸入新密碼"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          確認新密碼
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <FaLock className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="input-field pl-12"
                            placeholder="再次輸入新密碼"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" variant="primary">
                    更新資料
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div>
            <div className="card p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">帳號資訊</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">使用者 ID</span>
                  <span className="font-medium">admin-001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">角色</span>
                  <span className="px-2 py-1 bg-foodpanda-primary text-white text-xs rounded-full">
                    管理員
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">加入日期</span>
                  <span className="font-medium">2024-01-01</span>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-lg mb-4">重要提醒</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 所有使用者都可以修改自己的帳號密碼</li>
                <li>• 管理員帳號：nick20130104</li>
                <li>• 訂單接收帳號：123456</li>
                <li>• 資料即時同步所有裝置</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
