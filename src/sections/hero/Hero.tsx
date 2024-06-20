
import { SwiperSlide,Swiper } from "swiper/react";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef } from "react";
import HeroMiniCategory from "./HeroMiniCategory";


const Hero = () => {
  const price = useRef<HTMLParagraphElement>()
  setInterval(() => {
    price.current?.classList.toggle('rotate-3')
  }, 400);

    return (
      <div className="bg-[#EEEEEE] container mx-auto">
        <div className="container p-3 md:px-10">        
          <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay = {{
            delay: 2000,
            disableOnInteraction: false
          }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper w-full"
          >            
            <SwiperSlide className="w-full rounded-md">
                  <img className="w-full h-[450px] rounded-md mx-auto" src="https://picsum.photos/id/139/300/250" alt="" /> 
            </SwiperSlide>
            <SwiperSlide className="w-full rounded-md">
                  <img className="w-full h-[450px] rounded-md mx-auto" src="https://picsum.photos/id/139/300/250" alt="" /> 
            </SwiperSlide>
          </Swiper>   
          <HeroMiniCategory/>       
        </div>
      </div>
    );
};

export default Hero;