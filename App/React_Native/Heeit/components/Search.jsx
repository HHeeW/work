import React from 'react'
import { View } from 'react-native'
import main from './main'
import Header from './Search/Header'

const Search = () => {
  return (
    <>
      <View style={main.background}>
        <Header/>
      </View>
    </>
  )
}

export default Search