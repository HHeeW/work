import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { Button, Image, Text, TouchableHighlight, View } from 'react-native'
import main from './main'
import footer from './footer'

const Footer = ({navigation}) => {
  return (
    <View style={footer.footer}>
      <View style={[main.row, footer.box]}>
        <TouchableHighlight activeOpacity={0.6}
          underlayColor="#DDD"
          onPress={() => navigation.navigate('Home')}>
          <View style={footer.iconbox}>
            <Icon name='home' size={20} />
            <Text style={main.h4}>홈</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight activeOpacity={0.6}
          underlayColor="#DDD"
          onPress={() =>  navigation.navigate('Search')}>
          <View style={footer.iconbox}>
            <Text> {`{/}`} </Text>
            <Text style={main.h4}>직무탐색</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight activeOpacity={0.6}
          underlayColor="#DDD"
          onPress={() => {}}>
          <View style={footer.iconbox}>
            <Image source={require('../../img/eyes.png')} style={{width:25, height:18}} />
            <Text style={main.h4}>더.루키</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight activeOpacity={0.6}
          underlayColor="#DDD"
          onPress={() => {}}>
          <View style={footer.iconbox}>
            <Image source={require('../../img/write.png')} style={{width:20, height:20}} />
            <Text style={main.h4}>이력서</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight activeOpacity={0.6}
          underlayColor="#DDD"
          onPress={() => {}}>
          <View style={footer.iconbox}>
          <Image source={require('../../img/people.png')} style={{width:20, height:20}} />
            <Text style={main.h4}>마이점핏</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default Footer