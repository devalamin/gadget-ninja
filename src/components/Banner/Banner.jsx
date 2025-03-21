import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#9538E2] pt-10'>
            <div className='w-11/12 mx-auto text-white text-center'>
                <h5 className='md:w-2/4 mx-auto text-3xl font-bold'>
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h5>
                <p className='md:w-3/5 mx-auto md:my-8 my-3'>
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div>
                    <button className='bg-white text-[#9538E2] rounded-xl md:px-7 px-3 py-1 md:py-2'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;