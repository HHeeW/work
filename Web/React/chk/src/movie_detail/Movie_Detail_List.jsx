import React from 'react'
import Movie_Detail from './Movie_Detail';

  
  const Movie_Detail_List = () => {
      let movie_Detail_List = [];
      for(let i in movies_detail){
        movie_Detail_List[i] = <Movie_Detail 
            key={movies_detail[i].id}
            id={movies_detail[i].id} 
            title={movies_detail[i].title} 
            poster={movies_detail[i].poster} 
            age={movies_detail[i].age} 
            ticketing={movies_detail[i].ticketing} 
            open={movies_detail[i].open} 
            detail={movies_detail[i].detail}/>
      }
      return movie_Detail_List;
  }
export default Movie_Detail_List


const movies_detail = [
    {id:1, poster:"images/85715_320.jpg" , title:"닥터 스트레인지: 대혼돈의 멀티버스",  age:"H_12", ticketing:"71.3%", open:"2022.05.04",
     detail:"지금껏 본 적 없는 마블의 극한 상상력! 5월, 광기의 멀티버스가 깨어난다! 끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며  오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 ‘닥터 스트레인지’. 대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데…."},
     
    {id:2, poster:"images/85712_320.jpg" , title:"신비한 동물들과 덤블도어의 비밀",     age:"H_12", ticketing:"7.1%", open:"2022.04.14",
    detail: "가장 위험한 마법에 맞선, 세상을 구할 전쟁이 시작된다!  1930년대, 제2차 세계대전에 마법사들이 개입하게 되면서 강력한 어둠의 마법사 그린델왈드의 힘이 급속도로 커진다. 덤블도어는 뉴트 스캐맨더에게 위대한 마법사 가문 후손, 마법학교의 유능한 교사, 머글 등으로 이루어진 팀에게 임무를 맡긴다. 이에 뉴트와 친구들은 머글과의 전쟁을 선포한 그린델왈드와 추종자들, 그의 위험한 신비한 동물들에 맞서 세상을 구할 거대한 전쟁에 나선다. 한편 전쟁의 위기가 최고조로 달한 상황 속에서 덤블도어는 더 이상 방관자로 머물 수 없는 순간을 맞이하고, 서서히 숨겨진 비밀이 드러나는데…"},
    
    {id:3, poster:"images/85821_320.jpg" , title:"니 부모 얼굴이 보고 싶다",           age:"H_15", ticketing:"6.3%", open:"2022.04.27",
    detail: "“누군가 잘못했겠지 하지만 내 아들은 절대 아니야” 명문 한음 국제중학교 학생 ‘김건우’가 같은 반 친구 4명의 이름이 적힌 편지를 남긴 채, 의식불명 상태로 호숫가에서 발견된다. 병원 이사장의 아들 ‘도윤재’ 전직 경찰청장의 손자 ‘박규범’ 한음 국제중학교 교사의 아들 ‘정이든’ 그리고, 변호사 ‘강호창’(설경구)의 아들 ‘강한결’. 가해자로 지목된 아이들의 부모들은 자신의 권력과 재력을 이용해 사건을 은폐하려고 한다. 하지만, 담임 교사 ‘송정욱’(천우희)의 양심 선언으로 건우 엄마(문소리) 또한 아들의 죽음에 관한 진실을 알게 된다. 세상의 이목이 한음 국제중학교로 향하고, 자신의 아이들을 지키기 위한 가해자 부모들의 추악한 민낯이 드러나는데… 자식이 괴물이 되면, 부모는 악마가 된다" },
    
    {id:4, poster:"images/85787_320.jpg" , title:"로스트 시티",                       age:"H_12", ticketing:"4.3%", open:"2022.04.20",
    detail: "전설의 트레저를 차지하기 위해 재벌 페어팩스(다니엘 래드클리프)는 유일한 단서를 알고 있는 베스트셀러 작가 로레타(산드라 블록)를 납치하게 된다. 어쩔 수 없는 비지니스 관계로 사라진 그녀를 찾아야만 하는 책 커버모델 앨런(채닝 테이텀)은 의문의 파트너(브래드 피트)와 함께 위험한 섬에서 그녀를 구하고 무사히 탈출해야만 하는데… 적과 자연의 위험이 도사리는 일촉즉발 화산섬 대환장 케미의 그들이 생존하여 섬을 탈출할 수 있을까?" },
    
    {id:5, poster:"images/85791_320.jpg" , title:"세븐틴 파워 오브 러브 - 더 무비",   age:"H_all", ticketing:"4%", open:"2022.04.20",
    detail: " " },
    
    {id:6, poster:"images/85799_320.jpg" , title:"봄 날",                            age:"H_15", ticketing:"3.2%", open:"2022.04.27",
    detail: " " },
    
    {id:7, poster:"images/85603_320.jpg" , title:"극장판 주술회전 0",                 age:"H_15", ticketing:"2.1%", open:"2022.02.17",
    detail: " " },
    
    {id:8, poster:"images/85780_320.jpg" , title:"공기살인",                          age:"H_12", ticketing:"1.7%", open:"2022.04.22",
    detail: " " },
    
    {id:9, poster:"images/85772_320.jpg" , title:"앵커",                             age:"H_15", ticketing:"1.1%", open:"2022.04.20",
    detail: " " },
    
    {id:10, poster:"images/85781_320.jpg" , title:"극장판 귀멸의 칼날-무한열차편 ",    age:"H_15", ticketing:"0.8%", open:"2022.04.21",
    detail: " " },
    
    {id:11, poster:"images/85728_320.jpg" , title:"수퍼 소닉2",                       age:"H_all", ticketing:"0.5%", open:"2022.04.06",
    detail: " " },
    
    {id:12, poster:"images/85779_320.jpg" , title:"몬스터 아카데미",                  age:"H_all", ticketing:"0.1%", open:"2022.04.14",
    detail: " " },
    
    {id:13, poster:"images/18540_201_1.jpg" , title:"모비우스",                       age:"H_15", ticketing:"0.1%", open:"2022.03.30",
    detail: " " },
    
    {id:14, poster:"images/18635_103_1.jpg" , title:"다녀와요, 다녀왔습니다",           age:"H_all", ticketing:"0.1%", open:"2022.04.21",
    detail: " " },
    
    {id:15, poster:"images/85799_340.jpg" , title:"토르: 마법 검의 전설",             age:"H_all", ticketing:"0.1%", open:"2022.05.04",
    detail: " " },
    
    {id:16, poster:"images/18406_103_1.jpg" , title:"더 배트맨",                      age:"H_15", ticketing:"0.1%", open:"2022.03.01",
    detail: " " },
    
    {id:17, poster:"images/85826_320.jpg" , title:"서울괴담",                          age:"H_15", ticketing:"0.1%", open:"2022.04.27",
    detail: " " },
    
    {id:18, poster:"images/18546_103_1.jpg" , title:"말임씨를 부탁해",                 age:"H_all", ticketing:"0.1%", open:"2022.04.13",
    detail: " " },
    
    {id:19, poster:"images/18406_123.jpg" , title:"부기나이트",                       age:"H_15", ticketing:"0.1%", open:"2022.04.28",
    detail: " " },
    
    {id:20, poster:"images/86826_320.jpg" , title:"쓰리: 아직 끝나지 않았다",         age:"H_15", ticketing:"0.1%", open:"2022.04.21",
    detail: " " }
  ]