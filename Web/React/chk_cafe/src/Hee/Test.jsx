import React from 'react'
import List from './MenuList.json';
const test = (props) => {
    console.log(List.TeaList[0])
    let asd= [];
    asd.push(List.TeaList[0]);
    asd.push(List.List[1])
    console.log(asd)
  return (
    <div>test</div>
  )
}

export default test