import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './HomePage/Footer/Footer';
import Header from './HomePage/header/Header';

const Layot = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layot;