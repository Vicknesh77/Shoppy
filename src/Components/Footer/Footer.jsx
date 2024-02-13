import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import instagram_icon from '../Assests/instagram_icon.png'
import pintester_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'


// Footer mounted in the App component bcz footer is show all page of section

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src ={footer_logo} alt=''/>
            <p>Elite Shop</p>
        </div>
        <ul className='footer-links'>
            <li> Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    {/* container for icon */}
        <div className="footer-social-icon">  

            <div className="footer-icon-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>

        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 Made by Kiki</p>

        </div>
    </div>
  )
}

export default Footer