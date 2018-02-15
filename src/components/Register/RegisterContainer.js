import React from 'react';
import Desktop from '../../components/Responsive/Desktop';
import Tablet from '../../components/Responsive/Tablet';
import Mobile from '../../components/Responsive/Mobile';
import Register from '../../components/Register/Register';
import RegisterMobile from '../../components/Register/RegisterMobile/RegisterMobile';

const registerContainer = (props) => {
    return (
        <div>
            <Desktop>
                <Register/>
            </Desktop>
            <Tablet>
                <Register/>
            </Tablet>
            <Mobile>
                <RegisterMobile/>
            </Mobile>
        </div>
    );
};

export default registerContainer;