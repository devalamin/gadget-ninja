import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';

const Home = () => {
    
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Gadgets></Gadgets>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;