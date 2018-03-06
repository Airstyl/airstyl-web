import * as actionTypes from '../actions/actions';

const initialState = {
    loginForm: {
        username: {
            elementType: 'text',
            elementConfig: {
                value: null,
                placeholder: "Username"
            },
            elementConfigMobile: {
                value: '',
                floatingLabelText: 'Username',
                floatingLabelStyle: {
                    color: '#ffffff',
                    fontWeight: 'normal'
                },
                inputStyle: {
                    color: '#ffffff',
                    fontWeight: 'normal'
                },
                underlineStyle: {
                    borderColor: "#ffffff"
                },
                underlineFocusStyle: {
                    borderColor: "#ffffff"
                }
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {
                    minLength: 4
                }
            }
        },
        password: {
            elementType: 'password',
            elementConfig: {
                value: null,
                placeholder: "Password"
            },
            elementConfigMobile: {
                value: null,
                floatingLabelText: 'Password',
                floatingLabelStyle: {
                    color: '#ffffff',
                    fontWeight: 'normal'
                },
                inputStyle: {
                    color: '#ffffff',
                    fontWeight: 'normal'
                },
                underlineStyle: {
                    borderColor: "#ffffff"
                },
                underlineFocusStyle: {
                    borderColor: "#ffffff"
                }
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {
                    minLength: 4,
                }
            }
        },
    },
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.UPDATE_LOGIN_FORM):
            return {
                ...state,
                loginForm: {...action.payload}
            };
        case (actionTypes.UPDATE_LOADING):
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
};

export default reducer;