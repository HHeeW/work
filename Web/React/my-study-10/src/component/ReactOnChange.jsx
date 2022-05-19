import React from 'react'

const ReactOnCHange = () => {
    const change = (e) => {
        var val = e.target.value;
        console.log('value: '+val)
    }
  return (
    <div>
        <select onChange={change}>
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

export default ReactOnCHange