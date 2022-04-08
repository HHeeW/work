import React from 'react';
import ReactDOM from 'react-dom.client';  //수정부분
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootNode = document.getElementById('root');//수정부분

ReactDOM.createRoot(rootNode).render(//수정부분
  <React.StrictMode>
    <App />
  </React.StrictMode>//수정부분
);

reportWebVitals();
