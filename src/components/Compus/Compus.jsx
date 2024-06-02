import React from 'react'
import './Compus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'


function Compus() {
  return (
    <div className='compus'>
        <div className='gallery' >
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />

        </div>
        <div id="d1">
        <button className='btn dark-btn mg'>see more <img src={white_arrow} alt="" /> </button>
        </div>
      
    </div>
  )
}

export default Compus
