import React from 'react';
import BuildControl from './BuildControl/BuildControl.js';
import PropTypes from "prop-types";
import styles from "./BuildControls.module.css";

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"}
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>

        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>

        {controls.map((ctrl, i) => <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
        />)}  

        <button className={styles.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
    </div>
);

buildControls.propTypes = {
    disabled: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    purchasable: PropTypes.bool.isRequired
}

export default buildControls;