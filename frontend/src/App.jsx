import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Register/>}></Route>
            
        </Routes>
      </BrowserRouter>
    </>
  )
}
