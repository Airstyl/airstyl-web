import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import Select from 'react-select';
import Location from 'react-place';
import {
    FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Col, InputGroup, Button,
    Glyphicon
} from 'react-bootstrap';
import FAQ from '../../FAQ/FAQ';
import 'react-select/dist/react-select.css';

import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false
        }
    }

    changeShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    };

    render() {
        let inputElement = null;

        switch (this.props.elementType) {
            case ('text'):
            case ('number'):
            case ('email'):
                inputElement = (
                    <FormGroup
                        controlId={this.props.key}
                        validationState={this.props.validationState} >
                        <FormControl
                            type={this.props.elementType}
                            value={this.props.value}
                            onChange={this.props.changed}
                            {...this.props.elementConfig} />
                        <FormControl.Feedback />
                        <HelpBlock>{this.props.validationMessage}</HelpBlock>
                    </FormGroup>
                );
                break;
            case ('password'):
                inputElement = (
                    <FormGroup
                        controlId={this.props.key}
                        validationState={this.props.validationState} >
                        <InputGroup style={{display: 'table'}}>
                            <FormControl
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.props.value}
                                onChange={this.props.changed}
                                {...this.props.elementConfig}/>
                            <InputGroup.Button style={{display: 'table-cell'}}>
                                <Button onClick={this.changeShowPassword}>
                                    <Glyphicon glyph={this.state.showPassword ? "eye-open" : 'eye-close'} />
                                </Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                );
                break;
            case ('textarea'):
                inputElement = (
                    <FormGroup controlId={this.props.key}>
                        <FormControl
                            componentClass="textarea"
                            {...this.props.elementConfig}
                            value={this.props.value}
                            onChange={this.props.changed}
                        />
                    </FormGroup>
                );
                break;
            case ('faq'):
                inputElement =(
                    <div>
                        {this.props.elementConfig.questions.map(question => (
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
                            floatingLabelText={this.props.elementConfig.floatingLabelText}
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
                            value={this.props.elementConfig.value}
                            options={this.props.elementConfig.options}
                            onChange={this.props.valueChanged}
                            {...this.props.elementConfig}
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
                            onLocationSet={this.props.valueChanged}
                            inputProps={{...this.props.elementConfig.config}}
                        />
                    </div>
                );
                break;
        }
        return (
            <div>
                {inputElement}
            </div>
        );
    }
}

export default Input;