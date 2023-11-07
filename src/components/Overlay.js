import React from 'react';
import "../assets/styles/app.css";

const Overlay = ({ isMobileMenuVisible, closeMobileMenu }) => {
  return (
    isMobileMenuVisible && (
      <div className="overlay" onClick={closeMobileMenu}></div>
    )
  );
};

export default Overlay;