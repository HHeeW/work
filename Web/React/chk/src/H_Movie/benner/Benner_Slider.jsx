import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import Benner_List from "./Benner_List";

const Benner_Slider = () => {
    let Swiper_Slides = [];
        Swiper_Slides =
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            navigation={true}
            pagination={{
                type: "fraction",
            }}
            autoplay={{
                delay: 1000
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
            <Benner_List />
        </Swiper>
    
    return Swiper_Slides;
}
export default Benner_Slider