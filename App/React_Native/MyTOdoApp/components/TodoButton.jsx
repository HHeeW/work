import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TodoButton = ({ name, onPress, complete }) => {
  return (
    <View style={sty.buttons}>
        <TouchableOpacity 
            onPress={onPress}>
            <Text 
             style={[sty.text, complete ? sty.complete:null, name === '삭제'?sty.deleteButton:null]}>{name}</Text>
        </TouchableOpacity>
    </View>
  )
}
const sty = StyleSheet.create({
    buttons: {
        flex:1,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       border:1,
       paddingTop:2,
       paddingBottom:2,
       borderWidth:1,
       borderColor:'#999999',
       marginLeft:5
    },
    text: {
        color: '#333333'
    },
    complete: {
        color:'green',
        fontWeight: 'bold'
    },
    deleteButton: {
        color: 'tomato'
    }   
});
export default TodoButton