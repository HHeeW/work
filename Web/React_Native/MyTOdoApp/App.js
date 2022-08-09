import React, { useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './components/Heading'
import Input from './components/Input'
import Button from './components/Button'
import TodoList from './components/TodoList'
import TabBar from './components/TabBar'

let todoIndex = 0;
const App = () => {

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
 
  const inputChange = (text) =>{
       console.log('InputValue : '  + text);
       setInputValue({ text });
  }
  
  const submitTodo=()=>{
      let str = inputValue.text;
      if(str.match(/^\s*$/)) {
          return
      }
      const todo = {
         title: str,
         todoIndex,
         complete: false
      }
      todoIndex++
      setTodos([...todos, todo]);
      setInputValue('');
   }

  const deleteTodo = ( todoIndex )=> {
      const newTodos = todos.filter((todo) => todo.todoIndex !== todoIndex);
      setTodos(newTodos);
  }
  
  const toggleComplete = ( todoIndex ) => {
      const newTodos =  todos.forEach((todo)=> {
          if(todo.todoIndex === todoIndex ) {
              todo.complete = !todo.complete
          }
      });
      setTodos(newTodos);
  }

  return (
    <View style={st.container}>
        <ScrollView style={st.content} keyboardShouldPersistTaps='always'>
            <Heading />
            <Input inputValue={inputValue} 
                   inputChange={(text)=>inputChange(text)} />
            <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
            <Button submitTodo={submitTodo} />       
        </ScrollView>  
        <TabBar />
    </View>  
  )
}

const st = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#efefef'
   },
   content: {
      flex: 1,
      paddingTop: 60
   }

})

export default App