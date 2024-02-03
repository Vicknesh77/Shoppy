import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assests/breadcrum_arrow.png'; // Renamed the variable for convention

const Breadcrum = (props) => {
    const {product} =props;
  return (
    <div className='breadcrum'>
        HOME <img src ={arrow_icon} alt=''/>SHOP <img src={arrow_icon} alt=''/>{product.category}SHOP <img src={arrow_icon} alt=''/>{product.name}
    </div>
  )
  }
export default Breadcrum;
