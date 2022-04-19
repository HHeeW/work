import React, { Component } from 'react'
import {Container, ListGroup} from 'react-bootstrap';
import './todo.css';
import Header from '../component/Header';
import Input from '../component/Input';
import ListTodo from '../component/ListTodo';

export default class Todo extends Component {


    render() {
      
      return(
        <Container>
            <Header />
            <Input />
            <hr />
            <ListGroup as='ul'>
                <ListTodo />
            </ListGroup>
        </Container>
    )
  }
}
