import React from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';

export const CartWidget = () => {
    
    // Placeholder de variable para el futuro
    let itemsInCart = 0;

    return (
        <div className= "shopping-cart-combo">
            <HiOutlineShoppingCart alt="shopping cart" className="shopping-cart" />
            <p className= "items-in-cart">{itemsInCart}</p>              
        </div>


    )
}
