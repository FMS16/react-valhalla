import React from 'react'
import gif from "../assets/images/30e1bbc05fe2ed8c90572c6a0b6e54a6.gif"
import logo from "../assets/images/Blanco_logo-03.png"
import { useEffect } from 'react'
import { useState } from 'react'

const Banner = (props) => {
  return (
    <div className='banner'>
      {/* <h1 className='banner-title'>{props.title}</h1> */}
      <img className='banner-logo' src={logo} />
      <h2 className='subtitle'>{props.subtitle}</h2>
    </div>
  )
}

export default Banner