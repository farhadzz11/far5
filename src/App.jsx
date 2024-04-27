import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Program/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Compus from './components/Compus/Compus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {
  const[statePlayer,setStatePlayer] =useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
       <Title subTitle ="OUR PROGRAM" Title="what we offer" /> 
      <Programs />
      <About setStatePlayer ={setStatePlayer} />
      <Title subTitle ="Gallery" Title="Campus photos" /> 
      <Compus />
      <Title subTitle ="TESTIMONIALS" Title="What students says" /> 
      <Testimonials />
      <Title subTitle ="Contact Us" Title="Get in Touch" /> 
      <Contact />
      <Footer />
      </div>
      <VideoPlayer statePlayer ={statePlayer} setStatePlayer={setStatePlayer} />
    </div>
  )
}

export default App
