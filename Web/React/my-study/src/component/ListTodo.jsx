import React, { Component } from 'react'
import { Row, Button, ListGroup, Col } from 'react-bootstrap';

class ListTodo extends Component {
  render() {
    const todos =[
        "html, css",
        "javascript",
        "reactJS",
        "DataBase",
        "nodeJS"
    ];
    const TodoLi = todos.map((todo, i) =>{
        return(
          <ListGroup.Item as='li' key ={i}>
            <Row>
                <Col lg={10} xs={6}>{todo}</Col>
                <Col lg={2} xs={6} className='text-center'>
                    <Button variant='warning' className='me-3 px-4'>수정</Button>
                    <Button variant='danger' className='px-4'>삭제</Button>
                </Col>
            </Row>
          </ListGroup.Item>
        );
    });
    return(TodoLi)
  }
}

export default ListTodo