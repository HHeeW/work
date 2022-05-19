import React from 'react'
import './App.css'
import ReacrOnClick from './component/ReacrOnClick'
import ReactMouseMove from './component/ReactMouseMove'
import ReactOnCHange from './component/ReactOnCHange'
import ReactPromise from './component/ReactPromise'
import ReactPromoseCatch from './component/ReactPromoseCatch'

const App = () => {
  return (
    <div>

      <ReactPromise />
      <ReactPromoseCatch />
      <ReacrOnClick />
      <ReactOnCHange />
      <ReactMouseMove />
    </div>
  )
}

export default App