import React from 'react';
import styles from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItem/NavigationItem.js";

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
)

export default navigationItems;