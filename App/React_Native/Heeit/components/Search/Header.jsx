import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import main from '../main'


const Header = () => {
  return (
    <View>
      <View style={main.row}>
        <View style={{flex:0.1}}/>
        <TouchableHighlight 
          activeOpacity={0.5}
          underlayColor="#DDD"
          onPress={() => {}}
          style={{flex:0.8}}>
          <View style={[main.row, main.marginauto, main.marginTB]}>
            <Text style={[main.h2, main.bold]}>프론트엔드 개발자</Text>
            <Icon name='chevron-down' color={'#00EE00'} size={20} />
          </View>
        </TouchableHighlight>
        <Icon name='search' color='#000' size={20} style={{flex:0.1}} />
      </View>
      <ScrollView horizontal={true}>
        <View style={[main.row, main.margin]}>
          {loop1()}
        </View>
      </ScrollView>
    </View>
  )
}

const loop1 = () =>{
  const list = ['React', 'Vue.js', 'JavaScript', 'Node.Js', 'Svelte', 'HTML5', 'CSS3', 'AngularJS', 'jQuery']
  let back= []
  const [skill, setSkill] = useState(0)
  for(i of list){
    back.push(
      <TouchableHighlight activeOpacity={0} onPress={()=> setSkill(!skill)} key={i} >
        <View  style={ skill ? header.skill1 : header.skill0}>2022
          <Text style={ skill ? header.white : header.black}> {i} </Text>
        </View>
      </TouchableHighlight>
    )
  }
  console.log(back)
  return back
}

const header = StyleSheet.create({
  skill0:{
    borderRadius:50,
    backgroundColor: 'rgba(0,220,0,0.1)',
    color:'#000',
    fontSize:18,
    padding:5,
    margin:5
  },
  skill1:{
    borderRadius:50,
    backgroundColor: 'rgba(0,220,0,1)',
    color:'#fff',
    fontSize:18,
    padding:5,
    margin:5
  },
  white:{
    color:'#fff',
    fontSize:18
  },
  black:{
    color:'#000',
    fontSize:18
  }
})

export default Header