import React, { useState, useEffect } from 'react'
import { Container, ListGroup } from 'reactstrap'
import RestListItem from './RestListItem'
import axios from 'axios'

const RestList = () => {
  const [rest, setRest] = useState([]);

  useEffect(()=>{
      axios.get('./json/rest.json')
      .then(rs => setRest(...rest, rs.data))
      //.then(rs=>console.log(rs.data))
  }, []);
    
  return (
    <Container>
        <h1 className="text-center my-5"> 경기도 맛집 리스트 </h1>
        <ListGroup>
            {
               rest.map( c => (
                <RestListItem 
                id={c.id}
                sigun={c.sigun}
                title={c.title}
                tel={c.tel}
                title_food={c.title_food}    
                zip={c.zip}
                address={c.address}
                address_old={c.address_old}
                latitude={c.latitude}
                longitude={c.longitude}
                radius={c.radius}
                />   
               ))    
            }
      
        </ListGroup>
    </Container>
  )
}

export default RestList