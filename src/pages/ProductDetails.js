import React, { useContext } from 'react';
//useParams
import { useParams } from 'react-router-dom';
//useFetch
import useFetch from '../hooks/useFetch';
//component
import RelatedProducts from '../components/RelatedProducts';
//context
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const idd = parseInt(id);

    const { addToCart } = useContext(CartContext);

    const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${idd}`);
    if (!data) {
        return <div className="container mx-auto">Loading...</div>;
    }

    const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

    return (
        <div className="mb-16 pt-44 lg:pt-[30px] xx:pt-0">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
                    <div className="flex-1 lg:max-w-[40%] lg:h-[540px] bg-gradient-to-bl from-pink-50 to-pink-300 rounded-lg flex justify-center items-center">
                        <img
                            src={`${data[0].attributes.image.data.attributes.url}`}
                            alt=""
                            className="w-full max-w-[65%]"
                        />
                    </div>
                    <div className="flex-1 bg-primary p-12 xx:p-20 rounded-lg flex flex-col justify-center">
                        <div className="uppercase text-accent text-lg font-medium mb-2">
                            {data[0].attributes.categories.data[0].attributes.title}
                        </div>
                        <h2 className="h2 mb-4">{data[0].attributes.title}</h2>
                        <p className="mb-12">{data[0].attributes.description}</p>
                        <div className="flex items-center gap-x-8 ">
                            <div className="text-3xl text-accent font-semibold">
                                {data[0].attributes.price}Đ
                            </div>
                            <button
                                onClick={() => addToCart(data, idd)}
                                className="btn btn-accent"
                            >
                                Thêm vào giỏ
                            </button>
                        </div>
                    </div>
                </div>
                <RelatedProducts categoryTitle={categoryTitle} />
            </div>
        </div>
    );
};

export default ProductDetails;
