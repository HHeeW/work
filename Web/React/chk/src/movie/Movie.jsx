import './movie.css';

function movie() {
  return (
    <div className="H_container">
        <h1>전체영화</h1>
        <div className="H_movieChart">
          <div className="H_movie">
            <div className="H_poster">
              <img src="images\85715_320.jpg" alt="" />
            </div>
            <div className='H_detail'>
              <div className="H_name">
                <span className="H_movie_icon">12</span>
                <h3 className='H_movie_title'>닥터 스트레인지</h3>
              </div>
              <div className="H_second_name">
                <p>예매율 70.3%</p>
                <p>개봉일 2022.05.04</p>
              </div>
              <div className="H_ticketing_box">
                <div className="H_ticketing">
                  예매
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default movie