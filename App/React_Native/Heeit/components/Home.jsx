import React from 'react'
import { ScrollView } from 'react-native'
import Header from './Home/Header'
import Slider from './Home/Slider'
import Thisweek from './Home/Thisweek'
import Userpick from './Home/Userpick'

const Home = () => {
  return (
    <>
      <Header/>
      <ScrollView style={{marginBottom:50}}>
        <Slider/>
        <Userpick/>
        <Thisweek/>
      </ScrollView>
    </>
  )
}

export default Home