import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Image, Text, View } from 'react-native'
import main from './main'
import slide from './slide'

const Slider = () => {
  return (
    <View style={[main.marginLR, {flex:1}]}>
        <View style={[main.marginTB, slide.slidebox]}>
            <Image source={require('../../img/slider01.png')} style={{width:'100%', height:'100%'}} />
            <View style={slide.textbox}>
              <Text style={slide.text}>아이케어닥터</Text>
              <Text style={slide.text}>ReactNative 프로그래머</Text>
            </View>
        </View>
        <View style={[main.row, slide.go]} >
            <Text style={[main.h3, main.bold]} >프론트엔드</Text>
            <Text style={[main.h3, {flex:2}]}>포지션 확인하러 가기</Text>
            <Icon name='right' color={'#aaa'} size={20}/>
        </View>
    </View>
  )
}

export default Slider