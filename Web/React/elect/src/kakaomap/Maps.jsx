import React from 'react'
import { Map } from 'react-kakao-maps-sdk'
import LatLng from './LatLng'

const Maps = () => {
  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 37.571076,
        lng: 126.99588,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "90vh",
      }}
      level={3} // 지도의 확대 레벨
    >
      <LatLng/>
    </Map>
  )
}

export default Maps