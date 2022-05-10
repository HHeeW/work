import React from 'react'
import Benner from './Benner'
import List_Page from '../List/List_Page';


const Benner_List = () => {
    let movies = List_Page();
    let movielist = [];
    for(let i in movies){
      movielist[i] = <Benner 
      key={parseInt(i)+1} 
      id={parseInt(i)+1} 
      title={movies[i].title} 
      poster={movies[i].poster} 
      gen={movies[i].gen} 
      dir={movies[i].dir} 
      act={movies[i].act}
      detail_title={movies[i].detail_title}
      slider1={movies[i].slider1}
      slider2={movies[i].slider2}
      />
    }
    return movielist[0];
}

export default Benner_List