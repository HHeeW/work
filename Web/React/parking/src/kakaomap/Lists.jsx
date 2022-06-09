import React from 'react'
import { ListGroup} from 'reactstrap';
import Charger from './Charger';
import './map.css'
const Lists = (props) => {
  return (
    <>
      <h1 style={{width: "20%", lineHeight:"9vh", paddingLeft: "3%"}}> 전기차 충선소 위치</h1>
      <ListGroup numbered className='List' style={{height: "90vh", overflowY: "scroll"}}>
        <Charger setLat={props.setLat} setLng={props.setLng} MyLat = {props.MyLat} MyLng={props.MyLng} />
      </ListGroup>
    </>
  )
}

export default Lists