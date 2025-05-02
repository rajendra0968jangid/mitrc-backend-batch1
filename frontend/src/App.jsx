import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Blog from './Pages/Blog'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
