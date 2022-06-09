import {ListGroupItem } from 'reactstrap';

const ChargerList = (props) => {
    const Click=()=>{
        props.setLat(props.lat)
        props.setLng(props.lng)
    }
  return (
    <ListGroupItem>
        <p href='#' onClick={Click} style={{cursor:"pointer", margin: "20px auto", borderBottom: "1px solid #333"}}>
            <p className='mx-3'>
            <h3>{props.title}</h3>
            {props.addr}<br/>
              이용 시간 : {props.useTime}<br/>
              충전 종류 : {props.chgerType}
            </p>
        </p>
    </ListGroupItem>
  )
}

export default ChargerList