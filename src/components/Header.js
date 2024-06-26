import React, { useContext, useState } from 'react';
//img
import Logo from '../img/logo.png';
//icon
import { SlBag } from 'react-icons/sl';
import { FiMenu } from 'react-icons/fi';
//link
import { Link } from 'react-router-dom';
//component
import SearchForm from './SearchForm';
import CategoryNavMobile from './CategoryNavMobile';
import Cart from './Cart';
//context
import { CartContext } from '../context/CartContext';

const Header = () => {
    const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
    const [catNavMobile, setCatNavMobile] = useState(false);
    return (
        <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xx:mb-[30px]">
            <div className="container mx-auto">
                <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 xx:mb-0 ">
                    <div
                        onClick={() => setCatNavMobile(true)}
                        className="text-3xl xx:hidden cursor-pointer pt-3"
                    >
                        <FiMenu />
                    </div>
                    <div
                        className={`${
                            catNavMobile ? 'left-0' : '-left-full'
                        } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
                    >
                        <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
                    </div>
                    <Link>
                        <img className="w-full h-[50px]" src={Logo} alt="" />
                    </Link>

                    <div className="hidden w-full xx:flex xx:max-w-[734px] ">
                        <SearchForm />
                    </div>

                    <div className="flex items-center gap-x-[10px]">
                        <div className="hidden xx:flex capitalize">liên hệ ? 0378385645</div>
                        <div
                            className="relative cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <SlBag className="text-2xl" />
                            <div className="bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center font-bold tracking-[-0.1rem]">
                                {itemsAmount}
                            </div>
                        </div>
                        <div
                            className={`${isOpen ? 'right-0' : '-right-full'}
                            bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
                        >
                            <Cart />
                        </div>
                    </div>
                </div>
                <div className="xx:hidden ">
                    <SearchForm />
                </div>
            </div>
        </header>
    );
};

export default Header;
