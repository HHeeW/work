// import React, { useState } from 'react'

// const App = () => {

//   let [on , setOn] = useState(false)
//   let [count, setCount] = useState(1)

//   const bulbSwitch = ()=> setOn(on => !on);
//   const BulbAdd =() => setCount(count => count+1) ;

//   let bulb = <div className={on? "bulb-on": "bulb-off"} />;
//   const bulbs =Array(count).fill(bulb);
//   return (
//     <div style={{textAlign:'center', width:'350px', margin:'10px auto'}}>
//       <div className='bulbs'>
//         {bulbs}
//       </div>
//       <button onClick={bulbSwitch}> ON / OFF </button>
//       <button onClick={BulbAdd}>조명추가</button>
//     </div>
//   )
// }

// export default App

import React, { useEffect } from 'react'

const App = () => {
  console.log('app함수 실행')
  const [count,setCount] = useState(0);
  const handleCountUp = () => setCount(count+1);
  useEffect(()=>{
    console.log('이펙트 렌더링');
    console.log({count});
  });
  return (
    <div>
      <p>카운트 : {count}</p>
      <button onClick={handleCountUp}>카운트 증가</button>
    </div>
  )
}

export default App