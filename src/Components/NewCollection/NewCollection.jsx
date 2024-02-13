import React from 'react'
import './NewCollection.css'
import Item from '../Item/Item'
import new_collections from '../Assests/new_collections'


const NewCollection = () => {
  return (
    <div className='new-collections'>

        <h1>New Collection</h1>
        <hr/>
        <div className='collections'>
            {new_collections.map((item,i) => {        // Map newcollection from assests  item is just var name of arrow function
             return <Item                             // the product details are share to item component throgh props
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}old_price={item.old_price}
             /> })}
        </div>

    </div>
  )
}

export default NewCollection