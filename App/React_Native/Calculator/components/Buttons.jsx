import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native'

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const Buttons = ({ text, size, theme, onPress }) => {

  const buttonStyle =[styles.button];
  const textStyle = [styles.text];

  if(theme === 'secondary') {
     buttonStyle.push(styles.buttonSecondary);
     textStyle.push(styles.textSecondary)
  }else if(theme === 'accent') {
     buttonStyle.push(styles.buttonAccent)
  }
  if(size === 'double') {
     buttonStyle.push(styles.buttonDouble)
  }

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 25
    },
    button:{
        backgroundColor:'#444',
        flex:1,
        margin: 5,
        height: Math.floor(buttonWidth - 10),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Math.floor(buttonWidth)
    },
    buttonDouble: {
        width: screen.width / 2 - 10,
        flex: 0,
        alignItems: 'flex-start',
        paddingLeft: 40
    },
    textSecondary: {
       color:'#060606'
    },
    buttonSecondary: {
       backgroundColor: '#a6a6a6'
    },
    buttonAccent: {
       backgroundColor: '#ff5722'
    }
})

export default Buttons