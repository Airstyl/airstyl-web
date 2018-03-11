import * as actionTypes from '../actions/actions';

const initialState = {
    authUser: null,
    userDetails: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.UPDATE_AUTH_USER): {
            return {
                ...state,
                authUser: action.payload
            }
        }
        case (actionTypes.UPDATE_USER_DETAILS): {
            return {
                ...state,
                userDetails: action.payload
            }
        }
        case (actionTypes.AUTH_SUCCESS): {
            return {
                ...state,
                authUser: {
                    id: action.payload.id,
                    emailVerified: action.payload.emailVerified
                },
                userDetails: {
                    name: action.payload.name,
                    surname: action.payload.surname,
                    username: action.payload.username,
                    email: action.payload.email
                }
            }
        }
        default:
            return state;
    }
};

export default reducer;