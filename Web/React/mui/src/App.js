import React from 'react'
import TourCard from './components/TourCard'
import { Container, Grid, Typography } from '@mui/material';
import SearchAppBar from './components/AppBar';
import theBest from './data.json'
const App = () => {
  return (
    <>
      <SearchAppBar/>
      <Container sx={{marginY:5}}>
        {
          theBest.map((bt)=>(
            <>
              <Typography
                variang="h4"
                component={"h2"}
                marginTop={5}
                marginBottom={3}
              >
                {bt.name}
              </Typography>
              <Grid container spacing={5}>
                {theBest.bt.map((b, index)=><TourCard b={b} key={index}/>)}
              </Grid>
            </>
          ))
        }
        <Grid container spacing={3}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </>
  )
}

export default App