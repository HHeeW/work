import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { windowHeight, windowWith } from '../utils/Dimensions'
import React from 'react'

const FormButton = ({ buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}{...rest}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}

export default FormButton

const styles = StyleSheet.create({
    buttonContainer:{
        marginTop: 10,
        width: '100%',
        height: 100,
        backgroundColor: '#0c751e',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
})