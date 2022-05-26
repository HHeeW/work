import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux'; // createStore 함수의 파라미터 값으로 reducers 폴더 경로를 넘김

const store = createStore(reducers, applyMiddleware());

const lisener = ()=>{
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <App store = {store} />
  )
}
store.subscribe(lisener);
lisener();
