import React from 'react';
import Calendar from 'react-calendar';
import Select from 'react-select';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import 'react-select/dist/react-select.css';
import '../../../css/bootstrap.min.css';
import '../../../common/common.css';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('text'):
        case ('number'):
        case ('password'):
        case ('email'):
            inputElement = (
                <FormGroup
                    controlId={props.id}
                    validationState={props.validationState}
                >
                    <ControlLabel>Validation Label</ControlLabel>
                    <FormControl
                        type={props.elementType}
                        value={props.value}
                        onChange={props.changed}
                        {...props.elementConfig}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>
            );
            break;
        case ('textarea'):
            inputElement = (
                <FormGroup controlId={props.id}>
                    <ControlLabel>Textarea</ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}/>
                </FormGroup>
            );
            break;
        case ('date'):
            inputElement = (
                <Calendar />
            );
            break;
        case ('dropdown'):
            inputElement = (
                <Select
                    value={props.elementConfig.value}
                    {...props.elementConfig}
                    {...props.elementOptions}
                />
            );
            break;
    }
    return (
        <div>
            {inputElement}
        </div>
    );
};

export default input;