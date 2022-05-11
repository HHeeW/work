const List_Detail = () => {
    const movies_detail = [
        {poster:"/H_images/85715_320.jpg" , title:"닥터 스트레인지: 대혼돈의 멀티버스", entitle: "Doctor Strange in the Multiverse of Madness", dir:"샘 레이미", act:"베네딕트 컴버배치 ,  엘리자베스 올슨 ,  베네딕트 웡 ,  레이첼 맥아담스 ,  치웨텔 에지오포 ,  소치틀 고메즈", gen: " 액션, 어드벤처, 환타지", bas:"126분, 미국", age:"H_12", ticketing:"9.3%", open:"2022.05.04", link:"Rt_UqUm38BI",
        detail_title:`지금껏 본 적 없는 마블의 극한 상상력!
        5월, 광기의 멀티버스가 깨어난다!`,
        detail:`끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며
        오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 ‘닥터 스트레인지’.
        대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데….`, 
        slider1:"/H_images/slider/d1.jpg", slider2:"/H_images/slider/d2.jpg", slider3:"/H_images/slider/d3.jpg", slider4:"/H_images/slider/d4.jpg", slider5:"/H_images/slider/d5.jpg", slider6:"/H_images/slider/d6.jpg"},
      
       {poster:"/H_images/39614_1000.jpg" , title:"해리포터와 죽음의 성물 2", entitle: "Harry Potter And The Deathly Hallows: Part2",  dir:"데이빗 예이츠", act:"다니엘 래드클리프 ,  엠마 왓슨 ,  루퍼트 그린트", gen:"환타지, 어드벤처", bas:" 131분, 미국, 영국", age:"H_all", ticketing:"9.0%", open:"2011.07. 14", link:"_31zwi0U8NE",
       detail_title:`모든 것을 끝낼 최후의 전투!
        판타지의 아름다운 역사가 드디어 마침표를 찍는다!`,
       detail: `1930년대, 제2차 세계대전에 마법사들이 개입하게 되면서
        강력한 어둠의 마법사 그린델왈드의 힘이 급속도로 커진다.
      
        덤블도어는 뉴트 스캐맨더에게 위대한 마법사 가문 후손,
        마법학교의 유능한 교사, 머글 등으로 이루어진 팀에게 임무를 맡긴다.
      
        이에 뉴트와 친구들은 머글과의 전쟁을 선포한
        그린델왈드와 추종자들, 그의 위험한 신비한 동물들에 맞서 세상을 구할 거대한 전쟁에 나선다.
      
        한편 전쟁의 위기가 최고조로 달한 상황 속에서 덤블도어는
        더 이상 방관자로 머물 수 없는 순간을 맞이하고, 서서히 숨겨진 비밀이 드러나는데…`,
        slider1:"/H_images/slider/h1.jpg", slider2:"/H_images/slider/h2.jpg", slider3:"/H_images/slider/h3.jpg", slider4:"/H_images/slider/h4.jpg", slider5:"/H_images/slider/h5.jpg", slider6:"/H_images/slider/h6.jpg"}, 
      
       {poster:"/H_images/85712_320.jpg" , title:"신비한 동물들과 덤블도어의 비밀", entitle:"Fantastic Beasts: The Secrets of Dumbledore", dir:"데이빗 예이츠", act:"에디 레드메인 ,  주드 로 ,  매즈 미켈슨 ,  댄 포글러 ,  앨리슨 수돌 ,  에즈라 밀러 ,  칼럼 터너 ,  제시카 윌리엄스 ,  빅토리아 예이츠 ,  윌리엄 나딜람 ,  리처드 코일", gen:"어드벤처, 가족, 환타지", bas:"142분, 미국", age:"H_12", ticketing:"8.5%", open:"2022.04.14", link:"DGhq0Kx8dzQ",
        detail_title:`가장 위험한 마법에 맞선, 세상을 구할 전쟁이 시작된다!`,
        detail: `1930년대, 제2차 세계대전에 마법사들이 개입하게 되면서
        강력한 어둠의 마법사 그린델왈드의 힘이 급속도로 커진다.
        
        덤블도어는 뉴트 스캐맨더에게 위대한 마법사 가문 후손,
        마법학교의 유능한 교사, 머글 등으로 이루어진 팀에게 임무를 맡긴다.
        
        이에 뉴트와 친구들은 머글과의 전쟁을 선포한
        그린델왈드와 추종자들, 그의 위험한 신비한 동물들에 맞서 세상을 구할 거대한 전쟁에 나선다.
        
        한편 전쟁의 위기가 최고조로 달한 상황 속에서 덤블도어는
        더 이상 방관자로 머물 수 없는 순간을 맞이하고, 서서히 숨겨진 비밀이 드러나는데…`,
        slider1:"/H_images/slider/f1.jpg", slider2:"/H_images/slider/f2.jpg", slider3:"/H_images/slider/f3.jpg", slider4:"/H_images/slider/f4.jpg", slider5:"/H_images/slider/f5.jpg", slider6:"/H_images/slider/f6.jpg"},
       
       {poster:"/H_images/85641_1000.jpg" , title:"해리포터와 불사조 기사단", entitle:"Harry Potter And The Order Of The Phoenix", dir:"데이빗 예이츠", act:"다니엘 래드클리프 ,  엠마 왓슨 ,  루퍼트 그린트", gen:"환타지, 액션, 어드벤처", bas:"137분, 미국, 영국", age:"H_all", ticketing:"7.6%", open:"2007.7.12", link:"y6ZW7KXaXYk",
       detail_title: `호그와트 최대 위기! 볼드모트 그가 돌아왔다!
       
       어둠의 세력에 빠진 호그와트를 구하기 위해 
       해리포터와 불사조 기사단, 그들이 손을 잡았다!`,
       detail: `호그와트 마법학교에서 5번째 해를 맞이하게 된 해리포터(다니엘 래드클리프). 헤르미온느(엠마 왓슨)와 론(루퍼트 그린트)과의 관계도 소원하고 예언자 일보는 해리에 대해 악의적인 소문을 퍼뜨려 해리를 곤경에 빠뜨린다. 
       
       초챙(케이티 렁)과의 로맨스도 힘에 겹다. 게다가 마법부는 볼드모트(랄프 파인즈)가 돌아왔다는 이야기를 애써 모른 체 하려 하고 오히려 호그와트 교장 덤블도어가 헛소문을 퍼트려 마법부의 권위를 실추시킨다며 비난한다.
       
       여기에 마법부 장관 코넬리우스 퍼지는 새로운 어둠의 방어술 교수 자리에 자신의 심복 돌로레스 엄브리지를 임명해 덤블도어와 학생들을 감시하게 한다. 형편없는 그의 수업은 어둠의 마법에 대한 학생들의 방어능력을 한심한 수준으로 격하시킨다.
       
       이제 해리포터는 호그와트로 다시 돌아온 악의 세력 볼드모트에 대항하기 위해 만들어진 마법사들의 비밀단체 불사조기사단과 함께 볼드모트와 죽음의 대결은 준비한다.
       그 와중에 해리는 소중한 사람의 죽음까지 맞이하는 아픔을 겪게 되는데…
       
       위기에 빠진 호그와트!
       해리포터와 불사조 기사단, 모든 것이 그들 손에 달렸다!!`,
       slider1:"/H_images/slider/hp1.jpg", slider2:"/H_images/slider/hp2.jpg", slider3:"/H_images/slider/hp3.jpg", slider4:"/H_images/slider/hp4.jpg", slider5:"/H_images/slider/hp5.jpg", slider6:"/H_images/slider/hp6.jpg"},
       
       {poster:"/H_images/76791_1000.jpg" , title:"신세계", entitle:"New World", dir:"박훈정", act:"이정재 ,  황정민 ,  최민식 ,  박성웅 ,  송지효", gen:"범죄, 액션", bas:"134분, 한국",  age:"H_19", ticketing:"7.1%", open:"2013.2.21", link: "rvLMVcRkRfY",
       detail_title:`너, 나하고 일 하나 같이 하자`,
       detail: ` 경찰청 수사 기획과 강과장(최민식)은 국내 최대 범죄 조직인 '골드문'이 기업형 조직으로 그 세력이 점점 확장되자 신입경찰 이자성(이정재)에게 잠입 수사를 명한다. 그리고 8년, 자성은 골드문의 2인자이자 그룹 실세인 정청(황정민)의 오른팔이 되기에 이른다.
       
       우리 브라더는 그냥 딱, 이 형님만 믿으면 돼야!
       
       골드문 회장이 갑자기 사망하자, 강과장(최민식)은 후계자 결정에 직접 개입하는 '신세계' 작전을 설계한다. 피도 눈물도 없는 후계자 전쟁의 한 가운데, 정청(황정민)은 8년 전, 고향 여수에서 처음 만나 지금까지 친형제처럼 모든 순간을 함께 해 온 자성(이정재)에게 더욱 강한 신뢰를 보낸다.
       
       약속 했잖습니까... 이번엔 진짜 끝이라고
       
       한편, 작전의 성공만 생각하는 강과장(최민식)은 계속해서 자성(이정재)의 목을 조여만 간다. 시시각각 신분이 노출될 위기에 처한 자성(이정재)은 언제 자신을 배신할 지 모르는 경찰과, 형제의 의리로 대하는 정청(황정민) 사이에서 갈등하게 되는데…`,
       slider1:"/H_images/slider/nw1.jpg", slider2:"/H_images/slider/nw2.jpg", slider3:"/H_images/slider/nw3.jpg", slider4:"/H_images/slider/nw4.jpg", slider5:"/H_images/slider/nw5.jpg", slider6:"/H_images/slider/nw6.jpg"},
       
       {poster:"/H_images/80810_1000.jpg" , title:"신과함께 인과연", entitle:"Along with the Gods: The Last 49 Days", dir:"김용화", act:"하정우 ,  주지훈 ,  김향기 ,  마동석 ,  김동욱 ,  이정재", gen:"환타지, 드라마", bas:"141분, 한국",  age:"H_12", ticketing:"7.0%", open:"2018.08.01", link:"amXcMw8cJZk",
       detail_title:`환생이 약속된 마지막 49번째 재판을 앞둔 저승 삼차사`,
       detail: `그들의 천 년 전 과거를 기억하는 성주신을 만나이승과 저승,
       과거를 넘나들며 잃어버린 비밀의 연을 찾아가는 이야기.` ,
       slider1:"/H_images/slider/ag1.jpg", slider2:"/H_images/slider/ag2.jpg", slider3:"/H_images/slider/ag3.jpg", slider4:"/H_images/slider/ag4.jpg", slider5:"/H_images/slider/ag5.jpg", slider6:"/H_images/slider/ag6.jpg"},
       
       {poster:"/H_images/12375_1000.jpg" , title:"타짜", entitle:"The War Of Flower", dir:"최동훈", act:"조승우 ,  백윤식 ,  김혜수 ,  유해진", gen:"드라마", bas:"139분, 한국", age:"H_19", ticketing:"6.9%", open:"2006.09.28", link:"vLHyh8F-vQo",
       detail_title: `인생을 예술로 살기 위해 화투판에 모든 것을 건 도박꾼들의 욕망을 아는가.` ,
       slider1:"/H_images/slider/wf1.jpg", slider2:"/H_images/slider/wf2.jpg", slider3:"/H_images/slider/wf3.jpg", slider4:"/H_images/slider/wf4.jpg", slider5:"/H_images/slider/wf5.jpg", slider6:"/H_images/slider/wf6.jpg"},
       
       
       
       {poster:"/H_images/83001_1000.jpg" , title:"겨울왕국", entitle:"Frozen", dir:"크리스 벅 ,  제니퍼 리", act:"크리스틴 벨 ,  이디나 멘젤", gen:"가족, 애니메이션, 어드벤처", bas:"108분, 미국", age:"H_all", ticketing:"6.6%", open:"2014.01.16", link:"bbh1NIpDo-c",
       detail_title: `얼어붙은 세상을 녹일 자매가 온다!`,
       detail: `서로가 최고의 친구였던 자매 ‘엘사’와 ‘안나’. 하지만 언니 ‘엘사’에게는 하나뿐인 동생에게조차 말 못할 비밀이 있다.

       모든 것을 얼려버리는 신비로운 힘이 바로 그것.
       
       ‘엘사’는 통제할 수 없는 자신의 힘이 두려워 왕국을 떠나고, 얼어버린 왕국의 저주를 풀기 위해 ‘안나’는 언니를 찾아 환상적인 여정을 떠나는데…`,
       slider1:"/H_images/slider/fz1.jpg", slider2:"/H_images/slider/fz2.jpg", slider3:"/H_images/slider/fz3.jpg", slider4:"/H_images/slider/fz4.jpg", slider5:"/H_images/slider/fz5.jpg", slider6:"/H_images/slider/fz6" },
       
       {poster:"/H_images/78529_1000.jpg" , title:"내부자들", entitle:"Inside Men", dir:"우민호", act:"조승우 ,  이병헌 ,  백윤식", gen:"범죄, 드라마", bas:"130분, 한국", age:"H_19", ticketing:"6.5%", open:"2015.12.31", link:"miXzN6spmFQ",
       detail_title:`“복수극으로 가자고, 화끈하게”`,
       detail: `유력한 대통령 후보와 재벌 회장, 그들을 돕는 정치깡패 안상구(이병헌).
       
       뒷거래의 판을 짠 이는 대한민국 여론을 움직이는 유명 논설주간 이강희(백윤식)다.
       
       더 큰 성공을 원한 안상구는 이들의 비자금 파일로 거래를 준비하다 발각되고,
       
       이 일로 폐인이 되어 버려진다.
       
       과연 살아남는 자는 누가 될 것인가?` ,
       slider1:"/H_images/slider/im1.jpg", slider2:"/H_images/slider/im2.jpg", slider3:"/H_images/slider/im3.jpg", slider4:"/H_images/slider/im4.jpg", slider5:"/H_images/slider/im5.jpg", slider6:"/H_images/slider/im6.jpg"},

       { poster:"/H_images/81907_1000.jpg" , title:"토이 스토리 4", entitle:"Toy Story 4", dir:"조시 쿨리", act:"톰 행크스 ,  키아누 리브스 ,  팀 알렌 ,  애니 파츠 ,  조안 쿠삭 ,  토니 헤일", gen:"", bas:"애니메이션", age:"H_all", ticketing:"5.6%", open:"2019.06.20", link:"yO7RbAq9uV4",
       detail_title:`우리의 여행은 아직 끝나지 않았다!`,
       detail: `장난감의 운명을 거부하고 떠난 새 친구 ‘포키’를 찾기 위해 길 위에 나선 ‘우디’는
       우연히 오랜 친구 ‘보핍’을 만나고 그녀를 통해 새로운 세상에 눈을 뜨게 된다.

       한편, ‘버즈’와 친구들은 사라진 ‘우디’와 ‘포키’를 찾아 세상 밖 위험천만한 모험을 떠나게 되는데… 
       
       당신이 기다려온 그들의 진짜 이야기가 공개된다!` ,
       slider1:"/H_images/slider/ts1.jpg", slider2:"/H_images/slider/ts2.jpg", slider3:"/H_images/slider/ts3.jpg", slider4:"/H_images/slider/ts4.jpg", slider5:"/H_images/slider/ts5.jpg", slider6:"/H_images/slider/ts6.jpg"},
       
       { poster:"/H_images/79139_1620.jpg" , title:"심슨가족더무비", entitle:"The Simpsons Movie", dir:"데이빗 실버맨", act:"줄리 카브너 ,  댄 카스텔라네타", gen:"애니메이션", bas:"86분, 미국", age:"H_12", ticketing:"5.2%", open:"2007.08.22",link:"XPG0MqIcby8",
       detail_title:`싹수 노란(?!) 심슨 가족의 초절정 코믹 본색!`,
       detail: ` 어눌하고 엉뚱하고 어수룩한 행동으로 언제나 사고를 일으키고 다니는 심슨 가족의 가장 호머,

       엄청난 높이의 부푼 머리와 쉬어터진 허스키한 목소리가 트레이드 마크인 심슨 가족의 안주인 마지, 

       아버지인 호머 심슨과 함께 트러블 메이커로는 쌍벽을 이루는 아들 바트, 
       
       정신없는 심슨가에서 가장 이성적이고 침착하며 예의바른 일명 바른생활형 캐릭터 딸 리사, 
       
       언제나 고무 젖꼭지를 입에 물고 대사는 한마디도 하지 않지만 활약에 있어서는 절대 빠지지 않는 막내 매기. 
       
       어디 한곳 제대로 된 구석이 없지만, 이들의 좌충우돌 라이프스토리는 전세계 수십억 인구를 사로잡았다.` ,
       slider1:"/H_images/slider/sm1.jpg", slider2:"/H_images/slider/sm2.jpg", slider3:"/H_images/slider/sm3.jpg", slider4:"/H_images/slider/sm4.jpg", slider5:"/H_images/slider/sm5.jpg", slider6:"/H_images/slider/sm6.jpg"},
       
       { poster:"/H_images/79139_1000.jpg" , title:"아수라", entitle:"Asura : The City of Madness", dir:"김성수", act:"정우성 ,  황정민 ,  주지훈 ,  곽도원 ,  정만식 ,  차래형", gen:"액션, 범죄", bas:"132분, 한국", age:"H_19", ticketing:"5.2%", open:"2016.09.28", link:"CuJriB-ZvQQ",
       detail_title:`지옥 같은 세상, 살아남기 위해 싸우는 악인들의 전쟁`,
       detail: `강력계 형사 한도경(정우성)은 이권과 성공을 위해 각종 범죄를 저지르는 악덕시장 박성배(황정민)의 뒷일을 처리해주는 대가로 돈을 받는다.

       악에 계속 노출되는 사이, 말기 암 환자인 아내의 병원비를 핑계로 돈 되는 건 뭐든 하는 악인의 길로 들어서게 된 한도경.
       
       그의 약점을 쥔 독종 검사 김차인(곽도원)과 검찰수사관 도창학(정만식)은 그를 협박하고 이용해 박성배의 비리와 범죄 혐의를 캐려 한다.
       
       각자의 이익과 목적을 위해 한도경의 목을 짓누르는 검찰과 박성배.
       
       그 사이 태풍의 눈처럼 되어 버린 한도경은, 자신을 친형처럼 따르는 후배 형사 문선모(주지훈)를 박성배의 수하로 들여보내고,
       
       살아남기 위해 혈안이 된 나쁜 놈들 사이에서 서로 물지 않으면 물리는 지옥도가 펼쳐진다.` ,
       slider1:"/H_images/slider/ac1.jpg", slider2:"/H_images/slider/ac2.jpg", slider3:"/H_images/slider/ac3.jpg", slider4:"/H_images/slider/ac4.jpg", slider5:"/H_images/slider/ac5.jpg", slider6:"/H_images/slider/ac6.jpg"},
       
       { poster:"/H_images/81561_1000.jpg" , title:"뺑반", entitle:"Hit-andRun Squad", dir:"한준희", act:"공효진 ,  류준열 ,  조정석 ,  차래형", gen:"액션, 범죄", bas:"133분, 한국", age:"H_15", ticketing:"5.0%", open:"2019.01.30",link:"1-o3P-IqYBo",
       detail_title:`Hit and Run 상황 발생,
       순마 출동합니다!`,
       detail: `경찰 내 최고 엘리트 조직 내사과 소속 경위 ‘은시연’(공효진). 
       조직에서 유일하게 믿고 따르는 ‘윤과장’(염정아)과 함께 
       F1 레이서 출신의 사업가 ‘정재철’(조정석)을 잡기 위해 수사망을 조여가던 시연은 
       무리한 강압 수사를 벌였다는 오명을 쓰고 뺑소니 전담반으로 좌천된다. 
        
       알고 보면 경찰대 수석 출신, 만삭의 리더 ‘우계장’(전혜진)과 
       차에 대한 천부적 감각을 지닌 에이스 순경 ‘서민재’(류준열). 
       팀원은 고작 단 두 명, 매뉴얼도 인력도 시간도 없지만 뺑소니 잡는 실력만큼은 최고인 ‘뺑반’. 
       계속해서 재철을 예의주시하던 시연은 뺑반이 수사 중인 미해결 뺑소니 사건의 유력한 용의자가 재철임을 알게 된다. 
        
       뺑소니 친 놈은 끝까지 쫓는 뺑반 에이스 민재와 
       온갖 비리를 일삼는 재철을 잡기 위해 모든 것을 건 시연. 
       하나의 목표를 향해 힘을 합친 그들의 팀플레이가 시작되는 가운데 
       방법을 가리지 않고 수사망을 빠져 나가려는 통제불능 스피드광 재철의 반격 역시 점점 과감해지는데…!` ,
       slider1:"/H_images/slider/hr1.jpg", slider2:"/H_images/slider/hr2.jpg", slider3:"/H_images/slider/hr3.jpg", slider4:"/H_images/slider/hr4.jpg", slider5:"/H_images/slider/hr5.jpg", slider6:"/H_images/slider/hr6.jpg"},
       
       { poster:"/H_images/80843_1000.jpg" , title:"극장판 짱구는 못말려-격돌! 낙서왕국과 얼추 네 명의 용사들", entitle:"Crayon Shin-chan: Crash! Scribble Kingdom and Almost Four Heroes", dir:"쿄고쿠 타카히코", act:"박영남 ,  김환진 ,  강희선 ,  여민정 ,  정유미 ,  강새봄 ,  정혜옥 ,  시영준", gen:"애니메이션", bas:" 103분, 일본", age:"H_all", ticketing:"4.2%", open:"2021.09.15", link:"zacog_tHX_g",
       detail_title:`아이들의 낙서가 사라져 붕괴 위기에 처한 낙서왕국은 
       낙서 에너지를 모으기 위해 지구 침공을 시작한다.`,
       detail: `낙서왕국의 위험한 작전을 막기 위해 지상의 용사로 선택받은 짱구는
       그림에 생명을 불어넣는 ‘미라클 크레용’을 얻게 된다.
       
       쓰윽 쓰윽~ 그려 그려~!
       짱구가 미라클 크레용으로 그림을 그리자 브리프, 가짜 이슬이 누나,
        부리부리 용사가 스케치북 밖으로 튀어나오는데..!
       
       과연, 크레용 용사 짱구는 낙서 용사들과 함께
       위험에 빠진 떡잎마을과 세계를 구할 수 있을까?!` ,
       slider1:"/H_images/slider/cs1.jpg", slider2:"/H_images/slider/cs2.jpg", slider3:"/H_images/slider/cs3.jpg", slider4:"/H_images/slider/cs4.jpg", slider5:"/H_images/slider/cs5.jpg", slider6:"/H_images/slider/cs6.jpg"},
       
       { poster:"/H_images/85603_320.jpg" , title:"극장판 주술회전 0", entitle:"Jujutsu Kaisen: Zero", dir:"박성후", act:"오가타 메구미 ,  하나자와 카나 ,  코마츠 미카코 ,  우치야마 코우키 ,  세키 토모카즈 ,  나카무라 유이치 ,  사쿠라이 타카히로", gen:"애니메이션", bas:"105분, 일본",age:"H_15", ticketing:"2.1%", open:"2022.02.17", link:"zl7-l_UuAKA",
       detail_title:`어릴 적 소꿉친구인 오리모토 리카를 교통사고로 눈앞에서 잃은 옷코츠 유타.`,
       detail: ` “약속해, 리카와 유타는 어른이 되면 결혼하기로”
       옷코츠는 원령으로 변한 리카의 저주에 괴로워한 나머지, 자신도 죽기를 바라지만 최강의 주술사인 고죠 사토루에 의해 주술고전에 들어가게 된다. 그리고 동급생인 젠인마키, 이누마키 토게, 판다를 만나면서 굳은 결심을 한다.
       
       “살아도 된다는 자신감이 필요해”
       “나는 주술고전에서 리카의 저주를 풀겠습니다”
       한편, 옷코츠와 친구들 앞에 과거에 일반인을 대량으로 학살해서 고전에서 추방된 최악의 주저사인 게토 스구루가 나타난다.
       
       “12월 24일, 우리는 백귀야행을 결행한다”
       주술사만의 낙원을 만들려는 게토는 비술사를 섬멸하겠다면서, 신주쿠와 교토에 천의 저주를 내리는데…과연 옷코츠는 게토를 막을 수 있을까? 그리고리카의 저주를 풀 수 있을까?` ,
       slider1:"/H_images/slider/jk1.jpg", slider2:"/H_images/slider/jk2.jpg", slider3:"/H_images/slider/jk3.jpg", slider4:"/H_images/slider/jk4.jpg", slider5:"/H_images/slider/jk5.jpg", slider6:"/H_images/slider/jk6.jpg"},
       
       { poster:"/H_images/85780_320.jpg" , title:"공기살인", entitle:"Murder in the Air", dir:"조용선", act:"김상경 ,  이선빈 ,  윤경호 ,  서영희", gen:"드라마", bas:"108분, 한국", age:"H_12", ticketing:"1.7%", open:"2022.04.22", link: "GZx8vBNEU4M",
       detail_title: `“알고 있었죠, 사람이 죽을 수도 있다는 거”`,
       detail: `봄이 되면 나타났다 여름이 되면 사라지는 죽음의 병.
       공기를 타고 대한민국에 죽음을 몰고 온 살인무기의 실체를 밝히기 위한 그들의 사투.
       증발된 범인, 피해자는 증발되지 않았다!` ,
       slider1:"/H_images/slider/ma1.jpg", slider2:"/H_images/slider/ma2.jpg", slider3:"/H_images/slider/ma3.jpg", slider4:"/H_images/slider/ma4.jpg", slider5:"/H_images/slider/ma5.jpg", slider6:"/H_images/slider/ma6.jpg"},
       
       { poster:"/H_images/85772_320.jpg" , title:"앵커", entitle:"Anchor", dir:"정지연", act:"천우희, 신하균, 이혜영, 박지현", gen:"스릴러", bas:"111분, 한국", age:"H_15", ticketing:"1.1%", open:"2022.04.20", link:"TWaxKOd3vo4",
       detail_title:`“제 죽음이 정세라 앵커의 입을 통해 보도되면 너무 기쁠 것 같아요”`,
       detail: `생방송 5분 전, 방송국 간판 앵커 ‘세라’(천우희)에게
       자신이 살해될 것이라며 죽음을 예고하는 제보전화가 걸려온다.

       장난전화로 치부하기에는 찝찝한 마음을 감출 수 없는 ‘세라’.
       진짜 앵커가 될 기회라는 엄마 ‘소정’(이혜영)의 말에
       ‘세라’는 제보자의 집으로 향하고 제보자인 ‘미소’와 그녀의 딸의 시체를 목격한다.
       
       그날 이후, ‘세라’의 눈앞에 죽은 ‘미소’의 모습이 자꾸만 떠오르기 시작한다.
       사건 현장에서 미소의 주치의였던 정신과 의사 ‘인호’(신하균)를 마주하게 되며
       그에 대한 ‘세라’의 의심 또한 깊어지는데…
       
       완벽했던 앵커를 뒤흔들 충격적인 진실을 확인하라! ` ,
       slider1:"/H_images/slider/an1.jpg", slider2:"/H_images/slider/an2.jpg", slider3:"/H_images/slider/an3.jpg", slider4:"/H_images/slider/an4.jpg", slider5:"/H_images/slider/an5.jpg", slider6:"/H_images/slider/an6.jpg"},
       
       { poster:"/H_images/85781_320.jpg" , title:"극장판 귀멸의 칼날-무한열차편 ", entitle:"Demon Slayer: Kimetsu no Yaiba the Movie - Mugen Train", dir:"소토자키 하루오", act:"이경태 ,  김연우 ,  김지율 ,  이호산 ,  장민혁 ,  김현욱 ,  전태열", gen:"애니메이션", bas:"117분, 일본", age:"H_15", ticketing:"0.8%", open:"2022.04.21", link: "5EXgtz_seFA",
       detail_title:`혈귀로 변한 여동생 ‘네즈코’를 되돌리기 위해 귀살대가 된 ‘탄지로’!`,
       detail: `어둠속을 달리는 무한열차에서 승객들이 흔적 없이 사라진다는 소식에
       ‘젠이츠’, ‘이노스케’와 함께 임무 수행을 위해 무한열차에 탑승한다.
       그리고 그 곳에서 만난 귀살대 최강 검사 염주 ‘렌고쿠’!
       
       이들은 무한열차에 숨어 있는 혈귀의 존재를 직감하고
       모두를 구하기 위해 목숨을 건 혈전을 시작하는데…
       
       그 칼로 악몽을 끊어라!` ,
       slider1:"/H_images/slider/ds1.jpg", slider2:"/H_images/slider/ds2.jpg", slider3:"/H_images/slider/ds3.jpg", slider4:"/H_images/slider/ds4.jpg", slider5:"/H_images/slider/ds5.jpg", slider6:"/H_images/slider/ds6.jpg"},
       
       { poster:"/H_images/85728_320.jpg" , title:"수퍼 소닉2", entitle:"Sonic the Hedgehog 2", dir:"제프 파울러", act:"제임스 마스던 ,  짐 캐리 ,  벤 슈와츠 ,  이드리스 엘바 ,  티카 섬터 ,  콜린 오슐그네시", gen:"SF, 애니메이션, 액션, 어드벤처, 코미디, 판타지", bas:"122분, 미국, 캐나다", age:"H_all", ticketing:"0.5%", open:"2022.04.06", link:"WTR5snCDDes",
       detail_title:`레벨 업! 초특급 히어로 소닉의 새로운 시대가 열린다`,
       detail: `도시의 악당들을 물리치며 바쁘게 지구를 지키고 있는 초특급 히어로 ‘소닉’.
       버섯 행성으로 쫓겨나 ‘소닉’에게 복수를 계획하던 천재 악당 ‘로보트닉’은 엄청난 힘을 지닌 신비의 에메랄드를 차지해 세상을 지배할 야망을 꿈꾸며 지구로 돌아온다! 

       최강 파워로 업그레이드된 ‘로보트닉’과 강력한 펀치 파워 ‘너클즈’의 공격에 속수무책으로 당하던 ‘소닉’은 하늘을 나는 꼬리를 가진 귀여운 파트너 ‘테일즈’의 도움으로 위기를 모면하게 되는데…
        
       초특급 히어로 소닉과 테일즈 VS 너클즈와 천재 악당 로보트닉
       새로운 질서로 세계를 정복하려는 최강 빌런에 맞선 거대한 대결이 시작된다` ,
       slider1:"/H_images/slider/sh1.jpg", slider2:"/H_images/slider/sh2.jpg", slider3:"/H_images/slider/sh3.jpg", slider4:"/H_images/slider/sh4.jpg", slider5:"/H_images/slider/sh5.jpg", slider6:"/H_images/slider/sh6.jpg"},

       { poster:"/H_images/18540_201_1.jpg" , title:"모비우스", entitle:"Morbius", dir:"다니엘 에스피노사", act:"자레드 레토, 맷 스미스, 아드리아 아르호나, 자레드 해리스, 타이레스 깁슨", gen:"드라마, 액션, 어드벤처", bas:"104분, 미국",                      age:"H_15", ticketing:"0.1%", open:"2022.03.30", link:"9Z79vlm3zW8",
       detail_title:`구원자인가, 파괴자인가`,
       detail: `희귀혈액병을 앓고 있는 생화학자 ‘모비우스’(자레드 레토)는
       동료인 ‘마르틴’(아드리아 아르호나)과 함께 치료제 개발에 몰두한다.
       
       흡혈 박쥐를 연구하던 중 마침내 치료제 개발에 성공한 ‘모비우스’는
       새 생명과 강력한 힘을 얻게 되지만,
       동시에 흡혈을 하지 않고는 생명을 유지할 수 없게 된다.
       
       그러던 중 ‘모비우스’와 같은 병을 앓고 있던 그의 친구 ‘마일로’(맷 스미스)도
       ‘모비우스’와 같은 힘을 얻게 되는데…
       
       세상을 구할 능력, 파괴할 본능!
       2022년, 마블 최강의 안티 히어로가 탄생한다!` ,
       slider1:"/H_images/slider/mo1.jpg", slider2:"/H_images/slider/mo2.jpg", slider3:"/H_images/slider/mo3.jpg", slider4:"/H_images/slider/mo4.jpg", slider5:"/H_images/slider/mo5.jpg", slider6:"/H_images/slider/mo6.jpg"}
        ]
  return movies_detail
}

export default List_Detail