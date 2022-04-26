import './movie.css';
import Detail from './Detail'

const movies = [
  {id:1, poster:"images/85715_320.jpg" , title:"닥터 스트레인지: 대혼돈의 멀티버스",  age:"H_12", ticketing:"71.3%", open:"2022.05.04",
   detail:"지금껏 본 적 없는 마블의 극한 상상력!  5월, 광기의 멀티버스가 깨어난다!  끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며  오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 ‘닥터 스트레인지’.  대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데…."},
  {id:2, poster:"images/85712_320.jpg" , title:"신비한 동물들과 덤블도어의 비밀",     age:"H_12", ticketing:"7.1%", open:"2022.04.14"},
  {id:3, poster:"images/85821_320.jpg" , title:"니 부모 얼굴이 보고 싶다",           age:"H_15", ticketing:"6.3%", open:"2022.04.27"},
  {id:4, poster:"images/85787_320.jpg" , title:"로스트 시티",                       age:"H_12", ticketing:"4.3%", open:"2022.04.20"},
  {id:5, poster:"images/85791_320.jpg" , title:"세븐틴 파워 오브 러브 - 더 무비",   age:"H_all", ticketing:"4%", open:"2022.04.20"},
  {id:6, poster:"images/85799_320.jpg" , title:"봄 날",                            age:"H_15", ticketing:"3.2%", open:"2022.04.27"},
  {id:7, poster:"images/85603_320.jpg" , title:"극장판 주술회전 0",                 age:"H_15", ticketing:"2.1%", open:"2022.02.17"},
  {id:8, poster:"images/85780_320.jpg" , title:"공기살인",                          age:"H_12", ticketing:"1.7%", open:"2022.04.22"},
  {id:9, poster:"images/85772_320.jpg" , title:"앵커",                             age:"H_15", ticketing:"1.1%", open:"2022.04.20"},
  {id:10, poster:"images/85781_320.jpg" , title:"극장판 귀멸의 칼날-무한열차편 ",    age:"H_15", ticketing:"0.8%", open:"2022.04.21"},
  {id:11, poster:"images/85728_320.jpg" , title:"수퍼 소닉2",                       age:"H_all", ticketing:"0.5%", open:"2022.04.06"},
  {id:12, poster:"images/85779_320.jpg" , title:"몬스터 아카데미",                  age:"H_all", ticketing:"0.1%", open:"2022.04.14"},
  {id:13, poster:"images/18540_201_1.jpg" , title:"모비우스",                       age:"H_15", ticketing:"0.1%", open:"2022.03.30"},
  {id:14, poster:"images/18635_103_1.jpg" , title:"다녀와요, 다녀왔습니다",           age:"H_all", ticketing:"0.1%", open:"2022.04.21"},
  {id:15, poster:"images/85799_340.jpg" , title:"토르: 마법 검의 전설",             age:"H_all", ticketing:"0.1%", open:"2022.05.04"},
  {id:16, poster:"images/18406_103_1.jpg" , title:"더 배트맨",                      age:"H_15", ticketing:"0.1%", open:"2022.03.01"},
  {id:17, poster:"images/85826_320.jpg" , title:"서울괴담",                          age:"H_15", ticketing:"0.1%", open:"2022.04.27"},
  {id:18, poster:"images/18546_103_1.jpg" , title:"말임씨를 부탁해",                 age:"H_all", ticketing:"0.1%", open:"2022.04.13"},
  {id:19, poster:"images/18406_123.jpg" , title:"부기나이트",                       age:"H_15", ticketing:"0.1%", open:"2022.04.28"},
  {id:20, poster:"images/86826_320.jpg" , title:"쓰리: 아직 끝나지 않았다",         age:"H_15", ticketing:"0.1%", open:"2022.04.21"}
]

const Poster =()=>{
  let movielist = [];
  for(let i in movies){
    movielist[i] = <Detail id={movies[i].id} title={movies[i].title} poster={movies[i].poster} age={movies[i].age} ticketing={movies[i].ticketing} open={movies[i].open} detail={movies[i].detail}d/>
  }
  return movielist;
}

function movie() {
  
  return (
    <div className="H_container">
        <div className="H_title">
          <h1>전체영화</h1>
        </div>
        <ul className="H_movieChart">
          <Poster />
        </ul>
    </div>

  )
}
export default movie