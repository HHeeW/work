import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Alert ,
  ImageBackground,
  Platform,
  Switch
} from 'react-native'
import React, { useEffect, useContext, useState, createRef} from 'react'

import FormButton from '../component/FormButton';
import FormInput from '../component/FormInput';

import { AuthContext } from '../context/AuthProvider'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TextInput } from 'react-native-gesture-handler';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet'
import ImagePicker from 'react-native-image-crop-picker';

const EditProfileScreen = () => {
 const { user, logout } = useContext(AuthContext);
 const [image, setImage] = useState(null);
 const [uploading, setUploading] = useState(false);
 const [userData, setUserData] = useState({
     age: 0,
     average: 0,
     email: user.uid,
     fname:'',
     gender: false,
     tel: '',
     userImg: null
 });

 
 const getUser = async() => {
   await firestore()
   .collection('members')
   .doc( route.params ? route.params.email : user.uid)
   .get()
   .then((res) => {
       if(res.exists){
          setUserData(res.data());
       }
   })
 }

 const toggleSwitch = () => {
    const gnd = !userData.gender;
    setUserData({...userData, gender: gnd});
 }

 useEffect(()=>{
    getUser();
 }, []);

 const takePhotoFromCamera =() =>{
  console.log('');
 }
 const takePhotoFormLibrary = () => {
  console.log('');
 }

 renderInner = () => {
  <View style={styles.panel}>
    <View style={{ alignItems:'center'}}>
      <Text style={styles.panelTitle}>사진업로드</Text>
      <Text style={styles.panelSubtitle}>프로필 사진을 선택하시오</Text>
    </View>
    <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>사진 찍기</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFormLibrary}>
        <Text style={styles.panelButtonTitle}>갤러리에서 가져오기</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.panelButton}
        onPress={()=> this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>취소</Text>
    </TouchableOpacity>
  </View>
 }
 renderHeader = () => {
 }

 
 bs = createRef();
 fall = new Animated.Value(1)
 const { age, average, email, fname, gender, tel, userImg } = userData;

return (
   <View style={styles.container}>
    <BottomSheet
      ref = {this.bs}
      snapPoints = {[330, -15]}
      renderContext = {renderInner()}
      renderHeader={renderHeader()}
      initialSnap={}
      callbackNode={this.fall}
      enabledGesture
    />
     <View style={{alignItems: 'center', marginBottom:20}}>
         <TouchableOpacity >
             <View style={{ height: 100, width: 100, 
                            borderRadius: 15, 
                            justifyContent:'center',
                            alignItems:'center' 
                          }}
             >
                <ImageBackground 
                    source={{
                       uri: image ?
                          image : userData ?
                             userData.userImg : 'https://firebasestorage.googleapis.com/v0/b/golf-f7f57.appspot.com/o/members%2Fimg-back.jpg?alt=media&token=5ec7dba1-3def-4a8c-a300-3067139abae3'
                    }}
                    style={{ height: 100, width: 100 }}
                    imageStyle={{borderRadius: 15}}
                >
                 <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                     <MaterialCommunityIcons
                         name="camera"
                         size={35}
                         color="#fff"
                         style={{
                           opacity: 0.7,
                           alignItems:'center',
                           justifyContent:'center',
                           borderWidth: 1,
                           borderColor: '#fff',
                           borderRadius: 10
                         }}
                     />    
                 </View>
               </ImageBackground>      
             </View>             
         </TouchableOpacity>
         <Text style={{ marginTop: 10, fontSize: 18, fontWeight:'bold'}}>
             {email} 님
         </Text>
     </View>
     <View style={styles.action}>
         <FontAwesome name="user-o" color="#333" size={20} style={{marginRight:15}} />
         <TextInput 
             placeholder="닉네임"
             placeholderTextColor="#999"
             autoCorrect={false}
             style={styles.textInput}
             value={fname}
             onChangeText={(txt)=>setUserData({...userData, fname: txt})}
         />    
     </View>
     <View style={styles.action}>
         <FontAwesome name="user-o" color="#333" size={20} style={{marginRight:15}} />
         <Text style={{ marginRight: 20 }}>성별</Text>
         <Text style={ !gender? {fontWeight:'bold'}:'' }>여자</Text>
            <Switch
               trackColor={{ false: "#767577", true: "#0c751e"}}
               thumbColor={ gender ? "#f5dd4b" : "#f4f3f4" }
               ios_backgroundColor="#3e3e3e"
               onValueChange={ toggleSwitch }
               value={gender}
            />   
         <Text style={ gender? {fontWeight:'bold'}:'' }>남자</Text> 
     </View>
     <View style={styles.action}>
         <FontAwesome name="user-o" color="#333" size={20} style={{marginRight:15}} />
         <TextInput 
             placeholder="나이"
             placeholderTextColor="#999"
             autoCorrect={false}
             style={styles.textInput}
             value={age}
             onChangeText={(txt)=>setUserData({...userData, age: txt})}
             keyboardType='numeric'
         />    
     </View>
     <View style={styles.action}>
         <FontAwesome name="user-o" color="#333" size={20} style={{marginRight:15}} />
         <TextInput 
             placeholder="전화번호"
             placeholderTextColor="#999"
             autoCorrect={false}
             style={styles.textInput}
             value={tel}
             keyboardType='numeric'
             onChangeText={(txt)=>setUserData({...userData, tel: txt})}
         />    
     </View>
     <View style={styles.action}>
         <FontAwesome name="user-o" color="#333" size={20} style={{marginRight:15}} />
         <TextInput 
             placeholder="평균타수"
             placeholderTextColor="#999"
             autoCorrect={false}
             keyboardType='numeric'
             style={styles.textInput}
             value={average}
             onChangeText={(txt)=>setUserData({...userData, average: txt})}
         />    
     </View>
   </View>
 )
}

export default EditProfileScreen

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#fff'
  },
  commandButton : {
     padding: 15,
     borderRadius: 10,
     backgroundColor: '#ff6137',
     alignItems: 'center',
     marginTop: 10
  },
  panel: {
     padding: 20,
     backgroundColor: '#fff',
     width: '100%'
  },
  header: {
   backgroundColor: '#fff',
   shadowColor: '#333',
   shadowOffset: { width: -1, height: -3},
   shadowRadius: 2,
   shadowOpacity: 0.4,
   paddingTop: 20,
   borderTopLeftRadius: 20,
   borderTopRightRadius: 20
  },
  panelHeader:{
    width: 40,
    height:8,
    borderRadius: 5,
    backgroundColor: '#0000040',
    marginBottom:10
  },
  panelTitle:{
    fontSize: 28,
    height: 35
  },
  panelSubtitle:{
    fontSize: 15,
    color: '#999',
    height: 30,
    marginBottom: 10
  },
  panelButton:{
    padding:13,
    borderRadius: 10,
    backgroundColor: '#0c751e',
    alignItems: 'center',
    marginVertical: 10
  },
  panelButtonTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  action: {
   flexDirection: 'row',
   marginTop: 10,
   marginBottom: 10,
   borderBottomWidth: 1,
   borderBottomColor: '#d2d2d2',
   paddingBottom: 5,
   marginHorizontal:30,
   alignItems:'center'
  },
  actionError: {
   flexDirection: 'row',
   marginTop: 10,
   borderBottomWidth: 1,
   borderBottomColor: '#ff0000',
   paddingBottom: 5 
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#333'
  }
})