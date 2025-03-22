import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Banner from '../Banner/Banner';

const NavBar = () => {
    return (
        <>
            <div className='bg-[#9538E2]'>
                <div className='w-11/12 py-2 md:py-5 mx-auto flex justify-between items-center'>
                    <div>
                        <h4 className='text-white font-bold text-2xl'>Gadget Heaven</h4>
                    </div>
                    <div className='text-white space-x-3 font-bold'>
                        <NavLink>Home</NavLink>
                        <NavLink>Statistics</NavLink>
                        <NavLink>Dashboard</NavLink>
                    </div>
                    <div>
                        <div className='flex text-2xl space-x-4'>
                            <FaCartArrowDown className='text-black bg-white h-10 w-10 p-2 rounded-full' />
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