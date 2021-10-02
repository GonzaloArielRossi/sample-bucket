import React from 'react'
import ShoppingCart from '../../Assets/Images/shopping-cart.svg'

export const CartWidget = () => {
    
    return (
        <div>
            <img src={ShoppingCart} alt="shopping cart" className="shopping-cart"/>
        </div>


    )
}
