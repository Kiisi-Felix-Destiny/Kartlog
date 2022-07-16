import React from 'react'
import catalog from '../../../Images/catalog.png'
import security from '../../../Images/security.png'
import specialization from '../../../Images/specialization.png'
import './FeatureDesktop.css'

const FeaturesCusDesktop = ({ imgCusArray, imgCusNum, id_0, id_1, id_2, pc_one, pc_two, pc_three }) => {
    return (
        <div className="features-main">
            <div className="features-main-content_wrapper">
                <div className="features-main-content" onClick={pc_one} style={id_0 === 1 ? { boxShadow: "0 0 3px 3px rgb(0 0 0 / 10%)" } : { boxShadow: "none", borderBottom: "1px solid #aaa", borderRadius: "0" }}>
                    <div className="features-main-content-icon">
                        <img src={catalog} alt="payment" />
                    </div>
                    <div className="features-main-content-main">
                        <h1>Catalog</h1>
                        <p style={id_0 === 1 ? { display: "block" } : { display: "none" }}>You can now view from a vast of designs from all over Africa to choose from.</p>
                    </div>
                </div>
                <div className="features-main-content" onClick={pc_two} style={id_1 === 1 ? { boxShadow: "0 0 3px 3px rgb(0 0 0 / 10%)" } : { boxShadow: "none", borderBottom: "1px solid #aaa", borderRadius: "0" }}>
                    <div className="features-main-content-icon">
                        <img src={security} alt="payment" />
                    </div>
                    <div className="features-main-content-main">
                        <h1>Safe and Convenient</h1>
                        <p style={id_1 === 1 ? { display: "block" } : { display: "none" }}>Shopping on Kartlog is safe and convenient, all fashion designers have gone through our KYC process</p>
                    </div>
                </div>
                <div className="features-main-content" onClick={pc_three} style={id_2 === 1 ? { boxShadow: "0 0 3px 3px rgb(0 0 0 / 10%)" } : { boxShadow: "none", borderBottom: "1px solid #aaa", borderRadius: "0" }}>
                    <div className="features-main-content-icon">
                        <img src={specialization} alt="payment" />
                    </div>
                    <div className="features-main-content-main">
                        <h1>Specialization</h1>
                        <p style={id_2 === 1 ? { display: "block" } : { display: "none" }}>Every designers has their specialty. You can now choose from a vast majority of designers based on their specialty</p>
                    </div>
                </div>
            </div>
            <div className="features-main-img_wrapper">
                <div className="features-main-img">
                    <img src={imgCusArray[imgCusNum]} alt="img" />
                </div>
            </div>
        </div>

    )
}

export default FeaturesCusDesktop