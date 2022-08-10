import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

const TabBarItem = ({title}) => {
  return (
    <TouchableHighlight style={[sty.item, sty.border]}>
        <Text style={sty.itemText}>
            {title}
        </Text>
    </TouchableHighlight>
  )
}
const sty = StyleSheet.create({
    item: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
    },
    border: {
       borderLeftWidth:1,
       borderLeftColor: '#707070'
    }, 
    itemText: {
       color: '#333333',
       fontSize: 17
    },
    selected: {
       backgroundColor: '#ffffff'
    },
    bold: {
       fontWeight: 'bold'
    }
})

export default TabBarItem