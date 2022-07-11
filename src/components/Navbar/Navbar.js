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
        
        if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
            body.classList.remove("scroll-up")
            body.classList.add("scroll-down")
        }
        if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
            body.classList.remove("scroll-down")
            body.classList.add("scroll-up")
        }
        
        
        lastScroll = currentScroll
      })
    }, [])
    
    useEffect(()=>{
        const popup = document.querySelector('.popup-container')
	
        const popupBtn = document.querySelectorAll(".btn-popup");	
        const btnFunc = () =>{
          popup.classList.add("show")
        }
        popupBtn.forEach(n => n.addEventListener('click', btnFunc))
         
    }, [])


    return (
        <div className="k-wrapper nav-wrapper no-highlight">
            <nav className="nav">
                <div className="nav_logo">
                    <a href="/"><img src={Logo} alt="Kartlog"/></a>
                </div>
                <div className="nav_btn">
                    <div className="btn btn-res btn-popup">Get App Now</div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar