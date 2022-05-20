import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import ReactProgress from './component/ReactProgress'
import Sweetalert from './component/Sweetalertbasic'

const App = () => {
  return (
    <div>
      <h1>Start React !!!</h1>
      <ReactProgress/>
      <Sweetalert/>
    </div>
  )
}

export default App