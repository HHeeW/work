import React from 'react'
import Api from '../Apit.json'
import Marker from './Marker';

const LatLng = () => {
    let map = [];
  for(let i in Api.response.body.items.item){
    map[i] = <Marker 
    key={i}
    lat={Api.response.body.items.item[i].lat} 
    lng={Api.response.body.items.item[i].lng}
    name={Api.response.body.items.item[i].statNm} 
    addr={Api.response.body.items.item[i].addr} 
    useTime={Api.response.body.items.item[i].useTime} 
    stat={Api.response.body.items.item[i].stat} 
    chgerType={Api.response.body.items.item[i].chgerType} 
    />
  }
  return map;
}

export default LatLng