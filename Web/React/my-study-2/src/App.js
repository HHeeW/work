import React, { useState } from 'react';

const Header =(props)=>{
    return (
      <header className="border-bottom border-secondary">
          <h1 className="text-center my-5"><a href="#" onClick={(e)=>{
               e.preventDefault();
               props.getChangeMode();
          }}>{props.title}</a></h1>
          <p className="text-center mb-2 pb-2">{props.desc}</p>
      </header>
    )
}
const Nav = (props) => {
    const alist = [];
    let t;
    for(let i =0; i<props.topics.length; i++){
       t = props.topics[i];
       alist.push(<a href="/" 
                    className="list-group-item" 
                    key={t.id}
                    id={t.id}
                    onClick={(event)=>{
                      event.preventDefault();
                      props.getChangeMode(Number(event.target.id));  //부모값(section함수) getChangeMode를 실행하고 id값에 해당하는 topic을 보여주자.

                    }}  
                  > {t.title} </a>); 
    }
    
    return (
      <nav className="list-group mb-3">
          {alist}
      </nav>  
    )
}
const Article = (props) => {
  return (
     <article className="col-9">
        <h2 className="text-center">{props.title}</h2>
        <p className="border-1 p-3">{props.desc}</p>
     </article>
  );
}

const Footer = () => {
    return (
      <footer className="bg-dark text-white text-center p-3 mb-3">
          Copyright '나' since 2022
      </footer>
    );
}

const Section = ()=>{
  //const mode = 'READ';
  const [mode, setMode] = useState('WELCOME');  //useState 첫 번째 인자 welcome  두 번째 인자 funcion
  const [id, setId] = useState(null);
  const [topics, setTopics] = useState([
    {id:1, title:"산책하기", body:"매일아침 일찍 일어나 동네 한바퀴 돌자."},
    {id:2, title: "매일 책읽기", body:"시도좋고 수필도 좋고 소설도 좋고..." },
    {id:3, title: "자바스크립트 공부", body:"자바스크립트가 쉽다고 누가 그랬냐? 매일 조금씩 공부하자."},
    {id:4, title: "html,css공부", body:"html, css도 놓치지 않게 공부하자구"},
    {id:5, title: "reactJS 공부", body:"reactJS란 쉬운 웹사이트를 위한 거라구 누가그랬냐?"}
  ]);

  let _title=null, _desc=null;
  switch(mode) {
     case 'WELCOME':
        _title="나의 할일 목록";
        _desc="내가 해야할 일들의 목록 입니다.";
     break;
     case 'READ':
       console.log(id);
       for(let i in topics){
         if(topics[i].id === id){ 
             _title=topics[i].title;
             _desc=topics[i].body;
         }
      }  
     break;
  }


  return(
    <>
    <Header 
    title="My Work List" 
    desc="내가 매일 해야하는 일들의 목록 입니다."  
    getChangeMode={()=>{
      setMode('WELCOME');
     }}
    />
    <section className="row mt-5">
       <div className="col-3">
          <Nav topics = {topics}  getChangeMode={(_id)=>{
              setMode('READ');
              setId(_id);
          }}/>              
       </div>
       <Article title={_title} desc={_desc} />
    </section>
    </>
  );
}

const App = () => {

  return (
    <div className="container border border-secondary mb-3">
       <Section />
       <Footer /> 
    </div>
  )
}

export default App