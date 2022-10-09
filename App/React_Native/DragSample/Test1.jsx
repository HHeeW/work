import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Draggable from 'react-native-draggable';

const Test1 = () => {

  const pressHandler = (e) => {
    console.log(e.nativeEvent.locationX);
    console.log(e.nativeEvent.locationY);
  };
  

  return (
    <View style={{width: '100%', height:'100%', backgroundColor:'gray'}}>
      <Draggable x={75} y={400} z={100}
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
      <TouchableOpacity onPress={pressHandler}>
        <Draggable 
            x={200} y={300} 
            renderColor='green' 
            renderText='C'
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={pressHandler}>
        <View style={{ height:100, backgroundColor:'#aaa'}}>
          
        </View>
      </TouchableOpacity>
      <Button title='123' onPress={pressHandler}><Text>123</Text></Button>
    </View>
  )
}

export default Test1

const styles = StyleSheet.create({})