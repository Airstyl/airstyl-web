import React from 'react';
import Responsive from 'react-responsive';

const Desktop = (props) => {
    return (
        <Responsive {...props} minWidth={992} />
    );
};

export default Desktop;