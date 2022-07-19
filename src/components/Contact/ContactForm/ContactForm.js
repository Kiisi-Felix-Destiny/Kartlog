import React, {useRef, useEffect} from 'react'
import './ContactForm.css'
const ContactForm = () => {

  const input = useRef();

  useEffect(() => {
    console.log(input)
    
  }, [])
  

  return (
    <div className="contact-form_wrapper">
      <div className="contact-form">
        <div className="contact-form-small">
          <label for="name">Name</label>
          <div class="input-box"tabIndex="1" ref={input}>
            <span class="material-icons">person_outline</span><input type="email" id="name" />
          </div>
        </div>
        <div className="contact-form-small">
          <label for="email">Email</label>
          <div class="input-box" tabIndex="1">
            <span class="material-icons">mark_email_unread</span><input type="email" id="email" />
          </div>
        </div>
        <div className="contact-form-big">
          <label for="message">Message</label>
          <div class="input-box">
            <textarea type="text" id="message" placeholder="Message" />
          </div>
        </div>
        <div className="contact-form-btn-wrapper">
          <div className="btn">Send Message</div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm