import React from 'react'
import "./css/loginsignup.css"
 const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type='text' placeholder='Enter your Name' />
            <input type='Email' placeholder='Enter your Email ID' />
            <input type='password' placeholder='Create a Password' />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">
            Already have an account? <span>Log In.</span>
          </p>
          <div className="loginsignup-agree">
            <input type='checkbox' name="" id="" />
            <p>By Continuing, I agree to the Terms and Conditions</p>
          </div>
        </div>
    </div>
  )
}
export default LoginSignup;