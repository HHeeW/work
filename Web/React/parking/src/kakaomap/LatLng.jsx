import React from 'react'
import Api from '../Apit.json'
import Marker from './Marker';

const LatLng = (props) => {
  
  console.log(props)
  let map = [];
  for(let i in Api.item){
    if(props.MyLat + 10 > Api.item[i].lat > props.MyLat - 10 || props.MyLng + 10 > Api.item[i].lng > props.MyLng - 10){
      map[i] = <Marker 
      key={i}
      lat={Api.item[i].lat} 
      lng={Api.item[i].lng}
      name={Api.item[i].statNm} 
      addr={Api.item[i].addr} 
      useTime={Api.item[i].useTime} 
      stat={Api.item[i].stat} 
      chgerType={Api.item[i].chgerType} 
    />}
  }
  return map;
}

export default LatLng