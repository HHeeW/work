import React from 'react'
import { View, TextInput, StyleSheet} from 'react-native'

const Input = ({ inputValue, inputChange }) => {
  return (
    <View style={sty.inputContainer}>
        <TextInput style={sty.input} 
                   placeholder='할일을 입력하세요.' 
                   placeholderTextColor='rgba(175, 45, 45, 0.3)'
                   selectionColor='#333333'
                   value={inputValue} 
                   onChangeText= {inputChange} /> 
    </View>
  )
}

const sty = StyleSheet.create({
    inputContainer: {
       marginLeft: 20,
       marginRight: 20,
       shadowOpacity: 0.2,
       shadowRadius: 3,
       shadowColor: '#000000',
       shadowOffset: { width: 2, height: 2 },
       borderWidth:1,
       borderColor:'#707070'
    },
    input: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10
    }   
})


export default Input