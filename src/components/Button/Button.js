import React from 'react';
import './Button.css';

const button = (props) => {
    return (
        <div style={{height: '100%', display: 'inline-block'}}>
            <button className={"button"} {...props}>{props.children}</button>
        </div>
    );
};

export default button;