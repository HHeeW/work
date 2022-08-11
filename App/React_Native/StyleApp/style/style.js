import { StyleSheet } from 'react-native'

export const Colors = {
    dark: '#000000',
    light: '#ffffff'
};

const lightContainer = {
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
};

const darkContainer = {
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
};

const lightStyleSheet = StyleSheet.create({
    container :{
        ...lightContainer,
        paddingTop: 60,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20,
        backgroundColor: Colors.light
    },
    h1:{
        color: Colors.dark,
        fontSize: 50,
        textAlign: 'center'
    }
});

const darkStyleSheet = StyleSheet.create({
    container :{
        ...darkContainer,
        flex:1,
        paddingTop: 60,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20,
        backgroundColor: Colors.dark
    },
    h1:{
        color: Colors.light,
        fontSize: 50,
        textAlign: 'center'
    },
    buttons:{
        posiiotn:'absolute',
        bottom:30,
        flex:1
    }
});

export default function getStylSheet(mode){
    return mode ? lightStyleSheet : darkStyleSheet;
}