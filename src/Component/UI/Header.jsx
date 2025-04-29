import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header>
            <div className="container">
                <div className="navbar-grid">
                    <div className="logo">
                        <img src="public/Images/logo.png" alt="Brain Board Logo" className="banner-logo" />
                        <NavLink to="/">
                        
                        <h1>Brain  Board</h1>

                         </NavLink>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/about">Why Brain Board ❓</NavLink>
                            </li>
                            <li>
                                <NavLink to="/features">Features</NavLink>
                            </li>
                            <li>
                                <NavLink to="/plans">Pricing & Plans</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup" className="login-button">Sign Up</NavLink>
                            </li>
                        </ul>
                    </nav>
                    

                </div> 
            </div>
        </header>
    </>
  )
}

export default Header