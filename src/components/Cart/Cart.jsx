import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';

const Cart = () => {

    const { product } = useContext(ProductContext)
    console.log(product);

    return (
        <div>
            <h4>Cart is here</h4>
        </div>
    );
};

export default Cart;