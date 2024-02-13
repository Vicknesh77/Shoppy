import React,{createContext, useState }from 'react';
import all_product from '../Components/Assests/all_product';


export const ShopContext =createContext(null);

const getdefaultcart=()=>{
    let cart ={};
    for(let index = 0; index < all_product.length+1;index ++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider =(props)=>{                                           // create Shopcontext  provider

    const [cartItem , setcartItem]= useState(getdefaultcart()) ;

    const addtoCart =(itemId)=>{

        setcartItem((pre)=>({...pre,[itemId]:pre[itemId]+1}))       ;   // pre means previous
        console.log(cartItem);}
        
 // }   key value pair  3:5

 const removeFromCart =(itemId)=>{

    setcartItem((pre)=>({...pre,[itemId]:pre[itemId] -1}))
}

const getTotalamount = () => {
    let total = 0;
    for (const productId in cartItem) {
      const product = all_product.find((p) => p.id === parseInt(productId, 10));
      
      if (product) {
        total += product.new_price * cartItem[productId];
      }
    }
    return total;
  };

    // const getTotalamount =()=>{
    //     let totalAmount = 0;
    //     for(const productID in cartItem){
    //         if(cartItem[productID]>0)
    //         {
    //             let itemInfo = all_product.find((product)=>product.id===Number(productID))
    //             totalAmount += (itemInfo.new_price * cartItem[productID])
    //         }
    //         return totalAmount;
    //     }
    // }

    const gettotalCartItems =()=>{
        let totalItem =0;
        for(const item in cartItem)
        {
            if(cartItem[item] > 0)
            {
                totalItem += cartItem[item]
            }
        }return totalItem;
    }
    const contextValue ={all_product,cartItem,addtoCart,removeFromCart,getTotalamount,gettotalCartItems};
  
   
    return (
                                                                // Pass the context value to all children compoent
        <ShopContext.Provider value ={contextValue}>            
            {props.children}
        </ShopContext.Provider>                                 // Shopcontext provider fun provide the value to other children component
      
    )
}
export default ShopContextProvider

