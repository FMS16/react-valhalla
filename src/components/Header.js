import React from 'react'
import "../assets/styles/app.css"
import logo from "../assets/images/Blanco_logo-03.png"

const Header = () => {
  return (
    <header className='header'>
        <img className='logo' src={logo} />
        <nav className='header-nav'>
            <ul>
                <li><a href=''>nosotros</a></li>
                <li><a href=''>portfolio</a></li>
                <li><a href=''>contacto</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header