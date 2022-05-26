import { Container, ListGroup } from 'reactstrap'
import RestListItem from './RestListItem'
import axios from 'axios'
import { useEffect, useState } from 'react'


const RestList = () => {
  const[rest, setRest] = useState([]);

  useEffect(()=>{
    axios.get('/json/rest.json')
    .then(rs=> setRest([...rest],rs.data))
    // .then(rs=>console.log(rs.data))
  },[])
  
  return (
    <Container>
      <h1 className='text-center my-5'> 경기도 맛집 리스트 </h1>
      <ListGroup>
        {
          rest.map(rest=>(
            <RestListItem 
              id = {rest[0].id}
              sigun={rest[0].sigun}
              title={rest[0].title}
              tel={rest[0].tel}
              title_food={rest[0].title_food}
              zip={rest[0].zip}
              address={rest[0].address}
              address_old={rest[0].address_old}
              Latitude={rest[0].lat}
              longitude={rest[0].lon}
              radius={rest[0].radius}/>
          ))
        }
      </ListGroup>
    </Container>
  )
}

export default RestList