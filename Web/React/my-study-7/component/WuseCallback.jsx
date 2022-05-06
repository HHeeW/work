import React, {useCallback, useEffect} from 'react'

const WuseCallback = (props) => {

    const consoleFunction = useCallback(() =>{
        console.log(`consoleFunction: number = ${props.number}`);
    }, []);
    

    useEffect(() =>{
        console.log('consoleFunction이 변경되었습니다.')
        return;
    }, [consoleFunction]);

  return (
    <div>
        <input type="number" value={props.number} onChange={(e) => props.setNumber(e.target.value)} />
        <br />
        <button onClick={consoleFunction}>콘솔 출력</button>
    </div>
  )
}

export default WuseCallback