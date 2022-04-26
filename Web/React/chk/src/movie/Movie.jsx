import './movie.css';


const movies = [
  {id:1, poster:"images/85715_320.jpg" , title:"닥터 스트레인지: 대혼돈의 멀티버스", ticketing: "71.3%", open:"2022.05.04"},
  {id:2, poster:"images/85712_320.jpg" , title:"신비한 동물들과 덤블도어의 비밀", ticketing: "6%", open:"2022.04.14"}
]
function movie() {
  
  return (
    <div className="H_container">
        <div className="H_title">
          <h1>전체영화</h1>
        </div>
        <div className="H_movieChart">
          {/* Loop */}
          <div className="H_movie">
            <div className="H_poster_box">
              <img className="H_poster" src="images\85715_320.jpg" alt="" />
              <div className="H_poster_text_box">
                <div className="H_poster_text">지금껏 본 적 없는 마블의 극한 상상력!
                                                5월, 광기의 멀티버스가 깨어난다!
                                                끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며
                                                오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 ‘닥터 스트레인지’.
                                                대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데….
                </div>
              </div>
              <div className="H_movie_number">NO.1</div>
            </div>
            <div className='H_detail'>
              <div className="H_name">
                <p className='H_12'></p>
                <p className='H_movie_title'>{movies[0].title}</p>
              </div>
              <div className="H_second_name">
                <p>예매율 {movies[0].ticketing}</p>
                <p>개봉일 {movies[0].open}</p>
              </div>
              <div className="H_ticketing_box">
                <button className="H_ticketing">예매</button>
              </div>
            </div>
          </div>
          {/* /Loop */}
        </div>
    </div>
  )
}

export default movie