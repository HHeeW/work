import React, { useEffect, useState } from 'react'
import data from './data/data'
import Slider from './components/Slider';
const App = () => {
  console.log(data);

  const [slider, setSlider] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    const lastIndex = slider.length-1;
    if(index<0){
      setIndex(lastIndex);
    }
    if(index> lastIndex){
      setIndex(0);
    }
  },[index, slider])
  useEffect(()=>{
    let imgSlider = setInterval(()=>{
      setIndex(index+1);
    }, 3000);
    return ()=>clearInterval(imgSlider);
  },[index])
  return (
    <div>
      {
        slider.map((slider, sliderIndex)=>(
          <Slider key={slider.id} sliderIndex={sliderIndex} index={index} {...slider} />
        ))
      }
      <div>{index}</div>
      <button className='prev' onClick={()=> setIndex(index-1)}>이전</button>
      <button className='next' onClick={()=>setIndex(index+1)}>다음</button>
    </div>
  )
}

export default App