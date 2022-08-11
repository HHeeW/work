import React, { useState } from 'react'
import { Alert, Button, Text, View } from 'react-native'
import getStylSheet from '../style/style';
const Style03 = () => {
    const [mode, setMode] = useState(true);
    const toggleTheme =()=>{
        setMode(!mode);
        Alert(mode);
    }
    const sty = getStylSheet(mode);
  return (
    <View style={sty.container}>
        <Text style={sty.h1}>StyleSheet</Text>
        <Button title='Change Mode'
                onPress={toggleTheme}/>
    </View>
  )
}

export default Style03