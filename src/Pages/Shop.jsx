import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
// import Footer from '../Components/Footer/Footer'
// Shop page  is the index page thn nly are component are mounted this page

const Shop = () => {
  return (
     <div>
        <Hero/>
        <Popular/>                  {/*Mounted From the Popular component to Shop index pages to display the popular list/*/}
        <Offer/>                    {/*Mounted From the offer component to Shop index pages to display the offer list/*/}
        <NewCollection/>
        <NewsLetter/>

        
     </div>
   
    
  )
}

export default Shop