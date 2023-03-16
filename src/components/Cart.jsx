import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector((state)=>state.cart)
    console.log(cart)
    return (
        <>
        <span className="flex flex-row">
            <AiOutlineShoppingCart className="text-2xl text-neutral-100"/>
            <p>{cart.nbOfArticles}</p>
        </span>
        </>
    );
};

export default Cart;