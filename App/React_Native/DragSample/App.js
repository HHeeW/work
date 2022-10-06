import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Draggable from 'react-native-draggable';

const App = () => {

  const pressHandler = (e) => {
    console.log(e);
    console.log(e.nativeEvent);
  };
  

  return (
    <View style={{width: '100%', height:'100%', backgroundColor:'gray'}}>
      <Draggable x={75} y={100} 
        renderSize={56} 
        renderColor='black' 
        renderText='A' 
        isCircle 
        shouldReverse 
        onShortPressRelease={()=>alert('touched!!')}
      />
      <Draggable x={100} y={200} maxY={200} minY={200} renderColor='red' renderText='B'/>
      <Draggable x={200} y={100} maxX={200} minX={200} renderColor='blue'>
        <Image style={{width:50, height:50}} source={require('./assets/01.jpg')}/>
      </Draggable>
      <Draggable 
          onDrag={()=>{pressHandler}}
          x={200} y={300} 
          renderColor='green' 
          renderText='C'
      />
      <TouchableOpacity onPress={pressHandler}><Text>123</Text></TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})