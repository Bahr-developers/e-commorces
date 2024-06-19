import Game from '../../assets/icons/game.svg'
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

const HeroMiniCategory = () => {
    return (
        <div>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
                className="mySwiper my-5 md:hidden"
            >
                <SwiperSlide className="w-[45%]">
                    <div className="card text-center hover:border-cyan-500 rounded-md border p-3 md:p-8 bg-white shadow md:flex md:gap-2 md:justify-center md:items-center">
                        <img className="w-[40px] md:w-[70px] mx-auto md:m-0" src={Game} alt="image" />
                        <h3 className="text-[19px] font-bold">Games</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-[45%]">
                    <div className="card text-center hover:border-cyan-500 rounded-md border p-3 md:p-8 bg-white shadow md:flex md:gap-2 md:justify-center md:items-center">
                        <img className="w-[40px] md:w-[70px] mx-auto md:m-0" src={Game} alt="image" />
                        <h3 className="text-[19px] font-bold">Games</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-[45%]">
                    <div className="card text-center hover:border-cyan-500 rounded-md border p-3 md:p-8 bg-white shadow md:flex md:gap-2 md:justify-center md:items-center">
                        <img className="w-[40px] md:w-[70px] mx-auto md:m-0" src={Game} alt="image" />
                        <h3 className="text-[19px] font-bold">Games</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-[45%]">
                    <div className="card text-center hover:border-cyan-500 rounded-md border p-3 md:p-8 bg-white shadow md:flex md:gap-2 md:justify-center md:items-center">
                        <img className="w-[40px] md:w-[70px] mx-auto md:m-0" src={Game} alt="image" />
                        <h3 className="text-[19px] font-bold">Games</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroMiniCategory;