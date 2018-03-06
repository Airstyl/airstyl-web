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
    let payload = '';
    if (error.response) {
        // Request was made and response had a status code that falls out of the range of 2xx
        payload = error.response.data.message;
    } else if (error.request) {
        // The request was made but no response was received
        payload = error.request.message
    } else {
        // Something happened in setting up the request that triggered an Error
        payload = error.message
    }
    return {
        type: actionTypes.AUTH_FAIL,
        payload: payload
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
        .then(response => dispatch(AuthSuccess(response.data)))
        .catch(error => dispatch(AuthFail(error)))

    };
};