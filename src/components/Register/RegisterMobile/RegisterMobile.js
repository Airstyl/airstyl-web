import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {withRouter} from 'react-router-dom';
import {CircularProgress, Dialog, FlatButton} from "material-ui";
import validator from 'validator';

import Logo from '../../Logo/Logo';
import MobileInput from '../../Form/Input/InputMobile';
import "./RegisterMobile.css";

class RegisterMobile extends Component {
    inputChangedHandler = (event, inputId) => {
        const updatedRegisterForm = {
            ...this.props.registerForm
        };

        const updatedFormElement = {
            ...updatedRegisterForm[inputId]
        };

        updatedFormElement.elementConfigMobile.value = event.target.value;

        updatedFormElement.elementValidation.validationState = this.validateInput(updatedFormElement.elementValidation.rules, updatedFormElement.elementConfigMobile.value);

        updatedRegisterForm[inputId] = updatedFormElement;
        this.props.updateRegisterForm({...updatedRegisterForm});
    };

    valueChangedHandler = (value, inputId) => {
        const updatedRegisterForm = {
            ...this.props.registerForm
        };

        const updatedFormElement = {
            ...updatedRegisterForm[inputId]
        };

        if (value === null || value.length === 0) {
            updatedFormElement.elementConfigMobile.value = '';
            updatedFormElement.elementValidation.validationState = null;
        }
        else {
            updatedFormElement.elementConfigMobile.value = value;
            updatedFormElement.elementValidation.validationState = 'success';
        }

        updatedRegisterForm[inputId] = updatedFormElement;
        this.props.updateRegisterForm({...updatedRegisterForm});
    };

    textFieldChangedHandler = (event, value, inputId) => {
        const updatedRegisterForm = {
            ...this.props.registerForm
        };

        const updatedFormElement = {
            ...updatedRegisterForm[inputId]
        };

        updatedFormElement.elementConfigMobile.value = value;

        updatedFormElement.elementValidation.validationMessage = this.validateInput(updatedFormElement.elementValidation.rules, updatedFormElement.elementConfigMobile.value);

        updatedFormElement.elementValidation.validationState = this.valueIsValid(updatedFormElement);

        updatedRegisterForm[inputId] = updatedFormElement;
        this.props.updateRegisterForm({...updatedRegisterForm});
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
        for (let key in this.props.registerForm){
            if (!this.props.registerForm[key].elementValidation.validationState) {
                invalid = true;
            }
        }
        return invalid;
    };

    validateInput = (rules, value) => {
        if (!value) return null;
        if (rules.minLength)
            if (value.length < rules.minLength.value) return rules.minLength.message;
        if (rules.minWords) {
            for (let i=0; i < rules.minWords.value; i++) {
                if (!value.split(' ')[i]) return rules.minWords.message;
            }
        }
        if (rules.email)
            if (!validator.isEmail(value))
                return 'Please enter a valid email';

        return null;
    };

    disableButton = () => {
        if (this.props.loading) return true;
        return this.formIsInvalid();
    };

    registerClickHandler = (event) => {
        event.preventDefault();
        this.props.updateError({state: false, message: ''});

        const formData ={};
        for (let formElementId in this.props.registerForm) {
            formData[formElementId] = this.props.registerForm[formElementId].value;
        }

        const firstname = this.props.registerForm.fullname.elementConfigMobile.value.split(' ')[0];
        const lastname = this.props.registerForm.fullname.elementConfigMobile.value.split(' ')[1];
        const email = this.props.registerForm.mobileOrEmail.elementConfigMobile.value;
        const password = this.props.registerForm.password.elementConfigMobile.value;
        const username = this.props.registerForm.username.elementConfigMobile.value;

        this.props.submitRegisterForm(firstname, lastname, email, password, username);
    };

    closeError = () => {
        this.props.updateError({state: false, message: ''});
    };

    closeEmailConfirmationModal = () => {
        this.props.updateShowEmailConfirmationModal(false);
        this.resetPage();
    };

    resetPage = () => {
        this.props.resetPage();
    };

    render() {
        const errorButton = [
            <FlatButton
                label="OK"
                primary={true}
                onClick={this.closeError}
            />,
        ];

        const emailConfirmationButtons = [
            <FlatButton
                label="OK"
                primary={true}
                onClick={this.closeEmailConfirmationModal}
            />,
        ];

        const formElementsArray = [];

        for (let key in this.props.registerForm){
            formElementsArray.push({
                id: key,
                config: this.props.registerForm[key]
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

        let error = (
            <Dialog
                title={"Registration Error"}
                modal={false}
                open={this.props.error.state}
                actions={errorButton}
            >
                {this.props.error.message}
            </Dialog>
        );

        let loading = (
            <Dialog
                modal={false}
                open={this.props.loading}
            >
                <CircularProgress style={{display: 'block', margin: 'auto'}}/>
            </Dialog>
        );

        let confirmationEmailModal = (
            <Dialog
                title={"Success!"}
                modal={true}
                open={this.props.showEmailConfirmationModal}
                actions={emailConfirmationButtons}
            >
                A confirmation email has been sent to your registered email address for activation.
            </Dialog>
        );

        return (
            <div>
                {confirmationEmailModal}
                {loading}
                {error}
                <div className={"container"} >
                    <div className={"register-body-mobile"}>
                        <Logo id={"register-logo"}/>
                        <div className={"register-form-mobile"}>
                            {form}
                        </div>
                        <div id={"register-submit-mobile"}>
                            <RaisedButton
                                backgroundColor={"#2abcbb"}
                                disabledBackgroundColor={"#2abcbb"}
                                label="JOIN NOW"
                                primary
                                fullWidth
                                disabled={this.disableButton()}
                                style={{
                                    height: '36px',
                                    borderStyle: '5px'
                                }}
                                labelStyle={{
                                    margin: '7px 0',
                                    display: 'block'
                                }}
                                onClick={this.registerClickHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default withRouter(RegisterMobile);