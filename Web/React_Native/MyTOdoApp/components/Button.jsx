import { View, Text, TouchableHighlight, StyleSheet} from 'react-native'

const Button = ({submitTodo}) => {
  return (
    <View style={st.buttonContainer}>
        <TouchableHighlight 
            style={st.button}
            underlayColor='rgba(175, 45, 45, 0.3)'
            onPress={submitTodo}
        >
            <Text style={st.submit}>
                저장
            </Text>
        </TouchableHighlight>
    </View>
  )
}

const st = StyleSheet.create({
    buttonContainer:{
        alignItems: 'flex-end'
    },
    button:{
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#dddddd',
        width: 200,
        marginRight: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#707070',
        justifyContent: 'center',
        alignItems:'center'
    },
    submit:{
        color:'#333333',
        fontWeight: '600',
        fontSize: 20
    }
})

export default Button