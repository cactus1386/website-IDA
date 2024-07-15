import React from 'react';
import Slider from './Home/Slider';
import Product from './Home/Product';
import Application from './Home/Application';


const Home = () => {
    return (
        <div className="container-fluid">
            <Slider />
            <Product />
            <div class="pt-3"><Application/></div>

        </div>
    );
};

export default Home;
