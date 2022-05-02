import React, {useState, useEffect ,useMemo} from 'react'

const thinkingCalculator = (number) =>{
  console.log('생각 중....');
  for(let i=0;i<999999999;i++){}
  return number+= 10000;
}
const notThinkingCalculator = (number) =>{
  console.log("생각 안하고 바로 답을 알려줍니다.");
  return number + 10000;
}

const App = () => {
  const[thinkNumber, setThinkNumber] = useState(1);
  const[notThinkNumber, setNotThinkNumber] = useState(1);
  
  //const thinkingSum = thinkingCalculator(thinkNumber);
  const thinkingSum = useMemo(()=>{
    return thinkingCalculator(thinkNumber);
  },[thinkNumber])
  const notThinkSum = notThinkingCalculator(notThinkNumber)


  const[number,setNumber] = useState(0);
  const[isKorea, setIsKorea] = useState(true);
  const location = useMemo(() => {
    return {
      country : isKorea ? '한국' : '외국'
    };
  }, [isKorea])
  useEffect(()=>{
    console.log('로케이션값이 바뀌었습니다.')
  },[location])


  return (
      <>
        <div>
          <h2>생각좀 한 다음에 계산하는 계산기</h2>
          <input 
            type={"number"}
            value={thinkNumber}
            onChange={(e)=>setThinkNumber(parseInt(e.target.value))} 
          />
          <span> + 10000 = { thinkingSum}</span>

          <h2>생각 안하고 바로 계산하는 계산기</h2>
          <input
            type={'number'}
            value={notThinkNumber}
            onChange={(e)=>setNotThinkNumber(parseInt(e.target.value))}
          />
          <span> + 10000 = {notThinkSum}</span>
        </div>

        
      <div>
        <h2>대중교통을 몇 번 이용하세요?</h2>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <hr />
        <h2>어느 나라에 사시는데요?</h2>
        <p>사는 곳: {location.country}</p>
        <button onClick={()=>setIsKorea(!isKorea)}>답변</button>
      </div>
    </>
  )
}

export default App