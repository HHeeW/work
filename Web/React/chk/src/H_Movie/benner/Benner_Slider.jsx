import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import List_Page from '../List/List_Page';
import './benner.css';



const Benner_Slider = () => {
    let movies = List_Page();
    let Slide = [];
    let Swiper_Slides = [];
    for(let i in movies){
        Slide[i] = 
            <div className='H_Benner_Slide'>
                <div className='H_Benner_main_poster'>
                    <Link to={`/Movie_Page_List/${[parseInt(i)+1]}`}>
                        <img src={movies[i].poster} alt="poster" />
                    </Link>
                </div>
                <div className='H_Benner_Text_box'>
                    <h2>{movies[i].title}</h2>
                    <p>장르 : {movies[i].gen}</p>
                    <p>감독 : {movies[i].dir}</p>
                    <p>배우 : {movies[i].act}</p>
                    <h3>{movies[i].detail_title}</h3>
                </div>
                <ul className='H_Benner_slides'>
                    <li><img src={movies[i].slider1} alt="subPoster" /></li>
                    <li><img src={movies[i].slider2} alt="subPoster" /></li>
                </ul>
            </div>
    }
    Swiper_Slides =
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            navigation={true}
            pagination={{
                type: "fraction",
            }}
            autoplay={{
                delay: 5000
            }}
            coverflowEffect={{
                rotate: 100,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            >
            <SwiperSlide>{Slide[0]}</SwiperSlide>
            <SwiperSlide>{Slide[1]}</SwiperSlide>
            <SwiperSlide>{Slide[2]}</SwiperSlide>
            <SwiperSlide>{Slide[3]}</SwiperSlide>
            <SwiperSlide>{Slide[4]}</SwiperSlide>
            <SwiperSlide>{Slide[5]}</SwiperSlide>
            <SwiperSlide>{Slide[6]}</SwiperSlide>
            <SwiperSlide>{Slide[7]}</SwiperSlide>
            <SwiperSlide>{Slide[8]}</SwiperSlide>
            <SwiperSlide>{Slide[9]}</SwiperSlide>
            <SwiperSlide>{Slide[10]}</SwiperSlide>
            <SwiperSlide>{Slide[11]}</SwiperSlide>
            <SwiperSlide>{Slide[12]}</SwiperSlide>
            <SwiperSlide>{Slide[13]}</SwiperSlide>
            <SwiperSlide>{Slide[14]}</SwiperSlide>
            <SwiperSlide>{Slide[15]}</SwiperSlide>
            <SwiperSlide>{Slide[16]}</SwiperSlide>
            <SwiperSlide>{Slide[17]}</SwiperSlide>
            <SwiperSlide>{Slide[18]}</SwiperSlide>
            <SwiperSlide>{Slide[19]}</SwiperSlide>
        </Swiper>
    return Swiper_Slides;
}
export default Benner_Slider