import React from 'react'
import Activity from './Activity/Activity'
import Benefits from './Benefits/Benefits'
import Digital from './Digital/Digital'
import Fashion from './Fashion/Fashion'

const Main = () => {
  return (
    <div className="k-wrapper">
        <Fashion/>
        <Digital/>
        <Benefits/>
        <Activity/>
    </div>
  )
}

export default Main