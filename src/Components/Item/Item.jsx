import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

// Item Component is Supply the product details to other components
// the item component only have the product details like  name and prices

const Item = ({id, image , name, new_price, old_price }) => {             // The props value are coming from the popular and Newcollection component

  return (

    <div className='item'>
          <Link to={`/product/${id}`}>
              <img className='w-90 h-90 rounded-lg' onClick={window.scrollTo(0,0)}src={image} alt='/'/>
              <p>{name}</p>
          </Link>
        
        <div className="item-prices">
            <div className='item-price-new'>
                {new_price}
            </div>

            <div className='item-price-old'>
                {old_price}
            </div>
            
        </div>
    </div>
  )
}

export default Item