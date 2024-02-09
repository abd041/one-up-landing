import React from 'react'
import "./Footer.css"
import Logo from "../../assets/dark/Homepage/logo.png"
const Footer = () => {
  return (
    <div className='footer-main-wrapper'>
        <div className='footer-b-1'>
           <img src={Logo}/>
        </div>
        <div className='footer-b-2'>
           
        <div className='footer-heading'><h1>Quick Links</h1></div>
            <div className='footer-desc'><h2>Home</h2></div>
            <div className='footer-desc'><h2>Pricing</h2></div>
            <div className='footer-desc'><h2>Resources</h2></div>
            <div className='footer-desc'><h2>About</h2></div>
        </div>
        <div className='footer-b-3'>
        <div className='footer-heading'><h1>Join Now</h1></div>
            <div className='footer-desc'><h2>Register Now</h2></div>
            <div className='footer-desc'><h2>Sign In</h2></div>

        </div>
        <div className='footer-b-4'>
        <div className='footer-heading'><h1>Resources</h1></div>
            <div className='footer-desc'><h2>About Us</h2></div>
            <div className='footer-desc'><h2>Blogs</h2></div>
            <div className='footer-desc'><h2>FAQ</h2></div>

        </div>
        <div className='footer-b-5'>
        <div className='footer-heading'><h1>Follow Us</h1></div>
            <div className='footer-desc'><h2>Instagram</h2></div>
            <div className='footer-desc'><h2>Facebook</h2></div>
        </div>
    </div>
  )
}

export default Footer