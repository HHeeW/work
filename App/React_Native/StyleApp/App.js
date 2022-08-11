// import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import HBuger from './components/HBuger'

// import Style01 from './components/Style01'
// import Style02 from './components/Style02'
// import Style03 from './components/Style03'

const App = () => {
  // const [mode, setMode] = useState(true)
  // const changeMode= ()=>{
  //   setMode(!mode)
  //   alert(mode)
  // }
  return (
    <ScrollView>
      {/* <Style01 mode={mode} />
      <Style02 mode={mode} /> */}
      {/* <Style03/> */}
      <HBuger/>
    </ScrollView>
  )
}

export default App