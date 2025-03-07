import React, { useEffect, useState } from 'react';
//useParam
import { useParams } from 'react-router-dom';
//useFetch
import useFetch from '../hooks/useFetch';
//component
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const Products = () => {
    const { id } = useParams();

    const { data } = useFetch(`/products?populate=*&filters[categories][id][$eq]=${id}`);

    const [title, setTitle] = useState(null);

    useEffect(() => {
        if (data) {
            setTitle(data[0].attributes.categories.data[0].attributes.title);
        }
    });

    return (
        <div className="mb-16 pt-40 xx:pt-0">
            <div className="container mx-auto">
                <div className="flex gap-x-[30px]">
                    <CategoryNav />
                    <main>
                        <div className="py-3 text-xl capitalize text-center lg:text-left">
                            {title}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xx:grid-cols-4 gap-[15px] md:[30px]">
                            {data?.map((product) => {
                                return <Product product={product} key={product.id} />;
                            })}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Products;
