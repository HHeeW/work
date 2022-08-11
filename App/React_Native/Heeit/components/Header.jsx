import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { Image, Text, View } from 'react-native'
import header from './header'
import main from './main'

const Header = () => {
  return (
    <View style={header.header}>
        <View style={[header.box, main.row]}>
          <View style={header.logobox}>
            <Image source={require('../img/logo.png')} style={{width:100, height:30}} />
          </View>
          <View style={[header.searchbox, main.row]}>
            <Icon name='search' color='#00EE00' size={20} style={{paddingLeft:10, paddingRight:10}} />
            <Text style={[header.searctext, main.h4]}>'HTML'를 검색해보세요</Text>
          </View>
        </View>
    </View>
  )
}

export default Header