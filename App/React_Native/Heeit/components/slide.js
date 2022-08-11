import { StyleSheet } from "react-native";

const slide = StyleSheet.create({
    slidebox:{
        flex:1,
        height:200,
        borderWidth:1,
        borderColor:'black'
    },
    go:{
        flex:1,
        padding:10,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:'rgba(0,238,0,0.1)',
        borderRadius:5
    },
    textbox:{
        position:'absolute',
        bottom:20,
        left:10
    },
    text:{
        color:'#fff',
        fontSize:24,
        fontWeight:'900'
    }
})

export default slide