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
          rest.map(c=>(
            <RestListItem 
              id = {c[0].id}
              sigun={c[0].sigun}
              title={c[0].title}
              tel={c[0].tel}
              title_food={c[0].title_food}
              zip={c[0].zip}
              address={c[0].address}
              address_old={c[0].address_old}
              Latitude={c[0].lat}
              longitude={c[0].lon}
              radius={c[0].radius}/>
          ))
        }
        {/*  */}
      </ListGroup>
    </Container>
  )
}

export default RestList