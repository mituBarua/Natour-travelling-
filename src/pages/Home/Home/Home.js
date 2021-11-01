import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Explore from '../Explore/Explore';
import Offers from '../Offers/Offers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <About></About>
            <Explore></Explore>
        </div>
    );
};

export default Home;