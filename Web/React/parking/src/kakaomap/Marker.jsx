import React, { useState } from 'react'
import { MapMarker } from 'react-kakao-maps-sdk'
const Marker = (props) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <MapMarker // 마커를 생성합니다
        onClick={() => setIsOpen(true)}
        position={{
          // 마커가 표시될 위치입니다
          lat: props.lat,
          lng: props.lng,
        }}
        image={{
            src: "/images/mark.png", // 마커이미지의 주소입니다
            size: {
              width: 64,
              height: 69,
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 27,
                y: 69,
              }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            },
          }}
      >{isOpen && (
        
            <div className="wrap bg-white p-3" style={{padding:"10px", marginTop: "-50px",backgroundColor: "white", border: "1px solid #000", borderRadius:"10px"}} onClick={() => setIsOpen(false)}
                    title="닫기">
              <div className="info">
                <div className="title h4 text-primary" style={{fontSize:"20px", fontWeight:" bold"}}>
                    {props.name}
                </div>
                <div className="body">
                  <div className="desc">
                    <div className="ellipsis">
                      {props.addr}
                    </div>
                    <div className="jibun ellipsis">
                      (사용시간) {props.useTime}<br/> (종류) {props.chgerType}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )}
      </MapMarker>
  )
}

export default Marker