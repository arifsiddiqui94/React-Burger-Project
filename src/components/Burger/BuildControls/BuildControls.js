import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' }
];

const buildControls = (props) => (
    <div className="BuildControls">
        <p>Current Price: {props.price.toFixed(2)}</p>
        {controls.map(ctrl => {
            return <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                deleted={() => props.ingredientDeleted(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        })}
        <button className="OrderButton" disabled={!props.purchasable} onClick={props.showModal}>ORDER NOW</button>
    </div>
);

export default buildControls;