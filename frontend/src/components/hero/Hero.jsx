import React from 'react'
import "./hero.css"
import Video from '../../assets/Smoothies_1.mp4';



const Hero = () => {
  return (
    <div className="hero-container">
      <video src={Video} autoPlay loop muted />
        <div className='title'>
          <h1>The Smoothies are ready.</h1>
        </div>
    </div>
  )
}

export default Hero