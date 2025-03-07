import React, { useContext } from 'react';
//link
import { Link } from 'react-router-dom';
//icon
import { IoClose } from 'react-icons/io5';
//component
import Qty from './Qty';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CartContext);
    return (
        <div className="flex gap-x-8 bg-gradient-to-bl from-pink-200 to-pink-400 items-center rounded-md">
            <Link to={`product/${item.id}`} className="w-[70px] h-[70px]    ">
                <img src={`${item.attributes.image.data.attributes.url}`} alt="" />
            </Link>
            <div className="flex-1 ">
                <div className="flex gap-x-4 mb-3 justify-between">
                    <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
                    <div
                        onClick={() => removeFromCart(item.id)}
                        className="cursor-pointer text-[24px] hover:text-accent transition-all"
                    >
                        <IoClose />
                    </div>
                </div>
                <div className=" flex items-center gap-x-12">
                    <div className="flex gap-x-4 mb-2">
                        <Qty item={item} />
                    </div>

                    <div className="text-accent text-1xl">
                        {item.attributes.price * item.amount} Đ
                    </div>
                </div>
                <div>
                    <span className="text-accent">{item.attributes.price} Đ</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
