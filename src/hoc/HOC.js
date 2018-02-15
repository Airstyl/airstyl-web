import React from 'react';

const HOC = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default HOC;