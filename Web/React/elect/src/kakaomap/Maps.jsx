import React from 'react'
import { Map } from 'react-kakao-maps-sdk'
import LatLng from './LatLng'


const Maps = (props) => {
  return (
    <>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: props.lat,
          lng: props.lng,
        }}
        style={{
          // 지도의 크기
          float: "right",
          width: "80%",
          height: "100vh"
        }}
        level={3} // 지도의 확대 레벨
      >
        <LatLng/>
      </Map>
    </>
  )
}

export default Maps