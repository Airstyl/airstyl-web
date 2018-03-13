import * as actionTypes from "./actions";
import Firebase from 'firebase';
import {auth, users} from '../../firebase';

import * as firebaseErrors from '../../constants/firebase';

export const AuthStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const AuthSuccess = () => {
    return {
        type: actionTypes.AUTH_SUCCESS,
    };
};

export const AuthFail = (error) => {
    let payload = '';
    switch (error.code) {
        case (firebaseErrors.EMAIL_FORMAT_INVALID):
            payload = 'Email invalid. Please enter a valid email address.';
            break;
        case (firebaseErrors.USER_EXISTS):
            payload = 'A user already exists with this email address.';
            break;
        case (firebaseErrors.WEAK_PASSWORD):
            payload = 'Weak password. Please enter a stronger password.'
            break;
        default:
            payload = '';
    }
    return {
        type: actionTypes.AUTH_FAIL,
        payload: payload
    };
};

export const RegisterConsumerWithEmailAndPassword = (firstname, lastname, email, password) => {
    return dispatch => {
        dispatch(AuthStart());

        auth.doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                users.createConsumer(authUser.uid, firstname, lastname, email)
                    .then((authUser) => {
                        dispatch(AuthSuccess());
                    })
            })
            .catch(error => {
                //webpack doesn't see createConsumer as a firebase method, so throws an error. Stupid.
                if (error.message.includes("createConsumer")) {
                    dispatch(AuthSuccess());
                    return;
                }
                dispatch(AuthFail(error));
            });
    };
};

export const RegisterStylistWithEmailAndPassword = (firstname, lastname, email, password) => {
    return dispatch => {
        dispatch(AuthStart());

        auth.doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                users.createStylist(authUser.uid, firstname, lastname, email)
                    .then((authUser) => {
                        dispatch(AuthSuccess());
                    })
            })
            .catch(error => {
                //webpack doesn't see createStylist as a firebase method, so throws an error. Stupid.
                if (error.message.includes("createStylist")) {
                    dispatch(AuthSuccess());
                    return;
                }
                dispatch(AuthFail(error));
            });
    };
};

//set user as authenticated
export function authUser(authData) {
    return {
        type: actionTypes.AUTH_USER,
        payload: authData
    }
}

export function signOutUser() {
    return {
        type: actionTypes.SIGN_OUT_USER
    }
}

export function verifyAuth() {
    return function (dispatch) {
        Firebase.auth().onAuthStateChanged(authData => {
            if (authData) {
                dispatch(authUser(authData));
            }
            else {
                dispatch(signOutUser());
            }
        });
    }
}