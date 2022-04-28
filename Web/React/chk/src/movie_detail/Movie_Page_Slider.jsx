import { ArrowBackIos, ArrowForwardIos } from '@styled-icons/material'
import React from 'react'

const Movie_Page_Slider = () => {
  return (
    <div className='H_Movie_Page_Poster_Box'>
      <button className='H_Movie_Back_Btn'><ArrowBackIos /></button>
      <button className='H_Movie_Forward_Btn'><ArrowForwardIos/></button>
      <div className="H_Movie_Page_Poster_View_Box">
        <div className="H_Movie_Page_Poster">
          <img src="images/slider/d-1.jpg" alt="" />
          <img src="images/slider/d-2.jpg" alt="" />
          <img src="images/slider/d-3.jpg" alt="" />
          <img src="images/slider/d-4.jpg" alt="" />
          <img src="images/slider/d-5.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Movie_Page_Slider