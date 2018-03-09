import React from 'react';
import {withRouter} from 'react-router-dom';

import Logo from "../../Logo/Logo";

import './ComingSoonMobile.css';

const comingSoon = (props) => {
    return (
        <div id={"coming-soon-mobile"}>
            <Logo id={"logo"}/>
            <h4>
                We're<br/>
                launching<br/>
                <span style={{color: '#2abcbb'}}>soon</span>
            </h4>
            <p>&copy; 2018 Airstyl, All Rights Reserved</p>
        </div>
    );
};

export default withRouter(comingSoon);