import React, { useEffect } from 'react'

const UseEffect = () => {
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

export default UseEffect