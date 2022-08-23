import React from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import stack from './stack'
const Stack = () => {
  return (
    <View style={stack.box}>
        <Swiper
            loop={false}
            showsPagination={false}
        >
            <View>
                <View>
                    <Text>경력 태그 기술스택 지역</Text>
                </View>
                <View>
                    <View><Text>천체</Text></View>
                </View>
            </View>
            
        </Swiper>
        <View>
            <Text> 검색 </Text>
        </View>
    </View>
  )
}

export default Stack