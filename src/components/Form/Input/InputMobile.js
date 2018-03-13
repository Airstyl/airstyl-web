import React from 'react';
import TextField from 'material-ui/TextField';
import PasswordField from 'material-ui-password-field'

const inputMobile = (props) => {
    let inputElement = null;

    switch(props.elementType) {
        case ('text'):
        case ('number'):
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
        case ('password'):
            inputElement = (
                <PasswordField
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
        default:
            return null;
    }

    return (
        <div>
            {inputElement}
        </div>
    );
};

export default inputMobile;