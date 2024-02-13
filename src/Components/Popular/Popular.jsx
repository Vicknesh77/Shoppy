import React from 'react'
import './Popular.css'
import data_product from '../Assests/data'  // Take the Product details from the Assests Folder  and pass to Item Component through Props value
import Item from '../Item/Item'

// In the item Component Task is display the 4 produvts and the product details pass to Item compnent through the Props value
const Popular = () => {
  return (

        <div className='popular'>

            <h1>Popular in Womens</h1>
            <hr/>
            <div className='popular-item'>
                {data_product.map((item,i)=>{               // Map fun take anoms fun mapping the all_product to the item var map((item,i) these are the param
                    return <Item 
                    key={i}                                  // key is used for each product unique key to store product
                    id={item.id}
                    name= {item.name}
                    image={item.image}                        // collect the product details and send to the  Item
                    new_price={item.new_price}
                    old_price={item.old_price}
                    />                                      // This popular component will return their Product details to the Item Component then only Item Component mounted
                })}
            </div>

        </div>
   
  )
}

export default Popular