import React from 'react'
import './login.css'
import logo from './logo.jpg';
const Login = () => {
  return (
    <div className='underline'>
    <div className='login'>
        <img src={logo} className='logo' alt="logo" />
        <p className='title-logo'>Welcome back!</p>
        <input className='input-area' type='email' placeholder='Enter your email'></input>
        <input className='input-area' type='password' placeholder='Enter your password'></input>
        <button className='btn-login'>Log in to Flodesk</button>
        <p className='login-para'>Not member? <span>Sign up<br></br></span>
        <span> Forgot your password?</span></p>
        <p className='footer'>By continuing, you agree to Flodesk's <span className='footer-span'>terms</span> and acknowledge you've read our <span className='footer-span'>privacy policy</span></p>

    </div>
    </div>
  )
}

export default Login