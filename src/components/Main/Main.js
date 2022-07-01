import React from 'react'

import Fashion from './Fashion/Fashion'
import Digital from './Digital/Digital'
import Benefits from './Benefits/Benefits'
import Activity from './Activity/Activity'
import GetStarted from './GetStarted/GetStarted'

const Main = () => {
  return (
    <div className="k-wrapper">
        <Fashion/>
        <Digital/>
        <Benefits/>
        <Activity/>
        <GetStarted/>
    </div>
  )
}

export default Main