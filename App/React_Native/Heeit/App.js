import React from 'react'
import { ScrollView } from 'react-native'
import Footer from './components/Footer'
import Header from './components/Header'
import Slider from './components/Slider'
import Thisweek from './components/Thisweek'
import Userpick from './components/Userpick'

const App = () => {
  return (
    <>
      <Header/>
      <ScrollView style={{marginBottom:50}}>
        <Slider/>
        <Userpick/>
        <Thisweek/>
      </ScrollView>
      <Footer/>
    </>
  )
}

export default App