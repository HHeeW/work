import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
class App extends Component{
  render(){
    return (
      <div className="App">
        {/* 여기가 수정하는 곳 */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            수정하려면 <code>src/App.js</code> 를 열어 내용을 수정하고 저장하세요.
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
  };
}
// }

export default App;
