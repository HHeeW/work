import React from 'react'
import { View } from 'react-native'

const Rows = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
       {props.children}
    </View>    
  )
}

export default Rows