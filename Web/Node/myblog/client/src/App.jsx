import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './components/MainPage'
import ViewPage from './components/ViewPage'

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" exact={true} element={<MainPage />} />
          <Route path="/view/:id" element={<ViewPage />} />
       </Routes>  
    </Router>
  )
}

export default App