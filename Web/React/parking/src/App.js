import React, { useEffect, useState } from 'react'
import Maps from './kakaomap/Maps'
import Lists from './kakaomap/Lists'
const App = () => {

  const [myLat, setMylat] = useState()
  const [myLng, setMylng] = useState()
  const [lat, setLat] = useState(37.571076);
  const [lng, setLng] = useState(126.99588);

useEffect(()=>{
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position)=>{
      setMylat(position.coords.latitude);
      setMylng(position.coords.longitude);
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }
}, [])
console.log(myLat, myLng)
  return (
    <div>
      <Maps lat={lat} lng={lng} MyLat = {myLat} MyLng={myLng} />
      <Lists setLat={setLat} setLng={setLng} />
    </div>
  )
}

export default App