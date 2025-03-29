import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Banner from '../Banner/Banner';

const NavBar = () => {

    const location = useLocation()

    return (
        <>
            <div className={`bg-[#9538E2] ${location.pathname !== "/" && "bg-slate-300"} transition-colors duration-300 sticky top-0 z-10`}>
                <div className='w-11/12 py-2 md:py-5 mx-auto flex justify-between items-center'>
                    <div>
                        <h4 className={`font-bold text-2xl ${location.pathname !== "/" ? "text-slate-700" : "text-white"}`}>Gadget Heaven</h4>
                    </div>
                    <div className={`space-x-3 font-bold ${location.pathname !== "/" ? "text-slate-700" : "text-white"}`}>
                        <NavLink>Home</NavLink>
                        <NavLink>Statistics</NavLink>
                        <NavLink>Dashboard</NavLink>
                    </div>
                    <div>
                        <div className='flex text-2xl space-x-4 items-center'>
                            <Link className='text-sm text-white' to='/login'>Login</Link>
                            <Link className='text-sm text-white' to='/register'>Sign Up</Link>
                            <Link to='/cart'><FaCartArrowDown className='text-black bg-white h-10 w-10 p-2 rounded-full' /></Link>
                            <CiHeart className='text-black bg-white h-10 w-10 p-2 rounded-full'></CiHeart>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Banner></Banner> */}
        </>
    );
};

export default NavBar;