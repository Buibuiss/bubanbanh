import React, { useContext } from 'react';
//icon
import { IoArrowForward, IoCartOutline, IoClose } from 'react-icons/io5';
//context
import { CartContext } from '../context/CartContext';
//component
import CartItem from './CartItem';

const Cart = () => {
    const { setIsOpen, cart, total, clearCart } = useContext(CartContext);
    return (
        <div className="w-full h-full px-4 text-white bg-gradient-to-tr from-pink-100 to-pink-400">
            <div className="overflow-y-auto overflow-x-hidden h-[80vh]">
                <div
                    className="text-4xl w-20 h-[98px] flex  justify-start items-center cursor-pointer"
                    onClick={() => setIsOpen(false)}
                >
                    <IoClose />
                </div>
                <div className="flex flex-col gap-y-1 px-2 rounded-lg">
                    {cart.map((item) => {
                        return <CartItem key={item.id} item={item} />;
                    })}
                </div>
            </div>
            {cart.length >= 1 && (
                <div className="px-6 py-4 ">
                    <div className="flex justify-between text-2xl ">
                        <div>Tổng cộng :</div>
                        <div> {parseFloat(total)} Đ </div>
                    </div>
                </div>
            )}
            <div className="px-6">
                {cart.length >= 1 ? (
                    <div className="flex justify-between gap-x-4 ">
                        <button
                            className="btn btn-accent hover:bg-accent-hover text-primary"
                            onClick={clearCart}
                        >
                            Xóa giỏ hàng
                        </button>
                        <button className="btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2">
                            Thanh toán
                            <IoArrowForward className="text-lg" />
                        </button>
                    </div>
                ) : (
                    <div className="h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30 capitalize ">
                        <div className="text-2xl">giỏ hàng đang trống </div>
                        <div className="text-6xl">
                            <IoCartOutline />{' '}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
