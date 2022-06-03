import React from 'react'
import {Map} from 'react-kakao-maps-sdk'

const RestMap = ({lati, long}) => {
  return (
    <>
        <Map center={{
            lat : lati,
            lng: long
        }}
        style={{
            width: "100%",
            height: "400px"
        }}
        level={3}
        />
    </>
  )
}

export default RestMap