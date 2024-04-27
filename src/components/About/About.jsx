import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png' 

function About({setStatePlayer}) {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{
                setStatePlayer(true)
            }}/>
        </div>

        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurtureing Tomorrow Leaders Today</h2>
            <p>Embark on a transformative educational journey with our university
                university is comprehensive education programs . our cutting-edge 
                curriclum is designed to empower students with the knowledge,
                skills , and experience needed to excel in the dynamic fields of 
                education.</p>
                <p>with a focus on innovation ,hands-on learning , and personlized
                    mentorshop , our programs prepare aspiring edcuator to make a 
                    meaningful impact in classrooms , schools , and communities .
                </p>
                <p>
                    wether you aspire to become a teacher administrator
                    couneslor , or eductionals leader , our diverse ranges of programs 
                    offers the perfect pathway to achieve your  goals and unlack yours 
                    full potenials in shaping the future of education.
                </p>
        </div>
      
    </div>
  )
}

export default About
