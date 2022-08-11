import { StyleSheet } from 'react-native'

const burger = StyleSheet.create({
    container:{
        margin:20
    },
    h1:{
        fontSize: 30,
        fontWeight:'bold',
        textAlign:'center'
    },
    h1margin:{
        marginTop:40,
        marginBottom:10
        
    },
    h2:{
        fontSize: 22,
        fontWeight:'bold',
        marginTop:40,
        marginBottom:10
    },
    h3:{
        fontSize: 18,
        fontWeight:'bold',
        color:'#ffffff'
    },
    h4:{
        fontSize: 16,
        color:'#ffffff'
    },
    h5:{
        fontSize: 14,
        fontWeight:'300',
        color:'#ffffff'
    },
    box:{
        flex:1,
        borderRadius:20,
        marginBottom: 30,
        padding:20,
        backgroundColor:'rgba(0,0,0,0.2)'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    burger:{
        backgroundColor:'#134B58'
    },
    price:{
        backgroundColor:'#ffffff',
        borderRadius:30,
        marginTop: 20,
        padding:10
    },
    colorB:{
        color:'#000000',
    },
    fries:{
        backgroundColor:'#F08040',
    }
})

export default burger