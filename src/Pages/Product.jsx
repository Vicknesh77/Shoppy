import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ShopContext} from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

const Product = () => {
  const {all_product}= useContext(ShopContext);  //From context to all children
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  

  return (
  <>
    <Breadcrum product={product} />
    <ProductDisplay product={product}/>
    <RelatedProduct/>
  </>
   
  )
}

export default Product

