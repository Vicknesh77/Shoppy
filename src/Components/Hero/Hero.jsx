import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import hero_image from '../Assests/hero_image.png'


// This Hero component is mounted to Pages/Shop for show page in home

const Hero = () => {
  return (

   <div className='hero'>
      <div className='hero-left'> 
            <h2>New Arrival only</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} alt=''/>
                </div>
                    <p>collections</p>
                    <p>For Everyone</p>
            </div> 
                <div className="hero-latest-btn">
                    <div>latest collection</div>
                    <img src ={arrow_icon} alt=''/>
                </div>
    </div>

        <div className='hero-right'> 
          <img className ="img-hero"src ={hero_image} alt='/'/>
        </div>
  </div>

   
  )
}

export default Hero
