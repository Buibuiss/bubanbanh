import React from 'react';
//component
import CategoryNav from './CategoryNav';
import MainSlider from './MainSlider';
//images
import Pro1 from '../img/tiramisu.png';
import Pro2 from '../img/panna_cotta.png';

const Hero = () => {
    return (
        <section className="mb-[30px] pt-36 lg:pt-0 ">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-[30px] xx:flex-row xx:gap-x-[30px] ">
                    <div>
                        <CategoryNav />
                    </div>

                    <div className="w-full max-w-lg lg:max-w[734px] mx-auto">
                        <MainSlider />
                    </div>

                    <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px] ">
                        <div className="bg-gradient-to-bl from-pink-50 to-pink-300 flex-1 h-[250px] rounded-[8px] overflow-hidden relative p6">
                            <div className="flex flex-col max-w-[144px] h-full justify-center mx-4">
                                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                                    Tiết kiệm lên tới 35% loại cho Panna cotta
                                </div>
                                <a href="#" className="btn btn-accent p-2 ">
                                    Mua ngay
                                </a>
                            </div>
                            <img
                                className="absolute z-20 -top-2 -right-[40%]"
                                src={Pro1}
                                alt=""
                            />
                        </div>
                        <div className="bg-gradient-to-bl from-pink-50 to-pink-300 flex-1 h-[250px] rounded-[8px] overflow-hidden relative p6">
                            <div className="flex flex-col max-w-[144px] h-full justify-center mx-4">
                                <div className="text-[20px] uppercase font-medium leading-tight mb-4 ">
                                    Tiết kiệm lên tới 35% loại cho Cupcake
                                </div>
                                <a href="#" className="btn btn-accent p-2">
                                    Mua ngay
                                </a>
                            </div>
                            <img
                                className="absolute z-20 top-2 -right-[45%]"
                                src={Pro2}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
