import * as actionTypes from '../actions/actions';

const initialState = {
    registerForm: {
        fullname: {
            elementType: 'text',
            elementConfig: {
                value: '',
                placeholder: "Full Name"
            },
            elementConfigMobile: {
                value: '',
                floatingLabelText: 'Full Name',
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
                    minWords: 2
                }
            }
        },
        mobileOrEmail: {
            elementType: "text",
            elementConfig: {
                value: '',
                placeholder: "Email"
            },
            elementConfigMobile: {
                value: '',
                floatingLabelText: 'Email',
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
                    email: true
                }
            }
        },
        username: {
            elementType: 'text',
            elementConfig: {
                value: '',
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
                value: '',
                placeholder: "Create Password"
            },
            elementConfigMobile: {
                value: '',
                floatingLabelText: 'Create Password',
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
    },
    showFormModal: false,
    showEmailConfirmationModal: false,
    loading: false,
    error: {
        state: false,
        message: ''
    }
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.UPDATE_REGISTER_FORM):
            return {
                ...state,
                registerForm: {...action.payload}
            };
        case (actionTypes.UPDATE_SHOW_FORM_MODAL):
            return {
                ...state,
                showFormModal: action.payload
            };
        case (actionTypes.UPDATE_SHOW_EMAIL_CONFIRMATION_MODAL):
            return {
                ...state,
                showEmailConfirmationModal: action.payload
            };
        case (actionTypes.UPDATE_LOADING):
            return {
                ...state,
                loading: action.payload
            };
        case (actionTypes.UPDATE_ERROR):
            return {
                ...state,
                error: {...action.payload}
            };
        case (actionTypes.AUTH_START):
            return {
                ...state,
                loading: true
            };
        case (actionTypes.AUTH_SUCCESS):
            return {
                ...state,
                showFormModal: false,
                showEmailConfirmationModal: true,
                loading: false
            };
        case (actionTypes.AUTH_FAIL):
            return {
                ...state,
                loading: false,
                error: {
                    state: true,
                    message: action.payload
                }
            };
        case (actionTypes.RESET_PAGE):
            return {
                registerForm: {
                    fullname: {
                        elementType: 'text',
                        elementConfig: {
                            value: '',
                            placeholder: "Full Name"
                        },
                        elementConfigMobile: {
                            value: '',
                            floatingLabelText: 'Full Name',
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
                                minWords: 2
                            }
                        }
                    },
                    mobileOrEmail: {
                        elementType: "text",
                        elementConfig: {
                            value: '',
                            placeholder: "Email"
                        },
                        elementConfigMobile: {
                            value: '',
                            floatingLabelText: 'Email',
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
                                email: true
                            }
                        }
                    },
                    username: {
                        elementType: 'text',
                        elementConfig: {
                            value: '',
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
                            value: '',
                            placeholder: "Create Password"
                        },
                        elementConfigMobile: {
                            value: '',
                            floatingLabelText: 'Create Password',
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
                },
                showFormModal: false,
                showEmailConfirmationModal: false,
                loading: false,
                error: {
                    state: false,
                    message: ''
                }
            };
        default:
            return state;
    }
};

export default reducer;