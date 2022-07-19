import React from 'react'
import './Activity.css'
import africa from '../../Images/Div3.svg'
const Activity = () => {
  return (
    <div className="activity">
      <div className="activity_content_wrapper">
        <div className="activity_content">
          <h1>What we do at Kartlog</h1>
          <p className="activity_content-p--first">For two centuries, the fashion industry has gone through diverse transitions and trends to be what we have today and in response to emerging trends of on-demand bespoke clothing. Kartlog is building the future of fashion.</p>
          <p>Customized clothing experience has become the future of fashion shopping<br/> We are building a social hub in Fashion industry for Africa to promote bespoke clothings across cultural and geographical boundaries</p>
        </div>
      </div>
      <div className="activity_image_wrapper">
        <div className="activity_image">
          <img src={africa} alt="africa" />
        </div>
      </div>
    </div>
  )
}

export default Activity