import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    marginTop: 10,
    backgroundColor:'#dddddd',
  }
})
const texts = StyleSheet.create({
    h1:{
        fontSize: 48,
        fontWeight:'bold',
        color:'black'
    },
    p:{
        fontSize:16,
        color:'#333333'
    }
});
const buttons=StyleSheet.create({
    primary:{
        flex: 1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
        marginRight:20
        
    }
})

export {styles, texts, buttons}