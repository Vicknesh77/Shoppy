import React from 'react'
import Loginsignup from './CSS/Loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1 className=''><b>Sign Up</b></h1>
        <div className='loginsignup-fields'>
            <input type='text'placeholder='Your name'required />
            <input type='email'placeholder='Your Email'required />
            <input type='password'placeholder='Password'required />
        </div>
            <button>Continue</button>
        <div className='loginsignup-login'>  
           <p>Already an account? <span>Login here</span></p>
        </div>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>Accepting Terms and policy</p>
        </div>
     

      </div>
    </div>

  )
}

export default LoginSignup