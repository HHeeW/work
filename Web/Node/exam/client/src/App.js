import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  //데이터를 저장할 공간
  const [serverList, setServerList] = useState([]);

  //데이터 가져오기
  useEffect(()=>{
    axios.get('/api/example/', {})
    .then(res=>{
      setServerList(...serverList, res.data)
    })
    .catch(e =>console.log(e))
  },[])

  return (
    <div>
      {
        serverList.map( list => (
          <div> {list.name}</div>
        ))
      }
    </div>
  )
}

export default App