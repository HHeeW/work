import React from 'react'
import { ScrollView, View } from 'react-native'
import Header from './Home/Header'
import Slider from './Home/Slider'
import Thisweek from './Home/Thisweek'
import Userpick from './Home/Userpick'
import main from './main'

const Home = () => {
  return (
    <>
      <View style={main.background}>
      <Header/>
        <ScrollView>
          <Slider/>
          <Userpick/>
          <Thisweek/>
        </ScrollView>
      </View>
    </>
  )
}

export default Home