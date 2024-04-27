import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure  better education for a better world</h1>
            <p> our cutting-edge curriculum is designed to empower students with knowledge ,skills and experience needed excel in the dynamic field of education</p>
            <button className='btn'>explore me <img src={dark_arrow} alt='' /></button>
        </div>
      
    </div>
  )
}

export default Hero
