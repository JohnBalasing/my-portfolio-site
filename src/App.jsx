import React, {useRef}  from 'react'
import { BrowserRouter} from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'

import './App.css'

function App() {

const sectionRef = useRef(null);

const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
}

  return (
    <BrowserRouter>
      <Navbar onNavClick={scrollToSection}/>
      <Home/>
      <About ref={sectionRef}/>
    </BrowserRouter>
  )
}

export default App
