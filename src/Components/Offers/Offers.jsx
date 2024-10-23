import React from 'react'
import "./offers.css"
import exclusive_img from "../Assets/exclusive_image.png"
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only on our bestsellers!</p>
            <button>See All</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_img} alt='Exclusive offers!' />
        </div>
    </div>
  )
}
export default Offers;