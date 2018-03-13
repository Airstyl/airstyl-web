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
                            registerAs={this.props.registerAs}
                            updateError={this.props.onUpdateError}
                            updateRegisterForm={this.props.onUpdateRegisterForm}
                            updateShowFormModal={this.props.onUpdateShowFormModal}
                            updateShowEmailConfirmationModal={this.props.onUpdateShowEmailConfirmationModal}
                            submitConsumerRegisterForm={this.props.onRegisterConsumer}
                            submitStylistRegisterForm={this.props.onRegisterStylist}
                            resetPage={this.props.resetPage}
                            registerAsConsumer={this.props.registerAsConsumer}
                            registerAsStylist={this.props.registerAsStylist}
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
                            registerAs={this.props.registerAs}
                            updateError={this.props.onUpdateError}
                            updateRegisterForm={this.props.onUpdateRegisterForm}
                            updateShowEmailConfirmationModal={this.props.onUpdateShowEmailConfirmationModal}
                            submitConsumerRegisterForm={this.props.onRegisterConsumer}
                            submitStylistRegisterForm={this.props.onRegisterStylist}
                            resetPage={this.props.resetPage}
                            registerAsConsumer={this.props.registerAsConsumer}
                            registerAsStylist={this.props.registerAsStylist}
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
        registerAs: state.register.registerAs,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateRegisterForm: (registerForm) => dispatch({type: actionTypes.UPDATE_REGISTER_FORM, payload: registerForm}),
        onUpdateShowFormModal: (showFormModal) => dispatch({type: actionTypes.UPDATE_SHOW_FORM_MODAL, payload: showFormModal}),
        onUpdateShowEmailConfirmationModal: (showEmailConfirmationModal) => dispatch({type: actionTypes.UPDATE_SHOW_EMAIL_CONFIRMATION_MODAL, payload: showEmailConfirmationModal}),
        onRegisterConsumer: (firstname, lastname, email, password) => dispatch(actions.RegisterConsumerWithEmailAndPassword(firstname, lastname, email, password)),
        onRegisterStylist: (firstname, lastname, email, password) => dispatch(actions.RegisterStylistWithEmailAndPassword(firstname, lastname, email, password)),
        onUpdateError: (error) => dispatch({type: actionTypes.UPDATE_ERROR, payload: error}),
        resetPage: () => dispatch({type: actionTypes.RESET_PAGE}),
        registerAsConsumer: () => dispatch({type: actionTypes.REGISTER_AS_CONSUMER}),
        registerAsStylist: () => dispatch({type: actionTypes.REGISTER_AS_STYLIST}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);