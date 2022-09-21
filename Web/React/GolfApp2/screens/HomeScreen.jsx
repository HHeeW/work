import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, Alert } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore'
import { Container } from '../styles/mainStyle'

const Posts = [
  {
    id: '1',
    admin: 'HeeWon',
    userImg: require('../assets/members/001.png'),
    posTime: '5분 전',
    post: '00골프장 골프치실 분들 모집해요.',
    pdate: '2022. 12. 10 10시~ 16시',
    liked: 6,
    likes: 3,
    members: '일루수, 이루수, 삼루수'
  },
  {
    id: '2',
    admin: 'HeeWon',
    userImg: require('../assets/members/002.png'),
    posTime: '5분 전',
    post: '00골프장 골프치실 분들 모집해요.',
    pdate: '2022. 12. 10 10시~ 16시',
    liked: 6,
    likes: 3,
    members: '일루수, 이루수, 삼루수'
  },
  {
    id: '3',
    admin: 'HeeWon',
    userImg: require('../assets/members/003.png'),
    posTime: '5분 전',
    post: '00골프장 골프치실 분들 모집해요.',
    pdate: '2022. 12. 10 10시~ 16시',
    liked: 6,
    likes: 3,
    members: '일루수, 이루수, 삼루수'
  },
  {
    id: '4',
    admin: 'HeeWon',
    userImg: require('../assets/members/004.png'),
    posTime: '5분 전',
    post: '00골프장 골프치실 분들 모집해요.',
    pdate: '2022. 12. 10 10시~ 16시',
    liked: 6,
    likes: 3,
    members: '일루수, 이루수, 삼루수'
  },
  {
    id: '5',
    admin: 'HeeWon',
    userImg: require('../assets/members/005.png'),
    posTime: '5분 전',
    post: '00골프장 골프치실 분들 모집해요.',
    pdate: '2022. 12. 10 10시~ 16시',
    liked: 6,
    likes: 3,
    members: '일루수, 이루수, 삼루수'
  },
  {
    id: '6',
    admin: 'HeeWon',
    userImg: require('../assets/members/006.png'),
    posTime: '5분 전',
    post: '00골프장 골프치실 분들 모집해요.',
    pdate: '2022. 12. 10 10시~ 16시',
    liked: 6,
    likes: 3,
    members: '일루수, 이루수, 삼루수'
  },
]

const HomeScreen = ({navigation}) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const fetchPosts = async()=>{
    try{
      const list = [];
      await firestore()
      .collection('posts')
      .orderBy('postTime', 'desc')
      .get()
      .then((querySnapshot)=>{
        console.log('Total Posts' , querySnapshot.size)
      })
    }catch(e){

    }
  }

  const ListHeader = () => {
    return null
   }

  return (
    <SafeAreaView style={{flex:1}}>
      {loading ?
      <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:'center'}}>
        <SkeletonPlaceholder>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
            <View style={{width:60, height: 60, borderRadius: 25}}/>
            <View style={{marginLeft: 20}}>
              <View style={{width: 120, height: 20, borderRadius: 4}}/>
              <View style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}/>
            </View>
          </View>
          <View style={{marginTop: 10, marginBottom: 30}}>
            <View Style={{width: 300, height:20, borderRadius: 4}}/>
            <View style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}/>
            <Voew style={{marginTop: 6, width: 350, height:200, borderRadius: 4}}/>
          </View>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
            <View style={{width:60, height: 60, borderRadius: 25}}/>
            <View style={{marginLeft: 20}}>
              <View style={{width: 120, height: 20, borderRadius: 4}}/>
              <View style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}/>
            </View>
          </View>
          <View style={{marginTop: 10, marginBottom: 30}}>
            <View Style={{width: 300, height:20, borderRadius: 4}}/>
            <View style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}/>
            <Voew style={{marginTop: 6, width: 350, height:200, borderRadius: 4}}/>
          </View>
        </SkeletonPlaceholder> 
      </ScrollView>
      :
      <Container>
        <FlatList
          data={Posts}
          renderItem={({item})=>(
            <View>
              {item.admin}
            </View>
          )}
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={ListHeader}
          ListFooterComponent={ListHeader}
        />
      </Container>
      }
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})