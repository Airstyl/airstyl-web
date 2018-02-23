import React, {Component} from 'react';
import {ButtonToolbar, Button, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import Input from '../Form/Input/Input';
import Logo from '../Logo/Logo';

import './Login.css';
import axios from "../../axios-register";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginForm: {
                username: {
                    elementType: 'text',
                    elementConfig: {
                        value: '',
                        placeholder: "User Name"
                    }
                },
                password: {
                    elementType: 'password',
                    elementConfig: {
                        value: '',
                        placeholder: "Password"
                    }
                },
            }
        };
        this.inputChangedHandler = this.inputChangedHandler.bind(this)
    }

    inputChangedHandler = (event, inputId) => {
        const updatedLoginForm = {
            ...this.state.loginForm
        };

        const updatedFormElement = {
            ...updatedLoginForm[inputId]
        };

        updatedFormElement.elementConfig.value = event.target.value;
        updatedLoginForm[inputId] = updatedFormElement;
        this.setState({
            loginForm: {...updatedLoginForm}
        });

        console.log(`Changed: ${event.target.value}`);
    };

    loginHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

        const formData ={};
        for (let formElementId in this.state.loginForm) {
            formData[formElementId] = this.state.loginForm[formElementId].value;
        }

        const loginData = {
            user: {
                formData
            }
        };

        axios.post('/login.json', loginData)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    };

    render() {
        const formElementsArray = [];

        for (let key in this.state.loginForm){
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }

        let form = (
            <div
                style={{
                    display: 'block',
                    margin: '0 auto 18px',
                    width: '100%'
                }}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.key}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
            </div>
        );

        return (
            <div>
                <div className={"login-body"}>
                    <Logo/>
                    <div className={"login-form"}>
                        <form onSubmit={this.registerHandler}>
                            {form}
                        </form>
                    </div>
                    <label className={"forgot-password"}>Forgot Password?</label>
                    <div className={"login-social-container"}>
                        <RaisedButton
                            style={{float: 'left'}}
                            label={"Facebook"}
                            labelStyle={{
                                textTransform: 'none',
                                color: '#2abcbb',
                                fontWeight: '600'
                            }}
                        />
                        <RaisedButton
                            style={{float: 'right'}}
                            label={"Instagram"}
                            labelStyle={{
                                textTransform: 'none',
                                color: '#2abcbb',
                                fontWeight: '600'
                            }}
                        />
                    </div>

                </div>
            </div>
        )
    };
}

export default Login;