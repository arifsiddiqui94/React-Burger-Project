import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    })
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious Burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: {props.price}</p>
            <button onClick={props.continue}>Continue</button>
            <button onClick={props.modalClosed}>Cancel</button>
        </Auxiliary>
    );
};

export default orderSummary;