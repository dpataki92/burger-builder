import React, { Component } from 'react';
import Aux from "../../hoc/Auxiliary.js";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar.js";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer.js";

class Layout extends Component {
    
    state = {
        showSideDrawer: true
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    render() {
        return(
            <Aux>
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <div>
                    Toolbar, SideDrawer, Backdrop
                </div>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default Layout;