import React from 'react'
import { View, StyleSheet } from 'react-native'
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {

    return (
    <View style={sty.todoListContainer}>
         {
            todos.map((todo, i) => (
                <Todo 
                  todo={todo} 
                  key={i} 
                  toggleComplete={toggleComplete}
                  deleteTodo = {deleteTodo}  
                />
            ))
         }  
    </View>
  )
}
const sty = StyleSheet.create({
   todoListContainer: {
       marginLeft: 20,
       marginRight: 20,
       borderColor: '#707070',
       borderLeftWidth: 1,
       borderRightWidth: 1,
       borderBottomWidth: 1,
       shadowOpacity: 0.3,
       shadowRadius: 3,
       shadowColor: '#000000',
       shadowOffset: { width: 4, height: 4 },
       padding:20,
       backgroundColor:'#ffffff'
   }
})

export default TodoList