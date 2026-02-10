import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaShoppingCart, FaUser, FaHome, FaUtensils, FaHistory, FaCog } from 'react-icons/fa'
import { Button } from '../ui/Button'

export const Navbar: React.FC = () => {
  const location = useLocation()
  
  if (location.pathname === '/login' || location.pathname === '/register') {
    return null
  }

  const navItems = [
    { path: '/', label: '首頁', icon: <FaHome /> },
    { path: '/menu', label: '點餐', icon: <FaUtensils /> },
    { path: '/cart', label: '購物車', icon: <FaShoppingCart /> },
    { path: '/orders', label: '我的訂單', icon: <FaHistory /> },
    { path: '/admin', label: '管理', icon: <FaCog /> },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-foodpanda-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">FF</span>
            </div>
            <span className="text-2xl font-bold text-foodpanda-primary">
              Family<span className="text-foodpanda-accent">Food</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-foodpanda-primary text-white'
                    : 'text-gray-700 hover:bg-foodpanda-secondary'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-foodpanda-primary" />
              <span className="absolute -top-2 -right-2 bg-foodpanda-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            
            <Link to="/profile">
              <div className="w-10 h-10 bg-foodpanda-secondary rounded-full flex items-center justify-center">
                <FaUser className="w-5 h-5 text-foodpanda-primary" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
