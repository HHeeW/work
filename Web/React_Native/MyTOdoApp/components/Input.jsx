import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Heading from './Heading'
const Input = () => {
    return (
        <View style={st.inputContainer}>
            <TextInput style={st.input}>

            </TextInput>
        </View>
    )
}

const st = StyleSheet({
    inputContainer: {
        marginLeft: 30,
        marginRight: 30,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: {width:2, height:2},
        borderWidth: 1,
        borderColor:"#707070"
    },
    input:{
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
    }
})

export default Input