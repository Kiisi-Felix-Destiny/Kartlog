import React from 'react'
import measurement from '../../../Images/measurement.png'
import payment from '../../../Images/payment.png'
import marketplace from '../../../Images/marketplace.png'
import interaction from '../../../Images/interaction.png'
import './FeatureDesktop.css'

const FeaturesDesktop = ({ imgArray, imgNum, id_0, id_1, id_2, id_3, p_one, p_two, p_three, p_four }) => {
    return (
        <div className="features-main">
            <div className="features-main-content_wrapper">
                <div className="features-main-content" onClick={p_one} style={id_0 === 1 ? { boxShadow: "0 0 3px 3px rgb(0 0 0 / 10%)" } : { boxShadow: "none", borderBottom: "1px solid #aaa", borderRadius: "0" }}>
                    <div className="features-main-content-icon">
                        <img src={measurement} alt="payment" />
                    </div>
                    <div className="features-main-content-main">
                        <h1>E-Measurements booklet</h1>
                        <p style={id_0 === 1 ? { display: "block" } : { display: "none" }}>Fashion Designers can now view all clients measurement in via client's profile. Measurements can always be updated.</p>
                    </div>
                </div>
                <div className="features-main-content" onClick={p_two} style={id_1 === 1 ? { boxShadow: "0 0 3px 3px rgb(0 0 0 / 10%)" } : { boxShadow: "none", borderBottom: "1px solid #aaa", borderRadius: "0" }}>
                    <div className="features-main-content-icon">
                        <img src={payment} alt="payment" />
                    </div>
                    <div className="features-main-content-main">
                        <h1>E-Payments</h1>
                        <p style={id_1 === 1 ? { display: "block" } : { display: "none" }}>Fashion Designers can now receive payments digitally into E-wallet and can transfer to Bank. This enables them to keep track of all purchases</p>
                    </div>
                </div>
                <div className="features-main-content" onClick={p_three} style={id_2 === 1 ? { boxShadow: "0 0 3px 3px rgb(0 0 0 / 10%)" } : { boxShadow: "none", borderBottom: "1px solid #aaa", borderRadius: "0" }}>
                    <div className="features-main-content-icon">
                        <img src={interaction} alt="payment" />
                    </div>
                    <div className="features-main-content-main">
                        <h1>Manage all interaction</h1>
                        <p style={id_2 === 1 ? { display: "block" } : { display: "none" }}>Manage all clients orders via a mobile app. See every interactions on your store and what people are saying about it</p>
                    </div>
                </div>
                <div className="features-main-content" onClick={p_four} style={id_3 === 1 ? { boxShadow: "0 0 3px 3px rgb(0 0 0 / 10%)" } : { boxShadow: "none", borderBottom: "1px solid #aaa", borderRadius: "0" }}>
                    <div className="features-main-content-icon">
                        <img src={marketplace} alt="payment" />
                    </div>
                    <div className="features-main-content-main">
                        <h1>Market Place</h1>
                        <p style={id_3 === 1 ? { display: "block" } : { display: "none" }}>Kartlog is a market place big enough to accommodate your business. Get easy referrals and ratings</p>
                    </div>
                </div>
            </div>
            <div className="features-main-img_wrapper">
                <div className="features-main-img">
                    <img src={imgArray[imgNum]} alt="img" />
                </div>
            </div>
        </div>

    )
}

export default FeaturesDesktop