import React from 'react';
import Aux from "../../hoc/Auxiliary.js";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar.js";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer.js";

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;