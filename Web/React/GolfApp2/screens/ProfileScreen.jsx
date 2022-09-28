import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext} from 'react'
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from '../context/AuthProvider'
import FormButton from '../component/FormButton'
const ProfileScreen = ({ navigation, route}) => {

  const { user, logout } = useContext(AuthContext)

  const [ post, setPost ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ deleted, setDeleted ] = useState(false);
  const [ userData, setUserData ] = useState(null);

  // console.log(route.param ? '1'+route.param.userId : '2')
  /**
  const fetchPost = async () => {
    await firestore()
      .collection('members')
      .doc(route.param ? route.param.email : user.uid)
      .get()
      .then((res) => {
        // console.log(res.data())
        const mem = res.data();
        if(mem.fname === ''){
          Alert.alert('아직 회원정보를 입력하지 않으셨습니다.')
          navigation.navigate('EditProfile');
          return;
        }else{

        }
      })
  }
  */
  const getUser = async() =>{
    await firestore()
    .collection('members')
    .doc( route.parms ? route.params.email : user.uid)
    .get()
    .then((res)=>{
      const mem = res.data();
      if(mem.fname === ''){
        Alert.alert('회원 정보를 입력해주세요'
          [  
            {
              text:'확인',
              onPress: ()=>{ navigation.navigate('EditeProfile')}
            },
            {
              text:'취소',
              onPress: ()=>{ navigation.navigate('Home')}
            }
          ]
        )
      } else{
        if(mem.exists){
          setUserData({
            ...userData,
            age: mem.age,
            average: mem.average,
            createAt: mem.createAt,
            email: user.email,
            fname: mem.fname,
            gender: mem.gender,
            tel: mem.tel,
            userImg: mem.userImg
          })
        }
      }
    })
    
  }

  useEffect(()=>{
    getUser();
    
  },[navigation])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex:1, padding: 20}}
          contentContainerStyle={{justifyContent:'center', alignItems:'center'}}
          showsVerticalScrollIndicator={false}    
      >
        <Image 
            style={styles.userImg}
            source={{uri: userData ? userData.userImg : 'https://firebasestorage.googleapis.com/v0/b/golf-f7f57.appspot.com/o/members%2Fno-img.jpg?alt=media&token=8bfa4787-9e24-47f3-a5ce-c125f2d3acde'}}
        />
        <Text style={styles.userName}>
          {userData ? userData.fname : ''}
        </Text>

        <View style={styles.aboutUserWrapper}>
          <Text style={styles.aboutUserLabel}>
            이메일
          </Text>
          <Text style={styles.aboutUser}>
            {userData && userData.email}
          </Text>
        </View>
        <View style={styles.aboutUserWrapper}>
          <Text style={styles.aboutUserLabel}>
            별명
          </Text>
          <Text style={styles.aboutUser}>
            {userData && userData.fname}
          </Text>
        </View>
        <View style={styles.aboutUserWrapper}>
          <Text style={styles.aboutUserLabel}>
            점수
          </Text>
          <Text style={styles.aboutUser}>
            {userData && userData.average}
          </Text>
        </View>
        <View style={styles.aboutUserWrapper}>
          <Text style={styles.aboutUserLabel}>
            성별
          </Text>
          <Text style={styles.aboutUser}>
            {userData ? userData.gender ? '남자' : '여자' : ''}
          </Text>
        </View>
        <View style={styles.aboutUserWrapper}>
          <Text style={styles.aboutUserLabel}>
            나이
          </Text>
          <Text style={styles.aboutUser}>
            {userData && userData.age}
          </Text>
        </View>
        <View style={styles.aboutUserWrapper}>
          <Text style={styles.aboutUserLabel}>
            전화번호
          </Text>
          <Text style={styles.aboutUser}>
            {userData && userData.tel}
          </Text>
        </View>
        <View style={styles.aboutUserWrapper}>
          <Text style={styles.aboutUserLabel}>
            가입일
          </Text>
          <Text style={styles.aboutUser}>
            {userData && userData.createAt}
          </Text>
        </View>
        <View style={styles.userBtnWrapper}>
          <TouchableOpacity
              style={[styles.userBtn, { color: '#0c751e'}]}
              onPress={()=>{
                navigation.navigate('EditeProfile')
              }}
          >
            <Text style={styles.userBtnText}>회원정보 수정</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.userBtn, {backgroundColor:'red'}]} onPress={()=> logout()}>
            <Text style={[styles.userBtnText]}>
              로그아웃
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
   },
   userImg:{
    height: 180,
    width:180,
    borderRadius: 90
   },
   userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
   },
   aboutUserWrapper:{
    borderTop: '2',
    borderColor: '#555',
    marginTop: 15,
    flex:1,
    flexDirection: 'row',
    bordeerBottomWidth: 1,
    borderBottomColor: '#555',
    borderStyle: 'dashed',
    paddingBottom: 10
    
   },
   aboutUserLabel:{
    fontSize: 13,
    fontWeight: 'bold',
    color:'#555'
   },
   aboutUser:{
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
    textAlign: 'center',
    marginBottom: 10
   },
   userBtnWrapper:{
    flexDirection: 'row',
    justifyContent:'center',
    width:'100%',
    marginBottom: 10
   },
   userBtn:{
    borderColor: '#0c751e',
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5
   },
   userBtnText:{
    fontSize: 16,
    fontWeight:'Bold',
   },
   userInfoWrapper:{
    flexDirection: 'row',
    justifyContent:'space-around',
    width:'100%',
    marginBottom: 20
   },
   userInfoItem:{
    justifyContent:'center'
   },
   userInfoTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
   },
   userInfoSubTItle:{
    fontSize: 13,
    color: '#555',
    textAlign: 'center'
   }
})