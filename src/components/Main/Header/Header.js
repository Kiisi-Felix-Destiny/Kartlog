import React from 'react'
import './Header.css'
import kartlog from '../../Images/Kartlogowhite.svg';
const Header = () => {
  return (
    <header className="k-header">
      <div className="header-container">
        <div className="header-logo">
          <img src={kartlog} alt="kartlog-log"/>
        </div>
        <div className="header-main">
          <h1>Buy and sell</h1>
          <h1>Custom-made clothing</h1>
        </div>
        <div className="header-sub">
          <p>A marketplace for fashion designers and fashion lovers</p>
        </div>
      </div>
    </header>
  )
}

export default Header