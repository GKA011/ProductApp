import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Addproduct from './components/Addproduct'
import Homepg from './components/Homepg'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Addproduct/>}></Route>
        <Route path='/view'element={<Homepg/>}></Route>
      
      </Routes>
    </div>
  )
}
  

export default App
