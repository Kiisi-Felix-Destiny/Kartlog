import React from 'react'
import './Contact.css';
import ContactForm from './ContactForm/ContactForm';
import call from '../../Images/call.svg'

const Contact = () => {
    return (
        <div className="contact_container">
            <div className="contact_wrapper">
                <div className="contact_pag">
                    <div className="contact">
                       <h1>Contact us</h1>
                       <p>Fill up the form and our team will get back to you within 24 hours</p> 
                    </div>
                    <div className="contact_b">
                        <div className="contact_info">
                            <img src={call} alt="call"/>
                            <p>+234 7063666667</p>
                        </div>
                        <div className="contact_info">
                            <span className="material-icons">mail_outline</span>
                            <p>+234 7063666667</p>
                        </div>
                    </div>
                </div>
                <div className="contact_box">
                    <div className="contact-form">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact