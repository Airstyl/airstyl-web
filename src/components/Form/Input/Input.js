import React from 'react';
import FormLabel from '../Label/Label';
import '../../../css/bootstrap.min.css';
import '../../../common/common.css';

const input = (props) => {
    let elementType = null;

    switch (props.inputType)
    {
        case ('input'):
            elementType = <input className="form-control form-input" {...props} />;
            break;
        case ('textarea'):
            elementType = <textarea className="form-control large-form-inputS" {...props} />;
            break;
        default:
            elementType = <input className="form-control form-input" {...props} />;
            break;
    }
    return (
        <div>
            {elementType}
        </div>
    );
};

export default input;