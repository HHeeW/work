import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render(){
     return (
      <header>
          <h1>{this.props.title}</h1>
          <p>{this.props.dec}</p>
      </header>
     );
  }
}

class Aside extends Component {
  render(){
     return (
      <aside>
         <nav>
            <ul>
               <li><a href="1.html">네이버</a></li>
               <li><a href="2.html">다음</a></li>
               <li><a href="3.html">구글</a></li>
               <li><a href="4.html">네이트</a></li>
               <li><a href="5.html">야후</a></li>  
            </ul>
         </nav>
      </aside>
     );
  }
}




//function App() {
class App extends Component {
  render() {  
  return (
    <div className="App">
        <Header title="검색사이트 목록" dec="우리가 주로 애용하는 검색 사이트 목록입니다." />
        <Header title="우리나라 검색 사이트" dec="우리나라 사이트 목록입니다." />
        <Aside />
        <Section />
        <Foorer />
    </div>
  );
}
}
export default App;