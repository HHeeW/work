import { ArrowBackIos, ArrowForwardIos } from '@styled-icons/material'
import './movie_page_slider.css'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Movie_Page_Slider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: false,
    // nextArrow: <ArrowForwardIos/>,
    // prevArrow:<ArrowBackIos />
  };
  return (
    <>
    <Slider {...settings}>
      <div className='H_Slider'>
          <img src="images/slider/d-1.jpg" alt="" />
      </div>
      <div className='H_Slider'>
          <img src="images/slider/d-2.jpg" alt="" />
      </div>
      <div className='H_Slider'>
          <img src="images/slider/d-3.jpg" alt="" />
      </div>
      <div className='H_Slider'>
          <img src="images/slider/d-4.jpg" alt="" />
      </div>
      <div className='H_Slider'>
          <img src="images/slider/d-5.jpg" alt="" />
      </div>
    </Slider>
    {/* <div className='H_Movie_Page_Poster_Box'>
      <button className='H_Movie_Back_Btn'><ArrowBackIos /></button>
      <button className='H_Movie_Forward_Btn'><ArrowForwardIos/></button>
      <div className="H_Movie_Page_Poster_View_Box">
        <div className="H_Movie_Page_Poster">
        </div>
      </div>
    </div> */}
    </>
  )
}

export default Movie_Page_Slider