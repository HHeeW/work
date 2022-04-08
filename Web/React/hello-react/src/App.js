import React, { Component } from 'react';
import Header from './comp/Header';
import Aside from './comp/Aside';
import Section from './comp/Section';
import Footer from './comp/Footer';
import './App.css';

//function App() {
class App extends Component {
   constructor(props){
      // 컴포넌트가 실행될 때 render()보다 먼저 생성자 함수 (constructor())가 실행된다.
      //컴포넌트를 초기화 시켜주고 싶을 때는 constructor()안에다가 실행시키면 된다.
      //앱이 내부적으로 사용할 함수는 state로 만든다.
      super(props);
      this.state = {
         mode: 'main',
         header: { toptitle: '검색사이트 목록', title: '우리가 주로 애용하는 검색사이트 목록'},
         contents:[
            {id:1, title: '네이버', cont: '우리나라 사람들이 가장 애용하는 포탈, 존경한다.'},
            {id:2, title: '다음', cont:'카카오에 인수되면서 다음보다는 카카오로 유명해진 포탈. 결국 다음도 대단.'},
            {id:3, title:'구글', cont: '전세계에서 가장 사랑받는 포탈. 포탈뿐 아니라 거의 모든 IT에서 세계 TOP을 기록하는 공룡업체'},
            {id:4, title:'네이트', cont: 'SK사에서 운영하는 포탈, 예전의 명성은 아득한 추억이 담겨있다.'},
            {id:5, title:'야후', cont: '한때 국내 탑 포탈 업체였으나 네이버에 밀려 국내에서 철수. 그러나 일본에서는 아직 최고의 포탈'}
         ]
      }
   }
  render() {  
     let _title, _cont = null;
   switch(this.state.mode){
      case 'main':
         _title = this.state.header.title;
         _cont = this.state.header.cont;
         break;
      case 'naver':
         _title = this.state.contents[0].title;
         _cont = this.state.contents[0].title;
         break;
      case 'daum':
         _title = this.state.contents[1].title;
         _cont = this.state.contents[1].title;
         break;
      case 'google':
         _title = this.state.contents[2].title;
         _cont = this.state.contents[2].title;
         break;
      case 'nate':
         _title = this.state.contents[3].title;
         _cont = this.state.contents[3].title;
         break;
      case 'yahoo':
         _title = this.state.contents[4].title;
         _cont = this.state.contents[4].title;
         break;
      default:
         _title = this.state.header.title;
         _cont = this.state.header.cont;
   }
   return (
      <div className="App">
         <Header title={this.state.header.toptitle}/>
         <Aside data={this.state.contents} />
         <Section title= {_title} cont={_cont}/>
         <Footer copy="Copyright 홍길동 all right reserved"/>
      </div>
   );
   }
}
export default App;