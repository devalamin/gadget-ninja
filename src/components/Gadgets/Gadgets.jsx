import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([])

    useEffect(() => {
        fetch('/electronicsData.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])
    console.log(gadgets);
    
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex'>
                <div className='w-3/12 bg-white flex flex-col space-y-3 text-center'>
                    <NavLink className='bg-slate-300 px-4 py-2 rounded-md'>All Products</NavLink>
                    <NavLink className='bg-slate-300 px-4 py-2 rounded-md'>Laptops</NavLink>
                    <NavLink className='bg-slate-300 px-4 py-2 rounded-md'>Smartphones</NavLink>
                    <NavLink className='bg-slate-300 px-4 py-2 rounded-md'>Smartwatches</NavLink>
                    <NavLink className='bg-slate-300 px-4 py-2 rounded-md'>Keyboards</NavLink>
                    <NavLink className='bg-slate-300 px-4 py-2 rounded-md'>Earbuds</NavLink>
                </div>
                <div className='bg-red-300 grow'>
                    products
                </div>
            </div>
        </div>
    );
};

export default Gadgets;