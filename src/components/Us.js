import React, { useState } from 'react'
import img from "../assets/images/Negro_logo.png"
import "../assets/styles/app.css"

import signatureOne from "../assets/images/firmaRandom.png";
import signatureTwo from "../assets/images/firmaRandomDos.png";

import logo from "../assets/images/Negro_logo.png"

const Us = () => {
    const [ text, setText ] = useState('');
    const [ flag, setFlag ] = useState(false);
    const handleShowPoint = () => {
        setText('llegamos para quedarnos');
    }
    return (
        <div className='us'>
            <h1 className='section-title'>NUESTRA HISTORIA</h1>
            <div className='title-underline-black'></div>
            <div className='container'>
                <p className='story-text'>
                    Valhalla fue fundada en el año 2023 por dos apasionados amigos, Fabricio y Lucas,
                    que comparten una visión común y un amor inquebrantable por el diseño gráfico y el desarrollo web.
                    Juntos, fusionaron sus talentos y experiencias para crear una agencia creativa dedicada a hacer realidad tus sueños digitales.</p>
                <p className='story-text'>
                    En Valhalla, nuestra misión es clara: transformar tus ideas en experiencias visuales cautivadoras y sitios web impresionantes.
                    Trabajamos incansablemente para impulsar tu presencia en línea y ayudarte a alcanzar tus objetivos de negocio.
                    Cada proyecto es una oportunidad para desafiar los límites de la creatividad y la innovación.
                </p>
                <p className='story-text'>
                    En Valhalla, estamos comprometidos con la excelencia y la satisfacción del cliente.
                    Permítenos ser tu socio creativo y llevar tus ideas a nuevas alturas.
                </p>
                <div className='signatures'>
                    <div className='signature-item'>
                        <img className='signature-img' src={signatureOne} />
                        <h1>Fabricio Secondo</h1>
                        <span>Co-Founder</span>
                    </div>
                    <div className='signature-item'>
                        <img className='signature-img' src={signatureTwo} />
                        <h1>Lucas Barrio</h1>
                        <span>Co-Founder</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Us