import React, { useState, usereffect } from 'react'

const Slide = () => {
    
    
  return (
    <div className="slider">
        <div className="container relative">
            <a href="javascript:void(0)" className="prev" onClick={"pSlide(-1)"}>
                <span className="material-icons">arrow_back_ios</span>
            </a>     
            <a href="javascript:void(0)" className="next" onClick={"pSlide(1)"}>
                <span className="material-icons">arrow_forward_ios</span>
            </a>    
            <div className="slidein">
            <h3><span className="light">이야기 하나</span> '밥친구' 하기 좋은 유튜버 리스트</h3>
            <ul>
                <li className="active">
                    <a href="#"><span className="list-text">여행 유튜버가 흥정에 지지 않는 택시기...</span> <span className="cafe-text">여행하기</span></a>
                </li>

                <li>
                    <a href="#"><span className="list-text">훈수충이 없는 운동 유튜버.jpg </span><span className="cafe-text">*여성시대</span></a>
                </li>

                <li>
                    <a href="#"><span className="list-text">입짧은햇님 케이크 먹방 특징.gif </span><span className="cafe-text">옆집언니</span></a>
                </li>

                <li>
                    <a href="#"><span className="list-text">역대급 킹받는다는 침착맨 킹뚜껑 먹방.jpg </span><span className="cafe-text">먹방시대</span></a> 
                </li>                                       
            </ul>
            </div>



            <div className="slidein">
            <h3><span className="light">이야기 둘</span> 중고차 사기전에 필독</h3>
            <ul>
                <li className="active">
                    <a href="#"><span className="list-text">올리브영 핸드크림 판매순</span> <span className="cafe-text">여행하기</span></a>
                </li>

                <li>
                    <a href="#"><span className="list-text">어릴때 확실히 습관 가져야하는것 </span><span className="cafe-text">*여성시대</span></a>
                </li>

                <li>
                    <a href="#"><span className="list-text">10년 젊어지는 방법.jpg </span><span className="cafe-text">옆집언니</span></a>
                </li>

                <li>
                    <a href="#"><span className="list-text">치매 걸리지 않는 사람들의 16가지  </span><span className="cafe-text">먹방시대</span></a> 
                </li>                                       
            </ul>
            </div>


            <div className="slidein">
            <h3><span className="light">이야기 셋</span> 다시는 중고차를 무시하지마라</h3>
            <ul>
                <li className="active">
                    <a href="#"><span className="list-text">한국인이 가장 선호하는 배달음식</span> <span className="cafe-text">여행하기</span></a>
                </li>

                <li>
                    <a href="#"><span className="list-text">한국에서 가장 많이 팔린 과자 순위</span><span className="cafe-text">*여성시대</span></a>
                </li>

                <li>
                    <a href="#"><span className="list-text">한국인이 가장 오래 사용하는 앱 순위 </span><span className="cafe-text">옆집언니</span></a>
                </li>

                <li>
                    <a href="#"><span className="list-text">한국인들이 사랑하는 야식 순위 9  </span><span className="cafe-text">먹방시대</span></a> 
                </li>                                       
            </ul>
            </div>



            <div className="slidein">
            <h3><span className="light">이야기 넷</span> 매일 쓰면서 몰랐던 두뇌 설명서</h3>
            <ul>
                <li className="active">
                    <a href="#"><span className="list-text">마리 앙투아네트가 후원한 여성 화가</span> <span className="cafe-text">여행하기</span></a>
                </li>

                <li>
                    <a href="#"><span className="list-text">훈수충이 없는 운동 유튜버.jpg </span><span className="cafe-text">*여성시대</span></a>
                </li>

                <li>
                    <a href="#"><span className="list-text">입짧은햇님 케이크 먹방 특징.gif </span><span className="cafe-text">옆집언니</span></a>
                </li>

                <li>
                    <a href="#"><span className="list-text">역대급 킹받는다는 침착맨 킹뚜껑 먹방.jpg </span><span className="cafe-text">먹방시대</span></a> 
                </li>                                       
            </ul>
            </div>



            <div className="slidein">
            <h3><span className="light">이야기 다섯</span> 오늘도 기상천외한 당근마켓근황</h3>
            <ul>
                <li className="active">
                    <a href="#"><span className="list-text">이름 정말 대충지은 포켓몬</span> <span className="cafe-text">여행하기</span></a>
                </li>

                <li>
                    <a href="#"><span className="list-text">훈수충이 없는 운동 유튜버.jpg </span><span className="cafe-text">*여성시대</span></a>
                </li>

                <li>
                    <a href="#"><span className="list-text">입짧은햇님 케이크 먹방 특징.gif </span><span className="cafe-text">옆집언니</span></a>
                </li>

                <li>
                    <a href="#"><span className="list-text">역대급 킹받는다는 침착맨 킹뚜껑 먹방.jpg </span><span className="cafe-text">먹방시대</span></a> 
                </li>                                       
            </ul>
            </div>

        </div>
    </div>
  )
}

export default Slide