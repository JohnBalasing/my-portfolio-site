import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({onNavClick}) => {
  return (
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'><button className='nav_action' onClick={onNavClick}>About me</button></Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <div className='nav_buttons'>
          <button className='download'>Download CV</button>
          <button className='nav_action'>Hire me!</button>
        </div>     
    </nav>
  )
}

export default Navbar