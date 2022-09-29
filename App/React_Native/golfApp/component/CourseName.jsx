import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

import Picker from 'react-native-picker-horizontal'

const width = Dimensions.get('window').width;
const itemWidth = 100;

const renderItem = (item) => {
    return(
        <View>
            <Text style={{fontSize:10}}>{item.coursename}</Text>
            {/* <Text style={{fontSize:10}}> {item.address01 ? item.address01 : item.address02} </Text> */}
            <Text style={{fontSize:10}}> {item.tel ? item.tel : '전화 번호가 없습니다.'} </Text>
        </View>
    )
}

const CourseName = ({ course }) => {
  return (
    <>
        <Picker
            data={course}
            renderItem={renderItem}
            itemWidth={itemWidth}
            intialIndex={1}
            onChange={item=> console.log(item)}
        />
    </>
  )
}

export default CourseName

const styles = StyleSheet.create({})