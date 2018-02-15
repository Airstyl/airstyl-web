import React from 'react';
import Responsive from 'react-responsive';

const Tablet = (props) => {
    return (
        <Responsive {...props} minWidth={768} maxWidth={991} />
    );
};

export default Tablet;