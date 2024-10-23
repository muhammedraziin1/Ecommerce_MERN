import React from 'react'
import './hero.css'
import arrow_icon from "../Assets/arrow.png"
import hero_img from "../Assets/hero_image.png"
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>New Trends Everyday!</h2>
                <p>collections</p>
                <p>for everyone.</p>
                <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow" />
        </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="hero"/>
        </div>
    </div>
  )
}
export default Hero;