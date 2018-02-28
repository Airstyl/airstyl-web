import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actions';

import MinWidthTablet from '../../components/Responsive/MinWidthTablet';
import Mobile from '../../components/Responsive/Mobile';
import Register from '../../components/Register/Register';
import RegisterMobile from '../../components/Register/RegisterMobile/RegisterMobile';

import backgroundImage from '../../assets/images/register/background.png';
import './Register.container.css';

class RegisterContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <MinWidthTablet>
                    <div className={"register-background"}>
                        <Register
                            registerForm={this.props.registerForm}
                            updateRegisterForm={this.props.onUpdateRegisterForm}
                        />
                    </div>
                </MinWidthTablet>
                <Mobile>
                    <main className="layout-no-sidebar">
                        <RegisterMobile
                            registerForm={this.props.registerForm}
                            updateRegisterForm={this.props.onUpdateRegisterForm}
                        />
                    </main>
                </Mobile>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        registerForm: state.register.registerForm
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateRegisterForm: (registerForm) => dispatch({type: actionTypes.UPDATE_REGISTER_FORM, payload: registerForm})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);