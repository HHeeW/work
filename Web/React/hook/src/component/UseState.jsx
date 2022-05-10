import React, { useState } from 'react'
import './usestate.css'



const UseState = () => {
  const [icon, setIcon] = useState(false);
  const [count, setCount] = useState(213);
  const change = () =>{
    setIcon(!icon)
    (icon ? setCount(count - 1) : setCount(count +1) )
  }

  return (
    <div className='usecontainer'>
      <div className="box">
        {count}
        <button onClick={change}>
        {(icon ? <p className='img'></p> : <p className='imga'></p>)}
        </button>
      </div>
    </div>
  )
}

export default UseState