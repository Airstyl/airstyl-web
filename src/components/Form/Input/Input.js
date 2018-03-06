import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import Select from 'react-select';
import Location from 'react-place';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import FAQ from '../../FAQ/FAQ';
import 'react-select/dist/react-select.css';

import './Input.css';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('text'):
        case ('number'):
        case ('password'):
        case ('email'):
            inputElement = (
                <FormGroup
                    controlId={props.key}
                    validationState={props.validationState}

                >
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
                <FormGroup controlId={props.key}>
                    <FormControl
                        componentClass="textarea"
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}
                    />
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
                <div
                style={{
                    margin: '0 auto 20px',
                }}>
                    <DatePicker
                        onChange={(event) => console.log(event)}
                        floatingLabelText={props.elementConfig.floatingLabelText}
                    />
                </div>

            );
            break;
        case ('dropdown'):
            inputElement = (
                <div
                style={{
                    margin: '0 0 20px'
                }}>
                    <Select
                        value={props.elementConfig.value}
                        options={props.elementConfig.options}
                        onChange={props.valueChanged}
                        {...props.elementConfig}
                    />
                </div>

            );
            break;
        case ('location'):
            inputElement = (
                <div>
                    <Location
                        country='ZA'
                        noMatching='Sorry, I can not find {{value}}.'
                        onLocationSet={props.valueChanged}
                        inputProps={{...props.elementConfig.config}}
                    />
                </div>
            );
    }
    return (
        <div>
            {inputElement}
        </div>
    );
};

export default input;