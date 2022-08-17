import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const Header = () => {
  return (
    <View>
        <View>
            <Text>프론트엔드 개발자</Text>
            <Icon name='chevron-thin-down' color={'#00EE00'} size={20}/>
        </View>
        <Icon name='search' color='#00EE00' size={20} style={{paddingLeft:10, paddingRight:10}} />
    </View>
  )
}

export default Header