import React from 'react'
import './Navbar.css'
import Logo from '../Images/Kartlogoblue.svg'

const Navbar = () => {
    return (
        <div className="k-wrapper nav-wrapper">
            <nav className="nav">
                <div className="nav_logo">
                    <img src={Logo} alt="Kartlog"/>
                </div>
                <div className="nav_btn">
                    <div className="btn">Get App Now</div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar