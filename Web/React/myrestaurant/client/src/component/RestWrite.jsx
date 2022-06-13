import { Button } from '@mui/material'
import { Form, FormGroup, Label, Input, Col, Container } from 'reactstrap'

const RestWrite = () => {
  return (
    <Container>
      <Form>
        <FormGroup row>
          <Label for="title" sm={2}>
            상점이름
          </Label>
          <Col sm={10}>
            <Input id='title' name='title' placeholder='상점이름' type='text'/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="title_food" sm={2}>
            주요메뉴
          </Label>
          <Col sm={10}>
            <Input id='title_food' name='title_food' placeholder='주요메뉴' type='text'/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="tel" sm={2}>
            전화번호
          </Label>
          <Col sm={2}>
            <Input id='tel' name='tel' placeholder='전화번호' type='number'/>
          </Col>
          <Col sm={2}>
            <Input id='tel' name='tel'type='number'/>
          </Col>
          <Col sm={2}>
            <Input id='tel' name='tel' type='number'/>
          </Col>
          <Col sm={4}/>
        </FormGroup>
        <FormGroup row>
          <Label for='zip' sm={2}>우편번호</Label>
          <Col sm={3}>
            <Input name='zipCode' type='text' readOnly/>
          </Col>
          <Col sm={1}>
          <Button variant="outlined">주소검색</Button>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for={'tel1'} sm={2}>
            주소
          </Label>
          <Col sm={10}>
            <Input type='text' name='address' readOnly/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={2}/>
          <Col sm={10}>
            <Input type='text' name='address2' placeholder='상세주소'/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>거리뷰</Label>
          <Col sm={3}>
            <Input type='number' name='radius' placeholder='거리뷰'/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={2}/>
          <Col sm={3}><Button color="danger" block outline>취소</Button></Col>
          <Col sm={2}/>
          <Col sm={3}><Button color="success" block outline>전송</Button></Col>
          <Col sm={2}/>
        </FormGroup>
      </Form>
    </Container>
    )
}

export default RestWrite