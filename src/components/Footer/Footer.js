import React from 'react'
import './Footer.css'
import footerImg from '../Images/Kartlogowhite.svg'
import * as Fa from 'react-icons/fa'
import playstore from '../Images/playstore.png'
import appstore from '../Images/appstore.png'
const Footer = () => {


  return (
    <div className="footer-container no-highlight">
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
              <a href="/contact"><h2>Contact us</h2></a>
            </div>
          </div>
          <div className="footer-sub_wrapper">
            <div className="footer-sub">
              <div className="footer-sub-img">
                <img src={playstore} alt="get Kartlog on playstore" />
              </div>
              <div className="footer-sub-img">
                <img src={appstore} alt="get Kartlog on appstore" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright-wrapper">
            <div className="footer-copyright">2022 Kartlog. All right reserved</div>
          </div>
          <div className="footer-social-wrapper">
            <div className="footer-social">
              <a href="https://www.facebook.com/KartlogNigeria" target="_blank" rel="noreferrer"><div className="footer-social-icons"><Fa.FaFacebookF /></div></a>
              <a href="https://twitter.com/KartlogNG" target="_blank" rel="noreferrer"><div className="footer-social-icons"><Fa.FaInstagram /></div></a>
              <a href="https://www.instagram.com/kartlogng" target="_blank" rel="noreferrer"><div className="footer-social-icons"><Fa.FaTwitter /></div></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer