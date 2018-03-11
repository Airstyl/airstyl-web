import * as actionTypes from "./actions";
import {auth, users} from '../../firebase';

import * as firebaseErrors from '../../constants/firebase';

export const AuthStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const AuthSuccess = (authData, firstname, lastname, email, username) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            id: authData.uid,
            name: firstname,
            surname: lastname,
            username: username,
            email: email,
            emailVerified: authData.emailVerified
        }
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

export const Auth = (firstname, lastname, email, password, username) => {
    return dispatch => {
        dispatch(AuthStart());

        auth.doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {

                users.createUser(authUser.uid, firstname, lastname, username, email)
                    .then(() => {

                        dispatch(AuthSuccess(authUser, firstname, lastname, email, username));
                    })
                    .catch(error => {

                        console.log(error);
                        dispatch(AuthFail(error));
                    });
            })
            .catch(error => {

                console.log(error);
                dispatch(AuthFail(error));
            });
    };
};
