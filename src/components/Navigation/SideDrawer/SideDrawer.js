import React from 'react';
import Logo from "../../Logo/Logo.js";
import NavigationItems from "../NavigationItems/NavigationItems.js";
import styles from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop.js";
import Aux from "../../../hoc/Auxiliary.js";

const sideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];

    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(" ")}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}
 
export default sideDrawer;