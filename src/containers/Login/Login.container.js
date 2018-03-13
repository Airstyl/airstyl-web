import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionTypes from '../../store/actions/actions';
import * as actions from '../../store/actions/index';

import MinWidthTablet from '../../components/Responsive/MinWidthTablet';
import Mobile from '../../components/Responsive/Mobile';
import Login from '../../components/Login/Login';
import LoginMobile from '../../components/Login/LoginMobile/LoginMobile';

import './Login.container.css';

class LoginContainer extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MinWidthTablet>
                    <div className={"login-background"}>
                        <Login
                            loginForm={this.props.loginForm}
                            loading={this.props.loading}
                            updateLoginForm={this.props.onUpdateLoginForm}
                            updateLoading={this.props.onUpdateLoading}
                            // submitLoginForm={this.props.onInitLogin}
                        />
                    </div>
                </MinWidthTablet>
                <Mobile>
                    <div className={"login-background-mobile"}>
                        <LoginMobile
                            loginForm={this.props.loginForm}
                            loading={this.props.loading}
                            updateLoginForm={this.props.onUpdateLoginForm}
                            updateLoading={this.props.onUpdateLoading}
                            // submitLoginForm={this.props.onInitLogin}
                        />
                    </div>
                </Mobile>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        loginForm: state.login.loginForm,
        loading: state.login.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateLoginForm: (loginForm) => dispatch({type: actionTypes.UPDATE_LOGIN_FORM, payload: loginForm}),
        onUpdateLoading: (loading) => dispatch({type: actionTypes.UPDATE_LOADING, payload: loading}),
        //onInitLogin: (username, password) => dispatch(actions.Auth(username, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);