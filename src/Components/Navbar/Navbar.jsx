// import React, { useContext, useState } from 'react'
// import './Navbar.css'
// import logo from '../Assests/logo.png'
// import cart_icon from '../Assests/cart_icon.png'
// import { Link } from 'react-router-dom'
// import { ShopContext } from '../../Context/ShopContext'
// // import elite from '../Assests/elite.jpg'
// const Navbar = () => {

// My code




//     const [menu ,setMenu] =useState('shop')
//     const {gettotalCartItems} = useContext(ShopContext)

//     const handleMenuToggle = () => {
//       const navMenu = document.querySelector('.nav-menu');
//       navMenu.classList.toggle('show');
//     };
    
//   return (
//     <div className='navbar'>
//         <div className='nav-logo'>
//             <img src={logo} alt="Logo" />
//             {/* <p><img src ={elite} alt=''/></p> */}
//             <p>Elite Shop</p>
//         </div>
//             <ul className='nav-menu'>
//                 <li onClick={()=>{setMenu("shop")}}><Link style ={{textDecoration:'none'}}to='/'>Shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
//                 <li onClick={()=>{setMenu("mens")}}><Link  style ={{textDecoration:'none'}} to='/mens'>Men</Link>{menu === "mens" ? <hr/> : <></>}</li>
//                 <li onClick={()=>{setMenu("womens")}}><Link  style ={{textDecoration:'none'}} to='/womens'>Women </Link>{menu === "womens" ? <hr/> : <></>}</li>
//                 <li onClick={()=>{setMenu("kids")}}><Link  style ={{textDecoration:'none'}} to ='/kids'>Kids </Link>{menu === "kids" ? <hr/> : <></>}</li>
//             </ul>
//             <div className='nav-login-cart'>
//                <Link to='/login'><button>Login</button></Link> 
//                 <Link to ='/cart'><img src={cart_icon} alt="/"/></Link>
//                 <div className='nav-cart-count'>{gettotalCartItems()}</div>
//             </div>
//     </div>
//   )
// }

// export default Navbar








import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { gettotalCartItems } = useContext(ShopContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='Logo' />
        <p>Elite Shop</p>
      </div>
      <div className={`nav-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <ul className={`nav-menu ${isMobileMenuOpen ? 'show' : ''}`}>
        <li onClick={() => setMenu('shop')}>
          <Link style={{ textDecoration: 'none' }} to='/'>
            Shop
          </Link>
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('mens')}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>
            Men
          </Link>
          {menu === 'mens' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('womens')}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>
            Women{' '}
          </Link>
          {menu === 'womens' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>
            Kids{' '}
          </Link>
          {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'>
          <button className='login-button'>Login</button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt='/' />
        </Link>
        <div className='nav-cart-count'>{gettotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

