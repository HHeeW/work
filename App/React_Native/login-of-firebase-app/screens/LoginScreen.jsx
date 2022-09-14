import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const LoginScreen = () => {
  const navigation = useNavigation(); 
  const handleSignUp = () => {
    navigation.navigate('Signin')
  }
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button onPress={ handleSignUp } title="회원가입" color={"#9ddaf7"} />
    </View>
  )
}

export default LoginScreen