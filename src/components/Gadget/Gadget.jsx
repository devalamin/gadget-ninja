import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const { product_image, product_title, price, product_id } = gadget
    return (
        <div>
            <div className='text-center bg-slate-200 rounded-md p-4'>
                <div className='w-72 h-60 p-3 bg-white mx-auto rounded-md'>
                    <img className='w-full h-full p-3 object-contain' src={product_image} alt="" />
                </div>
                <div className='text-start pl-2 pb-4'>
                    <h5 className='font-bold my-3'>{product_title}</h5>
                    <p className='my-4'>Price:{price}tk</p>
                    <div>
                        <Link to={`/details/${product_id}`} className='rounded-2xl bg-white px-5 py-2 border border-[#9538E2] text-[#9538E2]'>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;