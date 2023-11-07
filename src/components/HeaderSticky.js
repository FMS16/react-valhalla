import React, { useState } from 'react';
import logo from "../assets/images/Blanco_logo-03.png";
import "../assets/styles/app.css";
import Overlay from './Overlay';

const HeaderSticky = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
    // Aplica estilos al cuerpo para ocultar la barra de desplazamiento
    document.body.style.width = isMobileMenuVisible ? "auto" : "100%";
    document.body.style.height = isMobileMenuVisible ? "auto" : "100%";
    document.body.style.overflow = isMobileMenuVisible ? "auto" : "hidden";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuVisible(false);
    // Restablece los estilos del cuerpo
    document.body.style.width = "auto";
    document.body.style.height = "auto";
    document.body.style.overflow = "auto";
  };

  return (
    <header className='header-sticky'>
      <img className='logo' src={logo} alt="Logo" />
      {/* Botón de toggle para móviles */}
      <button className="mobile-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
      {/* Menú de navegación */}
      <nav className={`header-nav ${isMobileMenuVisible ? 'visible' : 'hidden'}`}>
        <ul>
          <li><a href=''>nosotros</a></li>
          <li><a href=''>portfolio</a></li>
          <li><a href=''>contacto</a></li>
        </ul>
      </nav>
      {/* Utiliza el componente Overlay */}
      <Overlay isMobileMenuVisible={isMobileMenuVisible} closeMobileMenu={closeMobileMenu} />
    </header>
  );
};

export default HeaderSticky;
