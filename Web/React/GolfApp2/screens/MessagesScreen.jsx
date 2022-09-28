import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {
  Container,
  Card,
  UserImg,
  UserImgWrapper,
  UserInfo,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection
} from '../styles/messagesStyle'

const Messages=[
  {
    id: '1',
    userName: '홍길동',
    userImg: require('../assets/members/001.png'),
    messageTime: '22.09.21 10:11',
    messageText: '환영해 주셔서 감사합니다. 좋은 시간 이었어요'
  },
  {
    id: '2',
    userName: '오직너',
    userImg: require('../assets/members/002.png'),
    messageTime: '22.09.21 10:23',
    messageText: '좋은 시간 이었어요'
  },
  {
    id: '3',
    userName: '콩기고',
    userImg: require('../assets/members/003.png'),
    messageTime: '22.09.21 10:26',
    messageText: '환영해 주셔서 감사합니다. 환영해 주셔서 감사합니다.'
  },
  {
    id: '4',
    userName: '임용가',
    userImg: require('../assets/members/004.png'),
    messageTime: '22.09.21 10:29',
    messageText: '1등했네요. 감사합니다.'
  },
  {
    id: '5',
    userName: '임자구',
    userImg: require('../assets/members/005.png'),
    messageTime: '22.09.21 10:32',
    messageText: '소주 한잔 하러 가요.'
  }
]

const MessagesScreen = ({navigation}) => {

  return (
    <Container>
      <FlatList
          data={Messages}
          keyExtractor={ item => item.id}
          renderItem={({item})=>(
            <Card onPress = {()=>navigation.navigate('Chat', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg}/>
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
      />
    </Container>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({})