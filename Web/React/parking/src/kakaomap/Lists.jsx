import React from 'react'
import { ListGroup} from 'reactstrap';
import Charger from './Charger';
import './map.css'
const Lists = (props) => {
  return (
    <>
      <h1 className="text-center" style={{width: "20%", lineHeight:"9vh"}}> 전기차 충선소 위치</h1>
      <ListGroup numbered className='List' style={{height: "90vh", overflowY: "scroll"}}>
        <Charger setLat={props.setLat} setLng={props.setLng}/>
      </ListGroup>
    </>
  )
}

export default Lists