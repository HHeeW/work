import React, { useEffect, useState } from 'react'
import Maps from './kakaomap/Maps'
import Lists from './kakaomap/Lists'
const App = () => {
useEffect(()=>{
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
    });
  }
}, [])
  const [lat, setLat] = useState(37.571076);
  const [lng, setLng] = useState(126.99588);
  console.log(lat, lng)
  return (
    <div>
      <Maps lat={lat} lng={lng}/>
      <Lists setLat={setLat} setLng={setLng} />
    </div>
  )
}

export default App