import React from 'react';
//swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';
//swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';
//required modules
import { Pagination, Navigation } from 'swiper';
//component
import Product from '../components/Product';

const ProductSlider = ({ data }) => {
    return (
        <Swiper
            modules={[Pagination, Navigation]}
            loop={false}
            navigation={true}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1440: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            }}
            pagination={{
                clickable: true,
            }}
            className="productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px] xx:max-w-[1150px]"
        >
            <>
                {data?.map((product) => {
                    return (
                        <SwiperSlide key={product.id}>
                            <Product product={product} />
                        </SwiperSlide>
                    );
                })}
            </>
        </Swiper>
    );
};

export default ProductSlider;
