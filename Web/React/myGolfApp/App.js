import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from './Screens/SignInScreen'
import SignUpScreen from './Screens/SignInScreen'
import MainScreen from './Screens/SignInScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='SignIn' options={{ headerShown: false}} component={SignInScreen}/>
          <Stack.Screen name='Main' options={{ headerShown: false}} component={MainScreen}/>
          <Stack.Screen name='SignUp' options={{ headerShown: false}} component={SignUpScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App