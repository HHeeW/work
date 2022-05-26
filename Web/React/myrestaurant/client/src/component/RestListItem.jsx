import { useEffect, useState } from 'react'
import { Map, MapMarker, Roadview, RoadviewMarker } from 'react-kakao-maps-sdk'
import { Col, ListGroupItem, Row } from 'reactstrap'

const RestListItem = (props) => {
  console.log(props)
    const[lat, setLat] = useState('');
    const[lng, setLng]=useState('');
    const[radius, setRadius]=useState('');

    useEffect(()=>{
      setLat(props.Latitude);
      setLng(props.longitude);
      setRadius(props.radius);
    },[])
  return (
    <ListGroupItem className='py-4 px-4'>
          <Row>
            <Col xs='4'>
              <Roadview // 로드뷰를 표시할 Container
                position={{
                  // 지도의 중심좌표
                  lat: lat,
                  lng: lng,
                  radius: radius,
                }}
                style={{
                  // 지도의 크기
                  width: "100%",
                  height: "250px",
                  borderRadius:'15px',
                  border:'2px solid #333'
                }}
                
              >
                <RoadviewMarker position={{lat: lat, lng: lng,}}>
                  <div style={{ color: "#000" }}>{props.title}</div>
                </RoadviewMarker>
              </Roadview>
            </Col>
            <Col xs='4'>
              <h2>{props.title}</h2>
              <p>{props.sigun}</p>
              <p>{props.tel}</p>
              <p>{props.title_food}</p>
              <p>({props.zip}) {props.address}<br /> {props.address_old}</p>
            </Col>
            <Col xs='4'>
              <Map
                center={{ 
                  lat: lat, 
                  lng: lng 
                }}
                style={{ 
                  width: "100%", 
                  height: "250px",
                  borderRadius:'15px',
                  border:'2px solid #333'
                }} 
                level={4}
              >
                <MapMarker position={{ lat: lat, lng: lng }}>
                  <div style={{
                    width:'100%',
                    borderRadius: '10px'
                    }}>{props.title}</div>
                </MapMarker>
              </Map>
            </Col>
          </Row>
        </ListGroupItem>
  )
}

export default RestListItem