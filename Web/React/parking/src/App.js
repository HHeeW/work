import React from 'react'
const App = () => {
  fetch('https://apis.data.go.kr/B552584/EvCharger/getChargerInfo?serviceKey=deTn%2FKwNMakxW5MC72DSoHlSAfl%2FeJQe%2Bdtq6473%2BN8DdZUnNbR0e1UWIY8FOg6PMko21V9giTHQ4JsMyrFPuQ%3D%3D&pageNo=1&numOfRows=10&zcode=11')
    .then(response => response.text())
    .then(xmlText => console.log(xmlText))
  return (
    <div>
    </div>
  )
}

export default App