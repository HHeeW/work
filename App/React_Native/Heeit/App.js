import React from 'react'
import "react-native-gesture-handler";
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StatusBar } from "expo-status-bar";

import Icon from 'react-native-vector-icons/Feather'

import Home from './components/Home'
import Search from './components/Search';
// import Footer from './components/Home/Footer'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
    <SafeAreaView style={{marginTop: getStatusBarHeight()}} />

    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
          name="Search" 
          component={Search}
          options={{tabBarIcon:()=>(
            <Text> {`{/}`} </Text>
          )}}
         />

        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{tabBarIcon:()=>(
            <Icon name='home' size={20} color={'black'} />
          ),}}
        />


      </Tab.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App