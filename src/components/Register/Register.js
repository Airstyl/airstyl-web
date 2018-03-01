import React, {Component} from 'react';
import {Row, Col, Button, Modal} from 'react-bootstrap';
import {FontIcon, RaisedButton} from 'material-ui';

import Phones from '../../assets/images/register/phones.png';
import techNvest from '../../assets/images/register/technvst.png';
import gse from '../../assets/images/register/gse-logo.png';
import telkom from '../../assets/images/register/telkom.png';
import Logo from '../Logo/Logo';
import Input from '../Form/Input/Input';


import "./Register.css";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            loading: false
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

    formIsValid = () => {
        for (let key in this.props.registerForm){
            if (this.props.registerForm[key].elementValidation.validationState !== 'success') {
                return false;
            }
        }
        return true;
    };

    validateInput = (rules, value) => {
        if (value === null) return null;
        if (rules.minLength){
            if (value.length < rules.minLength) return 'warning';
        }
        if (rules.email) return this.validateEmail(value);

        return 'success';
    };

    validateEmail = (value) => {
        if (!value.includes("@"))  {
            return 'error';
        }
        if (!value.includes(".")) {
            return 'error';
        }
        return 'success';
    };

    registerClickHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

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

    modalClosedHandler = () => {
        this.setState({
            showModal: false
        });
    };

    signUpClickHandler = () => {
        this.setState({
            showModal: true
        });
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
            <Row className={"register-index"} style={{paddingTop: '40px'}}>
                <Col lg={3} lgOffset={2} md={3} mdOffset={2}>
                    <Logo id={"logo"}/>
                    <h3>We're launching soon</h3>
                    <h5>Find and book quality stylists.</h5>
                    <hr/>
                    <p>
                        Be the first to hear the news when our app drops!
                        Sign up now and get R50 off your first purchase when we launch.
                    </p>
                    <div className={"sign-up-container"}>
                        <RaisedButton
                            id={"sign-up"}
                            buttonStyle={{paddingTop: '12px'}}
                            style={{width: '200px', height: '50px'}}
                            label="Sign up"
                            secondary={true}
                            onClick={this.signUpClickHandler}
                        />
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
                        value={formElement.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        valueChanged={(value) => this.valueChangedHandler(value, formElement.id)}
                        validationState={formElement.config.elementValidation.validationState}
                        validationMessage={formElement.config.elementValidation.validationMessage}
                    />
                ))}
            </div>
        );

        const formModal = (
                <Modal show={this.state.showModal} onHide={this.modalClosedHandler} backdrop={"static"}>
                    <Modal.Header closeButton />
                    <Modal.Body>
                        <div>
                            <p>
                                Sign up to be the first in the line to get the app
                                and get R50 off your first purchase when we launch.
                            </p>
                            {form}
                            <Button block onClick={this.registerClickHandler}>SIGN UP</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div>
                            <p style={{textAlign: 'center'}}>OR</p>
                            <RaisedButton
                                // href="https://github.com/callemall/material-ui"
                                backgroundColor={"#3B5998"}
                                fullWidth
                                target="_blank"
                                label="Login with Facebook"
                                style={{marginBottom: '10px', color: '#ffffff'}}
                                icon={<i style={{color: '#ffffff'}} className="fab fa-facebook-f fa-2x" />}
                            />
                            <p style={{textAlign: 'center'}}>OR</p>
                            <RaisedButton
                                // href="https://github.com/callemall/material-ui"
                                backgroundColor={"#1DA1F2"}
                                fullWidth
                                target="_blank"
                                label="Login with Twitter"
                                style={{marginBottom: '10px', color: '#ffffff'}}
                                icon={<i style={{color: '#ffffff'}} className="fab fa-twitter fa-2x" />}
                            />
                        </div>
                    </Modal.Footer>
                </Modal>
        );

        return (
            <div>
                {formModal}
                {this.state.showForm ? form : index}
                <div id={"footer"}>
                    <Row>
                        <Col lg={2} lgOffset={2} md={2} mdOffset={2}>
                            <p>&copy; 2018 Airstyl, All Rights Reserved</p>
                        </Col>
                        <Col lg={8} md={8}>
                            <img src={gse} />
                            <img src={techNvest} />
                            <img src={telkom} />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Register;