import React, { createContext, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { DataProvider } from '../Context/ProductContext';
import { ToastContainer } from 'react-toastify';


export const UserContext = createContext()
const Home = () => {
    const [user, setUser] = useState('')

    return (
        <div>

            <UserContext.Provider value={{ user, setUser }}>
                <DataProvider>
                    <NavBar></NavBar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </DataProvider>
            </UserContext.Provider>

            <ToastContainer />
        </div>
    );
};

export default Home;