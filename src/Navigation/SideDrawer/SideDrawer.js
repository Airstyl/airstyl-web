import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../components/Logo/Logo';
import Avatar from '../../components/Image/Avatar/Avatar';
import afro from '../../assets/images/elliot.jpg'
import './SideDrawer.css';

const sideDrawer = (props) => {

    return (
        <div className={"drawer-container"}>
            <nav id="drawer">
                <div className="logo-container">
                    <Logo backgroundColor={'#127b7a'} />
                </div>
                <div className="avatar-container">
                    <Avatar image={afro}/>
                </div>
                <NavigationItems/>
            </nav>
        </div>
    );
};

export default sideDrawer;