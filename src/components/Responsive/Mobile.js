import React from 'react';
import Responsive from 'react-responsive';

const Mobile = (props) => {
    return (
        <Responsive {...props} maxWidth={767} />
    );
};

export default Mobile;