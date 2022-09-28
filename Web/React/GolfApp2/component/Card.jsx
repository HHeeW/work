import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CardView from 'react-native-cardview'

const width = Dimensions.get('window').width;

const Card = ({course, address, membercount, mcount, money, sdate}) => {
    const addr = address.split(' ')
    const spaddr = addr [0]+ ' ' + addr[1]
  return (
    <CardView
        cardElevition={7}
        cardMaxElevation={7}
        cornerRedius={15}
        styles={styles.card}
    >
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{course}</Text>
                <Text style={styles.sub}>{spaddr} | 남은인원 ({parsInt(membercount) - parseInt(mcount)}명)</Text>
            </View>
            <View>
                <Text style={styles.new}>NEW</Text>
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.money}>{money.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 ~ </Text>
            <TouchableOpacity>
                <Text style={styles.btnText}>{sdate.substr(8,10)}일 더 보기</Text>
            </TouchableOpacity>
        </View>
    </CardView>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
        marginBottom: 10
    },
    card:{
        backgroundColor: '#fff',
        width: '100%',
        padding: 20,
        marginBottom: 20
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8
    },
    sub:{
        fontSize: 14,
        fontWeight: '600'
    },
    new:{
        backgroundColor: '#ff5555',
        color: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 8,
        marginTop: 15
    },
    footer:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    money:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#07531e'
    },
    btnText:{
        fontSize: 16,
        fontWeight: 'bold'
    }
})