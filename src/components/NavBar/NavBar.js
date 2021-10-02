import React from 'react';
import {CartWidget} from './CartWidget';
import navLogo from '../../Assets/Images/nav-logo.png';

export const NavBar = () => {
    
    
    return (
        <header>
            <nav className="nav-menu">
                <img src={navLogo} alt="sample bucket logo" className="nav-logo"/>
                <p>Login</p>
                <p>Sing-Up</p>
                <CartWidget />
            </nav>        
        </header>
    )
}
