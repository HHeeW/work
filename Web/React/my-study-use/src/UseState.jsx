import React, { useState } from 'react'

const UseState = () => {

  let [on , setOn] = useState(false)
  let [count, setCount] = useState(1)

  const bulbSwitch = ()=> setOn(on => !on);
  const BulbAdd =() => setCount(count => count+1) ;

  let bulb = <div className={on? "bulb-on": "bulb-off"} />;
  const bulbs =Array(count).fill(bulb);
  return (
    <div style={{textAlign:'center', width:'350px', margin:'10px auto'}}>
      <div className='bulbs'>
        {bulbs}
      </div>
      <button onClick={bulbSwitch}> ON / OFF </button>
      <button onClick={BulbAdd}>조명추가</button>
    </div>
  )
}

export default UseState