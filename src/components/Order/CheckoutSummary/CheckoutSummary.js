import React from 'react';
import Burger from '../../Burger/Burger';
import './CheckoutSummary.css';

const checkoutSummary = (props) => (
    <div className="CheckoutSummary">
        <h1>Hope the burger tastes Well!</h1>
        <div style={{height:'300px', margin:'auto    '}}>
            <Burger ingredients={props.ingredients} />
        </div>
        <button onClick={props.checkoutContinued}>Continue</button>
        <button onClick={props.checkoutCancelled}>Cancel</button>
    </div>
);

export default checkoutSummary;