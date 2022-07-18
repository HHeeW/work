import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './components/MainPage'
import ViewPage from './components/ViewPage'
import PostPage from './components/PostPage';
import EditPage from './components/EditPage';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" exact={true} element={<MainPage />} />
          <Route path="/view/:id" element={<ViewPage />} />
          <Route path="post" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
       </Routes>  
    </Router>
    
  )
}

export default App