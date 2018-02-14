import React from 'react';
import './Label.css';
import '../../../common/common.css';

const label = (props) => {
    return (
        <label className={props.className} {...props}>
            {props.labelText} <span className="asterisk"
                              style={{visibility: props.showAsterisk ? 'visible' : 'hidden'}}>
                         *</span>
        </label>
    );
};

export default label;