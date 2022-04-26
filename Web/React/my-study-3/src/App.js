import React, {useState, useEffect} from 'react'

const App = () => {
  const [count, setCount] = useState(1);
  const [data, setData]= useState();
  const countUpdate =()=>{
    setCount(count+1)
  }
  
  const inputChange = (e) =>{
    setData(e.target.value);
  }
  //useEffect 렌더링 확인
  useEffect(()=>{
    console.log('렌더링됨')
  })
  return (
    <div>
      <button onClick={countUpdate}>카운트증가</button>
      <span>카운트: {count} </span>
      <br />
      <input type='text' value={data} onChange={inputChange} />
      <span>데이터 : {data} </span>
    </div>
  )
}

export default App