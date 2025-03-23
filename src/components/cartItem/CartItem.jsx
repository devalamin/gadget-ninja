import React from 'react';

const CartItem = ({ product }) => {

    const { product_title, product_image, description, price } = product
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <div className='mt-10'>
                    
                    <div className='flex p-4'>
                        <div className='h-30 w-40 p-3 rounded-md bg-slate-200'>
                            <img className='h-full w-full object-contain' src={product_image} alt="" />
                        </div>
                        <div className='ml-4'>
                            <h4 className='font-bold text-xl'>{product_title}</h4>
                            <p className='my-2 text-slate-500'><span className='font-bold text-black'>Description:</span>{description}</p>
                            <p><span className='font-bold'>Price: </span>{price} tk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;