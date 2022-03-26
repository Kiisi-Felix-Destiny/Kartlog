import React,{useState} from 'react'
import './Footer.css'
import * as Bi from 'react-icons/bi'
import * as Fa from 'react-icons/fa'

const Footer = () =>{

    const [pop,setPop] = useState(true)

    const contactHandler = ()=>{
        setPop(!pop)
        let contact = document.querySelector(".contact")
        let telegram = document.querySelector(".telegram")
        let whatsapp = document.querySelector(".whatsapp")
        let instagram = document.querySelector(".instagram")
        let mail = document.querySelector(".mail")
        let messenger = document.querySelector(".messenger")
        let twitter = document.querySelector(".twitter")

        if(pop){
            contact.classList.add("effect")
            contact.classList.remove("d-effect")
            telegram.classList.add("contact-effect")
            whatsapp.classList.add("contact-effect")
            instagram.classList.add("contact-effect")
            mail.classList.add("contact-effect")
            messenger.classList.add("contact-effect")
            twitter.classList.add("contact-effect")

            telegram.classList.remove("contact-effect-default")
            whatsapp.classList.remove("contact-effect-default")
            instagram.classList.remove("contact-effect-default")
            mail.classList.remove("contact-effect-default")
            messenger.classList.remove("contact-effect-default")
            twitter.classList.remove("contact-effect-default")
        }else{
            contact.classList.remove("effect")
            contact.classList.add("d-effect")
            telegram.classList.remove("contact-effect")
            whatsapp.classList.remove("contact-effect")
            instagram.classList.remove("contact-effect")
            mail.classList.remove("contact-effect")
            messenger.classList.remove("contact-effect")
            twitter.classList.remove("contact-effect")

            telegram.classList.add("contact-effect-default")
            whatsapp.classList.add("contact-effect-default")
            instagram.classList.add("contact-effect-default")
            mail.classList.add("contact-effect-default")
            messenger.classList.add("contact-effect-default")
            twitter.classList.add("contact-effect-default")
        }
    }


    return (
        <footer className='footer'>
            <div className='footer-wrapper'>
                <header className="footer-header">
                    <div className="footer-header--primary">TodoList</div>
                </header>
                <div className='footer-row--contact'>
                    <div className='footer--contact--circle'>
                        <div className="contact"onClick={contactHandler}><Bi.BiPhoneCall className="phone-call"/></div>
                        <Fa.FaTelegramPlane className="telegram"/>
                        <Fa.FaWhatsapp className="whatsapp"/>
                        <Fa.FaInstagram className="instagram"/>
                        <Fa.FaTwitter className="twitter"/>
                        <Fa.FaFacebookMessenger className="messenger"/>
                        <Bi.BiMailSend className="mail"/>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'><div className="footer-bottom-text">Developed By: Destiny Felix Kiisi</div></div>
        </footer>
    );
}

export default Footer