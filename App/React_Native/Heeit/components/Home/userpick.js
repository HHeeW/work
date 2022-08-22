import { StyleSheet } from "react-native";

const userpick = StyleSheet.create({
    container:{
        flex:1, 
        marginTop:30,
    },
    like:{
        backgroundColor:'#00ee00',
        borderRadius:50,
        padding:5
    },
    images:{
        width:150,
        height:100

    },
    sliderbox:{
        width:150
    },
    bookmark:{
        position:'absolute',
        top:0,
        right:0,
        zIndex:100,
        color:'#fff',
        backgroundColor:'rgba(0,0,0,0.3)'
    }

})

export default userpick