import React from 'react'
// import Api from './Apit.json'
import Maps from './kakaomap/Maps'

const App = () => {
  // console.log(Api.response.body.items.item[0])
  // for(let i in Api.response.body.items.item){
  //   console.log(Api.response.body.items.item[i].addr)
  // }
  return (
    <div>
      <h1> 전기차 충선소 위치</h1>
      <Maps/>
    </div>
  )
}

export default App