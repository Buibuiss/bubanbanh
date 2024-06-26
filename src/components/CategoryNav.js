import React from 'react';
//useFetch hook
import useFetch from '../hooks/useFetch';
//link
import { Link } from 'react-router-dom';
const CategoryNav = () => {
    const { data } = useFetch('/categories');

    return (
        <aside className="hidden xx:flex xl:flex">
            <div className="bg-primary flex flex-col w-[240px] h-[500px] rounded-[8px] overflow-hidden">
                <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">
                    danh mục
                </div>
                <div className="flex flex-col gap-y-6 p-6">
                    {data?.map((catagory) => {
                        return (
                            <Link to={`/products/${catagory.id}`} key={catagory.id}>
                                {catagory.attributes.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
};

export default CategoryNav;
