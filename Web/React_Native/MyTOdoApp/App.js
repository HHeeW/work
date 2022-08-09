import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './components/Heading'
import Input from './components/Input'
const App = () => {
  return (
    <View style={st.container}>
      <ScrollView style={st.content} keyboardShouldPersistTaps='always'>
        <Heading/>
        <Input/>
      </ScrollView>
    </View>
  )
}

const st = StyleSheet({
  container:{
    flex:1,
    backgroundColor: '#efefef'
  },
  content:{
    flex:1,
    paddingTop:60
  }
})
export default App