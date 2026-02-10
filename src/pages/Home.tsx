import React from 'react'
import { FaUtensils, FaClock, FaFire, FaStar, FaShoppingCart } from 'react-icons/fa'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'

export const Home: React.FC = () => {
  const featuredMeals = [
    { id: 1, name: '招牌牛肉漢堡', price: 120, category: '漢堡', image: '🍔' },
    { id: 2, name: '瑪格麗特披薩', price: 180, category: '披薩', image: '🍕' },
    { id: 3, name: '凱薩沙拉', price: 80, category: '沙拉', image: '🥗' },
    { id: 4, name: '泰式綠咖哩', price: 150, category: '亞洲料理', image: '🍛' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-foodpanda-primary to-foodpanda-accent text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              為您的家庭準備美味餐點
            </h1>
            <p className="text-xl mb-8 opacity-90">
              簡單點餐，即時同步，讓全家人都能參與選擇
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="secondary"
                size="lg"
                as={Link}
                to="/menu"
              >
                <FaUtensils className="mr-2" />
                開始點餐
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Message */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                歡迎使用 FamilyFood！
              </h2>
              <p className="text-gray-600">
                家庭專屬的點餐平台
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock className="text-foodpanda-primary" />
              <span className="font-medium">即時同步</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">餐點分類</h3>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {['全部', '漢堡', '披薩', '沙拉', '亞洲料理', '甜點', '飲料'].map((category) => (
              <button
                key={category}
                className="flex-shrink-0 flex flex-col items-center p-4 rounded-2xl min-w-[120px] bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              >
                <div className="text-2xl mb-2">{category === '漢堡' ? '🍔' : category === '披薩' ? '🍕' : '🥗'}</div>
                <span className="font-medium">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Meals */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">精選餐點</h3>
            <Link to="/menu" className="text-foodpanda-primary font-medium">
              查看全部
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMeals.map((meal) => (
              <div key={meal.id} className="card">
                <div className="p-4">
                  <div className="text-4xl text-center mb-4">{meal.image}</div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">{meal.name}</h4>
                    <span className="text-foodpanda-primary font-bold">
                      ${meal.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {meal.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">4.8</span>
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      as={Link}
                      to="/menu"
                    >
                      加入點餐
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <div className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <FaUtensils className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">今日已點餐</p>
                  <p className="text-2xl font-bold">0 份</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <FaClock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">即時訂單</p>
                  <p className="text-2xl font-bold">0 筆</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <FaFire className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">熱門餐點</p>
                  <p className="text-2xl font-bold">牛肉漢堡</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
