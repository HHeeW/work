import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert } from 'react-native'
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
        setUserData(mem)
      }
    })
    
  }

  useEffect(()=>{
    getUser();
    na
  },[navigation])

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
      <ScrollView style={{paddingTop: 50}}>
        <Text>
          유저
        </Text>
        <FormButton onPress={ logout }
                    buttonTitle="로그아웃"
                    backgroundColor='#0c751e'
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
   },
   userImg:{
    height: 180,
    width:180,
    borderRadius: 90
   }
})