import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return (
        <ul className="navigation-items">
            <NavigationItem link="/" active>DASHBOARD</NavigationItem>
            <NavigationItem link="/" icon="rocket">Profile</NavigationItem>
            <NavigationItem link="/">Message</NavigationItem>
            <NavigationItem link="/">Services</NavigationItem>
            <NavigationItem link="/">Appointments</NavigationItem>
            <NavigationItem link="/">App Feedback</NavigationItem>
            <NavigationItem link="/" style={{marginTop: '45px'}}>Settings</NavigationItem>
            <NavigationItem link="/">Log out</NavigationItem>
        </ul>
    );
};

export default navigationItems;