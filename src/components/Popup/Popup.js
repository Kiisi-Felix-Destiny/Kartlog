import React, { useRef, useState } from 'react'
import './Popup.css'
import Swal from "sweetalert2";
import Loader from '../../loader/Loader'
const Popup = () => {

  let p = useRef()
  let s = document.querySelector("body")

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [jsx, setJsx] = useState({i: true});
  const subscribe = () => {
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      setFirstName('')
      setEmail('')
      return Swal.fire({
        title: "Warning",
        text: "Invalid Email",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#0777A1",
      });
    }

    setJsx({i: false});
    fetch("https://kartlog.herokuapp.com/subscribe", {
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
          setJsx({i: true})
          setFirstName('')
          setEmail('')
          let popup = p.current
          popup.classList.remove("show")
          return Swal.fire({
            title: "Error",
            text: data.error,
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#0777A1",
          });
        }

        setJsx({i: true})
        setFirstName('')
        setEmail('')
        let popup = p.current
        popup.classList.remove("show")
        return Swal.fire({
          title: "Successful",
          text: data.result,
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#0777A1",
        });
      })
      .catch(error => {
        setJsx({i: true})
        return Swal.fire({
          title: "Error",
          text: "Check your internet connection",
          icon: "warning",
          confirmButtonText: "OK",
          confirmButtonColor: "#0777A1",
        });
      })
  }

  const [textDay, setTextDay] = useState(0)
  const [textHr, setTextHr] = useState(0);
  const [textMin, setTextMin] = useState(0);
  const [textSec, setTextSec] = useState(0);

  setInterval(() => {

    const futureDate = new Date("September 10, 2022 00:00:00").getTime()
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
    setFirstName('')
    setEmail('')
    let popup = p.current
    popup.classList.remove("show")
  }

  return (
    <div className="popup-container" ref={p} >
      <div className="popup-wrapper no-highlight">
        <div className="popup-cancel">
          <span className="material-icons" onClick={cancelHandler}>close</span>
        </div>
        <div className="popup-details">
          <div className="popup-details-header">
            <h1>Coming soon</h1>
            <p>Be the first to know when we launch</p>
          </div>
          <div className="popup-details-content">
            <div className="popup-details-content-wrapper">
              <input type="text" name="firstName" placeholder="First name" autoComplete="off" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <input type="text" name="email" placeholder="Enter your email address" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button className="popup-details-content-subscribe" type="submit" onClick={() => subscribe()} ref={s}>
                {jsx.i ? <div ref={s}><p>Get Notified</p> <span className="material-icons">notifications</span> </div> : <Loader/> }
              </button>
            </div>
          </div>
        </div>
        <div className="popup-timer">
          <div className="popup-time-wrapper">
            <div className="popup-time">
              <div className="popup-time-box">
                <div className="popup-time-box-digit">{textDay < 10 ? '0' + textDay : textDay }</div>
                <div className="popup-time-box-text">Days</div>
              </div>
              <div className="popup-time-box">
                <div className="popup-time-box-digit">{textHr < 10 ? '0' + textHr : textHr}</div>
                <div className="popup-time-box-text">Hours</div>
              </div>
              <div className="popup-time-box">
                <div className="popup-time-box-digit">{textMin < 10 ? '0' + textMin : textMin}</div>
                <div className="popup-time-box-text">Minutes</div>
              </div>
              <div className="popup-time-box">
                <div className="popup-time-box-digit">{textSec < 10 ? '0' + textSec : textSec}</div>
                <div className="popup-time-box-text">Seconds</div>
              </div>
            </div>
          </div>
        </div>
        <div className="popup-footer">
          <div className="popup-footer-text"><span>Kartlog </span> - Number of days left to go live</div>
        </div>
      </div>
    </div>
  )
}

export default Popup