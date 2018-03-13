import React, {Component} from 'react';
import {
    FormGroup, FormControl, HelpBlock, InputGroup, Button,
    Glyphicon
} from 'react-bootstrap';
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
            default:
                return null;
        }
        return (
            <div>
                {inputElement}
            </div>
        );
    }
}

export default Input;