import React from 'react'
import BodyBot from './component/BodyBot'
import BodyFooter from './component/BodyFooter'
import BodyMid from './component/BodyMid'
import BodyTop from './component/BodyTop'
import Footer from './component/Footer'
import Header from './component/Header'
import Slider from './component/Slide'

const App = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <BodyTop/>
      <BodyMid/>
      <BodyBot/>
      <BodyFooter/>
      <Footer/>
    </div>
  )
}

export default App