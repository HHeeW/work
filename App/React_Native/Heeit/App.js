import React from 'react'
import { ScrollView } from 'react-native'
import Footer from './components/Footer'
import Header from './components/Header'
import Slider from './components/Slider'
import Userpick from './components/Userpick'

const App = () => {
  return (
    <>
      <Header/>
      <ScrollView>
        <Slider/>
        <Userpick/>
      </ScrollView>
      <Footer/>
    </>
  )
}

export default App