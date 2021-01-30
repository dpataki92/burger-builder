import React, { Component } from 'react';
import styles from "./Modal.module.css";
import Aux from "../../../hoc/Auxiliary.js";
import Backdrop from "../Backdrop/Backdrop.js";

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show;
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={styles.Modal} style={{
                transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                opacity: this.props.show ? "1" : "0"}}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }

};

export default Modal;