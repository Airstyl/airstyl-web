import * as actionTypes from '../actions/actions';

const initialState = {
    authenticated: false,
    error: null,
    authData: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.AUTH_USER): {
            return {
                ...state,
                authenticated: true,
                authData: action.payload,
                error: null,
            }
        }
        case (actionTypes.AUTH_ERROR): {
            return {
                ...state,
                authenticated: false,
                authData: null,
                error: true,
            }
        }
        case (actionTypes.SIGN_OUT_USER): {
            return {
                ...state,
                authenticated: false,
                authData: null,
                error: null,
            }
        }
        default:
            return state;
    }
};

export default reducer;