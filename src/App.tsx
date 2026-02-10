import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Cart } from './pages/Cart'
import { Orders } from './pages/Orders'
import { Admin } from './pages/Admin'
import { Profile } from './pages/Profile'
import { Register } from './pages/Register'
import { Navbar } from './components/layout/Navbar'

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
