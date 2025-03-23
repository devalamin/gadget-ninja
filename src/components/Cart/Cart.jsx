import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';
import CartItem from '../cartItem/cartItem';

const Cart = () => {

    const { cartProduct } = useContext(ProductContext)
    console.log(cartProduct);

    // 
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
            <h3 className='text-2xl font-bold text-slate-600'>Your Cart</h3>
                {
                    cartProduct.map(product => <CartItem key={product.product_id}
                        product={product}
                    ></CartItem>)
                }
            </div>

        </div>
    );
};

export default Cart;