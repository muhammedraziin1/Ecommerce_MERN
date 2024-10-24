import React from 'react'
import "./footer.css"
import footer_logo from "../Assets/logo_big.png"
import insta from "../Assets/instagram_icon.png"
import pint from "../Assets/pinterest_icon.png"
import wa from "../Assets/whatsapp_icon.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="footer logo"/>
            <p>ShopMe</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={insta} alt="instagram icon" />
            </div>
            <div className="footer-icons-container">
                <img src={pint} alt="pinterest icon" />
            </div>
            <div className="footer-icons-container">
                <img src={wa} alt="whatsapp icon" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @2024. All rights reserved.</p>
        </div>
    </div>
  )
}
export default Footer;