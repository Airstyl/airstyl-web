import React from 'react';
import MinWidthTablet from '../../components/Responsive/MinWidthTablet';
import Mobile from '../../components/Responsive/Mobile';
import Login from '../../components/Login/Login';
import LoginMobile from '../../components/Login/LoginMobile/LoginMobile';

const loginContainer = (props) => {
    return (
        <div>
            <MinWidthTablet>
                <Login/>
            </MinWidthTablet>
            <Mobile>
                <LoginMobile/>
            </Mobile>
        </div>
    );
};

export default loginContainer;