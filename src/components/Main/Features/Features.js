import React, { useState } from 'react'
import './Features.css'
import { useMediaQuery } from 'react-responsive'


import measurementDesktop from '../../Images/Images-new/measure-desktop.png';
import paymentDesktop from '../../Images/Images-new/payment-desktop.png';
import manageDesktop from '../../Images/Images-new/manage-desktop.png';
import marketDesktop from '../../Images/Images-new/market-desktop.png';

import catalogDesktop from '../../Images/Images-new/catalog-desktop.png';
import safeDesktop from '../../Images/Images-new/safe-desktop.png';
import specializationDesktop from '../../Images/Images-new/specialization-desktop.png';

import FeaturesDesktop from './FeaturesDesktop/FeaturesDesktop'
import FeaturesMobile from './FeaturesMobile/FeaturesMobile'

import FeaturesCusDesktop from './FeaturesDesktop/FeaturesCusDesktop'
import FeaturesCusMobile from './FeaturesMobile/FeaturesCusMobile'




const Features = () => {
  const isBigScreen = useMediaQuery({ query: '(max-width: 880px)' })
  const [num, setNum] = useState({
    id_0: 1,
    id_1: 0,
    id_2: 0,
    id_3: 0
  })
  const [imgNum, setImgNum] = useState(0)

  const p_one = () => {
    setNum({
      id_0: 1,
      id_1: 0,
      id_2: 0,
      id_3: 0
    })
    setImgNum(0)
  }
  const p_two = () => {
    setNum({
      id_0: 0,
      id_1: 1,
      id_2: 0,
      id_3: 0
    })
    setImgNum(1)
  }
  const p_three = () => {
    setNum({
      id_0: 0,
      id_1: 0,
      id_2: 1,
      id_3: 0
    })
    setImgNum(2)
  }
  const p_four = () => {
    setNum({
      id_0: 0,
      id_1: 0,
      id_2: 0,
      id_3: 1
    })
    setImgNum(3)
  }

  
  
  const [numCus, setCusNum] = useState({
    id_0: 1,
    id_1: 0,
    id_2: 0,
  })
  const [imgCusNum, setImgCusNum] = useState(0)

  const pc_one = () => {
    setCusNum({
      id_0: 1,
      id_1: 0,
      id_2: 0,
    })
   setImgCusNum(0)
  }
  const pc_two = () => {
    setCusNum({
      id_0: 0,
      id_1: 1,
      id_2: 0,
    })
   setImgCusNum(1)
  }
  const pc_three = () => {
    setCusNum({
      id_0: 0,
      id_1: 0,
      id_2: 1
    })
   setImgCusNum(2)
  }
  const imgArray = [measurementDesktop, paymentDesktop, manageDesktop, marketDesktop]
  const imgCusArray = [catalogDesktop, safeDesktop, specializationDesktop]

  return (
    <section className="features_wrapper">
      <div className="features">
        <div className="features-header_wrapper">
          <div className="features-header-main">
            <h1>FEATURES</h1>
          </div>
          <div className="features-header-sub">
            <h1>Fashion Designers</h1>
            <p>You can now digitalize of your business operation</p>
          </div>
        </div>
        {isBigScreen ?
          <FeaturesMobile
            id_0={num.id_0} id_1={num.id_1}
            id_2={num.id_2} id_3={num.id_3}
            p_one={p_one} p_two={p_two}
            p_three={p_three} p_four={p_four} />
          :
          <FeaturesDesktop imgArray={imgArray} imgNum={imgNum}
            id_0={num.id_0} id_1={num.id_1}
            id_2={num.id_2} id_3={num.id_3}
            p_one={p_one} p_two={p_two}
            p_three={p_three} p_four={p_four}
          />}
        <div className="features-header_wrapper features-space">
          <div className="features-header-sub">
            <h1>Customers</h1>
            <p>You can now digitalize your bespoke shopping experience</p>
          </div>
        </div>
        {isBigScreen ?
          <FeaturesCusMobile
            id_0={numCus.id_0} id_1={numCus.id_1}
            id_2={numCus.id_2} id_3={numCus.id_3}
            pc_one={pc_one} pc_two={pc_two}
            pc_three={pc_three} />
          :
          <FeaturesCusDesktop imgCusArray={imgCusArray} imgCusNum={imgCusNum}
            id_0={numCus.id_0} id_1={numCus.id_1}
            id_2={numCus.id_2} id_3={numCus.id_3}
            pc_one={pc_one} pc_two={pc_two}
            pc_three={pc_three}
          />}
      </div>
    </section>
  )
}

export default Features