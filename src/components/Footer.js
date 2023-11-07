import React from 'react'
import logoWhite from "../assets/images/Blanco_logo-03.png"
import logoBlack from "../assets/images/Negro_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className='footer'>
        <div className='container-footer'>
            <div className='footer-item'>
                {/* <img className='footer-logo' src={logoWhite} /> */}
                <h1 className='footer-logo'>Valhalla</h1>
                <div className='social-media'>
                    <ul>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                        <li><FontAwesomeIcon icon={faTiktok} /></li>
                    </ul>
                </div>
                <span className='copyright'>{year}. Creado por Valhalla Studio.</span>
            </div>
            <div className='footer-item'>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer