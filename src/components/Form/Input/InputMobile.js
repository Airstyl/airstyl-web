import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

const inputMobile = (props) => {
    let inputElement = null;

    switch(props.elementType) {
        case ('text'):
        case ('number'):
        case ('password'):
        case ('email'):
            inputElement = (
                <TextField
                    type={props.elementType}
                    value={props.value}
                    errorText={props.validationMessage}
                    fullWidth={true}
                    onChange={props.textFieldChanged}
                    {...props.elementConfig}
                    floatingLabelFocusStyle={{
                        color: props.themeColor
                    }}
                    underlineFocusStyle={{
                        borderColor: props.themeColor
                    }}
                />
            );
            break;
        case ('date'):
            inputElement = (
                <DatePicker
                    fullWidth={true}
                    textFieldStyle={{
                        fontSize: '14px',
                        fontWeight: '300',
                        fontStyle: 'normal',
                        height: '72px'
                    }}
                    value={props.value}
                    onChange={props.changed}
                    {...props.elementConfig}
                />
            );
            break;
        case ('dropdown'):
            inputElement = (
                <select
                    onChange={props.changed}
                    {...props.elementConfig}>

                </select>
            );
            break;
    }

    return (
        <div>
            {inputElement}
        </div>
    );
};

export default inputMobile;