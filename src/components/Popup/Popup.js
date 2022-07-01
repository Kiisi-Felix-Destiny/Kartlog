import React, {useEffect, useRef} from 'react'
import './Popup.css'

const Popup = () => { 

  let p = useRef()
  useEffect(()=>{
    let popup = p.current
    console.log(popup)

    const popupBtn = document.querySelectorAll(".btn-popup");	
    const btnFunc = () =>{
      popup.classList.add("show")
    }
    popupBtn.forEach(n => n.addEventListener('click', btnFunc))
		
	}, [])

  const cancelHandler = () =>{
    let popup = p.current
    popup.classList.remove("show") 
  }

  return (
    <div className="popup-container" ref={p}>
        <div className="popup-wrapper">
          <div className="popup-cancel">
            <span className="material-icons"onClick={cancelHandler}>close</span>
          </div>
          <div className="popup-details">
            <div className="popup-details-header">
              <h1>Coming soon</h1>
            </div>
            <div className="popup-details-content">  
              <div className="popup-details-content-input-wrapper">
                <div className="popup-details-content-input">
                  <input type="text" name="firstName" placeholder="First name"/>
                  <input type="text" name="firstName" placeholder="Enter your email address"/>
                </div>
                <div className="popup-details-content-subscribe">
                  <span className="material-icons">notifications</span>
                </div>
              </div>
              <div className="pop-details-content-text">Get Notified When we launch</div>
            </div>
          </div>
          <div className="popup-time-wrapper">
            <div className="popup-time">
              <div className="popup-time-box">
                <div className="popup-time-box-digit">60</div>
                <div className="popup-time-box-text">Days</div>
              </div>
              <div className="popup-time-box">
                <div className="popup-time-box-digit">00</div>
                <div className="popup-time-box-text">Hours</div>
              </div>
              <div className="popup-time-box">
                <div className="popup-time-box-digit">60</div>
                <div className="popup-time-box-text">Minutes</div>
              </div>
              <div className="popup-time-box">
                <div className="popup-time-box-digit">60</div>
                <div className="popup-time-box-text">seconds</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Popup