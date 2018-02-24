import React from 'react';
import Responsive from 'react-responsive';

const minWidthTablet = (props) => {
    return (
        <Responsive {...props} minWidth={768} />
    );
};

export default minWidthTablet;