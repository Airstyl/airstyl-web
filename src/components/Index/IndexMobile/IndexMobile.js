import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from "react-bootstrap";

import Logo from "../../Logo/Logo";
import launchingSoon from '../../../assets/images/register/launching_soon.png';
import findAndBook from '../../../assets/images/register/find_and_book.png';

import './IndexMobile.css';

class IndexMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    openConsumerRegister = () => {
        this.props.registerAsConsumer();
        this.props.history.push("/register");
    };

    openStylistRegister = () => {
        this.props.registerAsStylist();
        this.props.history.push("/register");
    };

    render() {
        return (
            <div id={"index-mobile"}>
                <Logo id={"logo"}/>
                <br />
                <img src={launchingSoon} alt={"We're launching soon"} style={{width: '90%', display: 'block', margin: '25px auto'}}/>
                <img src={findAndBook} alt={"Find and book a stylist"} style={{width: '80%', display: 'block', margin: 'auto'}}/>
                <div id={"buttons"}>
                    <Button className={"consumer"} block onClick={this.openConsumerRegister}>
                        TO FIND A STYLIST <br/> SIGN UP
                    </Button>
                    <Button className={"stylist"} block onClick={this.openStylistRegister}>
                        TO BE A STYLIST <br/> SIGN UP
                    </Button>
                </div>
            </div>
        )
    };
}

export default withRouter(IndexMobile);