import React from 'react'
import RestList from './component/RestList'
import {Container, Typography} from '@mui/material'


const App = () => {
  return (
    <div>
      <Container maxWidth='lg'>
            <Typography variant='h2' component={'h2'} style={{textAlign:"center", fontWeight:"bold", marginTop:"40px", marginBottom:"30px"}}>나의 레스토랑 리스트</Typography>
            <RestList/>
      </Container>
    </div>
  )
}

export default App