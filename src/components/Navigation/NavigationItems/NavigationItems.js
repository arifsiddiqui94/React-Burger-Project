import React from 'react';
import './NavigationItems.css';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <li> <a href="/">Burger Builder</a> </li>
        <li> <a href="/checkout">Checkout</a> </li>
    </ul>
);

export default navigationItems;