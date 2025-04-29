import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      
      <footer>
        <div className='grid-four-column'>
        {/* first column */}
        <div className='footer-subscribe'>
          <h2>Subscribe to our newsletter</h2>
          <form action='' className='footer-form'>
            <input type='email' placeholder='EMAIL' required autoComplete='off' className='footer-email'></input>
            <input type='submit' value='SUBSCRIBE' className='footer-button'></input>
          </form>
        </div>
        {/* second column */}
        <div className='footer-socials'>
          <h2>Follow Us</h2>
          <div className='footer-icons'>
            <div>
              <FaFacebook/>
              <FaInstagram/>
              <FaTwitter/>
              <FaYoutube/>
              <a href="https://www.linkedin.com/in/shriti-negi-323747338" className="linkedin"><FaLinkedin/></a>
            </div>
          </div>
        </div>

        {/* third column */}
        <div className='footer-contact'>
          <h2>Contact Us</h2>
          <h4>Phone</h4>
          <p>123-456-7890</p>
          <h4>Email</h4>
          <p>brainboard26@gmail.com</p>

        </div>

        </div>


        {/* bottom-section */}
        <div className='footer-bottom'></div>
        <hr/>
        
        <div className='grid-three-columns'>
          <p className="copyright-left">
            @{new Date().getFullYear()} Brain Board. All rights reserved.
          </p>
          <NavLink to="/home" className="terms-center">
            Terms of use
          </NavLink>
          <NavLink to="/home" className="privacy-right">
            Privacy Policy
          </NavLink>
        </div>

        

      </footer>
    </>
  )
}

export default Footer