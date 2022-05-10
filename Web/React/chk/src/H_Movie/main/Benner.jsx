import React from 'react'

const Benner = (props) => {
  return (
    <div className='H_Benner'>
        <div className='H_Benner_Slide'>
            <div className='H_Benner_main_poster'>
                <img src={props.poster} alt="poster" />
            </div>
            <div className='H_Benner_Text_box'>
                <h2>{props.title}</h2>
                <p>장르 : {props.gen}</p>
                <p>감독 : {props.dir}</p>
                <p>배우 : {props.act}</p>
                <h3>{props.detail_title}</h3>
            </div>
            <ul className='H_Benner_slides'>
                <li><img src={props.slider1} alt="subPoster" /></li>
                <li><img src={props.slider2} alt="subPoster" /></li>
            </ul>
        </div>
    </div>
  )
}

export default Benner