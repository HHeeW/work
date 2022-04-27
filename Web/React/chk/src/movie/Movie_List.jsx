import React from 'react'
import Detail from './Movie_Detail'
import List_Detail from '../List/List_Detail';

const Movie_List = () => {
  
  let movies = List_Detail();
    let movielist = [];
    for(let i in movies){
      movielist[i] = <Detail 
      key={movies[i].id} 
      id={movies[i].id} 
      title={movies[i].title} 
      poster={movies[i].poster} 
      age={movies[i].age} 
      ticketing={movies[i].ticketing} 
      open={movies[i].open} 
      detail={movies[i].detail}/>
    }
    return movielist;
}

export default Movie_List