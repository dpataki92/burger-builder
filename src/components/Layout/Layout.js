import React, { Component } from 'react';
import Aux from "../../hoc/Auxiliary.js";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar.js";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer.js";

class Layout extends Component {
    
    state = {
        showSideDrawer: false
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    drawerToggleClickedHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.drawerToggleClickedHandler}/>
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