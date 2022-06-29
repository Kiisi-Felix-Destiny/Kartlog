import React, { useEffect } from 'react'
import './Navbar.css'
import Logo from '../Images/Kartlogoblue.svg'

const Navbar = () => {

    useEffect(() => {
      let body = document.body
      let lastScroll = 0;

      window.addEventListener("scroll",()=>{
        let currentScroll = window.pageYOffset

        if (currentScroll <= 0){
            body.classList.remove("scroll-up")
        }
        if(currentScroll > 50){
            if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
                body.classList.remove("scroll-up")
                body.classList.add("scroll-down")
            }
            if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
                body.classList.remove("scroll-down")
                body.classList.add("scroll-up")
            }
        }
        
        lastScroll = currentScroll
      })
    }, [])
    


    return (
        <div className="k-wrapper nav-wrapper">
            <nav className="nav">
                <div className="nav_logo">
                    <img src={Logo} alt="Kartlog"/>
                </div>
                <div className="nav_btn">
                    <div className="btn">Get App Now</div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar