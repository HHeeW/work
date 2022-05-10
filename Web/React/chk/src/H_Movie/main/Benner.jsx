import React from 'react'

const Benner = (props) => {
  return (
    <div className='H_Benner'>
        <div className='H_Benner_Slide'>
            <div className='H_Benner_main_poster'>
                <img src="/H_images/85715_320.jpg" alt="poster" />
            </div>
            <div className='H_Benner_Text_box'>
                <p>제목: {props.title}</p>
                <p>장르: {props.gen}</p>
                <p>감독: {props.dir}</p>
                <p>배우: {props.act}</p>
                <p>줄거리{props.detail_title}</p>
                <p>{props.detail}</p>
            </div>
            <ul className='H_Benner_slides'>
                <li><img src="/H_images/slider/d1.jpg" alt="subPoster" /></li>
                <li><img src="/H_images/slider/d2.jpg" alt="subPoster" /></li>
            </ul>
        </div>
    </div>
  )
}

export default Benner