import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { DataProvider } from '../Context/ProductContext';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    
    return (
        <div>

            <DataProvider>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            </DataProvider>
            <ToastContainer />
        </div>
    );
};

export default Home;