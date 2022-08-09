import React from 'react'
import { View, StyleSheet } from 'react-native'
import TabBarItem from './TabBarItem'

const TabBar = () => {
  return (
    <View style={sty.container}>
       <TabBarItem title='All' />
       <TabBarItem title='Active' />
       <TabBarItem title='Complate' />
    </View>
  )
}
const sty = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#707070'
    }
})

export default TabBar