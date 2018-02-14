import React from 'react';
import {DropdownButton} from 'react-bootstrap';

const dropdown = (props) => {
    return (
        <DropdownButton
            bsStyle={"default"}
            style={{display: 'block'}}
            title={props.title}
            {...props}
        >
            {props.children}
        </DropdownButton>
    );
};

export default dropdown;