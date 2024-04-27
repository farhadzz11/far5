import React from 'react'
import '../../index.css'
import white_arrow from '../../assets/white-arrow.png'
import './Compus.css'

function Button() {
  return (
    <button className='btn dark-btn mg'>see more <img src={white_arrow} alt="" /> </button>
  )
}

export default Button
