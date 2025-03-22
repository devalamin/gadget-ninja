import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([])
    const [originalGadgets, setOriginalGadgets] = useState([])

    useEffect(() => {
        fetch('/electronicsData.json')
            .then(res => res.json())
            .then(data => {
                setGadgets(data)
                setOriginalGadgets(data)
            })
    }, [])
    // console.log(gadgets);

    const handleSortGadget = gName => {
        if (gName === 'all') {
            setGadgets(originalGadgets)
        }
        else {
            const sortedGadgets = originalGadgets.filter(gadget => gadget.category === gName)
            setGadgets(sortedGadgets)
        }

    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex gap-4'>
                <div className='w-2/12 bg-white flex flex-col space-y-3 text-center'>
                    <button onClick={() => handleSortGadget('all')} className='bg-slate-300 delay-100 transition-all focus:bg-[#9538E2] focus:text-white px-4 py-2 rounded-md'>All Products</button>
                    <button onClick={() => handleSortGadget('Laptops')} className='bg-slate-300 px-4 py-2 rounded-md delay-100 transition-all focus:bg-[#9538E2] focus:text-white'>Laptops</button>
                    <button onClick={() => handleSortGadget('Smartphones')} className='bg-slate-300 px-4 py-2 rounded-md delay-100 transition-all focus:bg-[#9538E2] focus:text-white'>Smartphones</button>
                    <button onClick={() => handleSortGadget('Smartwatches')} className='bg-slate-300 px-4 py-2 rounded-md delay-100 transition-all focus:bg-[#9538E2] focus:text-white'>Smartwatches</button>
                    <button onClick={() => handleSortGadget('Keyboards')} className='bg-slate-300 px-4 py-2 rounded-md delay-100 transition-all focus:bg-[#9538E2] focus:text-white'>Keyboards</button>
                    <button onClick={() => handleSortGadget('Earbuds')} className='bg-slate-300 px-4 py-2 rounded-md delay-100 transition-all focus:bg-[#9538E2] focus:text-white'>Earbuds</button>
                </div>
                <div className='grow'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                        {
                            gadgets?.map(gadget => <Gadget gadget={gadget}></Gadget>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadgets;