import React, { useState } from 'react'
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk'

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
      >
        {isOpen && (
        <CustomOverlayMap position={{lat: props.lat, lng: props.lng,}}>
            <div className="wrap">
              <div className="info">
                <div className="title">
                  카카오 스페이스닷원
                  <div
                    className="close"
                    onClick={() => setIsOpen(false)}
                    title="닫기"
                  ></div>
                </div>
                <div className="body">
                  <div className="img">
                    <img
                      src="//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/2170353A51B82DE005"
                      width="73"
                      height="70"
                      alt="카카오 스페이스닷원"
                    />
                  </div>
                  <div className="desc">
                    <div className="ellipsis">
                      제주특별자치도 제주시 첨단로 242
                    </div>
                    <div className="jibun ellipsis">
                      (우) 63309 (지번) 영평동 2181
                    </div>
                    <div>
                      <a
                        href="https://www.kakaocorp.com/main"
                        target="_blank"
                        className="link"
                        rel="noreferrer"
                      >
                        홈페이지
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ;
          </CustomOverlayMap>
        )}
      </MapMarker>
  )
}

export default Marker