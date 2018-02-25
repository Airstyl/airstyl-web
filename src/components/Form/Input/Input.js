import React from 'react';
import Calendar from 'react-calendar';
import Select from 'react-select';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import FAQ from '../../FAQ/FAQ';
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
                    <ControlLabel>{props.controlLabel}</ControlLabel>
                    <FormControl
                        type={props.elementType}
                        value={props.value}
                        onChange={props.changed}
                        {...props.elementConfig}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>{props.validationMessage}</HelpBlock>
                </FormGroup>
            );
            break;
        case ('textarea'):
            inputElement = (
                <FormGroup controlId={props.id}>
                    <ControlLabel>{props.elementConfig.controlLabel}</ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>{props.elementConfig.validationMessage}</HelpBlock>
                </FormGroup>
            );
            break;
        case ('faq'):
            inputElement =(
                <div>
                    {props.elementConfig.questions.map(question => (
                        <FAQ
                            mode={"input"}
                            heading={question.heading}
                            question={question.question}
                        />
                    ))}
                </div>
            );
            break;
        case ('date'):
            inputElement = (
                <Calendar DateTimeFormat={"dd-MM-YYYY"}/>
            );
            break;
        case ('dropdown'):
            inputElement = (
                <Select
                    value={props.elementConfig.value}
                    options={props.elementConfig.options}
                    onChange={props.dropdownChanged}
                    {...props.elementConfig}
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