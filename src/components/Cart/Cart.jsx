import React, { useContext, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';
import CartItem from '../cartItem/cartItem';
import { FaSortAmountDown } from "react-icons/fa";


const Cart = () => {

    const { cartProduct } = useContext(ProductContext)
    console.log(cartProduct);

    const [mainProduct, setMainProduct] = useState(cartProduct)
    const handleSortByPrice = () => {
        const sortedProducts = [...cartProduct].sort((a, b) => b.price - a.price)
        setMainProduct(sortedProducts)
    }

    let totalPrice = 0;

    for (const product of cartProduct) {
        // console.log(product.price);
        totalPrice += product.price
    }



    return (
        <div>

            <div className='bg-[#9538E2] py-10 text-center text-white'>
                <div>
                    <h4 className='text-4xl font-bold mb-5'>Dashboard</h4>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to
                        <br /> the coolest accessories, we have it all!</p>
                </div>
                <div className='space-x-3 mt-5'>
                    <Link className='border border-white px-10 py-2 rounded-2xl'>Cart</Link>
                    <Link className='border border-white px-8 py-2 rounded-2xl'>Wishlist</Link>
                </div>
            </div>
            <div>
                <div className='w-10/12 flex justify-between mx-auto mt-4'>
                    <h3 className='text-2xl font-bold text-slate-600'>Your Cart</h3>
                    <div className='flex space-x-4 items-center'>
                        <span className='font-bold text-xl text-slate-600'>Total Cost: ${totalPrice}</span>
                        <div className='border-[#9538E2] border px-4 py-1 rounded-md text-[#9538E2] hover:bg-[#9538E2] hover:text-white flex items-center space-x-2'>
                            <button onClick={handleSortByPrice} className=''>Sort By Price </button>
                            <FaSortAmountDown />
                        </div>
                        <button className='border-[#9538E2] border px-4 py-1 rounded-md text-[#9538E2] hover:bg-[#9538E2] hover:text-white'>Purchase</button>

                    </div>
                </div>

                {
                    mainProduct?.map(product => <CartItem key={product.product_id}
                        product={product}
                    ></CartItem>)
                }
            </div>

        </div>
    );
};

export default Cart;