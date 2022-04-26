import './movie_detail.css'


const Movie_Detail = (props) => {
  return (
    <div className="H_background_poster">
        <img src={props.poster} alt="poster" />
        <div className='H_container H_background_black'>
            <div className="H_movie_top">
                <div className="H_black"></div>
                <div className="H_movie_detail">
                    <iframe className='H_movie_play' width="1200" height="550"  src="https://www.youtube.com/embed/Rt_UqUm38BI?controls=0&loop=1&playlist=Rt_UqUm38BI&start=30&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="H_detail">
                <img className='H_detail_poster' src={props.poster} alt="" />
                <div className="H_movie_detail_text_box">
                    <h1>{props.title}</h1>
                    <h4>{props.entitle}</h4>
                    <p>감독 : {props.dir}</p> 
                    <p>배우 : {props.act}</p>
                    <p>장르 : {props.gen} / 기본 : {props.bas}</p>
                    <p>개봉 : {props.open}</p>
                    <div className="H_ticketing_box">
                        <button className="H_ticketing">예매</button>
                    </div>
                    <div className="ticket">
                        
                    </div>
                    
                </div>
            </div>
            {/* <div className="H_detail_nav">
                <ul className="H_nav_gnb">
                    <li className="H_information">
                        영화 정보
                    </li>
                    <li className='H_review'>
                        관람평
                    </li>
                </ul>
            </div> */}
        </div>
    </div>
  )
}

export default Movie_Detail