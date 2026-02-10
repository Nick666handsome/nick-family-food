import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  fullWidth?: boolean
  as?: typeof Link | 'button'
  to?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  as: Component = 'button',
  to,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = 'rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-foodpanda-primary text-white hover:bg-pink-600 focus:ring-foodpanda-primary shadow-lg hover:shadow-xl',
    secondary: 'bg-foodpanda-accent text-white hover:bg-orange-500 focus:ring-foodpanda-accent',
    outline: 'border-2 border-foodpanda-primary text-foodpanda-primary hover:bg-foodpanda-secondary focus:ring-foodpanda-primary',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  }

  const buttonClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${isLoading ? 'opacity-50 cursor-wait' : ''} ${className || ''}`

  if (Component === Link && to) {
    return (
      <Link
        to={to}
        className={buttonClassName}
        {...props as any}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            <span>處理中...</span>
          </div>
        ) : children}
      </Link>
    )
  }

  return (
    <button
      className={buttonClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          <span>處理中...</span>
        </div>
      ) : children}
    </button>
  )
}
