import React from 'react';
import BuildControl from './BuildControl/BuildControl.js';

import styles from "./BuildControls.module.css";

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"}
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        {controls.map((ctrl, i) => <BuildControl key={ctrl.label} label={ctrl.label}/>)}
    </div>
)

export default buildControls;