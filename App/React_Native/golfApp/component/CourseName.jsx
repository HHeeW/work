import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

import Picker from 'react-native-picker-horizontal'

const width = Dimensions.get('window').width;
const itemWidth = 150;

const renderItem = (item) => {
    let name = item.coursename;
    if(name.length > 9){
        name = name.substr(0,9)
        name += '...'
    }
    return(
        <View style={styles.item}>
            <Text style={styles.itemText}>{name}</Text>
            {/* <Text style={{fontSize:10}}> {item.address01 ? item.address01 : item.address02} </Text> */}
            {/* <Text style={styles.itemTexttb}> {item.tel ? item.tel : '전화 번호가 없습니다.'} </Text> */}
        </View>
    )
}

const CourseName = ({ course, setAdress }) => {
    
  return (
    <>
        <Picker
            data={course}
            renderItem={renderItem}
            itemWidth={itemWidth}
            intialIndex={1}
            onChange={item=> setAdress(course[item].address01  )}
            style={{ postion:'absolute', left: -100, zIndex: 1}}
        />
    </>
  )
}

export default CourseName

const styles = StyleSheet.create({
    item: {
        marginTop: 20, 
        width: itemWidth,
        height: 30
    },
    itemText:{
        fontSize: 9,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000'
    },
    itemTexttb:{
        textAlign:'center',
        fontSize:6,
        color: '#000'
    }
})