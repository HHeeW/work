import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TodoButton from './TodoButton';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <View style={[sty.todoContainer]}>
        <Text style={sty.todoText}>
            { todo.title }
        </Text>
        <TodoButton name='완료' complete={todo.complete} 
                    onPress={()=>toggleComplete(todo.todoIndex)} />
        <TodoButton name='삭제' 
                    onPress={()=>deleteTodo(todo.todoIndex)} />
    </View>
  )
}
const sty = StyleSheet.create({
    todoContainer: {
       paddingTop: 14,
       paddingBottom: 14,
       paddingLeft:10,
       paddingRight:10,
       flexDirection: 'row',
       justifyContent:'space-evenly',
       alignItems: 'center',
       borderBottomColor: 'rgba(175, 45, 45, 0.4)',
       borderBottomWidth: 1,
       borderStyle: 'dashed'
    },
    todoText: {
       fontSize: 17,
       width: 220
    }
})
export default Todo