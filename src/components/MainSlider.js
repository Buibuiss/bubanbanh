import React from 'react';
//swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';
//swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';
//required modules
import { Pagination } from 'swiper';
//img
import ImgCake from '../img/gato.png';

const sliderData = [
    {
        img: ImgCake,
        pretitle: 'đặc biệt Giảm giá',
        titlePart1: 'tiết kiệm 20%',
        titlePart2: 'thuộc về bạn',
        titlePart3: 'đơn hàng đầu tiên',
        btnText: 'Mua Ngay',
    },
    {
        img: ImgCake,
        pretitle: 'đặc biệt Giảm giá',
        titlePart1: 'tiết kiệm 20%',
        titlePart2: 'thuộc về bạn',
        titlePart3: 'đơn hàng đầu tiên',
        btnText: 'Mua Ngay',
    },
    {
        img: ImgCake,
        pretitle: 'đặc biệt Giảm giá',
        titlePart1: 'tiết kiệm 20%',
        titlePart2: 'thuộc về bạn',
        titlePart3: 'đơn hàng đầu tiên',
        btnText: 'Mua Ngay',
    },
];

const MainSlider = () => {
    return (
        <Swiper
            modules={[Pagination]}
            loop={true}
            pagination={{
                clickable: true,
            }}
            className="mainSlider h-full bg-primary xx:bg-no-repeat xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl "
        >
            <>
                {sliderData.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="flex bg-gradient-to-bl from-pink-50 to-pink-300 flex-col lg:flex-row h-full p-[20px] md:p-[20px] ">
                                <div className="w-full lg:flex-1">
                                    <div className="uppercase mb-1 text-center lg:text-left">
                                        {slide.pretitle}
                                    </div>
                                    <div className="text-3xl md:text-[35px] font-semibold capitalize leading-none text-center lg:text-left mb-8 xl:mb-20 ">
                                        {slide.titlePart1}
                                        <br />
                                        {slide.titlePart2}
                                        <br />
                                        {slide.titlePart3}
                                    </div>
                                    <button className="btn btn-accent mx-auto">
                                        {slide.btnText}
                                    </button>
                                </div>
                                <div className="flex-1">
                                    <img
                                        className="xl:absolute xx:-right-4 xx:bottom-0 xx:absolute xx:-right-16 xx:-bottom-12 w-[350px]"
                                        src={slide.img}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </>
        </Swiper>
    );
};

export default MainSlider;
