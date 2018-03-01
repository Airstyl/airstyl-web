import * as actionTypes from "./actions";
import axios from "../../axios-register";

export const AuthStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const AuthSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: authData
    };
};

export const AuthFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        payload: error
    };
};

export const Auth = (firstname, lastname, emailOrMobile, password, username) => {
    return dispatch => {
        dispatch(AuthStart());


        axios.post('/users/register', {
            ACC_STATUS: 'Active',
            email : emailOrMobile,
            firstname: firstname,
            lastname: lastname,
            password: password,
            username: username
        })
        .then(response => AuthSuccess(response.data))
        .catch(error => AuthFail(error.data))

    };
};