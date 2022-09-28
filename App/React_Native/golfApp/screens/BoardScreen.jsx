import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, FlatList } from 'react-native'
import React, { useContext, useState } from 'react'

import { openDatabase } from 'react-native-sqlite-storage'
import Picker from 'react-native-picker-horizontal'
import { AuthContext } from '../context/AuthProvider'

const db = openDatabase({
  name:'golfcourse.db',
  localStorage:'default',
  createFromLocation: '~www/golfcourse.db'
},
(DB)=>{
  console.log('접속성공')
},
(error)=>{
  console.log('에러', error.message);
}
)

const zones = [
  '서울', '부산', '대구', '대전', '울산', '세종', '경기도', '강원도', '충청북도', '청충남도', '전라북도', '전라남도', '경상북도', '경상남도', '제주'
];

const width = Dimensions.get('window').width;
const itemWidth = 100;
const renderItem = (item, index) => (
  <View style={[styles.item, {width: itemWidth}]}>
    <Text style={styles.itemText}>
      {item}
    </Text>
  </View>
)

const BoardScreen = ({ navigation }) => {

  const { user } = useContext(AuthContext)

  const [ insertData, setInsertData ] = useState({
    sdate: '',
    edate: '',
    mastername: user.fname,
    masteremail: user.email,
    zipcode: '',
    course: '',
    address: '',
    money: '',
    membercount: '',
    mchar: 'b',
    mcount: '',
    member: [user.uid]
  })
  const [course, setCourse] = useState([]);

  const getCourse = (zone) =>{
    db.transaction(txn =>{
      txn.executeSql(
        `SELECT * FROM golfcourse WHERE (address01 LIKE '${zone}%' or address02 LIKE '${zone}%')`,
        [],
        (sqlTnx, res) =>{
          let len = res.rows.length;
          console.log(res.rows.item)
          console.log('총' + len+ '개의 데이터 확인');
          if(len > 0){
            let results=[];
            for(let i = 0; i < len; i++){
              let item = res.rows.item(i);
              results.push({
                id: item.id,
                tel: item.tel,
                zipcode01: item.zipcode01,
                zipcode02: zipcode02,
                address01: item.address01,
                address02: item.address02,
                coursename: item.course_name,
                x: item.x,
                y: item.y
              })
            }
            console.log(results)
            setCourse(results);
          }else{
              setCourse([]);
          }
        },
        error=>{
          console.log('err'+ error.message)
        }
      )
    })
  }

  const selectedCity = (e) => {
    // console.log(zones[e])
    getCourse(zones[e])
  }
  const viewCourse = ({item}) => (
    <View style={{
          height:100,
          flexDirection: 'row',
          padding: 10,
          borderWidth: 1,
          borderColor: '#000',
          margin: 10
          }}
    >
      <Text> {item.coursename} </Text>
      <Text> {item.zipcode01 ? item.zipcode01 : item.zipcode02} </Text>
      <Text> {item.address01 ? item.address01 : item.address02} </Text>
      <Text> {item.tel ? item.tel : '전화 번호가 없습니다.'} </Text>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>골프그룹 개설</Text>
      <View style={{flex: 1}}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>지역선택</Text>
          <Picker
              data={zones}
              renderItem={renderItem}
              itemWidth={itemWidth}
              initialIndex={1}
              onChange={newValue => selectedCity(newValue)}
          />
        </View>
        <View style={styles.formGroup}>
          <FlatList 
              data={course}
              renderItem={viewCourse}
              key={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BoardScreen

const styles = StyleSheet.create({
  container:{
    padding: 10,
    flex: 1,
    alignItems: 'center'
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  item:{
    padding: 5
  },
  itemText:{
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft:15
  },
  label:{
    width:80,
    fontSize: 18,
    fontWeight:'bold',
    borderRightWidth: 1,
    borderRightColor: '#999',
    marginHorizontal:10
  },
  formGroup:{
    width,
    marginBottom: 15, 
    paddingBottom: 10, 
    borderBottomWidth:1, 
    borderBottomColor: '#999', 
    borderStyle: 'dashed', 
    flexDirection: 'row'
  }

})