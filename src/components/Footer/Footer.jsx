import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id= 'footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p>Food delivery app</p>
        <div className="footer-social-icons">
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
        <h2>Company</h2>
        <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>privacy policy</li>
        </ul>

      
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
            <li>+91 1234567890</li>
            <li>contact@saphaa.com</li>
            </ul>
      </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright © 2025 saphaa.com – All Rights Reserved</p>

    </div>
  )
}

export default Footer
