import React from 'react'
import Movie_Detail from './Movie_Detail';

  
  const Movie_Detail_List = () => {
      let movie_detail_List = [];
      for(let i in movies_detail){
        movie_detail_List[i] = <Movie_Detail 
            key={movies_detail[i].id}
            id={movies_detail[i].id} 
            poster={movies_detail[i].poster}
            title={movies_detail[i].title}
            entitle={movies_detail[i].entitle}
            dir={movies_detail[i].dir}
            act={movies_detail[i].act}
            gen={movies_detail[i].gen}
            bas={movies_detail[i].bas} 
            age={movies_detail[i].age} 
            ticketing={movies_detail[i].ticketing} 
            open={movies_detail[i].open} 
            detail={movies_detail[i].detail}/>
      }
      
      return movie_detail_List[5];
  }
export default Movie_Detail_List


const movies_detail = [
  {id:1, poster:"images/85715_320.jpg" , title:"닥터 스트레인지: 대혼돈의 멀티버스", entitle: "Doctor Strange in the Multiverse of Madness", dir:"샘 레이미", act:"베네딕트 컴버배치 ,  엘리자베스 올슨 ,  베네딕트 웡 ,  레이첼 맥아담스 ,  치웨텔 에지오포 ,  소치틀 고메즈", grn: " 액션, 어드벤처, 환타지", bas:"126분, 미국",
  age:"H_12", ticketing:"9.3%", open:"2022.05.04",
  detail:"지금껏 본 적 없는 마블의 극한 상상력! 5월, 광기의 멀티버스가 깨어난다! 끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며  오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 ‘닥터 스트레인지’. 대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데…."},

 {id:2, poster:"images/39614_1000.jpg" , title:"해리포터와 죽음의 성물 2", entitle: "Harry Potter And The Deathly Hallows: Part2",  dir:"데이빗 예이츠", act:"다니엘 래드클리프 ,  엠마 왓슨 ,  루퍼트 그린트", gen:"환타지, 어드벤처", bas:" 131분, 미국, 영국",
  age:"H_all", ticketing:"9.1%", open:"2011.07. 14",
  detail: "덤블도어 교장이 남긴 <죽음의 성물>의 단서를 쫓던 해리 포터는 볼드모트가 그토록 찾아 다닌 절대적인 힘을 가진 지팡이의 비밀을 통해 드디어 마지막 퍼즐을 완성한다. 볼드모트의 영혼이 담긴 다섯 번째 <호크룩스>를 찾기 위해 마법학교 호그와트로 돌아온 해리와 친구들은 그들을 잡으려는 보안마법에 걸려 위기를 맞지만 덤블도어의 동생인 에버포스의 도움으로 벗어난다. 그리고 그에게서 덤블도어와 어둠의 마법사 그린델왈드에 관한 놀라운 과거에 대해 알게 된다. 한편, 볼드모트는 해리에 의해 호크룩스들이 파괴되었음을 느끼고 호그와트로 향한다. 해리를 주축으로 한 불사조 기사단과 죽음을 먹는 자들 간의 마법전투가 벌어지고 여기에 거대거미 아크로맨투라와 거인족 등 마법 생물들이 볼드모트 편으로 가세하면서 호그와트는 거대한 전쟁터로 변한다. 전쟁의 틈에서 해리는 덤블도어를 죽인 스네이프의 엄청난 비밀과 볼드모트를 죽일 마지막 호크룩스에 대한 단서를 알게 되는데..."}, 

 {id:3, poster:"images/85712_320.jpg" , title:"신비한 동물들과 덤블도어의 비밀", entitle:"Fantastic Beasts: The Secrets of Dumbledore", dir:"데이빗 예이츠", act:"에디 레드메인 ,  주드 로 ,  매즈 미켈슨 ,  댄 포글러 ,  앨리슨 수돌 ,  에즈라 밀러 ,  칼럼 터너 ,  제시카 윌리엄스 ,  빅토리아 예이츠 ,  윌리엄 나딜람 ,  리처드 코일", gen:"어드벤처, 가족, 환타지", bas:"142분, 미국",
   age:"H_12", ticketing:"9.0%", open:"2022.04.14",
   detail: "가장 위험한 마법에 맞선, 세상을 구할 전쟁이 시작된다!  1930년대, 제2차 세계대전에 마법사들이 개입하게 되면서 강력한 어둠의 마법사 그린델왈드의 힘이 급속도로 커진다. 덤블도어는 뉴트 스캐맨더에게 위대한 마법사 가문 후손, 마법학교의 유능한 교사, 머글 등으로 이루어진 팀에게 임무를 맡긴다. 이에 뉴트와 친구들은 머글과의 전쟁을 선포한 그린델왈드와 추종자들, 그의 위험한 신비한 동물들에 맞서 세상을 구할 거대한 전쟁에 나선다. 한편 전쟁의 위기가 최고조로 달한 상황 속에서 덤블도어는 더 이상 방관자로 머물 수 없는 순간을 맞이하고, 서서히 숨겨진 비밀이 드러나는데…"},
 
 {id:4, poster:"images/85641_1000.jpg" , title:"해리 포터와 불사조 기사단", entitle:"Harry Potter And The Order Of The Phoenix", dir:"데이빗 예이츠", act:"다니엘 래드클리프 ,  엠마 왓슨 ,  루퍼트 그린트", gen:"환타지, 액션, 어드벤처", bas:"137분, 미국, 영국",
 age:"H_all", ticketing:"9.0%", open:"2007.7.12",
 detail: `호그와트 최대 위기! 볼드모트 그가 돌아왔다!
 어둠의 세력에 빠진 호그와트를 구하기 위해 해리포터와 불사조 기사단, 그들이 손을 잡았다!
 
 호그와트 마법학교에서 5번째 해를 맞이하게 된 해리포터(다니엘 래드클리프). 헤르미온느(엠마 왓슨)와 론(루퍼트 그린트)과의 관계도 소원하고 예언자 일보는 해리에 대해 악의적인 소문을 퍼뜨려 해리를 곤경에 빠뜨린다. 초챙(케이티 렁)과의 로맨스도 힘에 겹다. 게다가 마법부는 볼드모트(랄프 파인즈)가 돌아왔다는 이야기를 애써 모른 체 하려 하고 오히려 호그와트 교장 덤블도어가 헛소문을 퍼트려 마법부의 권위를 실추시킨다며 비난한다. 여기에 마법부 장관 코넬리우스 퍼지는 새로운 어둠의 방어술 교수 자리에 자신의 심복 돌로레스 엄브리지를 임명해 덤블도어와 학생들을 감시하게 한다. 형편없는 그의 수업은 어둠의 마법에 대한 학생들의 방어능력을 한심한 수준으로 격하시킨다.
 
 이제 해리포터는 호그와트로 다시 돌아온 악의 세력 볼드모트에 대항하기 위해 만들어진 마법사들의 비밀단체 불사조기사단과 함께 볼드모트와 죽음의 대결은 준비한다.
 그 와중에 해리는 소중한 사람의 죽음까지 맞이하는 아픔을 겪게 되는데…
 
 위기에 빠진 호그와트!
 해리포터와 불사조 기사단, 모든 것이 그들 손에 달렸다!!` },
 
 {id:5, poster:"images/76791_1000.jpg" , title:"신세계", entitle:"New World", dir:"박훈정", act:"이정재 ,  황정민 ,  최민식 ,  박성웅 ,  송지효", gen:"범죄, 액션", bas:"134분, 한국",  age:"H_19", ticketing:"8.7%", open:"2013.2.21",
 detail: `너, 나하고 일 하나 같이 하자

 경찰청 수사 기획과 강과장(최민식)은 국내 최대 범죄 조직인 '골드문'이 기업형 조직으로 그 세력이 점점 확장되자 신입경찰 이자성(이정재)에게 잠입 수사를 명한다. 그리고 8년, 자성은 골드문의 2인자이자 그룹 실세인 정청(황정민)의 오른팔이 되기에 이른다.
 
 우리 브라더는 그냥 딱, 이 형님만 믿으면 돼야!
 
 골드문 회장이 갑자기 사망하자, 강과장(최민식)은 후계자 결정에 직접 개입하는 '신세계' 작전을 설계한다. 피도 눈물도 없는 후계자 전쟁의 한 가운데, 정청(황정민)은 8년 전, 고향 여수에서 처음 만나 지금까지 친형제처럼 모든 순간을 함께 해 온 자성(이정재)에게 더욱 강한 신뢰를 보낸다.
 
 약속 했잖습니까... 이번엔 진짜 끝이라고
 
 한편, 작전의 성공만 생각하는 강과장(최민식)은 계속해서 자성(이정재)의 목을 조여만 간다. 시시각각 신분이 노출될 위기에 처한 자성(이정재)은 언제 자신을 배신할 지 모르는 경찰과, 형제의 의리로 대하는 정청(황정민) 사이에서 갈등하게 되는데…` },
 
 {id:6, poster:"images/80810_1000.jpg" , title:"신과함께 인과연", entitle:"Along with the Gods: The Last 49 Days", dir:"김용화", act:"하정우 ,  주지훈 ,  김향기 ,  마동석 ,  김동욱 ,  이정재", gen:"환타지, 드라마", bas:"141분, 한국",  age:"H_12", ticketing:"8.6%", open:"2018.08.01",
 detail: `환생이 약속된 마지막 49번째 재판을 앞둔 저승 삼차사가 그들의 천 년 전 과거를 기억하는 성주신을 만나이승과 저승,
 과거를 넘나들며 잃어버린 비밀의 연을 찾아가는 이야기.` },
 
 {id:7, poster:"images/85603_320.jpg" , title:"극장판 주술회전 0", entitle:"Jujutsu Kaisen: Zero", dir:"박성후", act:"오가타 메구미 ,  하나자와 카나 ,  코마츠 미카코 ,  우치야마 코우키 ,  세키 토모카즈 ,  나카무라 유이치 ,  사쿠라이 타카히로", gen:"애니메이션", bas:"105분, 일본",age:"H_15", ticketing:"2.1%", open:"2022.02.17",
 detail: `어릴 적 소꿉친구인 오리모토 리카를 교통사고로 눈앞에서 잃은 옷코츠 유타.

 “약속해, 리카와 유타는 어른이 되면 결혼하기로”
 옷코츠는 원령으로 변한 리카의 저주에 괴로워한 나머지, 자신도 죽기를 바라지만 최강의 주술사인 고죠 사토루에 의해 주술고전에 들어가게 된다. 그리고 동급생인 젠인마키, 이누마키 토게, 판다를 만나면서 굳은 결심을 한다.
 
 “살아도 된다는 자신감이 필요해”
 “나는 주술고전에서 리카의 저주를 풀겠습니다”
 한편, 옷코츠와 친구들 앞에 과거에 일반인을 대량으로 학살해서 고전에서 추방된 최악의 주저사인 게토 스구루가 나타난다.
 
 “12월 24일, 우리는 백귀야행을 결행한다”
 주술사만의 낙원을 만들려는 게토는 비술사를 섬멸하겠다면서, 신주쿠와 교토에 천의 저주를 내리는데…과연 옷코츠는 게토를 막을 수 있을까? 그리고리카의 저주를 풀 수 있을까?` },
 
 {id:8, poster:"images/85780_320.jpg" , title:"공기살인", entitle:" ", dir:" ", act:"", gen:" ", bas:" ",                         age:"H_12", ticketing:"1.7%", open:"2022.04.22",
 detail: " " },
 
 {id:9, poster:"images/85772_320.jpg" , title:"앵커", entitle:" ", dir:" ", act:"", gen:" ", bas:" ",                            age:"H_15", ticketing:"1.1%", open:"2022.04.20",
 detail: " " },
 
 {id:10, poster:"images/85781_320.jpg" , title:"극장판 귀멸의 칼날-무한열차편 ", entitle:" ", dir:" ", act:"", gen:" ", bas:" ",   age:"H_15", ticketing:"0.8%", open:"2022.04.21",
 detail: " " },
 
 {id:11, poster:"images/85728_320.jpg" , title:"수퍼 소닉2", entitle:" ", dir:" ", act:"", gen:" ", bas:" ",                      age:"H_all", ticketing:"0.5%", open:"2022.04.06",
 detail: " " },
 
 {id:12, poster:"images/85779_320.jpg" , title:"몬스터 아카데미", entitle:" ", dir:" ", act:"", gen:" ", bas:" ",                 age:"H_all", ticketing:"0.1%", open:"2022.04.14",
 detail: " " },
 
 {id:13, poster:"images/18540_201_1.jpg" , title:"모비우스", entitle:" ", dir:" ", act:"", gen:" ", bas:" ",                      age:"H_15", ticketing:"0.1%", open:"2022.03.30",
 detail: " " },
 
 {id:14, poster:"images/18635_103_1.jpg" , title:"다녀와요, 다녀왔습니다", entitle:" ", dir:" ", act:"", gen:" ", bas:" ",          age:"H_all", ticketing:"0.1%", open:"2022.04.21",
 detail: " " },
 
 {id:15, poster:"images/85799_340.jpg" , title:"토르: 마법 검의 전설", entitle:" ", dir:" ", act:"", gen:" ", bas:" ",            age:"H_all", ticketing:"0.1%", open:"2022.05.04",
 detail: " " },
 
 {id:16, poster:"images/18406_103_1.jpg" , title:"더 배트맨", entitle:" ", dir:" ", act:"", gen:" ", bas:" ",                     age:"H_15", ticketing:"0.1%", open:"2022.03.01",
 detail: " " },
 
 {id:17, poster:"images/85826_320.jpg" , title:"서울괴담", entitle:" ", dir:" ", act:"", gen:" ", bas:" ",                         age:"H_15", ticketing:"0.1%", open:"2022.04.27",
 detail: " " },
 
 {id:18, poster:"images/18546_103_1.jpg" , title:"말임씨를 부탁해", entitle:" ", dir:" ", act:"", gen:" ", bas:" ",                age:"H_all", ticketing:"0.1%", open:"2022.04.13",
 detail: " " },
 
 {id:19, poster:"images/18406_123.jpg" , title:"부기나이트", entitle:" ", dir:" ", act:"", gen:" ", bas:" ",                      age:"H_15", ticketing:"0.1%", open:"2022.04.28",
 detail: " " },
 
 {id:20, poster:"images/86826_320.jpg" , title:"쓰리: 아직 끝나지 않았다", entitle:" ", dir:" ", act:"", gen:" ", bas:" ",        age:"H_15", ticketing:"0.1%", open:"2022.04.21",
 detail: " " }
  ]