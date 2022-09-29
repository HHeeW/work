import { StyleSheet, Text, View, SafeAreaView, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../context/AuthProvider'
import { db } from '../component/OpenDb'
import LocalName from '../component/LocalName'
import CourseName from '../component/CourseName'
import StartTimePicker from '../component/StartTimePicker'
import EndTimePicker from '../component/EndTimePicker'

const width = Dimensions.get('window').width;

const BoardScreen = ({ navigation }) => {

  const { user } = useContext(AuthContext)

  const [loading, setLoading] = useState(true)
  const [address, setAdress ] = useState('')

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
    setLoading(false);
    db.transaction(txn =>{
      txn.executeSql(
        `SELECT * FROM golfcourse WHERE (address01 LIKE '${zone}%' or address02 LIKE '${zone}%')`,
        [],
        (sqlTnx, res) =>{
          let len = res.rows.length;
          console.log('총' + len+ '개의 데이터 확인');
          if(len > 0){
            let results=[];
            for(let i = 0; i < len; i++){
              let item = res.rows.item(i);
              results.push({
                id: item.id,
                tel: item.tel,
                zipcode01: item.zipcode01,
                zipcode02: item.zipcode02,
                address01: item.address01,
                address02: item.address02,
                coursename: item.course_name,
                x: item.x,
                y: item.y
              })
            }
            setCourse(results);
          }else{
              setCourse([]);
          }
        },
        error=>{
          console.log('error'+ error.message)
        }
      )
    })
  }

  const selectedCity = (e) => {
    // console.log(zones[e])
    getCourse(e)
  }

  useEffect(()=>{
    if(loading){
      getCourse('서울')
    }
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, marginTop: 20}}>
        {/* 지역선택 */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>지역선택</Text>
          <LocalName selectedCity={selectedCity} />
        </View>

        {/* 골프장선택 */}
        <View style={[styles.formGroup]}>
          <Text style={[styles.label]}>장소선택</Text>
          {course.length ?
            <CourseName course={ course } setAdress={setAdress} />
          :
            <Text style={{flex:1, fontSize: 16,textAlign:'center'}}>좌/우로 스크롤 해보세요</Text>
          }
        </View>
        {/* 주소 */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>주소</Text>
          <Text style={{color:'#333', fontWeight: 'bold'}}>{address}</Text>
        </View>

        {/* 시작 일시 */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>시작 일시</Text>
          <StartTimePicker/>
        </View>
        {/* 종료 일시 */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>종료 일시</Text>
          <EndTimePicker/>
        </View>
        {/* 인원 */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>인원</Text>
        </View>
        {/* 성별 */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>성별</Text>
        </View>
        {/* 금액 */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>금액</Text>
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
  formGroup: {
    width, 
    marginBottom:15, 
    paddingBottom:10, 
    borderBottomWidth:1,
    borderBottomColor:'#999',
    borderStyle:'dashed',
    flexDirection:'row',
    position:'relative',
    alignItems:'center'
 },
 label:{
    width: 100,
    lineHeight: 33,
    fontSize:16,
    fontWeight: 'bold',
    borderRightWidth: 1,
    borderRightColor:'#999',
    marginRight:10,
    position: 'relative',
    zIndex: 10,
    paddingLeft:20,
    backgroundColor:'#ededed',
 },
})