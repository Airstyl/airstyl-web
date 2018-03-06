import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actions';
import * as actions from '../../store/actions/index';

import MinWidthTablet from '../../components/Responsive/MinWidthTablet';
import Mobile from '../../components/Responsive/Mobile';
import Register from '../../components/Register/Register';
import RegisterMobile from '../../components/Register/RegisterMobile/RegisterMobile';

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
                            showFormModal={this.props.showFormModal}
                            showEmailConfirmationModal={this.props.showEmailConfirmationModal}
                            loading={this.props.loading}
                            error={this.props.error}
                            updateError={this.props.onUpdateError}
                            updateRegisterForm={this.props.onUpdateRegisterForm}
                            updateShowFormModal={this.props.onUpdateShowFormModal}
                            updateShowEmailConfirmationModal={this.props.onUpdateShowEmailConfirmationModal}
                            submitRegisterForm={this.props.onInitAuthentication}
                            resetPage={this.props.resetPage}
                        />
                    </div>
                </MinWidthTablet>
                <Mobile>
                    <main className="register-background-mobile">
                        <RegisterMobile
                            registerForm={this.props.registerForm}
                            showFormModal={this.props.showFormModal}
                            showEmailConfirmationModal={this.props.showEmailConfirmationModal}
                            loading={this.props.loading}
                            error={this.props.error}
                            updateError={this.props.onUpdateError}
                            updateRegisterForm={this.props.onUpdateRegisterForm}
                            updateShowEmailConfirmationModal={this.props.onUpdateShowEmailConfirmationModal}
                            submitRegisterForm={this.props.onInitAuthentication}
                            resetPage={this.props.resetPage}
                        />
                    </main>
                </Mobile>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        registerForm: state.register.registerForm,
        showFormModal: state.register.showFormModal,
        showEmailConfirmationModal: state.register.showEmailConfirmationModal,
        loading: state.register.loading,
        error: state.register.error,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateRegisterForm: (registerForm) => dispatch({type: actionTypes.UPDATE_REGISTER_FORM, payload: registerForm}),
        onUpdateShowFormModal: (showFormModal) => dispatch({type: actionTypes.UPDATE_SHOW_FORM_MODAL, payload: showFormModal}),
        onUpdateShowEmailConfirmationModal: (showEmailConfirmationModal) => dispatch({type: actionTypes.UPDATE_SHOW_EMAIL_CONFIRMATION_MODAL, payload: showEmailConfirmationModal}),
        onInitAuthentication: (firstname, lastname, email, password, username) => dispatch(actions.Auth(firstname, lastname, email, password, username)),
        onUpdateError: (error) => dispatch({type: actionTypes.UPDATE_ERROR, payload: error}),
        resetPage: () => dispatch({type: actionTypes.RESET_PAGE})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);