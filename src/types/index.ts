export interface User {
  id: string
  username: string
  email: string
  role: 'admin' | 'user'
  avatar?: string
  createdAt: string
}

export interface Meal {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  category: string
  available: boolean
  userId: string
  createdAt: string
}

export interface OrderItem {
  id: string
  mealId: string
  quantity: number
  price: number
  notes?: string
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  totalPrice: number
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled'
  createdAt: string
  updatedAt: string
}

export interface CartItem {
  mealId: string
  quantity: number
  notes?: string
}
