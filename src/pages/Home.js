import React from 'react';
//component
import Hero from '../components/Hero.js';
import LatestProducts from '../components/LatestProducts.js';

const Home = () => {
    //get new products

    return (
        <section>
            <Hero />
            <LatestProducts />
        </section>
    );
};

export default Home;
