import { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import List_Page from '../List/List_Page';

const Benner_List = ({number}) => {
  let movies = List_Page();
  let Swiper_Slides = [];
      Swiper_Slides = 
      <Swiper
      effect={"coverflow"}
      grabCursor={true}
    //   autoplay={{
    //       delay: 3000
    //   }}
      coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
      }}
      modules={[Autoplay, EffectCoverflow]}
      className="mySwiper"
      >
        <SwiperSlide>
            <img src={movies[number].slider1} alt="slide_poster" />
            <img src={movies[number].slider2} alt="slide_poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={movies[number].slider3} alt="slide_poster" />
            <img src={movies[number].slider4} alt="slide_poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={movies[number].slider5} alt="slide_poster" />
            <img src={movies[number].slider6} alt="slide_poster" />
        </SwiperSlide>
    </Swiper>
  return (
    <>
        {Swiper_Slides}
    </>
    )
}

export default Benner_List