import {ListGroupItem } from 'reactstrap';

const ChargerList = (props) => {
    const Click=()=>{
        props.setLat(props.lat)
        props.setLng(props.lng)
    }
  return (
    <ListGroupItem>
        <div href='#' onClick={Click} style={{cursor:"pointer", paddingBottom: "30px", borderBottom: "1px solid #333"}}>
            <div className='mx-3'>
              <h3>{props.title}</h3>
              {props.addr}<br/>
              이용 시간 : {props.useTime}<br/>
              충전 종류 : {props.chgerType}
            </div>
        </div>
    </ListGroupItem>
  )
}

export default ChargerList