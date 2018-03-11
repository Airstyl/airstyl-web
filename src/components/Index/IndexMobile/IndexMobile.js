import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from "react-bootstrap";

import Logo from "../../Logo/Logo";

import './IndexMobile.css';

class IndexMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    openConsumerRegister = () => {
        this.props.history.push("/register");
    };

    render() {
        return (
            <div id={"index-mobile"}>
                <Logo id={"logo"}/>
                <div id={"buttons"}>
                    <Button className={"consumer"} block onClick={this.openConsumerRegister}>
                        TO FIND A STYLIST <br/> SIGN UP
                    </Button>
                    <Button className={"stylist"} block>
                        TO BE A STYLIST <br/> SIGN UP
                    </Button>
                </div>
            </div>
        )
    };
}

export default withRouter(IndexMobile);