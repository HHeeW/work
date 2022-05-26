import React from 'react'
import { Map, MapMarker, Roadview, RoadviewMarker } from 'react-kakao-maps-sdk'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'

const RestList = () => {
  return (
    <Container>
      <h1 className='text-center my-5'> 경기도 맛집 리스트 </h1>
      <ListGroup>
        <ListGroupItem className='py-4 px-4'>
          <Row>
            <Col xs='4'>
              <Roadview // 로드뷰를 표시할 Container
                position={{
                  // 지도의 중심좌표
                  lat: 37.6820421,
                  lng: 126.7535498,
                  radius: 50,
                }}
                style={{
                  // 지도의 크기
                  width: "100%",
                  height: "250px",
                  borderRadius:'15px',
                  border:'2px solid #333'
                }}
                
              >
                <RoadviewMarker position={{lat: 37.6820421, lng: 126.7535498,}}>
                  <div style={{ color: "#000" }}>정통중화요리 남궁</div>
                </RoadviewMarker>
              </Roadview>
            </Col>
            <Col xs='4'>
              <h2>정통중화요리 남궁</h2>
              <p>고양시</p>
              <p>031-911-3702</p>
              <p>해물고추짬뽕, 양장피</p>
              <p>(10367) 경기도 고양시 일산서구 ... <br /> 경기도 고양시 ...</p>
            </Col>
            <Col xs='4'>
              <Map
                center={{ 
                  lat: 37.6820421, 
                  lng: 126.7535498 
                }}
                style={{ 
                  width: "100%", 
                  height: "250px",
                  borderRadius:'15px',
                  border:'2px solid #333'
                }} 
                level={4}
              >
                <MapMarker position={{ lat: 37.6820421, lng: 126.7535498 }}>
                  <div style={{
                    width:'100%',
                    borderRadius: '10px'
                    }}>정통중화요리 남궁</div>
                </MapMarker>
              </Map>
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem className='py-4 px-4'>
          <Row>
            <Col xs="3">
              <h2>풀잎속의생명</h2>
              <p>김포시</p>
              <p>031-997-6003</p>
              <p>생명정식,풀잎정식</p>
              <p>(10111) 경기도 김포시 사우동 895번지 <br /> 경기도 김포시 사우로 3-12 </p>
            </Col>
            <Col xs='4' className='mx-5'>
              <Map
                center={{ 
                  lat: 37.6218241, 
                  lng: 126.7226352 
                }}
                style={{ 
                  width: "100%", 
                  height: "250px",
                  borderRadius:'15px',
                  border:'2px solid #333'
                }} 
                level={4}
              >
                <MapMarker position={{ lat: 37.6218241, lng: 126.7226352 }}>
                  <div style={{
                    width:'100%',
                    borderRadius: '10px'
                    }}>풀잎속의생명</div>
                </MapMarker>
              </Map>
            </Col>
            <Col xs='4'>
              <Roadview // 로드뷰를 표시할 Container
                position={{
                  // 지도의 중심좌표
                  lat: 37.6218241,
                  lng: 126.7226352,
                  radius: 50,
                }}
                style={{
                  // 지도의 크기
                  width: "100%",
                  height: "250px",
                  borderRadius:'15px',
                  border:'2px solid #333'
                }}
              >
                <RoadviewMarker position={{lat: 37.6218241, lng: 126.7226352,}}>
                  <div style={{ color: "#000" }}>풀잎속의생명</div>
                </RoadviewMarker>
              </Roadview>
            </Col>
          </Row>
          
        </ListGroupItem>
        <ListGroupItem className='py-4 px-4'>
          <h2>정통중화요리 남궁</h2>
          <p>고양시</p>
          <p>031-911-3702</p>
          <p>해물고추짬뽕, 양장피</p>
          <p>(10367) 경기도 고양시 일산서구 ... <br /> 경기도 고양시 ...</p>
        </ListGroupItem>
      </ListGroup>
    </Container>
  )
}

export default RestList