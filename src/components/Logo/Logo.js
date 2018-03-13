import React from 'react';
import Desktop from '../Responsive/Desktop';
import Tablet from '../Responsive/Tablet';
import Mobile from '../Responsive/Mobile';

import DesktopLogo from '../../assets/images/logo.png';
import TabletLogo from '../../assets/images/logo_tablet.png';
import './Logo.css';

const logo = (props) => {
    return (
        <div
            className="logo"
            {...props}
            style={{ backgroundColor: props.backgroundColor }}>
            <Desktop>
                <img src={DesktopLogo} alt={"AIRSTYL"} {...props.imageProps}/>
            </Desktop>
            <Tablet>
                <img src={TabletLogo} alt={"AIRSTYL"} {...props.imageProps}/>
            </Tablet>
            <Mobile>
                <img src={DesktopLogo} alt={"AIRSTYL"} {...props.imageProps}/>
            </Mobile>
        </div>
    );
};

export default logo;