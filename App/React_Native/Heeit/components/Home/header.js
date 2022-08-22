import { StyleSheet } from "react-native";

const header = StyleSheet.create({
    header:{
        width:'100%',
        backgroundColor:'rgba(255,255,255,0.9)',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        position:'absolute',
        top:0,
        left:0,
        zIndex:100
    },
    box:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    logobox:{
        flex:0.3,
        justifyContent:'center',
        alignItems: 'flex-start'
    },
    searchbox:{
        flex:0.8,
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