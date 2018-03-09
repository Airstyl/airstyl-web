import React from 'react';
import {withRouter} from 'react-router-dom';

import Logo from "../Logo/Logo";

import Phones from '../../assets/images/register/phones.png';

import './ComingSoon.css';

const comingSoon = (props) => {
    return (
        <div id={"coming-soon"}>
            <Logo id={"logo"}/>
            <h2>Welcome to Airstyl</h2>
            <h3>where beauty is simplified</h3>
            <hr />
            <h4>We're launching soon.</h4>
            <h4>Find and book a stylist.</h4>
            <img id={"phones"} src={Phones} />
            <p>&copy; 2018 Airstyl, All Rights Reserved</p>
        </div>
    );
};

export default withRouter(comingSoon);