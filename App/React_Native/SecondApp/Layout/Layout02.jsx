import React from 'react'
import { View, Text } from 'react-native'

const Layout02 = () => {
  return (
    <View style={{flexDirection:'row',flex:1, marginTop: 50, height: '100%'}}>
            <View style={{ justifyContent:'space-around', margin:30}}>
                <View style={{width:50, height:50, backgroundColor: '#e93e43'}}>
                    <Text>1</Text>
                </View>
                <View style={{width:50, height:50, backgroundColor:'#f5a941'}}>
                    <Text>2</Text>
                </View>
                <View style={{width:50, height:50, backgroundColor:'#4ebd7a'}}>
                    <Text>3</Text>
                </View>
            </View>
            <View style={{ justifyContent:'space-between', margin:30}}>
                <View style={{width:50, height:50, backgroundColor: '#e93e43'}}>
                    <Text>1</Text>
                </View>
                <View style={{width:50, height:50, backgroundColor:'#f5a941'}}>
                    <Text>2</Text>
                </View>
                <View style={{width:50, height:50, backgroundColor:'#4ebd7a'}}>
                    <Text>3</Text>
                </View>
            </View>
            <View style={{justifyContent:'space-evenly', margin:30}}>
                <View style={{width:50, height:50, backgroundColor: '#e93e43'}}>
                    <Text>1</Text>
                </View>
                <View style={{width:50, height:50, backgroundColor:'#f5a941'}}>
                    <Text>2</Text>
                </View>
                <View style={{width:50, height:50, backgroundColor:'#4ebd7a'}}>
                    <Text>3</Text>
                </View>
            </View>
        </View>
  )
}

export default Layout02