import React, { useContext, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../cartItem/cartItem';
import { FaSortAmountDown } from "react-icons/fa";
import Swal from 'sweetalert2';


const Cart = () => {

    let navigate = useNavigate()
    const { cartProduct, setCartProduct } = useContext(ProductContext)


    const [mainProduct, setMainProduct] = useState(cartProduct)
    const [disabled, setDisabled] = useState(false)

    const handleSortByPrice = () => {
        const sortedProducts = [...mainProduct].sort((a, b) => b.price - a.price)
        setMainProduct(sortedProducts)
    }

    let totalPrice = 0;

    for (const product of mainProduct) {
        totalPrice += product.price
    }

    const handleRemoveFromCart = (id) => {
        const remainingItems = mainProduct.filter(product => product.product_id !== id)
        setMainProduct(remainingItems)
        setCartProduct(remainingItems)
    }

    const handlePurchase = () => {
        setMainProduct([])
        setCartProduct([])
        setDisabled(!disabled)

        Swal.fire({
            title: "Purchased Successfully",
            text: "You Bought Everything From Cart",
            icon: "success",

        }).then(() => {
            navigate('/')
        })


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
                        <button disabled={disabled} id='purchase-btn' onClick={handlePurchase} className='border-[#9538E2] 
                        border px-4 py-1 rounded-md text-[#9538E2] hover:bg-[#9538E2]
                         hover:text-white disabled:cursor-not-allowed 
                         disabled:bg-slate-600 disabled:text-black disabled:border-slate-600'
                        >Purchase</button>

                    </div>
                </div>

                {
                    mainProduct?.map(product => <CartItem key={product.product_id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></CartItem>)
                }
            </div>


        </div>
    );
};

export default Cart;