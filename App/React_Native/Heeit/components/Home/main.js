import { StyleSheet } from "react-native";


const main = StyleSheet.create({
    h1:{
        fontSize:26,
    },
    h2:{
        fontSize:22,
    },
    h3:{
        fontSize:18
    },
    h4:{
        fontSize:14
    },
    bold:{
        fontWeight:'bold'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    margin:{
        margin:10
    },
    marginLR:{
        marginRight:10,
        marginLeft:10
    },
    marginTB:{
        marginTop:10,
        marginBottom:10
    },
    colorGray:{
        color:'#555'
    },
    center:{
        textAlign:'center'
    }
})

export default main