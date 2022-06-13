
import { useState } from 'react'
import { Form, FormGroup, Label, Input, Col, Container, Button } from 'reactstrap'

const RestWrite = () => {

  const [rWrite, setRWrite] = useState({
    title: '',
    titleFood: '',
    tel1: '',
    tel2: '',
    tel3: '',
    zipCode: '',
    address1: '',
    address2:'',
    radius: '',
    file: null,
    fileName:''
  })
  
  const handleInput = (e)=>{
    let newRWrite = {...rWrite}; ///바로 수정이 불가하여 복제 함.
    newRWrite[e.target.name] = e.target.value;
    setRWrite(newRWrite);
  }

  return (
    <Container className='writeBox'>
      <h2 className='text-centery my-5'>새로운 상점 등록</h2>
      <Form>
        <FormGroup row>
          <Label for="title" sm={2}>
            상점이름
          </Label>
          <Col sm={10}>
            <Input 
              id='title' 
              name='title' 
              placeholder='상점이름' 
              type='text' 
              onChange={ handleInput }
              value={rWrite.title}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="title_food" sm={2}>
            주요메뉴
          </Label>
          <Col sm={10}>
            <Input 
              id='title_food' 
              name='titleFood' 
              placeholder='주요메뉴' 
              type='text' 
              onChange={ handleInput}
              value={rWrite.titleFood}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="tel" sm={2}>
            전화번호
          </Label>
          <Col sm={2}>
            <Input 
              id='tel' 
              name='tel1' 
              placeholder='전화번호' 
              type='number' 
              onChange={ handleInput}
              value={rWrite.title.tel1}/>
          </Col>
          <Col sm={2}>
            <Input 
              id='tel' 
              name='tel2'
              type='number' 
              onChange={ handleInput}
              value={rWrite.title.tel2}/>
          </Col>
          <Col sm={2}>
            <Input 
              id='tel' 
              name='tel3' 
              type='number' 
              onChange={ handleInput}
              value={rWrite.title.tel3}/>
          </Col>
          <Col sm={4}/>
        </FormGroup>
        <FormGroup row>
          <Label for='zip' sm={2}>우편번호</Label>
          <Col sm={3}>
            <Input name='zipCode' type='text' readOnly/>
          </Col>
          <Col sm={2}>
          <Button variant="outlined" onClick={ handleInput }>주소검색</Button>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>
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
        <FormGroup row className='my-5'>
          <Col sm={2}/>
          <Col sm={3}><Button color="danger" block outline>취소</Button></Col>
          <Col sm={2}/>
          <Col sm={3}><Button color="success" block outline>전송</Button></Col>
          <Col sm={2}/>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>이미지 업로드</Label>
          <Col sm={10}>
            <Input type='file' name='file' placeholder='이미지 올리기'/>
          </Col>
        </FormGroup>
      </Form>
    </Container>
    )
}

export default RestWrite