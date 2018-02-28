import React from 'react';
import Calendar from 'react-calendar';
import Select from 'react-select';
import Location from 'react-place';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import FAQ from '../../FAQ/FAQ';
import 'react-select/dist/react-select.css';

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
                    padding: '0 25px',
                    display: 'block'
                }}>
                    <Calendar
                        style={{
                            margin: '0 auto',
                            display: 'block',
                        }}
                        onChange={props.valueChanged}
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
                        value={props.elementConfig.value}
                        noMatching='Sorry, I can not find {{value}}.'
                        onLocationSet={ props.changed}
                        inputProps={{ ...props.elementConfig }}
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