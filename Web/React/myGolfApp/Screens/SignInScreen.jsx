import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { subStyle } from '../style/Components'

const Di = Dimensions.get('screen')

const SignInScreen = () => {
  return (
    <View style={subStyle.Container}>
      <View style={{width:150, height:150, backgroundColor:'#fff', borderRadius:100}}>
        <Text style={{color:'rgb(70, 181, 190)', fontWeight:'900', fontSize: 200, textAlign:'center',padding:0, margin:0, marginTop:-65}}>H</Text>
      </View>
      <View style={{width:100, height:20, shadowColor:'#000'}} />
      <Text style={{fontSize:40, color:'#fff', fontWeight:'300', marginBottom:50}}>Welcom to <Text style={{fontWeight:'bold'}}>Golf</Text></Text>
      <TextInput style={subStyle.InPutBox} placeholder={"UserEmail"}/>
      <TextInput style={subStyle.InPutBox} placeholder={"Password"} />
      <TouchableOpacity style ={subStyle.buttonBox}>
        <Text style={ subStyle.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})