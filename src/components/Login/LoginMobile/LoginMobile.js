import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {FlatButton, RaisedButton} from "material-ui";

import MobileInput from '../../Form/Input/InputMobile';
import Logo from '../../Logo/Logo';
import './LoginMobile.css';

class LoginMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    inputChangedHandler = (event, inputId) => {
        console.log(event);
        const updatedLoginForm = {
            ...this.props.loginForm
        };

        const updatedFormElement = {
            ...updatedLoginForm[inputId]
        };

        updatedFormElement.elementConfigMobile.value = event.target.value;

        updatedFormElement.elementValidation.validationState = this.validateInput(updatedFormElement.elementValidation.rules, updatedFormElement.elementConfigMobile.value);

        updatedLoginForm[inputId] = updatedFormElement;
        this.props.updateLoginForm({...updatedLoginForm});
    };

    valueChangedHandler = (value, inputId) => {
        console.log(value);
        const updatedLoginForm = {
            ...this.props.loginForm
        };

        const updatedFormElement = {
            ...updatedLoginForm[inputId]
        };

        if (value === null || value.length === 0) {
            updatedFormElement.elementConfigMobile.value = '';
            updatedFormElement.elementValidation.validationState = null;
        }
        else {
            updatedFormElement.elementConfigMobile.value = value;
            updatedFormElement.elementValidation.validationState = 'success';
        }

        updatedLoginForm[inputId] = updatedFormElement;
        this.props.updateLoginForm({...updatedLoginForm});
    };

    textFieldChangedHandler = (event, value, inputId) => {
        console.log(value);
        const updatedLoginForm = {
            ...this.props.loginForm
        };

        const updatedFormElement = {
            ...updatedLoginForm[inputId]
        };

        updatedFormElement.elementConfigMobile.value = value;

        updatedFormElement.elementValidation.validationMessage = this.validateInput(updatedFormElement.elementValidation.rules, updatedFormElement.elementConfigMobile.value);

        updatedFormElement.elementValidation.validationState = this.valueIsValid(updatedFormElement);

        updatedLoginForm[inputId] = updatedFormElement;
        this.props.updateLoginForm({...updatedLoginForm});
    };

    valueIsValid = (updatedFormElement) => {
        if (updatedFormElement.elementConfigMobile.value.length === 0){
            return false;
        }
        else if (updatedFormElement.elementValidation.validationMessage !== null)
        {
            return false;
        }
        else if (updatedFormElement.elementValidation.validationMessage === null && updatedFormElement.elementConfigMobile.value.length > 0){
            return true
        }
    };

    formIsInvalid = () => {
        let invalid = false;
        for (let key in this.props.loginForm){
            if (!this.props.loginForm[key].elementValidation.validationState) {
                invalid = true;
            }
        }
        return invalid;
    };

    validateInput = (rules, value) => {
        if (!value) return null;
        if (rules.minLength){
            if (value.length < rules.minLength) return 'Must be at least ' + rules.minLength + ' characters long';
        }
        if (rules.email) return this.validateEmail(value);

        return null;
    };

    validateEmail = (value) => {
        if (!value.includes("@") || !value.includes("."))  {
            return 'Please enter a valid email address';
        }
        return null;
    };

    goToRegister = () => {
        this.props.history.replace("/register");
    };

    render() {
        const formElementsArray = [];

        for (let key in this.props.loginForm){
            formElementsArray.push({
                id: key,
                config: this.props.loginForm[key]
            });
        }

        let form = (
            <div>
                {formElementsArray.map(formElement => (
                    <MobileInput
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfigMobile}
                        elementOptions={formElement.config.elementOptions}
                        value={formElement.value}
                        textFieldChanged={(event, value) => this.textFieldChangedHandler(event, value, formElement.id)}
                        inputChanged={(event) => this.inputChangedHandler(event, formElement.id)}
                        valueChanged={(value) => this.valueChangedHandler(value, formElement.id)}
                        validationState={formElement.config.elementValidation.validationState}
                        validationMessage={formElement.config.elementValidation.validationMessage}
                    />
                ))}
            </div>
        );

        return (
            <div>
                <div className={"container"} >
                    <div className={"login-body-mobile"}>
                        <Logo id={"login-logo"}/>
                        <div className={"login-form-mobile"}>
                            {form}
                        </div>
                        <div id={"login-forgot-password-mobile"}>
                            <FlatButton
                                label="Forgot Password?"
                                labelStyle={{
                                    color: '#ffffff',
                                    fontSize: '10px',
                                    padding: '0'
                                }}
                            />
                        </div>
                        <div id={"login-submit-mobile"}>
                            <RaisedButton
                                backgroundColor={"#2abcbb"}
                                disabledBackgroundColor={"#2abcbb"}
                                label="LOGIN"
                                primary
                                fullWidth
                                disabled={this.formIsInvalid()}
                                style={{
                                    height: '36px',
                                    borderStyle: '5px'
                                }}
                                labelStyle={{
                                    margin: '7px 0',
                                    display: 'block'
                                }}
                            />
                        </div>
                        <div id={"login-social-buttons"}>
                            <RaisedButton
                                backgroundColor={"#2abcbb"}
                                className={"facebook"}
                                style={{borderRadius: '5px'}}
                                icon={<i style={{color: '#ffffff'}} className="fab fa-facebook-f fa-2x" />}
                            />
                            <RaisedButton
                                backgroundColor={"#2abcbb"}
                                className={"instagram"}
                                style={{borderRadius: '5px'}}
                                icon={<i style={{color: '#ffffff'}} className="fab fa-instagram fa-2x" />}
                            />
                        </div>
                        <div id={"login-create-account-mobile"}>
                            <FlatButton
                                onClick={this.goToRegister}
                                label="Create An Account"
                                labelStyle={{
                                    color: '#ffffff',
                                    fontSize: '12px',
                                    padding: '0',
                                    fontWeight: 'bold'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default withRouter(LoginMobile);