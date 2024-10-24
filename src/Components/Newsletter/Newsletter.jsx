import React from 'react'
import "./newsletter.css"
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusive offers, made for you</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email ID' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
export default Newsletter;