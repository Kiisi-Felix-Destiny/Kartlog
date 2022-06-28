import React from 'react'
import './Benefits.css'
import payment from '../../Images/payment.png'
import marketplace from '../../Images/marketplace.png'
import interaction from '../../Images/interaction.png'
import catalog from '../../Images/catalog.png'
import safe from '../../Images/safe.png'
import specialize from '../../Images/specialize.png'


const Benefits = () => {
  return (
    <section className="benefits_wrapper">
      <div className="benefits">
        <div className="benefits_header">
          <h1>BENEFITS</h1>
        </div>
        <div className="benefits_section">
          <div className="benefits_section_header">
            <h1>Fashion Designers</h1>
            <p>You can now digitalize all your business operation</p>
          </div>
          <div className="benefit_content">
            <div className="benefits_content_list">
              <div className="benefits_content_items">
                <div className="check"><span className="material-icons">design_services</span></div>
                <div className="item">
                  <h3>Measurements booklet</h3>
                  <p>Fashion Designers can now view all clients measurement in via clients's profile. Measurement can always be updated</p>
                </div>
              </div>
              <div className="benefits_content_items">
                <div className="check"><img src={payment} alt="payment" /></div>
                <div className="item">
                  <h3>Payments</h3>
                  <p>Fashion designers can now receive payments digitally into E-wallet and can transfer to Bank. This enables them to keep track of all purchases</p>
                </div>
              </div>
              <div className="benefits_content_items">
                <div className="check"><img src={interaction} alt="interaction" /></div>
                <div className="item">
                  <h3>Manage Interactions</h3>
                  <p>Manage all clients orders via a mobile app. See every interactions on your store and what people are saying about it</p>
                </div>
              </div>
              <div className="benefits_content_items">
                <div className="check"><img src={marketplace} alt="marketplace" /></div>
                <div className="item">
                  <h3>Market Place</h3>
                  <p>Kartlog is a market place big enough to accommodate your business. Get easy referrals and ratings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="benefits_section">
          <div className="benefits_section_header">
            <h1>Customers</h1>
            <p>You can now digitalize your bespoke shopping experience</p>
          </div>
          <div className="benefits_content">
            <div className="benefits_content_list">
              <div className="benefits_content_items">
                <div className="check"><span className="material-icons">design_services</span></div>
                <div className="item">
                  <h3>Transfer of measurement</h3>
                  <p>Your user profile contains your measurements, so you don't have to measure with every designer. Measurements can always be updated</p>
                </div>
              </div>
              <div className="benefits_content_items">
                <div className="check"><img src={catalog} alt="marketplace" /></div>
                <div className="item">
                  <h3>Catalogue</h3>
                  <p>You can now view from a vast variety of designs from all over Africa to choose from</p>
                </div>
              </div>
              <div className="benefits_content_items">
                <div className="check"><img src={safe} alt="marketplace" /></div>
                <div className="item">
                  <h3>Safe and Convenient</h3>
                  <p>Shopping on Kartlog is safe and convenient, all fashion designs have gone through our KYC process</p>
                </div>
              </div>
              <div className="benefits_content_items">
                <div className="check"><img src={specialize} alt="marketplace" /></div>
                <div className="item">
                  <h3>Specialization</h3>
                  <p>Every designer has their specialty. You can now choose from a vast majority of designers based on their specialty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits