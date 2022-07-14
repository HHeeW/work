import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import MainPage from './components/MainPage'
const App = () => {
  return (
    <div>
        <Router>
            <Route path='/' exact render={(props)=><MainPage/>}/>
        </Router>
    </div>
  )
}

export default App