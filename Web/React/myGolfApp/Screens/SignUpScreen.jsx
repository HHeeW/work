import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignUpScreen = () => {
  return (
    <View>
      <View></View>
      <Text>SignUpScreen</Text>
      <View/>
      <TextInput style={subStyle.InPutBox} placeholder={"Name"} />
      <TextInput style={subStyle.InPutBox} placeholder={"E-mail"} />
      <TextInput style={subStyle.InPutBox} placeholder={"Password"} />
      <TextInput style={subStyle.InPutBox} placeholder={"Confirm Password"} />
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})