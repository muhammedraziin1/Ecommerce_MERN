import React, { useContext, useRef, useState } from 'react'
import "./navbar.css"
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown from "../Assets/nav_dropdown.png"
const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef();
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle("nav-menu-visible")
        e.target.classList.toggle('open')
    }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='logo'/>
            <p>ShopMe</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown} alt='dropdown icon' />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={() =>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("men")}}><Link style={{textDecoration: 'none'}} to="/men">Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("women")}}><Link style={{textDecoration: 'none'}} to="/women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link style={{textDecoration: 'none'}} to="/login"><button>Log In</button></Link>
            <Link style={{textDecoration: 'none'}} to="/cart" ><img src={cart_icon} alt="cart icon" /></Link>
            <div className="nav-cart-count"> {getTotalCartItems()} </div>
        </div>
    </div>
  )
}
export default Navbar;