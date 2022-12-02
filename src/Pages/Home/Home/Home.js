import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Categories from '../../Categories/Categories/Categories';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;