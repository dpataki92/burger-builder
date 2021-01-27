import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger.js';

import Aux from "../../hoc/Auxiliary.js";

class BurgerBuilder extends Component {
    
    render() {
        return(
            <Aux>
                <Burger />
            </Aux>
        );
    }
}

export default BurgerBuilder;