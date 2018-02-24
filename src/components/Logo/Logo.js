import React from 'react';
import LogoImage from '../../assets/images/logo.png';
import './Logo.css';

const logo = (props) => {
    return (
        <div
            className="logo"
            style={{ backgroundColor: props.backgroundColor }}>
            <img src={LogoImage} alt={"AIRSTYL"}/>
        </div>
    );
};

export default logo;