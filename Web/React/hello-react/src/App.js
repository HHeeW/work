import React, { Component } from 'react';
import Header from './comp/Header';
import Aside from './comp/Aside';
import Section from './comp/Section';
import Footer from './comp/Footer';
import './App.css';

//function App() {
class App extends Component {
   constructor(props){
      super(props);
      this.state = {
         header: { title: '검색사이트 목록', desc: '우리가 주로 애용하는 검색사이트 목록'},
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
   return (
      <div className="App">
         <Header title={this.state.header.title} desc={this.state.header.desc} />
         <Aside data={this.state.contents} />
         <Section title="네이버" desc="우리나라 사람들이 가장 애용하는 포탈, 그러나 재미는 없다." />
         <Footer copy="Copyright 홍길동 all right reserved"/>
      </div>
   );
   }
}
export default App;