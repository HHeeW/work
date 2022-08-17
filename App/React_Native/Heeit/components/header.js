import { StyleSheet } from "react-native";

const header = StyleSheet.create({
    header:{
        top:0,
        left:0,
        width:'100%',
        height:50,
        backgroundColor:'rgba(255,255,255,0.1)',
        alignItems:'center',
        marginTop:50,
        marginBottom:10
    },
    box:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    logobox:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    searchbox:{
        flex:2.5,
        backgroundColor:'#ddd',
        borderRadius:30,
        paddingTop:10,
        paddingBottom:10,
        justifyContent:'space-evenly'
    },
    searctext:{
        flex:1
    }
})

export default header