import React, { useState } from 'react'
import {  Pressable, ScrollView,  Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import main from '../main'
import header from './header'
import Stack from './Stack'

const Header = () => {
  const list1 = ['React', 'Vue.js', 'JavaScript', 'Node.Js', 'Svelte', 'HTML5', 'CSS3', 'AngularJS', 'jQuery']
  const [color, setColor] = useState(Array.from({length:7}, ()=>{return 0}))

  const list2 = ['경력', '#태그', '기술스택', '지역']
  const [stack, setStack] = useState(Array.from({length:4}, ()=>{return 0}))

  const reset = () => {
    let reset = Array.from({length:7}, ()=>{return 0})
    setColor(reset)
    reset = Array.from({length:4}, ()=>{return 0})
    setStack(reset)
  }

  const loop1 = () =>{
    let back= []
    for(let i in list1){
      back.push(
          <View  style={color[i]?header.skill1:header.skill0} key={i} >
            <Pressable onPress={()=>skill(i)}>
              <Text style={color[i]?header.white: header.black}> {list1[i]} </Text>
            </Pressable>
          </View>
      )
    }
    const skill = (i) =>{
      let aaa = [...color]
      aaa[i] = !aaa[i]
      setColor(aaa)
    }
    return back
  }
  
  const loop2 = () =>{
    let back= []
    for(let i in list2){
      back.push(
          <View  style={stack[i]?header.skill1:header.list} key={i} >
            <Pressable onPress={()=>skill(i)} style={main.row}>
              <Text style={stack[i]?header.white: header.black}> {list2[i]} </Text>
              <Icon name='chevron-down' color={'#ddd'} size={20} />
            </Pressable>
          </View>
      )
    }
    const skill = (i) =>{

      let aaa = [...stack]
      aaa[i] = !aaa[i]
      setStack(aaa)
    }
    return back
  }

  


  return (
    <>
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
        <View>
          <ScrollView horizontal={true}>
            <View style={[main.row, main.margin]}>
              {loop1()}
            </View>
          </ScrollView>
          <View style={[main.row, {borderTopColor:'rgba(200,200,200,0.2)', borderTopWidth:1}]}>
            <Icon name='rotate-ccw' color={'#000'} style={[header.list, {padding:10}]} onPress={reset} />
            <ScrollView horizontal={true}>
              <View style={[main.row, main.margin]}>
                {loop2()}
              </View>
            </ScrollView>
          </View>
        </View>
        <ScrollView style={{height:1000}} />
        </View>
      <Stack/>
    </>
  )
}



export default Header