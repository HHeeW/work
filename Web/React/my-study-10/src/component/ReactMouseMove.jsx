import React from 'react'

const ReactMouseMove = () => {
   const MouseMove =(tag)=>{
       console.log('Tag :' +tag)
   }
  return (
    <div>
        <div onMouseMove={e=>MouseMove('div')}>마우스무브</div>
        <input type="text" onMouseMove={e=>MouseMove("input")} />
        <select onChange={change}  onMouseMove={e=>MouseMove('select')}>
            <option value ="">선택하세요</option>
            <option value ="react">react</option>
            <option value ="javascript">javascript</option>
            <option value ="node.js">node.js</option>
            <option value ="sql">sql</option>
            <option value ="html">html</option>
        </select>
    </div>
  )
}

export default ReactMouseMove