import React from 'react';
import Desktop from '../Responsive/Desktop';
import Mobile from '../Responsive/Mobile';
import Login from './Login';
import LoginMobile from './LoginMobile/LoginMobile';

const loginContainer = (props) => {
    return (
        <div>
            <Desktop>
                <Login/>
            </Desktop>
            <Mobile>
                <LoginMobile/>
            </Mobile>
        </div>
    );
};

export default loginContainer;