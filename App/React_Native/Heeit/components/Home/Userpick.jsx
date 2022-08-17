import React from 'react'
import { Image, ScrollView, Text, View, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Feather'
import main from './main'
import userpick from './userpick'
const Userpick = () => {
  return (
    <View style={userpick.container} >
        <View style={main.row} >
            <View style={[main.margin, userpick.like]}>
                <Icon name='like1' color={'#fff'} style={main.h3} />
            </View>
            <Text style={[main.h2, main.bold, {flex:1}]}>황희원님을 위한 추천!</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator = {true}>
            <View  style={[main.row]}>
                
                <TouchableHighlight activeOpacity={0.6}
                underlayColor="#DDD"
                onPress={() => {}} style={userpick.sliderpick}>
                    <View style={[ userpick.sliderbox]}>
                        <View style={[ {position:'relative'}]}>
                            <Icon2 name='bookmark' size={25} style={userpick.bookmark} />
                            <Image source={require('../../img/img01.jpg')} style={userpick.images} />
                        </View>
                        <View>
                            <Text style={main.h4}>원빌리언</Text>
                            <Text style={[main.h4, main.bold, main.marginTB]}>[신입/주니어급]프론트엔드 개발자 채용</Text>
                            <Text style={[main.h4, main.colorGray]} >HTML5 · CSS3 · jQuery</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6}
                underlayColor="#DDD"
                onPress={() => {}} style={userpick.sliderpick}>
                    <View style={[ userpick.sliderbox]}>
                        <View style={[ {position:'relative'}]}>
                            <Icon2 name='bookmark' size={25} style={userpick.bookmark} />
                            <Image source={require('../../img/img01.jpg')} style={userpick.images} />
                        </View>
                        <View>
                            <Text style={main.h4}>원빌리언</Text>
                            <Text style={[main.h4, main.bold, main.marginTB]}>[신입/주니어급]프론트엔드 개발자 채용</Text>
                            <Text style={[main.h4, main.colorGray]} >HTML5 · CSS3 · jQuery</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6}
                underlayColor="#DDD"
                onPress={() => {}} style={userpick.sliderpick}>
                    <View style={[ userpick.sliderbox]}>
                        <View style={[ {position:'relative'}]}>
                            <Icon2 name='bookmark' size={25} style={userpick.bookmark} />
                            <Image source={require('../../img/img01.jpg')} style={userpick.images} />
                        </View>
                        <View>
                            <Text style={main.h4}>원빌리언</Text>
                            <Text style={[main.h4, main.bold, main.marginTB]}>[신입/주니어급]프론트엔드 개발자 채용</Text>
                            <Text style={[main.h4, main.colorGray]} >HTML5 · CSS3 · jQuery</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6}
                underlayColor="#DDD"
                onPress={() => {}} style={userpick.sliderpick}>
                    <View style={[ userpick.sliderbox]}>
                        <View style={[ {position:'relative'}]}>
                            <Icon2 name='bookmark' size={25} style={userpick.bookmark} />
                            <Image source={require('../../img/img01.jpg')} style={userpick.images} />
                        </View>
                        <View>
                            <Text style={main.h4}>원빌리언</Text>
                            <Text style={[main.h4, main.bold, main.marginTB]}>[신입/주니어급]프론트엔드 개발자 채용</Text>
                            <Text style={[main.h4, main.colorGray]} >HTML5 · CSS3 · jQuery</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                
            </View>
        </ScrollView>
    </View>
  )
}

export default Userpick