import React from 'react';
//use location hook
import { useLocation } from 'react-router-dom';
//useFetch
import useFetch from '../hooks/useFetch';
//component
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const Search = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('query');

    console.log(searchTerm);

    const { data } = useFetch(`/products?populate=*&filters[title][$contains]=${searchTerm}`);

    return (
        <div className="m-[30px] pt-40 lg:pt-0">
            <div className="container mx-auto">
                <div className="flex gap-x-[30px]">
                    <CategoryNav />
                    <div>
                        <div className="py-3 text-xl capitalize text-center">
                            {data?.length > 0
                                ? `${data.length} kết quả của ${searchTerm}`
                                : 'không tìm thấy kết quả nào'}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xx:grid-cols-4 gap-[15px] md:gap-[30px] ">
                            {data?.map((product) => {
                                return <Product key={product.id} product={product} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
