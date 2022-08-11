import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { styles, texts, buttons } from './styles'

const Style02 = () => {
  return (
    <View style={styles.container}>
        <Text style={texts.h1}>스타일시트</Text>
        <TouchableHighlight style={buttons.primary}>
            <Text style={texts.p}>스타일시트 적용</Text>
        </TouchableHighlight>
    </View>
    )
}

export default Style02