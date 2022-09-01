import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState({
    text: '',
    id: ''
  });

  const addaddMessage = (e) =>{
    e.preventDefault();
    fire.database().ref('message').push(inputEl.value);
    let messageRef = fire.database().ref('message').orderBykey(). limitToLast(100);
    messageRef.on('child_added', snapshot =>{
      let memo = { text: snapshot.val(), id: snapshot.key}
      setMessage(memo);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
