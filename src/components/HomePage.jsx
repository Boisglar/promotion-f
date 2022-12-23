import React from 'react';
import Chemp from './HomePage/chemp/Chemp';
import Gallery from './HomePage/gallery/gallery';
import Life from './HomePage/main/life/Life';
import Main from './HomePage/main/Main';
import Merch from './HomePage/merch/Merch';
import Points from './HomePage/points/Points';

const HomePage = () => {
    return (
        <div>
            <Main/>
            <Chemp/>
            <Merch/>
            <Life/>
            <Points/>
            <Gallery/>
        </div>
    );
};

export default HomePage;