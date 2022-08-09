import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Heading = () => {
  return (
    <View style={st.header}>
        <Text style={st.headerText}>
            할일목록
        </Text>
    </View>
  )
}

const st = StyleSheet.create({
    header:{
        marginTop:70
    },
    headerText:{
        textAlign:'center',
        fontSize: 70,
        color: 'rgba(175, 45, 45, 0.4)',
        fontWeight: '600'
    }
})

export default Heading