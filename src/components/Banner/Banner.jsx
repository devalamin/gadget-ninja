import React from 'react';
import bannerImg from '../../assets/banner.jpg'
import Gadgets from '../Gadgets/Gadgets';
const Banner = () => {
    return (

        <>

            <div className='bg-[#9538E2] relative pt-10 pb-60 mb-80'>
                <div className='w-11/12 mx-auto text-white text-center'>
                    <h5 className='md:w-3/4 mx-auto text-5xl font-bold'>
                        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                    </h5>
                    <p className='md:w-3/5 mx-auto md:my-8 my-3'>
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <div>
                        <button className='bg-white text-[#9538E2] rounded-xl md:px-7 px-3 py-1 md:py-2'>Shop Now </button>
                    </div>
                </div>
                <div className=''>
                    <div className='border-2 border-white p-5 mx-auto absolute rounded-2xl top-2/3 left-1/4'>
                        <img className='w-3xl h-96 object-cover rounded-2xl' src={bannerImg} alt="An Image Of Virtual reality Box" />
                    </div>
                </div>
            </div>

            {/* <Gadgets></Gadgets> */}
        </>


    );
};

export default Banner;