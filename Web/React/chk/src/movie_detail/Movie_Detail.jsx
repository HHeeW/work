import './movie_detail.css'

const Movie_Detail = () => {
  return (
    <div className="H_background_poster">
        <div className='H_container H_background_black'>
            <div className="H_movie_top">
                <div className="H_black"></div>
                <div className="H_movie_detail">
                    <iframe className='H_movie_play' width="1200" height="550"  src="https://www.youtube.com/embed/Rt_UqUm38BI?controls=0&loop=1&playlist=Rt_UqUm38BI&start=30&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="H_detail">
                <img className='H_detail_poster' src="images/85715_320.jpg" alt="" />
                <div className="H_movie_detail_text_box">
                    <h1>닥터 스트레인지: 대혼돈의 멀티버스</h1>
                    <h4>Doctor Strange in the Multiverse of Madness</h4>
                    <p>감독 : 샘 레이미</p> 
                    <p>배우 : 베네딕트 컴버배치 ,  엘리자베스 올슨 ,  베네딕트 웡 ,  레이첼 맥아담스 ,  치웨텔 에지오포 ,  소치틀 고메즈</p>
                    <p>장르 : 액션, 어드벤처, 환타지 / 기본 : 12세 이상, 126분, 미국</p>
                    <p>개봉 : 2022.05.04</p>
                    <div className="H_ticketing_box">
                        <button className="H_ticketing">예매</button>
                    </div>
                    <div className="ticket">
                        
                    </div>
                    
                </div>
            </div>
            <div className="H_detail_nav">
                <ul className="H_nav_gnb">
                    <li className="H_information">
                        영화 정보
                    </li>
                    <li className='H_review'>
                        관람평
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Movie_Detail