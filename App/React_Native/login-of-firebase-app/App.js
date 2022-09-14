import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthContextProvider } from './Context/AuthContextProvider'

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SigninScreen from './screens/SigninScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </AuthContextProvider>
    </NavigationContainer>
  )
}

export default App