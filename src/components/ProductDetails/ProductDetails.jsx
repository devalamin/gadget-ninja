import React, { useContext } from 'react';
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa6';
import Rating from 'react-rating';
import { useLoaderData, useParams } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';
import { Bounce, toast } from 'react-toastify';
// var Rating = require('react-rating');
const ProductDetails = () => {
    const { id } = useParams()

    const allGadgets = useLoaderData()

    const product = allGadgets.find(gadget => gadget.product_id === id)

    const { rating, product_title, product_image, price, description, specification } = product;

    const { cartProduct, setCartProduct } = useContext(ProductContext)


    const handleSetProductToContext = (product) => {
        for (const singleProduct of cartProduct) {
            if (singleProduct.product_id === product.product_id) {
                toast.error('This product is already added to the cart', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                return;
            }
        }

        setCartProduct([...cartProduct, product])

        toast.success(`${product_title} Successfully Added To The Cart`, {
            position: "top-center",
            autoClose: 1000,
        })
    }
    console.log(cartProduct);

    return (

        <div className='bg-[#9538E2] pb-40 relative mb-96'>
            <div className=' w-11/12 mx-auto'>
                <div className='text-center text-white '>
                    <h1 className='text-4xl font-bold'>Product Details</h1>
                    <p className='my-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to
                        <br /> the coolest accessories, we have it all!</p>
                </div>

            </div>
            <div className='absolute left-2/12 w-6xl flex items-stretch bg-white p-5 rounded-xl'>
                <div className=' w-[254px]  px-4 rounded-md bg-slate-100 '>
                    <img className='h-full w-full object-contain' src={product_image} alt="" />
                </div>
                <div className='p-5 grow rounded-md bg-slate-100'>
                    <h3 className='text-2xl font-bold'>{product_title}</h3>
                    <p className='my-2 font-bold'>Price: ${price}</p>
                    <span className='rounded-xl bg-green-200 text-green-900 px-3 py-1 border border-green-500'>In Stock</span>
                    <p className='text-slate-600 mt-2'>{description}</p>

                    <div className='font-bold my-2'>Specification:</div>
                    <div className='mb-2'>
                        {
                            specification?.map((speci, idx) => <p key={idx} className='text-slate-600'>{idx + 1}.{speci}</p>)
                        }
                    </div>
                    <div className='font-bold mb-1'>
                        Rating
                    </div>
                    <Rating className='text-yellow-500'
                        initialRating={rating}
                        readonly
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar />}


                    ></Rating>
                    <span className='px-2 py-1 ml-2 bg-slate-200'>{rating}</span>
                    <div className='flex items-center space-x-4 mt-4'>
                        <button onClick={() => handleSetProductToContext(product)} className='btn bg-green-500 text-white'>Add To Cart</button>
                        <div className="tooltip">
                            <div className="tooltip-content bg-slate-200">
                                <div className="animate-bounce text-green-700 font-black">Add To Wishlist</div>
                            </div>
                            <button className="btn">
                                <FaHeart
                                    className='text-3xl text-green-500'></FaHeart>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default ProductDetails;