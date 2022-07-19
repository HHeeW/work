import React from 'react'
import { ListGroup} from 'reactstrap';
import Charger from './Charger';
import './map.css'
const Lists = (props) => {
  return (
    <>
      <h1 style={{minWidth: "20%", lineHeight:"9vh", paddingLeft: "3%", marginTop: "0"}}> 전기차 충선소 위치</h1>
      <ListGroup numbered className='List' style={{height: "85vh", overflowY: "scroll", margin: "0 auto"}}>
        <Charger setLat={props.setLat} setLng={props.setLng} MyLat = {props.MyLat} MyLng={props.MyLng} />
      </ListGroup>
    </>
  )
}

export default Lists