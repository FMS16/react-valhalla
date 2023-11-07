import React from 'react'
import "../assets/styles/app.css";

const Contact = () => {
  return (
    <div className='contact'>
        <h1 className='section-title'>¡Conversemos!</h1>
        <div className='title-underline-black'></div> 
        <div className='container'>
            <form className='form-contact'>
                <div className='container-input'>
                    <label>Nombre:</label>
                    <input type='text' />
                </div>
                <div className='container-input'>
                    <label>Empresa:</label>
                    <input type='text' />
                </div>
                <div className='container-input'>
                    <label>Teléfono:</label>
                    <input type='text' />
                </div>
                <div className='container-input'>
                    <label>Mail:</label>
                    <input type='text' />
                </div>
                <div className='container-textarea'>
                    <label>Contanos sobre tu proyecto:</label>
                    <textarea></textarea>
                </div>
                <input type='button' className='btn-contact' value='ENVIAR' />
            </form>
        </div>
    </div>
  )
}

export default Contact