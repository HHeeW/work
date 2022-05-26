import {ListGroupItem } from 'reactstrap';

const ChargerList = (props) => {
    const Click=()=>{
        props.setLat(props.lat)
        props.setLng(props.lng)
    }
  return (
    <ListGroupItem>
        <a onClick={Click} style={{cursor:"pointer"}}>
            <p className='mx-3'>{props.title}<br/>
            {props.addr}<br/>
            {props.useTime}<br/>
            {props.chgerType}
            </p>
        </a>
    </ListGroupItem>
  )
}

export default ChargerList