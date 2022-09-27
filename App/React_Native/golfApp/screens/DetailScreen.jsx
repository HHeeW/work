import { StyleSheet, SafeAreaView, Text, View, FlatList, TouchableOpacity  } from 'react-native'
import React, {useState, useEffect } from 'react'
import { Container } from '../styles/mainStyle'
import { data } from '../tempDB/data';
import Card from '../component/Card'
import CalendarStrip from 'react-native-calendar-strip'

const DetailScreen = ({navigation, route}) => {
    const [datas, setDatas ] = useState([]);
    const [loading, setLoading] = useState(true);
    const { actdate } = route.params; 

    const selectedDate = (date) => {
      const rdate = date.format('YYYY-MM-DD');
      setLoading(false);
      const lists = data.filter( x => x.sdate.substring(0, 10) === rdate);
      setDatas(lists);
   }  

    const allDatas = () => {
        setLoading(true);
        setDatas(data);
    }

    useEffect(()=>{
       if(loading){
          if(actdate){
            const lists = data.filter( x => x.sdate.substring(0, 10) === actdate);
            setDatas(lists);
          }else{
            setDatas(data);
          }   
       }   
 }, [])

  const vlists = ({item}) => {
    return (
       <Card course={item.course}
             address={item.address}
             membercount={item.membercount}
             mcount={item.mcount}
             money={item.money}
             sdate={item.sdate}
             edate={item.edate}
             navigation={navigation}
        />     
    )
 }

  return (
    <SafeAreaView style={{flex:1}}>
        <View>
          <CalendarStrip
             style={{ height: 100, paddingTop: 5, paddingBottom: 10 }}
             dateNumberStyle={{ color: '#999'}}
             dateNameStyle={{ color:'grey', paddingTop: 10}}
             highlightDateNumberStyle={{ color: 'black'}}
             highlightDateNameStyle={{color:'black'}}
             iconContainer={{ flex: 0.1 }}
             onDateSelected = { selectedDate }
          />
       </View>
       <View style={{ 
             width:'100%', 
             paddingHorizontal:10, 
             paddingBottom:15, 
             alignItems:'flex-end'
            }}>
               <TouchableOpacity style={{ 
                  padding:5, 
                  borderWidth:1, 
                  marginTop:-10, 
                  borderColor:'#0c751e',
                  borderRadius: 5 }}
                 onPress={allDatas}
               >
                 <Text> 전체보기 </Text>
               </TouchableOpacity>
           </View>
       <Container>
             <FlatList 
                data={datas}
                key={ item => item.id}
                renderItem = {vlists}
              />
        </Container>

    </SafeAreaView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
     }
})