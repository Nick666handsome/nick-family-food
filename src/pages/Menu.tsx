import React, { useState } from 'react'
import { FaSearch, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa'
import { Button } from '../components/ui/Button'

const sampleMeals = [
  { id: 1, name: '招牌牛肉漢堡', description: '多汁牛肉排搭配新鮮蔬菜', price: 120, category: '漢堡', image: '🍔' },
  { id: 2, name: '瑪格麗特披薩', description: '經典義式披薩，滿滿起司', price: 180, category: '披薩', image: '🍕' },
  { id: 3, name: '凱薩沙拉', description: '新鮮羅曼生菜搭配凱薩醬', price: 80, category: '沙拉', image: '🥗' },
  { id: 4, name: '泰式綠咖哩', description: '濃郁綠咖哩搭配香米飯', price: 150, category: '亞洲料理', image: '🍛' },
  { id: 5, name: '巧克力聖代', description: '濃郁巧克力冰淇淋', price: 90, category: '甜點', image: '🍨' },
  { id: 6, name: '新鮮果汁', description: '現榨新鮮水果果汁', price: 60, category: '飲料', image: '🧃' },
]

export const Menu: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [quantities, setQuantities] = useState<Record<number, number>>({})

  const categories = ['全部', '漢堡', '披薩', '沙拉', '亞洲料理', '甜點', '飲料']

  const filteredMeals = sampleMeals.filter(meal => {
    const matchesSearch = meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         meal.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === '全部' || meal.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const updateQuantity = (mealId: number, delta: number) => {
    setQuantities(prev => {
      const current = prev[mealId] || 0
      const newQuantity = Math.max(0, current + delta)
      return { ...prev, [mealId]: newQuantity }
    })
  }

  const addToCart = (meal: typeof sampleMeals[0]) => {
    const quantity = quantities[meal.id] || 1
    alert(`已加入購物車：${meal.name} x${quantity}`)
    setQuantities(prev => ({ ...prev, [meal.id]: 1 }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">點餐菜單</h1>
        <p className="text-gray-600 mb-8">選擇您喜歡的餐點加入購物車</p>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative mb-4">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <FaSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="搜尋餐點..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-12"
            />
          </div>

          <div className="flex overflow-x-auto space-x-2 pb-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-foodpanda-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Meal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMeals.map(meal => (
            <div key={meal.id} className="card">
              <div className="p-6">
                <div className="text-4xl text-center mb-4">{meal.image}</div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl">{meal.name}</h3>
                  <span className="text-foodpanda-primary font-bold text-xl">
                    ${meal.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{meal.description}</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {meal.category}
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(meal.id, -1)}
                        className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-50"
                      >
                        <FaMinus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {quantities[meal.id] || 1}
                      </span>
                      <button
                        onClick={() => updateQuantity(meal.id, 1)}
                        className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-50"
                      >
                        <FaPlus className="w-3 h-3" />
                      </button>
                    </div>
                    
                    <Button
                      variant="primary"
                      onClick={() => addToCart(meal)}
                    >
                      <FaShoppingCart className="mr-2" />
                      加入
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMeals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">找不到相符的餐點</h3>
            <p className="text-gray-500">請嘗試其他搜尋關鍵字或分類</p>
          </div>
        )}
      </div>
    </div>
  )
}
