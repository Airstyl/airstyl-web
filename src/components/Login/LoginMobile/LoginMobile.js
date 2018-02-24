import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Mobile from '../../Responsive/Mobile';
import Logo from '../../Logo/Logo';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import './LoginMobile.css';

class LoginMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    createAccountHandler = () => {
        this.props.history.push("/register")
    };

    render() {
        return (
            <Mobile>
                <div className={"login-body-mobile"}>
                    <Logo/>
                    <form className={"login-form-container-mobile"}>
                        <TextField
                            floatingLabelText="User Name"
                            floatingLabelStyle={{color: '#ffffff', fontSize: '13px'}}
                            floatingLabelFocusStyle={{color: '#ffffff'}}
                            inputStyle={{color: '#ffffff'}}
                            underlineFocusStyle={{borderColor: 'white'}}
                            fullWidth={true}
                        />
                        <TextField
                            floatingLabelText="Password"
                            floatingLabelStyle={{color: '#ffffff', fontSize: '13px'}}
                            floatingLabelFocusStyle={{color: '#ffffff'}}
                            inputStyle={{color: '#ffffff'}}
                            underlineFocusStyle={{borderColor: 'white'}}
                            fullWidth={true}
                            type={"password"}
                        />
                        <FlatButton
                            label={"Forgot password?"}
                            labelStyle={{
                                fontSize: '11px',
                                textTransform: 'none',
                                padding: 0,
                                color: 'white',
                                float: 'right',
                            }}
                            className={"login-forgot-password-mobile"}
                            fullWidth={true}
                        />
                        <Button
                            className={"login-login-button-mobile"}
                            label={"Login"}
                            labelStyle={{
                                color: '#2abcbb',
                                fontWeight: '600'
                            }}
                            fullWidth={true}
                        />
                    </form>
                    <div className={"login-social-container-mobile"}>
                        <Button
                            style={{float: 'left'}}
                            label={"Facebook"}
                            labelStyle={{
                                textTransform: 'none',
                                color: '#2abcbb',
                                fontWeight: '600'
                            }}
                        />
                        <Button
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
                        label={"CREATE AN ACCOUNT"}
                        labelStyle={{
                            color: '#ffffff'
                        }}
                        fullWidth={true}
                        onClick={this.createAccountHandler}
                    />
                </div>
            </Mobile>
        )
    };
}

export default withRouter(LoginMobile);