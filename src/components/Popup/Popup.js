import React, { useRef, useState } from 'react'
import './Popup.css'
import Swal from "sweetalert2";
import { scrollLock, scrollUnLock } from '../../scroll/scroll'

const Popup = () => {

  let p = useRef()


  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const subscribe = () => {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      return Swal.fire({
        title: "Warning",
        text: "Invalid Email",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
    fetch("/subscribe", {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: firstName,
        email: email
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          return Swal.fire({
            title: "Error",
            text: data.error,
            icon: "error",
            confirmButtonText: "OK",
          });
        }
        setFirstName('')
        setEmail('')
        scrollUnLock();
        let popup = p.current
        popup.classList.remove("show")
        
        return Swal.fire({
          title: "Successful",
          text: data.result,
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch(error => console.log(error))
  }

  const [textDay, setTextDay] = useState(0)
  const [texthr, setTextHr] = useState(0);
  const [textMin, setTextMin] = useState(0);
  const [textSec, setTextSec] = useState(0);

  setInterval(() => {

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



  const cancelHandler = () => {
    scrollUnLock();
    let popup = p.current
    popup.classList.remove("show")
  }

  return (
    <div className="popup-container" ref={p}>
      <div className="popup-wrapper no-highlight">
        <div className="popup-cancel">
          <span className="material-icons" onClick={cancelHandler}>close</span>
        </div>
        <div className="popup-details">
          <div className="popup-details-header">
            <h1>Coming soon</h1>
          </div>
          <div className="popup-details-content">
            <div className="popup-details-content-input-wrapper">
              <div className="popup-details-content-input">
                <input type="text" name="firstName" placeholder="First name" autoComplete="off" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" name="email" placeholder="Enter your email address" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <button className="popup-details-content-subscribe" type="submit" onClick={() => subscribe()}>
                <span className="material-icons">notifications</span>
              </button>
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