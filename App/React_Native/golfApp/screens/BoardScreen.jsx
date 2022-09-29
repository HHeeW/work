import { StyleSheet, Text, View, SafeAreaView, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'

import { AuthContext } from '../context/AuthProvider'
import { db } from '../component/OpenDb'
import LocalName from '../component/LocalName'
import CourseName from '../component/CourseName'

const width = Dimensions.get('window').width;

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
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, marginTop: 20}}>
        {/* 지역선택 */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>지역선택</Text>
          <LocalName selectedCity={selectedCity} />
        </View>

        {/* 골프장선택 */}
        <View style={[styles.formGroup, {height:100}]}>
          <Text style={styles.label}>장소선택</Text>
          <CourseName course={ course } />
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
  label:{
    width:100,
    fontSize: 18,
    fontWeight:'bold',
    borderRightWidth: 1,
    borderRightColor: '#999',
    marginHorizontal:10,
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