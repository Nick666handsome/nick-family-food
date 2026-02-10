import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  )
}

export default App
