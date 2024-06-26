import React from 'react';
//useFetch
import useFetch from '../hooks/useFetch';
//component
import ProductSlider from './ProductSlider';

const RelatedProducts = ({ categoryTitle }) => {
    const { data } = useFetch(
        `/products?populate=*&filters[categories][title]=${categoryTitle}`,
    );

    return (
        <div className="mb-16 ">
            <div className="container mx-auto">
                <h2 className="h2 mb-6 text-center xx:text-left">Sảm phẩm liên quan</h2>
                <ProductSlider data={data} />
            </div>
        </div>
    );
};

export default RelatedProducts;
