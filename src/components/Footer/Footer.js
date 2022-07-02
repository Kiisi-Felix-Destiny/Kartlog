import React from 'react'
import './Footer.css'
import footerImg from '../Images/Kartlogowhite.svg'
import * as Fa from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer">
          <div className="footer-main">
            <div className="footer-main_img">
              <img src={footerImg} alt="Kartlog" />
            </div>
            <div className="footer-main-p">
              <p>A fashion hub for on-demand bespoke clothing</p>
            </div>
            <div className="footer-main-h2">
              <h2>Contact us</h2>
            </div>
          </div>
          <div className="footer-sub">

          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">2022 Kartlog. All right reserved</div>
          <div className="footer-social">
            <div className="footer-social-icons"><Fa.FaFacebookF/></div>
            <div className="footer-social-icons"><Fa.FaInstagram/></div>
            <div className="footer-social-icons"><Fa.FaTwitter/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer