import React from 'react'
import './Activity.css'
import africa from '../../Images/Div3.svg'
const Activity = () => {
  return (
    <div className="activity">
        <div className="activity_content">
            <h1>What we do at Kartlog</h1>
            <p>We are building a social hub in the Fashion Industry for Africa to promote bespoke clothings across cultural and geographic boundaries</p>
        </div>
        <div className="activity_image">
            <img src={africa} alt="africa"/>
        </div>
    </div>
  )
}

export default Activity