import * as actionTypes from '../actions/actions';

const initialState = {
    authToken: '',
    avatar: '',
    isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.LOG_USER_IN):
            return {
                ...state,
                isLoggedIn: true
            };
        case (actionTypes.LOG_USER_OUT):
            return {
                ...state,
                isLoggedIn: false
            };
        case (actionTypes.CHANGE_USER_AVATAR):
            return {
                ...state,
                avatar: action.payload
            };
        case (actionTypes.CHANGE_USER_TOKEN):
            return {
                ...state,
                authToken: action.payload
            };






        default:
            return state;
    }
};

export default reducer;