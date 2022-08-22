import React from 'react'
import { Image, Text, View, TouchableHighlight } from 'react-native'
import main from '../main'
import Icon2 from 'react-native-vector-icons/Feather'
import userpick from './userpick'
import thisweek from './thisweek'
const Thisweek = () => {
  return (
    <View>
        <View style={[{marginTop:50}, main.marginLR]}>
            <Text style={[main.h1, main.bold]}>프론트엔드 개발자</Text>
            <Text style={[main.h1, main.bold]}>이번주 인기 포지션</Text>
        </View>
        <View>
            {loop2()}
        </View>
        <View style={[thisweek.viewBox, main.margin]}>
            <Text style={[main.h3, main.center]}>전체보기</Text>
        </View>
    </View>
  )
}

const loop2=()=>{
    let week2=[]
    for(let j=0;j<2;j++){
        week2.push(<View style={main.row} key={j} >
            {loop1()}
        </View>)
    }
    return week2;
}

const loop1 = ()=>{
    let week1=[];
    for(let i=1;i<3;i++){
        week1.push(
            <TouchableHighlight 
                activeOpacity={0.6}
                underlayColor="#DDD"
                onPress={() => {}} 
                style={userpick.sliderpick}
                key={i}
            >
                <View style={[ thisweek.weekbox]}>
                    <View style={[ {position:'relative'}, main.marginTB]}>
                        <Icon2 name='bookmark' size={25} style={userpick.bookmark} />
                        <Image source={require('../../img/img01.jpg')} style={[thisweek.img]} />
                    </View>
                    <View>
                        <Text style={main.h4}>원빌리언</Text>
                        <Text style={[main.h4, main.bold, main.marginTB]}>[신입/주니어급]프론트엔드 개발자 채용</Text>
                        <View style={[main.row, thisweek.graybox]}>
                            <Image source={require('../../img/money.png')} style={{width:20, height:20}} />
                            <Text style={[main.h4, main.colorGray]}>취업축하금 100만원</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
        
    }
    return week1
    
}

export default Thisweek