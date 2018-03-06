import React from 'react';
import {ClipLoader} from "react-spinners";

import './Spinner.css';

const spinner = (props) => {
    return (
        <div className='spinner'>
            <ClipLoader
                color={props.color}
                loading={props.loading}
            />
        </div>
    );
};

export default spinner;