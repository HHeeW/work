import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import SigninScreen from '../screens/SignInScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen
           name="Login"
           component={SigninScreen}
           option={{ header: ()=> null}}
       />    
    </Stack.Navigator>    
  )
}

export default AuthStack