import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import burger from './burger'
const HBurger = () => {
  return (
    <ScrollView style={burger.container}>
        <View style={burger.h1margin}>
            <Text style={burger.h1}>WELLCOM H-BURGER!</Text>
        </View>
        <View>
            <Text style={burger.h2}>최고 인기 메뉴</Text>
        </View>
        <View style={[burger.box, burger.burger]}>
            <View style={[burger.row, {marginBottom:30}]}>
                <View style={{flex:1, marginRight:10}} >
                    <View style={{backgroundColor:'#2A5D8A', padding:10, borderRadius:10, alignItems:'center'}}>
                        <Image source={require('../img/burger.png')} style={{width:30, height:24}} />
                    </View>
                </View>
                <View style={{flex:5}}>
                    <Text style={burger.h3}>Burger</Text>
                    <Text style={burger.h5}>JunkFood</Text>
                </View>
                <View style={{flex:1}}>
                    <View style={{backgroundColor:'#2A5D8A', padding:10, borderRadius:50, alignItems:'center'}}>
                        <Icon name='hearto' size={20} color='#ffffff'/>
                    </View>
                </View>
            </View>
            <View style={burger.row}>
                <View style={{flex:1}}>
                    <Text style={burger.h3}>Pimento Burger &</Text>
                    <Text style={burger.h3}>Cheddar CHeese</Text>
                    <View  style={[burger.row, burger.price]}>
                        <Text style={[burger.h4, burger.colorB]}>price</Text>
                        <Text style={[burger.h3, burger.colorB]}>5,000원</Text>
                    </View>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                    <Image source={require('../img/burger.png')} style={{ width:100, height:80}} />
                </View>
            </View>
        </View>
        <View>
            <Text style={burger.h2}>금주의 메뉴</Text>
        </View>
        <View style={burger.row}>
            <View style={[burger.box, burger.fries]}>
                <Text style={burger.h3}>French fries</Text>
                <Text style={burger.h4}>금주의 메뉴는 엄청난 프렌치 프라이 입니다.</Text>
                <Text>
                    <Icon name='star' size={10} color='#ffffff'/>
                    <Text style={burger.h5}>4.9</Text>
                </Text>
                <Image source={require('../img/frenchfries.png')} style={{flex:1,width:100,height:130, alignSelf:'center', marginTop:20, marginBottom:20}} />
            </View>
            <View style={burger.box}>
                <View style={burger.box}>

                </View>
                <View style={burger.box}>

                </View>
            </View>
        </View>
    </ScrollView>
    )
}

export default HBurger