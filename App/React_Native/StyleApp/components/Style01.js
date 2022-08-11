import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Style01 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.fontstyle}>스타일시트 적용</Text>
        <Text style={[styles.fontstyle, styles.fontweight]}>스타일시트 적용</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 60,
        marginLeft: 30
    },
    fontstyle:{
        fontSize:20,
        color:"red"
    },
    fontweight:{
        fontWeight:'bold'
    }
})

export default Style01