import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assests/cart_cross_icon.png'


const CartItems = () => {

    const{all_product,cartItem,removeFromCart,getTotalamount} =useContext(ShopContext)

  return (

    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p className='para'>Producs</p>
            <p className='para'>Title</p>
            <p className='para'> Price</p>
            <p className='para'>Quantity</p>
            <p className='para'>Remove</p>
        </div>
        <hr/>

        {all_product.map((e)=>{

            if(cartItem[e.id]>0){

                return(

                    <div key={e.id}>
                        <div className='cartitem-format cartitems-format-main'>
                            <img src ={e.image} alt='' className='carticon-product-icon'/>
                            <p className='text'>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitem-quantity'>{cartItem[e.id]}</button>
                            <p>{e.new_price * cartItem[e.id]}</p>
                            <img className = 'cartitem-remove-icon'src={remove_icon} onClick={() => removeFromCart(e.id)} alt='' />
                        </div>
                        <hr />

                    </div>
                )
                }
                return null;
        })}
        <div className="cartitem-down">
            <div className="cartitem-total">
                <h1>cart Total</h1>
                <div>
                    <div className="cartitem-total-item">
                        <p>SubTotal</p>
                        <p>{getTotalamount()}</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item">
                        <p>Shipping fee</p>
                        <p>free</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item">
                        <p>Total</p>
                        <p>{getTotalamount()}</p>
                    </div>
                </div>
                <button>Proceed To Payment</button>
            </div>
        </div>
    </div>
  )
}

export default CartItems