import React from 'react';
import FontAwesome from 'react-fontawesome';
import './NavigationItem.css';

const icon = (props) => {
    return (
        <FontAwesome
            name={props.icon} />
        );
};

const navigationItem = (props) => {
    return (
        <li className="navigation-item">
            <FontAwesome icon={props.icon}/>
            <a href={props.link} className={props.active? 'active' : null}>{props.children}</a>
        </li>
    );
};

export default navigationItem;