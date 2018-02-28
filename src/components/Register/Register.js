import React, {Component} from 'react';
import {Row, Col, Button, Modal} from 'react-bootstrap';
import {RaisedButton} from 'material-ui';

import Phones from '../../assets/images/register/phones.png';
import techNvest from '../../assets/images/register/technvst.png';
import gse from '../../assets/images/register/gse-logo.png';
import telkom from '../../assets/images/register/telkom.png';
import Logo from '../Logo/Logo';
import Input from '../Form/Input/Input';
import Backdrop from "../../UI/Backdrop/Backdrop";


import "./Register.css";
import axios from '../../axios-register';
import afro from '../../assets/images/elliot.jpg';
import Desktop from "../Responsive/Desktop";

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

    registerHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

        const formData ={};
        for (let formElementId in this.props.registerForm) {
            formData[formElementId] = this.props.registerForm[formElementId].value;
        }

        const registerData = {
            user: {
                ACC_STATUS: 'Active',
                email : 'xolani@airstyl.com',
                firstname: 'Xolani',
                password : 'abc123',
                username: 'XK'
            }
        };

        axios.post('/users/register', registerData.user)
            .then(response => console.log(response))
            .catch(error => console.log(error))
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
                <Col lg={4} lgOffset={2} md={4} mdOffset={2}>
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
                            style={{
                                marginAbove: '20px'
                            }}
                            buttonStyle={{
                                width: '200px',
                                height: '50px',
                                paddingBelow: '20px',
                                paddingAbove: '20px',
                            }}
                            labelStyle={{
                                margin: 'auto',
                                display: 'block',
                                fontSize: '16px',
                                fontWeight: '500',
                                fontStyle: 'normal',
                                fontStretch: 'normal',
                                lineHeight: '1.63',
                                letterSpacing: 'normal',
                                textAlign: 'center',
                                color: '#ffffff',
                            }}
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
            <div style={{backgroundColor: '#127b7a'}}>
                <Modal show={this.state.showModal} onHide={this.modalClosedHandler} backdrop={"static"}>
                    <Modal.Header closeButton />
                    <Modal.Body>
                        <div>
                            {form}
                            <Button
                                style={{marginBottom: '18px'}}
                                block
                                text={"JOIN NOW"}
                                // disabled={!this.formIsValid()}
                                onClick={this.registerHandler}/>
                        </div>

                    </Modal.Body>
                </Modal>
            </div>
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


                {/*<div className={"register-container"} >*/}
                    {/*<div className={"register-form-container"}>*/}
                        {/*<form onSubmit={this.registerHandler}>*/}
                            {/*<Button*/}
                                {/*style={{marginBottom: '18px'}}*/}
                                {/*block*/}
                                {/*text={"JOIN NOW"}*/}
                                {/*// disabled={!this.formIsValid()}*/}
                                {/*onClick={this.registerHandler}/>*/}
                        {/*</form>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Register;