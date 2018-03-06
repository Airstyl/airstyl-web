import React, {Component} from 'react';
import {Row, Col, Modal, ButtonToolbar, Alert} from 'react-bootstrap';
import {FlatButton, RaisedButton} from 'material-ui';
import {withRouter} from 'react-router-dom';
import validator from 'validator';

import launchingSoon from '../../assets/images/register/launching_soon.png';
import findAndBook from '../../assets/images/register/find_and_book.png';
import Phones from '../../assets/images/register/phones.png';
import techNvest from '../../assets/images/register/technvst_mobile.png';
import gse from '../../assets/images/register/gse-logo.png';
import telkom from '../../assets/images/register/telkom.png';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Input from '../Form/Input/Input';
import Spinner from '../Spinner/Spinner';

import "./Register.css";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpType: 'email'
        };
    }

    componentDidMount() {
        // axios.get('/Cities')
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error))
    }

    inputChangedHandler = (event, inputId) => {
        const updatedRegisterForm = {
            ...this.props.registerForm
        };

        const updatedFormElement = {
            ...updatedRegisterForm[inputId]
        };

        updatedFormElement.elementConfig.value = event.target.value;

        updatedFormElement.elementValidation.validationState = this.validateInput(updatedFormElement.elementValidation.rules, updatedFormElement.elementConfig.value);

        if (updatedFormElement.elementValidation.validationState!== 'success' || updatedFormElement.elementValidation.validationState !== null) {
            updatedFormElement.elementValidation.validationMessage = this.getValidationMessage(updatedFormElement.elementValidation.rules, updatedFormElement.elementConfig.value);
        }

        updatedRegisterForm[inputId] = updatedFormElement;
        this.props.updateRegisterForm({...updatedRegisterForm});
    };

    valueChangedHandler = (value, inputId) => {
        console.log(value);
        const updatedRegisterForm = {
            ...this.props.registerForm
        };

        const updatedFormElement = {
            ...updatedRegisterForm[inputId]
        };

        if (value === null || value.length === 0) {
            updatedFormElement.elementConfig.value = '';
            updatedFormElement.elementValidation.validationState = null;
        }
        else {
            updatedFormElement.elementConfig.value = value;
            updatedFormElement.elementValidation.validationState = 'success';
        }

        updatedRegisterForm[inputId] = updatedFormElement;
        this.props.updateRegisterForm({...updatedRegisterForm});
    };

    formIsInvalid = () => {
        let invalid = false;
        for (let key in this.props.registerForm){
            if (this.props.registerForm[key].elementValidation.validationState !== 'success') {
                invalid = true;
            }
        }
        return invalid;
    };

    validateInput = (rules, value) => {
        if (value === null) return null;
        if (rules.minLength){
            if (value.length < rules.minLength) return 'warning';
        }
        if (rules.minWords) {
            for (let i=0; i < rules.minWords; i++) {
                if (!value.split(' ')[i]) {
                    return 'warning';
                }
            }
        }
        if (rules.email) return this.validateEmail(value);

        return 'success';
    };

    validateEmail = (value) => {
        if (validator.isEmail(value))  {
            return 'success';
        }
        return 'warning';
    };

    getValidationMessage= (rules, value) => {
        if (value === null) return '';
        if (rules.minLength){
            if (value.length < rules.minLength)
                return `Please enter ${rules.minLength} or more characters`;
        }
        if (rules.minWords) {
            for (let i=0; i < rules.minWords; i++) {
                if (!value.split(' ')[i])
                    return `Please enter ${rules.minWords} or more words`;
            }
        }
        if (rules.email)
            if (!validator.isEmail(value)) return "Please enter a valid email address";

        return '';
    };

    showFormModal = () => {
        this.props.updateShowFormModal(true);
    };

    hideFormModal = () => {
        this.props.updateShowFormModal(false);
    };

    showEmailConfirmationModal = () => {
        this.props.updateShowEmailConfirmationModal(true);
    };

    hideEmailConfirmationModal = () => {
        this.props.updateShowEmailConfirmationModal(false);
    };

    disableButton = () => {
        if (this.props.loading) return true;
        return this.formIsInvalid();
    };

    changeSignUpToEmail = () => {
        this.setState({
            signUpType: 'email'
        })
    };

    changeSignUpToSocialMedia = () => {
        this.setState({
            signUpType: 'social'
        })
    };

    registerClickHandler = (event) => {
        event.preventDefault();
        this.props.updateError({state: false, message: ''});

        const formData ={};
        for (let formElementId in this.props.registerForm) {
            formData[formElementId] = this.props.registerForm[formElementId].value;
        }

        const firstname = this.props.registerForm.fullname.elementConfig.value.split(' ')[0];
        const lastname = this.props.registerForm.fullname.elementConfig.value.split(' ')[1];
        const email = this.props.registerForm.mobileOrEmail.elementConfig.value;
        const password = this.props.registerForm.password.elementConfig.value;
        const username = this.props.registerForm.username.elementConfig.value;

        this.props.submitRegisterForm(firstname, lastname, email, password, username);
    };

    resetPage = () => {
        this.hideFormModal();
        this.hideEmailConfirmationModal();
        this.props.resetPage();
    };

    render() {
        const formElementsArray = [];

        for (let key in this.props.registerForm){
            formElementsArray.push({
                id: key,
                config: this.props.registerForm[key]
            });
        }

        let index = (
            <Row id={"register-index"} style={{paddingTop: '40px'}}>
                <Col lg={5} lgOffset={2} md={5} mdOffset={2}>
                    <Logo id={"logo"}/>
                    <img src={launchingSoon} style={{height: '50px', display: 'block'}}/>
                    <img src={findAndBook} style={{height: '25px', display: 'block'}}/>
                    <hr/>
                    <p>
                        Be the first to hear the news when our app drops!
                        Sign up now and get R50 off your first purchase when we launch.
                    </p>
                    <div id={"sign-up-container"}>
                        <ButtonToolbar>
                            <Button
                                onClick={this.showFormModal}
                                style={{
                                    backgroundColor: '#2abcbb',
                                    width: '180px',
                                    height: '100%',
                                    float: 'left',
                                    fontSize: '14px',
                                    marginRight: '15px',
                                    fontWeight: 'bold'
                                }}>
                                TO FIND A STYLIST <br/> SIGN UP
                            </Button>
                            <Button
                                onClick={this.showFormModal}
                                style={{
                                    backgroundColor: '#d8245e',
                                    width: '180px',
                                    height: '100%',
                                    float: 'right',
                                    fontSize: '14px',
                                    fontWeight: 'bold'
                                }}>
                                TO BE A STYLIST <br/> SIGN UP
                            </Button>
                        </ButtonToolbar>
                    </div>
                    <img id={"phones"} src={Phones} />
                </Col>
            </Row>
        );

        let form = (
            <div
                style={{
                    display: 'block',
                    margin: '0 auto 18px',
                    width: '100%'
                }}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        elementOptions={formElement.config.elementOptions}
                        value={formElement.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        valueChanged={(value) => this.valueChangedHandler(value, formElement.id)}
                        validationState={formElement.config.elementValidation.validationState}
                        validationMessage={formElement.config.elementValidation.validationMessage}
                    />
                ))}
            </div>
        );

        const errorAlert = (
            <Alert bsStyle="danger" style={{margin: '15px 0'}}>
                {this.props.error.message}
            </Alert>
        );

        const emailSignUp = (
            <div>
                {form}
                {this.props.loading ? <Spinner color={"#127b7a"}/> : null}
                {this.props.error.state ? errorAlert : null}
                <RaisedButton
                    onClick={this.registerClickHandler}
                    disabled={this.disableButton()}
                    backgroundColor={"#2abcbb"}
                    label="Join Now"
                    labelColor={"#ffffff"}
                    labelStyle={{textTransform: 'normal'}}
                    fullWidth
                    style={{marginBottom: '10px'}}
                />
            </div>
        );

        const socialMediaSignUp = (
            <div>
                <RaisedButton
                    backgroundColor={"#3B5998"}
                    fullWidth
                    label="Sign up using Facebook"
                    labelColor={"#ffffff"}
                    labelStyle={{textTransform: 'normal'}}
                    style={{marginBottom: '20px'}}
                    icon={<i style={{color: '#ffffff'}} className="fab fa-facebook-f fa-2x" />}
                />
                <RaisedButton
                    backgroundColor={"#1DA1F2"}
                    fullWidth
                    label="Sign up using Twitter"
                    labelColor={"#ffffff"}
                    labelStyle={{textTransform: 'normal'}}
                    style={{marginBottom: '20px'}}
                    icon={<i style={{color: '#ffffff'}} className="fab fa-twitter fa-2x" />}
                />
            </div>
        );

        const formModal = (
            <Modal id={"form-modal"} show={this.props.showFormModal} onHide={this.hideFormModal} backdrop={"static"}>
                <Modal.Header closeButton style={{backgroundColor: '#2abcbb'}}>
                    <Logo/>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Sign up to be the first in the line to get the app
                        and get R50 off your first purchase when we launch.
                    </p>
                    {this.state.signUpType === 'email' ? emailSignUp : socialMediaSignUp}
                </Modal.Body>
                <Modal.Footer>
                    {this.state.signUpType === 'email' ?
                        (<FlatButton
                            onClick={this.changeSignUpToSocialMedia}
                            fullWidth
                            label="Sign up with social media"
                            labelStyle={{textTransform: 'normal', fontSize: '13px'}}
                        />) :
                        (<FlatButton
                            onClick={this.changeSignUpToEmail}
                            fullWidth
                            label="Sign up with email"
                            labelStyle={{textTransform: 'normal', fontSize: '13px'}}
                        />)
                    }
                </Modal.Footer>
            </Modal>
        );

        const confirmationEmailModal = (
            <Modal id={"confirmation-email-modal"} show={this.props.showEmailConfirmationModal} onHide={this.resetPage} backdrop={"static"}>
                <Modal.Header closeButton style={{backgroundColor: '#2abcbb'}}>
                    <Logo/>
                </Modal.Header>
                <Modal.Body>
                    <h4>Thank you for registering!</h4>
                    <br />
                    <p>
                        A confirmation email has been sent to your registered email address for activation.
                        If you haven't received it yet, click the button below to resend the activation email.
                    </p>
                    <RaisedButton
                        backgroundColor={"#2abcbb"}
                        label="Resend activation email"
                        labelColor={"#ffffff"}
                        labelStyle={{textTransform: 'normal'}}
                        style={{marginTop: '20px'}}
                    />
                </Modal.Body>
            </Modal>
        );

        return (
            <div>
                {confirmationEmailModal}
                {formModal}
                {index}
                <div style={{height: '60px', width: '100%'}} />
                <div id={"footer"}>
                    <Row>
                        <Col lg={9} lgOffset={1} md={9} mdOffset={1}>
                            <img src={gse} />
                            <img src={techNvest} style={{height: '40px'}}/>
                            <img src={telkom} />
                        </Col>
                        <Col lg={2} md={2} >
                            <p>&copy; 2018 Airstyl, All Rights Reserved</p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);