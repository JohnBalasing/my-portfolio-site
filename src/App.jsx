import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
    </BrowserRouter>
  )
}

export default App
