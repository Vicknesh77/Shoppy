import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1 className='heading'>Get Exclusive offer on  Your Mail</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input
            type='email'
            placeholder='Your Email'/>
            <button className='btn'>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter