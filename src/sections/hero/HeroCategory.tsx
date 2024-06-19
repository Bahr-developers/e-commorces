import Game from '../../assets/icons/game.svg'
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';


const HeroCategory = () => {
    return (
        <div className='hidden md:block'>
            <Swiper
                slidesPerView={6}
                spaceBetween={20}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
                className="mySwiper my-5"
            >
                <SwiperSlide className="">
                    <div className="card text-center hover:border-cyan-500 rounded-md border md:p-4 bg-white shadow md:flex md:gap-2 md:justify-around md:items-center">
                        <img className="w-[40px] md:w-[60px] mx-auto md:m-0" src={Game} alt="image" />
                        <h3 className="text-[19px] font-bold">Games</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="card text-center hover:border-cyan-500 rounded-md border md:p-4 bg-white shadow md:flex md:gap-2 md:justify-around md:items-center">
                        <img className="w-[40px] md:w-[60px] mx-auto md:m-0" src={Game} alt="image" />
                        <h3 className="text-[19px] font-bold">Games</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="card text-center hover:border-cyan-500 rounded-md border md:p-4 bg-white shadow md:flex md:gap-2 md:justify-around md:items-center">
                        <img className="w-[40px] md:w-[60px] mx-auto md:m-0" src={Game} alt="image" />
                        <h3 className="text-[19px] font-bold">Games</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="card text-center hover:border-cyan-500 rounded-md border md:p-4 bg-white shadow md:flex md:gap-2 md:justify-around md:items-center">
                        <img className="w-[40px] md:w-[60px] mx-auto md:m-0" src={Game} alt="image" />
                        <h3 className="text-[19px] font-bold">Games</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="card text-center hover:border-cyan-500 rounded-md border md:p-4 bg-white shadow md:flex md:gap-2 md:justify-around md:items-center">
                        <img className="w-[40px] md:w-[60px] mx-auto md:m-0" src={Game} alt="image" />
                        <h3 className="text-[19px] font-bold">Games</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="card text-center hover:border-cyan-500 rounded-md border md:p-4 bg-white shadow md:flex md:gap-2 md:justify-around md:items-center">
                        <img className="w-[40px] md:w-[60px] mx-auto md:m-0" src={Game} alt="image" />
                        <h3 className="text-[19px] font-bold">Games</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="card text-center hover:border-cyan-500 rounded-md border md:p-4 bg-white shadow md:flex md:gap-2 md:justify-around md:items-center">
                        <img className="w-[40px] md:w-[60px] mx-auto md:m-0" src={Game} alt="image" />
                        <h3 className="text-[19px] font-bold">Games</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="card text-center hover:border-cyan-500 rounded-md border md:p-4 bg-white shadow md:flex md:gap-2 md:justify-around md:items-center">
                        <img className="w-[40px] md:w-[60px] mx-auto md:m-0" src={Game} alt="image" />
                        <h3 className="text-[19px] font-bold">Games</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="card text-center hover:border-cyan-500 rounded-md border md:p-4 bg-white shadow md:flex md:gap-2 md:justify-around md:items-center">
                        <img className="w-[40px] md:w-[60px] mx-auto md:m-0" src={Game} alt="image" />
                        <h3 className="text-[19px] font-bold">Games</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="card text-center hover:border-cyan-500 rounded-md border md:p-4 bg-white shadow md:flex md:gap-2 md:justify-around md:items-center">
                        <img className="w-[40px] md:w-[60px] mx-auto md:m-0" src={Game} alt="image" />
                        <h3 className="text-[19px] font-bold">Games</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroCategory;