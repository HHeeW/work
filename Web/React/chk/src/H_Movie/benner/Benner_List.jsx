import { SwiperSlide } from "swiper/react";
import List_Page from '../List/List_Page';
import Benner_Slider from "./Benner_Slider";

const Benner_List = () => {
  let movies = List_Page();
  let Swiper_Slides = [];
  for(let i in movies){
      
      Swiper_Slides[i] = 
          <div className='H_Benner_Slide'>
              <div className='H_Benner_main_poster'>
                  <img src={movies[i].poster} alt="poster" />
              </div>
              <div className='H_Benner_Text_box'>
                  <h2>{movies[i].title}</h2>
                  <p>장르 : {movies[i].gen}</p>
                  <p>감독 : {movies[i].dir}</p>
                  <p>배우 : {movies[i].act}</p>
                  <h3>{movies[i].detail_title}</h3>
              </div>
              <ul className='H_Benner_slides'>
                  <li><img src={movies[i].slider1} alt="subPoster" /></li>
                  <li><img src={movies[i].slider2} alt="subPoster" /></li>
              </ul>
          </div>
  }
  return (
    <>
        {Swiper_Slides[0]}
    </>
    )
}

export default Benner_List