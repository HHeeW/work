import React from 'react'
import Movie_Detail from './Movie_Detail';
import List_Detail from '../List/List_Detail';

const Movie_Detail_List = () => {
  let movies_detail = List_Detail();
  let moive = window.location.pathname.substr(18, );
  let movie_detail_List = [];
  for(let i in movies_detail){
    if(moive-1 == i){
        movie_detail_List = <Movie_Detail 
        key={parseInt(i)+1}
        id={parseInt(i)+1} 
        poster={movies_detail[i].poster}
        link={movies_detail[i].link}
        title={movies_detail[i].title}
        entitle={movies_detail[i].entitle}
        dir={movies_detail[i].dir}
        act={movies_detail[i].act}
        gen={movies_detail[i].gen}
        bas={movies_detail[i].bas} 
        age={movies_detail[i].age} 
        ticketing={movies_detail[i].ticketing} 
        open={movies_detail[i].open} 
        detail_title={movies_detail[i].detail_title}
        detail={movies_detail[i].detail}/>
      }
  }
    
    return movie_detail_List;
}
export default Movie_Detail_List