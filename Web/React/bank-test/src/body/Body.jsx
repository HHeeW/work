import React from 'react'
import './body.css'
const Body = () => {
  return (
    <div className='body-container'>
        <div className="slider">
            <img src="/images/slide1.jpg" alt="slide1" />
        </div>
        <div className='Box'>
            <div className='LEFT'>
                공지사항
            </div>
            <div className='CENTER'>
                배너
            </div>
            <div className="RIGHT">
                바로가기
            </div>
        </div>
    </div>
  )
}

export default Body