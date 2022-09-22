import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen'
import MessagesScreen from '../screens/MessagesScreen'
import ProfileScreen from '../screens/ProfileScreen'
import EditProfileScreen from '../screens/EditProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import BoardScreen from '../screens/BoardScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack =({navigation}) => (
  <Stack.Navigator>
      <Stack.Screen
          name="같이골프치자"
          component={HomeScreen}
          options={{
             headerTitleAlign: 'center',
             headereTitleStyle: {
                color: '#0c751e',
                fontWeight: 'bold',
                fontSize: 18
             },
             headerStyle:  {
                shadowColor: '#b7ffc3',
                elevation: 0
             },
             headerRight: ()=>(
              <View style={{marginRight: 10}}>
                 <FontAwesome5.Button
                     name="plus"
                     size={22}
                     backgroundColor="#fff"
                     color="#0c751e"
                     onPress={()=> navigation.navigate('Board')}
                 />    
              </View>
             ),
          }}
      />
      <Stack.Screen
          name="Board"
          component={BoardScreen}
          options={{
              title: '',
              headerTitleAlign: 'center',
              headerStyle:{
                 backgroundColor:'#0c751e',
                 shadowColor:'#02300a',
                 elevation:2
              },
              headerBackTitleVisible: false,
              headerBackImage: ()=> (
                <View style={{marginLeft: 15}}>
                    <Ionicons name="arrow-back" size={25} color="#FFFFFF" />
                </View>
              )
          }}
        />
      <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
             title: '',
             headeerTitleAlign: 'center',
             headerStyle: {
                backgroundColor:'#fff',
                shadowColor: '#fff',
                elevation: 0
             },
             headerBackTitleVisible: false,
             headerBackImage: ()=> (
                <View style={{ marginLeft: 15 }}>
                   <Ionicons name="arrow-back" size={25} color="#0c751e" />
                </View>
             )
          }}
        />  
  </Stack.Navigator>    
);

const MessageStack =({navigation}) => (
  <Stack.Navigator>
      <Stack.Screen
          name="Messages"
          component={MessagesScreen}
      />
      <Stack.Screen    
          name="Chat"
          component={ChatScreen}
          options={({route})=>({
            title: route.params.userName,
            headerBackTitleVisible: false
          })}
      />
  </Stack.Navigator>
);

const ProfileStack = ({ navigation }) => (
  <Stack.Navigator>
      <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false
          }}
      />
      <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{
            headerTitle: '회원정보 등록/수정'
          }}
      />          
  </Stack.Navigator>
);

const AppStack = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
          ? route.state.routes[route.state.index].name
          : '';  
    
    if(routeName === 'Chat') {
       return false;
    } 
    return true;
  };

  return (
     <Tab.Navigator
        screenOptions = {{
           tabBarActiveTintColor: '#0c751e'
        }}
     >
       <Tab.Screen
           name="Home"
           component= { FeedStack }
           options={            
            ({route})=>({
             tabBarLabel : 'Home',
             tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons
                   name="home-outline"
                   color={color}
                   size={size}
                />           
             )
           })}
       />    
       <Tab.Screen
           name="Message"
           component= { MessageStack }
           options={({route})=>({
             tabBarVisible: getTabBarVisibility(route),
             tabBarIcon: ({ color, size}) => (
                <Ionicons
                   name="chatbox-ellipses-outline"
                   color={color}
                   size={size}
                />           
             )
           })}
       />  
       <Tab.Screen
           name="Profile"
           component= { ProfileStack }
           options={{
             tabBarIcon: ({ color, size}) => (
                <Ionicons
                   name="person-outline"
                   color={color}
                   size={size}
                />           
             )
           }}
       />         
     </Tab.Navigator>   
  )
}

export default AppStack