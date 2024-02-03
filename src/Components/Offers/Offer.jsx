import React from 'react'
import './Offers.css'
import exclusive_image from '../Assests/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offer '>
        <div className="offer-left">
            <h1>Exclusive</h1>    
            <h1>Offers For You</h1>
            <p>Only on Best sellers products</p>
            <button>Check now</button>
        </div>
        <div className="offer-right">
            <img className='img-offer' src={exclusive_image}alt=""/>
        </div>

    </div>
  )
}

export default Offer