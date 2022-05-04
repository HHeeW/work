import React, {useState, createContext, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

const UserContext = createContext();
const ComponentA = () =>{
  const [user, setUser] = useState ('jamse');
  return(
    <UserContext.Provider value={user}>
      <h1> {`Hello, ${user}!!!`}</h1>
      <ComponentB />
    </UserContext.Provider>
  )
}
const ComponentB = () =>{
  return(
    <>
      <h1>ComponentB</h1>
      <ComponentC />
    </>
  )
}
const ComponentC = () =>{
  return(
    <>
      <h1>ComponentC</h1>
      <ComponentD />
    </>)
}
const ComponentD = () =>{
  return(
    <>
      <h1>ComponentD</h1>
      <ComponentE />
    </>)
}
const ComponentE = () =>{
  
  const user = useContext(UserContext)
  return(
    <>
      <h1>ComponentE</h1>
      <h2>{`Hello ${user}, Again!`}</h2>
    </>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ComponentA />
    {/* <App /> */}
  </React.StrictMode>
);