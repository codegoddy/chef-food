import React from 'react';


import logo from '../../assets/logo.png';

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <ul className="nav-links">
                <li><a href='#' className='active'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>Restaurants</a></li>
                <li><a href='#'>Dishes</a></li>
            </ul>

            <div className="nav-buttons">
                <i className='ri-shopping-cart-2-line'></i>
            </div>



        </nav>
    );
};

export default Nav;
