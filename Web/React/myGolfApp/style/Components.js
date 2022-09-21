import { StyleSheet } from "react-native";

export const mainStyle = StyleSheet.create({
    Container:{
        paddingHorizontal: 50,
        paddingVertical: 80,
        backgroundColor: 'rgb(70, 181, 190)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#007ba4'
    },
    SubContainer:{
        paddingHorizontal: 50,
        paddingVertical: 40,
        backgroundColor: 'rgb(0, 123, 164)',
        color: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#02627b'
    },
    InPutBox:{
        borderWidth: 3,
        borderColor: '#71dee1',
        height: 60,
        width: '100%',
        borderRadius: 30,
        padding: 10,
        paddingVertical:6,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    buttonBox:{
        borderColor: '#fff',
        height: 60,
        width: 60,
        borderRadius: '50%',
        backgroundColor: '#ffc809',
        paddingVertical:6,
        paddingHorizontal: 20,
        borderWidth: 10,
        borderColor: '#fff',
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight:'light',
        // textTransform: 'uppercase'
    }
})

export const subStyle = StyleSheet.create({
    Container:{
        paddingHorizontal: 40,
        paddingVertical: 50,
        backgroundColor: 'rgb(70, 181, 190)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#007ba4'
    },
    SubContainer:{
        paddingHorizontal: 50,
        paddingVertical: 40,
        backgroundColor: 'rgb(0, 123, 164)',
        color: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#02627b'
    },
    InPutBox:{
        borderWidth: 3,
        borderColor: '#71dee1',
        color: '#fff',
        height: 60,
        width: '70%',
        borderRadius: 30,
        padding: 10,
        paddingVertical:6,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    buttonBox:{
        borderColor: '#fff',
        height: 50,
        width: '70%',
        borderRadius: 30,
        padding: 10,
        paddingVertical:6,
        paddingHorizontal: 20,
        borderWidth: 3,
        borderColor: '#fff',
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight:'light',
        textTransform: 'uppercase'
    }
})