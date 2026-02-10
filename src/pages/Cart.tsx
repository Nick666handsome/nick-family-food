import React from 'react'
import { FaTrash, FaShoppingCart, FaArrowLeft } from 'react-icons/fa'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'

const cartItems = [
  { id: 1, name: '招牌牛肉漢堡', price: 120, quantity: 2, image: '🍔' },
  { id: 2, name: '新鮮果汁', price: 60, quantity: 1, image: '🧃' },
]

export const Cart: React.FC = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const deliveryFee = 30
  const total = subtotal + deliveryFee

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/menu" className="flex items-center text-foodpanda-primary hover:text-pink-600 mb-2">
            <FaArrowLeft className="mr-2" />
            繼續點餐
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">購物車</h1>
          <p className="text-gray-600">確認您的訂單內容</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">購物車項目</h2>
                  <span className="text-gray-600">{cartItems.length} 個項目</span>
                </div>

                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <FaShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-700 mb-2">購物車是空的</h3>
                    <p className="text-gray-500 mb-6">快去挑選喜歡的餐點吧！</p>
                    <Button as={Link} to="/menu" variant="primary">
                      開始點餐
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 border rounded-xl">
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl">{item.image}</div>
                          <div>
                            <h4 className="font-bold">{item.name}</h4>
                            <p className="text-gray-600">${item.price}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-3">
                            <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-50">
                              -
                            </button>
                            <span className="font-medium">{item.quantity}</span>
                            <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-50">
                              +
                            </button>
                          </div>
                          
                          <span className="font-bold text-lg">
                            ${item.price * item.quantity}
                          </span>
                          
                          <button className="text-red-500 hover:text-red-600 p-2">
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="card sticky top-8">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-6">訂單摘要</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">小計</span>
                    <span className="font-medium">${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">運費</span>
                    <span className="font-medium">${deliveryFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">折扣</span>
                    <span className="font-medium text-foodpanda-success">-$0</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>總計</span>
                      <span className="text-foodpanda-primary">${total}</span>
                    </div>
                  </div>
                </div>

                <Button variant="primary" size="lg" fullWidth>
                  前往結帳
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  點擊結帳即表示您同意我們的服務條款
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
