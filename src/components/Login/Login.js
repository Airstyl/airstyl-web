import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Input from '../Form/Input/Input';
import Logo from '../Logo/Logo';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginForm: {
                username: {
                    elementType: 'text',
                    elementConfig: {
                        value: '',
                        placeholder: "User Name",
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

        console.log(`Changed: ${event}`);
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
        this.props.history.replace("/appointments");
    };

    createAccountHandler = () => {
        this.props.history.push("/register")
    };

    goToAppointments = () => {
        this.props.history.replace("/appointments");
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
                    <Logo />
                    <div className={"login-form"}>
                        <form onSubmit={this.registerHandler}>
                            {form}
                            <RaisedButton
                                style={{display: 'block', margin: 'auto'}}
                                label={"Login"}
                                labelStyle={{
                                    textTransform: 'none',
                                    color: '#2abcbb',
                                    fontWeight: '600'
                                }}
                            />
                        </form>
                    </div>
                    <FlatButton
                        label={"Forgot Password?"}
                        style={{
                            display: 'block',
                            width: '35%',
                            margin: '0 auto',
                            textAlign: 'right',
                        }}
                        labelStyle={{
                            textTransform: 'none',
                            color: '#f1f5f6',
                            padding: 0,
                            fontSize: '12px',
                        }}
                        hoverColor={"#00000000"}
                        onClick={this.createAccountHandler}
                    />
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
                    <FlatButton
                        style={{
                            display: 'block',
                            margin: 'auto',
                            width: '100%'
                        }}
                        hoverColor={"#00000000"}
                        label={"CREATE AN ACCOUNT"}
                        labelStyle={{
                            color: '#ffffff',
                            fontSize: '12px',
                            fontWeight: '600'
                        }}
                        onClick={this.createAccountHandler}
                    />
                </div>
            </div>
        )
    };
}

export default withRouter(Login);