import React, { Component } from 'react'
import {Container, Row, InputGroup, FormControl, Button, ListGroup, Col} from 'react-bootstrap';
import './todo.css';

export default class Todo extends Component {
  render() {
      return(
        <Container>
            <div className="header">
                <h1 className="header text-center my-5">나의 학습목록</h1>
            </div>

            <InputGroup className="mb-3">
                <FormControl
                placeholder="추가할 공부를 입력하세요."
                aria-label="추가할 공부"
                aria-describedby="basic-addon"
                />
                <Button variant="primary" id="button-addon">
                입력
                </Button>
            </InputGroup>
            <hr />
            <ListGroup as='ol' numbered>
                <ListGroup.Item as='li'>
                    <Row>
                        <Col lg={10}> html,css</Col>
                        <Col lg={2}>
                            <Button variant='warning' className='me-3 px-4'>수정</Button>
                            <Button variant='danger' className='px-4'>삭제</Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item as='li'>
                    <Row>
                        <Col lg={10}>javascript</Col>
                        <Col lg={2}>
                            <Button variant='warning' className='me-3 px-4'>수정</Button>
                            <Button variant='danger' className='px-4'>삭제</Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item as='li'>
                    <Row>
                        <Col lg={10}>reactJS</Col>
                        <Col lg={2}>
                            <Button variant='warning' className='me-3 px-4'>수정</Button>
                            <Button variant='danger' className='px-4'>삭제</Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item as='li'>
                    <Row>
                        <Col lg={10}>Database</Col>
                        <Col lg={2}>
                        <Button variant='warning' className='me-3 px-4'>수정</Button>
                        <Button variant='danger' className='px-4'>삭제</Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item as='li'>
                    <Row>
                        <Col lg={10}>nodeJS</Col>
                        <Col lg={2}>
                            <Button variant='warning' className='me-3 px-4'>수정</Button>
                            <Button variant='danger' className='px-4'>삭제</Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
                </ListGroup>

        </Container>
    )
  }
}
