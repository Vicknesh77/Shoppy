import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
// import dropdown_icon from '../Components/Assests/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = ({banner,category}) => {    //From App.js props
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
        <img  className='shopcategory-banner' src={banner} alt=''/> 
        <div className=" shopcategory-indexsort">
          <p>
            <span>show 1-12</span> out of 36 products
          </p>
            <div className="shopcategory-sort">
              Sort By 
              {/* Sort by <img className='drop'src={dropdown_icon}alt=''/> */}
            
            </div> 
        </div>
        <div className="shopcategory-products">
            {/* map through all the product and display them */}
            {all_product.map((item,i)=>{
              if({category}.category === item.category){
                return <Item  key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}old_price={item.old_price}/>
              }
              else{
                return null;
              }
            })}
        </div>
        <div className='shopcategory-loadmore'>
            Explore More
        </div>
        {/* <div className="flex justify-center border-r-8 border-blue my-20">
        <button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">Explore More</button>
        </div> */}
    </div>
  )
} 

export default ShopCategory