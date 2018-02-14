import React from 'react';
import {Button} from 'react-bootstrap';

const button = (props) => {
    return (
        <div>
            <Button {...props}>{props.text}</Button>
        </div>
    );
};

export default button;