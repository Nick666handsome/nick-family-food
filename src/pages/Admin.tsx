import React from 'react'

export const Admin: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">管理面板</h1>
        <p className="text-gray-600 mb-8">管理員專用功能</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card p-6">
            <h3 className="font-bold text-lg mb-2">所有訂單</h3>
            <p className="text-gray-600 mb-4">查看和管理所有使用者的訂單</p>
            <button className="btn-primary w-full">管理訂單</button>
          </div>
          
          <div className="card p-6">
            <h3 className="font-bold text-lg mb-2">使用者管理</h3>
            <p className="text-gray-600 mb-4">管理使用者帳號和權限</p>
            <button className="btn-primary w-full">管理使用者</button>
          </div>
          
          <div className="card p-6">
            <h3 className="font-bold text-lg mb-2">餐點管理</h3>
            <p className="text-gray-600 mb-4">新增、編輯和刪除餐點</p>
            <button className="btn-primary w-full">管理餐點</button>
          </div>
        </div>
        
        <div className="card p-8">
          <h2 className="text-xl font-bold mb-4">管理員功能</h2>
          <ul className="space-y-2">
            <li>✅ 查看所有人的訂單</li>
            <li>✅ 取消任何訂單</li>
            <li>✅ 管理所有餐點</li>
            <li>✅ 打破所有規則（特殊權限）</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
