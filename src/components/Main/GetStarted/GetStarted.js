import React from 'react'
import './GetStarted.css'
import integrate from '../../Images/Integrate.png'
import setting from '../../Images/setting.png'
import bulb from '../../Images/Goal.png'
const GetStarted = () => {
    return (
        <div className="get-started">
            <div className="get-started_header_wrapper">
                <div className="get-started_header">
                    <h3>Fashion Designers</h3>
                    <h1>Get Started with Kartlog</h1>
                </div>
            </div>
            <div className="get-started_content_wrapper">
                <div className="get-started_content">
                    <div className="get-started_content--group">
                        <div className="get-started_content--group_wrap">
                            <div className="card_wrapper">
                                <div className="card">
                                    <div className="card_icon card_icon-color">
                                        <span className="material-icons">add</span>
                                    </div>
                                    <h2 className="card_header">Create Account</h2>
                                    <div className="card_text">Setup account on Kartlog by downloading the app and getting verified</div>
                                </div>
                            </div>
                            <div className="card_wrapper">
                                <div className="card">
                                    <div className="card_icon">
                                        <img src={integrate} alt="integrate" />
                                    </div>
                                    <h2 className="card_header">Integrate existing Customers</h2>
                                    <div className="card_text">Add existing customer profiles, measurement and more</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="get-started_content--group">
                        <div className="get-started_content--group_wrap">
                            <div className="card_wrapper">
                                <div className="card">
                                    <div className="card_icon">
                                        <img src={setting} alt="setting" />
                                    </div>
                                    <h2 className="card_header">Setup Store</h2>
                                    <div className="card_text">Set up you store, add recent jobs to catalogue, include prizes and other details</div>
                                </div>
                            </div>
                            <div className="card_wrapper card_wrapper_color">
                                <div className="card">
                                    <div className="card_icon">
                                        <img src={bulb} alt="goal" />
                                    </div>
                                    <h2 className="card_header_special ">Business on the Go!</h2>
                                    <div className="card_text_special">Now you are open for business on a global scale</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted