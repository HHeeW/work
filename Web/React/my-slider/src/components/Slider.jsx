import React from 'react'

const Slider = (props) => {

    let position = 'nextSlide';
    if(props.slideIndex === props.index){
        position ='activeSlide';
    }
    if(props.slideIndex === props.index-1 || props.slideIndex === props.slideIndex+1)
  return (
    <article className={position} key={props.id}>
        <img src={props.image} alt={props.title} className="imgSlide" />
    </article>
  )
}

export default Slider