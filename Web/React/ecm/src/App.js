import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainList from './pages/MainList';

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route index element={<Home /> } />
          <Route path="outer/:param" element={<MainList />} />
          <Route path="dress/:param" element={<MainList />} />
          <Route path="top/:param" element={<MainList />} />
          <Route path="bottom/:param" element={<MainList />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App