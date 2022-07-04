import React, {useEffect, useRef, useState} from 'react'
import './Popup.css'

const Popup = () => { 

  const [textDay, setTextDay] = useState(0)
  const [texthr, setTextHr] = useState(0);
  const [textMin, setTextMin] = useState(0);
  const [textSec, setTextSec] = useState(0);

  setInterval(()=>{

    const futureDate = new Date("July 7, 2022 00:00:00").getTime()
    const presentDate = new Date()
    const countDate = futureDate - presentDate
  
    const sec = 1000
    const min = sec * 60
    const hr = min * 60
    const day = hr * 24
  
    setTextDay(Math.floor(countDate / day))
    setTextHr(Math.floor((countDate % day) / hr))
    setTextMin(Math.floor((countDate % hr) / min))
    setTextSec(Math.floor((countDate % min) / sec))
  }, 1000)

  let p = useRef()
  useEffect(()=>{
    let popup = p.current

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
                  <input type="text" name="firstName" placeholder="First name"autoComplete="off"/>
                  <input type="text" name="firstName" placeholder="Enter your email address"autoComplete="off"/>
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
                <div className="popup-time-box-digit">{textDay}</div>
                <div className="popup-time-box-text">Days</div>
              </div>
              <div className="popup-time-box">
                <div className="popup-time-box-digit">{texthr}</div>
                <div className="popup-time-box-text">Hours</div>
              </div>
              <div className="popup-time-box">
                <div className="popup-time-box-digit">{textMin}</div>
                <div className="popup-time-box-text">Minutes</div>
              </div>
              <div className="popup-time-box">
                <div className="popup-time-box-digit">{textSec}</div>
                <div className="popup-time-box-text">seconds</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Popup