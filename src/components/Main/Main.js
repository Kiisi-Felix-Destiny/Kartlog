import React from 'react'

import Fashion from './Fashion/Fashion'
import Digital from './Digital/Digital'
import Benefits from './Benefits/Benefits'
import Activity from './Activity/Activity'
import GetStarted from './GetStarted/GetStarted'
import Contact from './Contact/Contact'

const Main = () => {
  return (
    <div className="k-wrapper">
        <Fashion/>
        <Digital/>
        <Benefits/>
        <Activity/>
        <GetStarted/>
        <Contact/>
    </div>
  )
}

export default Main