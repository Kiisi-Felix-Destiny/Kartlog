import React from 'react'
import './Contact.css';
import ContactForm from './ContactForm/ContactForm'
import call from '../Images/call.svg'
const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <div className="contact">
                    <div className="contact-main_wrapper">
                        <div className="contact-main">
                            <div className="contact-main_header">
                                <h1>Contact us</h1>
                                <p>Fill up the form and our team will get back to you within 24 hours</p>
                            </div>
                            <div className="contact-main_footer">
                                <div className="contact-main_footer--tel">
                                    <div className="tel"><img src={call}alt="Kartlog call"/></div>
                                    <p className="mobile-number">+234 7063666667</p>
                                </div>
                                <div className="contact-main_footer--mail">
                                    <span className="material-icons">mail</span>
                                    <p className="mail">Contact@Kartlog.co</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}

export default Contact