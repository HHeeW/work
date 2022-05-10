import React, { useCallback, useState } from 'react'
// import WuseCallback from '../component/WuseCallback'
import Box from './component/Box'

const App = () => {
  // const [number, setNumber] = useState(0);
  
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);
  const createBoxStyle = useCallback(() =>{
    return{
      backgroundColor: 'lightblue',
      width: `${size}px`,
      height: `${size}px`
    }
  })
  
  return (
    <div style={{
        background: isDark ? 'black' : 'white'
    }}>
      {/* <WuseCallback number={nmber} setNumber={setNumber} /> */}
      <input type={'number'}
             value={size}
            onChange={(e)=>setSize(e.target.value)} />
            <br />
            <button onClick={()=>setIsDark(!isDark)}>바탕화면 바꾸기</button>
            <br />
            <Box createBoxStyle = {createBoxStyle} />
    </div>
  )
}

export default App