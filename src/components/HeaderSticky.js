import React from 'react'
import logo from "../assets/images/Blanco_logo-03.png";
import "../assets/styles/app.css"

const HeaderSticky = () => {
    return (
        <header className='header-sticky'>
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

export default HeaderSticky