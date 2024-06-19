
import { SwiperSlide,Swiper } from "swiper/react";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";
import { useRef } from "react";
import Game from '../assets/icons/game.svg'

const Hero = () => {
  const price = useRef<HTMLParagraphElement>()
  setInterval(() => {
    price.current?.classList.toggle('rotate-3')
  }, 400);

    return (
      <div className="bg-[#EEEEEE]">
        <div className="container p-3 md:px-10">        
          <Swiper
          autoplay = {{
            delay: 2000,
            disableOnInteraction: false
          }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper w-full"
          >            
            <SwiperSlide className="w-full bg-slate-600 p-10 rounded-md md:flex md:justify-between md:items-center">
              <div className="hero-title text-center md:text-start md:px-10 w-[45%]">
                <p className="bg-red-500 text-[14px] font-bold p-2 inline rounded-md text-white ">Today Deal</p>
                <h3 className="text-[27px] md:text-[50px] mt-3 text-white font-black">Lorem ipsum dolor sit amet</h3>
                <p className="text-[20px] mt-1 text-white font-medium">Lorem ipsum dolor sit amet</p>
                <div className="price-praduct my-3 md:ml-auto md:justify-start justify-center p-0 flex items-center gap-x-2">
                  <h3 className="text-[23px] text-white font-black">From</h3>
                  <p ref={price} className="text-[25px] transition-all text-yellow-300 rotate-3 font-black">$45.999</p>
                </div>
                <Link to='/' className="bg-[#10439F] text-[15px] text-white p-2 rounded-md  inline font-bold">SHOP NOW</Link>
              </div>
              <div className="hero-img mt-8">
                  <img className="md:w-[550px] rounded-md mx-auto" src="https://picsum.photos/id/139/300/250" alt="" />
              </div>  
            </SwiperSlide>
          </Swiper>  
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            autoplay= {{
              delay: 2000,
              disableOnInteraction: false
            }}
            modules={[Autoplay]}
            className="mySwiper my-5 md:hidden"
          >
            <SwiperSlide className="w-[45%]">
              <div className="card text-center hover:border-cyan-500 rounded-md border p-3 md:p-8 bg-white shadow md:flex md:gap-2 md:justify-center md:items-center">
                <img className="w-[40px] md:w-[70px] mx-auto md:m-0" src={Game} alt="image"/>
                <h3 className="text-[19px] font-bold">Games</h3>
              </div>
            </SwiperSlide>  
            <SwiperSlide className="w-[45%]">
              <div className="card text-center hover:border-cyan-500 rounded-md border p-3 md:p-8 bg-white shadow md:flex md:gap-2 md:justify-center md:items-center">
                <img className="w-[40px] md:w-[70px] mx-auto md:m-0" src={Game} alt="image"/>
                <h3 className="text-[19px] font-bold">Games</h3>
              </div>
            </SwiperSlide> 
            <SwiperSlide className="w-[45%]">
              <div className="card text-center hover:border-cyan-500 rounded-md border p-3 md:p-8 bg-white shadow md:flex md:gap-2 md:justify-center md:items-center">
                <img className="w-[40px] md:w-[70px] mx-auto md:m-0" src={Game} alt="image"/>
                <h3 className="text-[19px] font-bold">Games</h3>
              </div>
            </SwiperSlide> 
            <SwiperSlide className="w-[45%]">
              <div className="card text-center hover:border-cyan-500 rounded-md border p-3 md:p-8 bg-white shadow md:flex md:gap-2 md:justify-center md:items-center">
                <img className="w-[40px] md:w-[70px] mx-auto md:m-0" src={Game} alt="image"/>
                <h3 className="text-[19px] font-bold">Games</h3>
              </div>
            </SwiperSlide>          
          </Swiper>
        </div>
      </div>
    );
};

export default Hero;